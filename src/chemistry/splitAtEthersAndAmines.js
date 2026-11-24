/**
 * Ethers, R-O-R', and secondary amines, R-NH-R': finding the parent chain or ring, and the
 * group on the other side of the O or NH.
 *
 * IUPAC rules (IUPAC 2013 Recommendations):
 *   - An ether has no suffix. The parent is one of the two sides, and the other side, R'-O-,
 *     is a prefix on it: methoxyethane (not ethoxymethane), 1-methoxypropane,
 *     2-ethoxypropane, 1,2-dimethoxyethane, 1-chloro-2-ethoxyethane.       P-63.2.2, P-63.2.4.1
 *   - A secondary amine is named from the primary amine of one side, with the other side as a
 *     prefix whose locant is N: N-methylethanamine, N-methylpropan-2-amine,
 *     N-butylcyclopropanamine.                                                   P-62.2.2
 *   - When something more senior is the suffix, R'-NH- is a prefix such as methylamino:
 *     2-(methylamino)ethan-1-ol.                                                  P-62.2.3
 *   - The parent is the side that would be chosen as the main chain in the usual way
 *     (P-44): the one with more of the principal characteristic group (counting the NH
 *     itself for both sides of an amine), then a ring before a chain (P-44.1.2.2), then the
 *     longer chain (P-44.3), then the one with more double bonds (P-44.4.1.1). If two sides
 *     are still equal, the one with more prefixes (P-45.2.1), and then the name that comes
 *     first in alphanumerical order (P-45.5).
 *
 * The molecule is cut at every such O and NH, which leaves it in pieces. One piece is the
 * parent, and each of the others must hang off it through one O or NH, and be a group that
 * can be named: an unbranched chain joined by its end carbon (methyl, ethyl, ethenyl,
 * prop-2-en-1-yl), or a whole ring with no double bonds (cyclohexyl), with nothing on it.
 * On the parent's side, each O or NH becomes a group on its carbon, which keeps the group
 * from the far side as its linkedGroup (see ETHER_OXYGEN_GROUP in carbonSkeleton.js). Groups
 * that have something on them themselves, such as 2-chloroethoxy, are not covered yet.
 *
 * An O or NH in a ring (a cyclic ether such as oxane, or a cyclic amine) is not covered yet.
 */

import {
  AMINO_GROUP,
  ESTER_LINK_OXYGEN,
  ETHER_OXYGEN_GROUP,
  countAminoGroupsOnCarbon,
  countHydroxylGroupsOnCarbon,
  countRings,
  describeCarbonylCarbon,
  describeLinkBond,
  findCarbonAtomById,
  isDoubleBond,
  isLinkBond,
  isRingBond,
  linkAtomOf,
  listAtomIdsInRings,
  listCarbonIdsBeyondBond,
  listGroupsOnCarbon,
  listNeighbourCarbonIds,
  listSeparateRings,
  otherAtomIdOfBond,
} from './carbonSkeleton.js';
import { isBranchUnbranched, listDoubleBondLocantsAlong, listTripleBondLocantsAlong } from './findSubstituentsOnChain.js';
import { findAllMainChainCandidates } from './findLongestCarbonChains.js';
import { cycloalkylSubstituentName, unbranchedSubstituentName } from './alkaneNamingVocabulary.js';
import { addStereoDescriptorsToGroupName } from './doubleBondConfiguration.js';
import { canonicalFingerprintOfSkeleton } from './canonicalFingerprint.js';
import { message } from '../languages/translate.js';

/**
 * The group on the far side of an O or NH, starting at farAtomId and going away from
 * nearAtomId, when it is one that can be named: an unbranched chain joined by its end carbon,
 * or a whole ring with no double bonds, with nothing on it and no other O or NH in it.
 *   { carbonCount: 2, doubleBondLocants: [], isRing: false, groupName: 'ethyl' }
 *   { carbonCount: 3, doubleBondLocants: [2], isRing: false, groupName: 'prop-2-en-1-yl' }
 *   { carbonCount: 6, doubleBondLocants: [], isRing: true, groupName: 'cyclohexyl' }
 * The double bonds are numbered from the carbon joined to the O or NH. null for anything else.
 * With configurations (from describeEveryDoubleBond), the name has the E and Z of the group's
 * double bonds in front of it: '(1E)-prop-1-en-1-yl' (P-91.3).
 * Used for ethers and amines here, and for the group R' of an ester or amide in nameCarbonSkeleton.js.
 */
export function describeGroupBeyondLink(skeleton, nearAtomId, farAtomId, configurations = new Map()) {
  const farSideAtomIds = listCarbonIdsBeyondBond(skeleton, nearAtomId, farAtomId);
  const farSideBonds = skeleton.carbonCarbonBonds.filter((bond) => farSideAtomIds.has(bond.firstAtomId) && farSideAtomIds.has(bond.secondAtomId));
  if (farSideBonds.some(isLinkBond)) return null;
  if ([...farSideAtomIds].some((atomId) => listGroupsOnCarbon(findCarbonAtomById(skeleton, atomId)).length > 0)) return null;

  const ringAtomIds = listAtomIdsInRings(skeleton);
  if ([...farSideAtomIds].some((atomId) => ringAtomIds.has(atomId))) {
    const isWholeRing = farSideAtomIds.size === ringAtomIds.size && ringAtomIds.has(farAtomId);
    if (!isWholeRing || farSideBonds.some(isDoubleBond)) return null;
    return { carbonCount: farSideAtomIds.size, doubleBondLocants: [], isRing: true, groupName: cycloalkylSubstituentName(farSideAtomIds.size) };
  }

  if (!isBranchUnbranched(skeleton, farAtomId, nearAtomId)) return null;
  const orderedAtomIds = [farAtomId];
  let previousAtomId = nearAtomId;
  for (;;) {
    const currentAtomId = orderedAtomIds[orderedAtomIds.length - 1];
    const nextAtomId = listNeighbourCarbonIds(skeleton, currentAtomId).find((neighbourId) => neighbourId !== previousAtomId);
    if (nextAtomId === undefined) break;
    previousAtomId = currentAtomId;
    orderedAtomIds.push(nextAtomId);
  }
  const doubleBondLocants = listDoubleBondLocantsAlong(skeleton, orderedAtomIds);
  const tripleBondLocants = listTripleBondLocantsAlong(skeleton, orderedAtomIds);
  return {
    carbonCount: orderedAtomIds.length,
    doubleBondLocants,
    ...(tripleBondLocants.length > 0 ? { tripleBondLocants } : {}),
    isRing: false,
    groupName: addStereoDescriptorsToGroupName(unbranchedSubstituentName(orderedAtomIds.length, false, doubleBondLocants, tripleBondLocants), orderedAtomIds, configurations),
  };
}

/** The O and NH links of ethers and secondary amines: those not next to the C=O of an ester or amide. */
export function listEtherAndAmineLinks(skeleton) {
  return skeleton.carbonCarbonBonds.filter((bond) => ['ether', 'amine'].includes(describeLinkBond(skeleton, bond)));
}

/** The pieces a molecule falls into when only these bonds are kept: a list of sets of carbon ids. */
function listPieces(skeleton, bondsKept) {
  const neighbourIdsByAtomId = new Map(skeleton.carbonAtoms.map(({ atomId }) => [atomId, []]));
  for (const { firstAtomId, secondAtomId } of bondsKept) {
    neighbourIdsByAtomId.get(firstAtomId).push(secondAtomId);
    neighbourIdsByAtomId.get(secondAtomId).push(firstAtomId);
  }
  const pieces = [];
  const placedAtomIds = new Set();
  for (const { atomId } of skeleton.carbonAtoms) {
    if (placedAtomIds.has(atomId)) continue;
    const piece = new Set([atomId]);
    const atomIdsToVisit = [atomId];
    while (atomIdsToVisit.length > 0) {
      for (const neighbourId of neighbourIdsByAtomId.get(atomIdsToVisit.pop())) {
        if (piece.has(neighbourId)) continue;
        piece.add(neighbourId);
        atomIdsToVisit.push(neighbourId);
      }
    }
    piece.forEach((pieceAtomId) => placedAtomIds.add(pieceAtomId));
    pieces.push(piece);
  }
  return pieces;
}

/**
 * The principal characteristic groups in order of seniority (P-41), each with a way of
 * counting it on a carbon. Esters and amides are found by their C=O carbon.
 */
const PRINCIPAL_GROUP_COUNTERS_IN_ORDER_OF_SENIORITY = [
  (skeleton, carbonAtom) => (describeCarbonylCarbon(skeleton, carbonAtom) === 'carboxylicAcid' ? 1 : 0),
  (skeleton, carbonAtom) => (describeCarbonylCarbon(skeleton, carbonAtom) === 'ester' ? 1 : 0),
  (skeleton, carbonAtom) => (describeCarbonylCarbon(skeleton, carbonAtom) === 'amide' ? 1 : 0),
  (skeleton, carbonAtom) => (describeCarbonylCarbon(skeleton, carbonAtom) === 'aldehyde' ? 1 : 0),
  (skeleton, carbonAtom) => (describeCarbonylCarbon(skeleton, carbonAtom) === 'ketone' ? 1 : 0),
  (skeleton, carbonAtom) => countHydroxylGroupsOnCarbon(carbonAtom),
  (skeleton, carbonAtom) => (describeCarbonylCarbon(skeleton, carbonAtom) === null ? countAminoGroupsOnCarbon(carbonAtom) : 0),
];

/**
 * How good a parent a piece would be, as a list of numbers compared in turn (higher is
 * better), following the rules at the top of this file: the seniority of its most senior
 * principal group and how many of it there are, then whether it has a ring, then the length
 * of its main chain (or the size of its ring), then its number of double bonds.
 */
function scoreAsParent(pieceSkeleton) {
  let seniority = 0;
  let principalGroupCount = 0;
  for (const [index, countOnCarbon] of PRINCIPAL_GROUP_COUNTERS_IN_ORDER_OF_SENIORITY.entries()) {
    const count = pieceSkeleton.carbonAtoms.reduce((total, carbonAtom) => total + countOnCarbon(pieceSkeleton, carbonAtom), 0);
    if (count > 0) {
      seniority = PRINCIPAL_GROUP_COUNTERS_IN_ORDER_OF_SENIORITY.length - index;
      principalGroupCount = count;
      break;
    }
  }
  const hasRing = countRings(pieceSkeleton) > 0;
  // A piece's size: its largest ring's carbons, or its longest chain's.
  const size = hasRing ? Math.max(...listSeparateRings(pieceSkeleton).rings.map((ring) => ring.length), 0) : (findAllMainChainCandidates(pieceSkeleton)[0]?.length ?? 0);
  const doubleBondCount = pieceSkeleton.carbonCarbonBonds.filter(isDoubleBond).length;
  return [seniority, principalGroupCount, hasRing ? 1 : 0, size, doubleBondCount];
}

/** Positive when the first score is higher at the first number that differs. */
function compareScores(firstScore, secondScore) {
  for (let index = 0; index < firstScore.length; index++) {
    if (firstScore[index] !== secondScore[index]) return firstScore[index] - secondScore[index];
  }
  return 0;
}

/**
 * The pieces that could be the parent of an ether or secondary amine (see the top of this
 * file), each as a skeleton of its own, with the O and NH links replaced by groups that keep
 * the far side as their linkedGroup (its name with the E and Z of its double bonds, given
 * configurations from describeEveryDoubleBond):
 *   { parentSkeletons: [skeleton, ...] }
 * These are the pieces the rules rank first, usually one. If any of them can't be named
 * this way, or an O or NH is in a ring, returns { reasonNotNameable } instead.
 */
export function listEtherAndAmineParents(skeleton, etherAndAmineLinks, configurations = new Map()) {
  if (etherAndAmineLinks.some((bond) => isRingBond(skeleton, bond.firstAtomId, bond.secondAtomId))) {
    return { reasonNotNameable: message('naming.etherOrAmineInRingNotCovered') };
  }
  const cutLinks = new Set(etherAndAmineLinks);
  const bondsKept = skeleton.carbonCarbonBonds.filter((bond) => !cutLinks.has(bond));

  const candidates = listPieces(skeleton, bondsKept).map((piece) => {
    const linksTouchingPiece = etherAndAmineLinks.filter((bond) => piece.has(bond.firstAtomId) || piece.has(bond.secondAtomId));
    // Every other piece must hang off this one through one link, so every link must touch it.
    let canBeNamed = linksTouchingPiece.length === etherAndAmineLinks.length;
    const groupsToAddByAtomId = new Map();
    for (const bond of linksTouchingPiece) {
      const nearAtomId = piece.has(bond.firstAtomId) ? bond.firstAtomId : bond.secondAtomId;
      const groupBeyond = describeGroupBeyondLink(skeleton, nearAtomId, otherAtomIdOfBond(bond, nearAtomId), configurations);
      const symbol = linkAtomOf(bond) === ESTER_LINK_OXYGEN ? ETHER_OXYGEN_GROUP : AMINO_GROUP;
      let group = { symbol };
      if (groupBeyond === null) canBeNamed = false;
      else {
        const { groupName, ...linkedGroup } = groupBeyond;
        // The far side's carbons and the bond with the O or NH, for showing the group on the drawing.
        const linkedAtomIds = [...listCarbonIdsBeyondBond(skeleton, nearAtomId, otherAtomIdOfBond(bond, nearAtomId))];
        const linkBond = { firstAtomId: bond.firstAtomId, secondAtomId: bond.secondAtomId };
        group = { symbol, linkedGroup, linkedGroupName: groupName, linkedAtomIds, linkBond };
      }
      groupsToAddByAtomId.set(nearAtomId, [...(groupsToAddByAtomId.get(nearAtomId) ?? []), group]);
    }
    const pieceSkeleton = {
      carbonAtoms: skeleton.carbonAtoms
        .filter(({ atomId }) => piece.has(atomId))
        .map((carbonAtom) => {
          const groupsToAdd = groupsToAddByAtomId.get(carbonAtom.atomId);
          return groupsToAdd === undefined ? carbonAtom : { ...carbonAtom, groups: [...listGroupsOnCarbon(carbonAtom), ...groupsToAdd] };
        }),
      carbonCarbonBonds: bondsKept.filter(({ firstAtomId }) => piece.has(firstAtomId)),
    };
    return { pieceSkeleton, canBeNamed, score: scoreAsParent(pieceSkeleton) };
  });

  const bestScore = candidates.reduce((best, { score }) => (compareScores(score, best) > 0 ? score : best), candidates[0].score);
  // Between equal pieces, one that leaves only simple groups beyond its O and NH has more
  // prefixes than one that would need a group with something on it (P-45.2.1): so
  // 1-chloro-2-ethoxyethane, not (2-chloroethoxy)ethane.
  const bestCandidates = candidates.filter(({ score, canBeNamed }) => canBeNamed && compareScores(score, bestScore) === 0);
  // Two identical rings joined by an O, as in dicyclohexyl ether, are named as one unit
  // multiplied: 1,1'-oxydi(cyclohexane) (P-15.3.1.1 (a), P-51.3.1). Not covered yet.
  // (Checked whether or not a ring with an O on it can be named as a group yet: cyclohexyloxy can't.)
  const hasRing = bestScore[2] === 1;
  const isJoinedByOxygen = etherAndAmineLinks.some((bond) => linkAtomOf(bond) === ESTER_LINK_OXYGEN);
  const tiedPieces = candidates.filter(({ score }) => compareScores(score, bestScore) === 0);
  if (hasRing && isJoinedByOxygen && tiedPieces.length > 1) {
    const fingerprints = tiedPieces.map(({ pieceSkeleton }) => canonicalFingerprintOfSkeleton(pieceSkeleton));
    if (new Set(fingerprints).size < fingerprints.length) return { reasonNotNameable: message('naming.identicalRingsNotCovered') };
  }
  if (bestCandidates.length === 0) return { reasonNotNameable: message('naming.etherOrAmineGroupNotCovered') };
  return { parentSkeletons: bestCandidates.map(({ pieceSkeleton }) => pieceSkeleton) };
}
