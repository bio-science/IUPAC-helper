/**
 * Naming a side chain that branches, such as -CH(CH3)2 (propan-2-yl), -CH2-CH(CH3)2
 * (2-methylpropyl), -C(CH3)3 (tert-butyl) or -CH(CH3)-CH2-OH (1-hydroxypropan-2-yl).
 * (An unbranched side chain is named by nameSideChain.js, or unbranchedSubstituentName in
 * alkaneNamingVocabulary.js.)
 *
 * A branched side chain is a "compound substituent" (P-29.4.1, P-46.0): its own principal chain,
 * with the free valence (the carbon joined to the main chain), and the other branches and groups
 * as prefixes on it. Its principal chain is chosen by these criteria of P-46.1, in this order
 * (the others are about heteroatoms in the chain and nonstandard bonding numbers, which a
 * carbon chain doesn't have):
 *   (b) the most carbons, the longest chain (P-46.1.2): pentan-2-yl, not 1-methylbutyl.
 *       Unsaturation comes after length in a substituent, a change from earlier rules;
 *   (d) the most multiple bonds (P-46.1.4): hept-1-en-4-ylidene;
 *   (h) the lowest locant for the free valence (P-46.1.8, P-29.2): pentan-2-yl, not pentan-4-yl;
 *   (i) the lowest locants for the multiple bonds (P-46.1.9): hepta-1,5-dien-4-yl;
 *   (k) the most substituents (P-46.1.11): 1-hydroxypropan-2-yl;
 *   (l) the lowest locants for the substituents (P-46.1.12): 1-bromo-4-methylpentan-3-yl, and
 *       2-methylpentan-3-yl rather than 4-methylpentan-3-yl (P-29.4.1);
 *   (m) the lowest locants for the substituent cited first in alphanumerical order (P-46.1.13):
 *       2-bromo-4-chloropentan-3-yl, not 4-bromo-2-chloropentan-3-yl.
 *
 * The name (P-29.2, P-57.1.1.1): with the free valence at carbon 1 of the principal chain, it is
 * "alkyl type", with "yl" or "ylidene" in place of the "ane" of the chain's name and the locant 1
 * left out: 2-methylpropyl, 2-methylpropylidene, 3-methylbut-2-en-1-yl. Anywhere else it is
 * "alkanyl type", with "yl" added after the chain's name and its locant always written:
 * propan-2-yl, butan-2-yl, but-3-en-2-yl, propan-2-ylidene. When carbon 1 is a C=O carbon, the
 * side chain is an acyl group named from its acid (P-65.1.7.3.1): 2-methylpropanoyl.
 *
 * Only one retained name is a preferred prefix: tert-butyl for an unsubstituted -C(CH3)3 (P-29.4.1,
 * P-29.6.1), which can't be substituted. Isopropyl is kept only for general nomenclature, with no
 * substitution (P-29.6.2.2), and isobutyl, sec-butyl, isopentyl, neopentyl and tert-pentyl are no
 * longer recommended (P-29.6.3), so they are never given here.
 *
 * The prefixes on the principal chain are written like those of an unbranched side chain, in
 * alphanumerical order with every locant (P-14.5, P-16.5.1): 1-bromo-4-methylpentan-3-yl,
 * 2-(chloromethyl)butyl. A branch of a branch is named the same way, in brackets, making a
 * "complex substituent": 5-(2-chloropropyl)octan-2-yl.
 *
 * A COOH group anywhere but carbon 1 is the prefix carboxy, its carbon not part of the chain
 * (P-65.1.2.2.3): 1-carboxyethyl.
 */

import {
  CARBONYL_OXYGEN,
  describeCarbonylCarbon,
  findBondBetween,
  findCarbonAtomById,
  isCarboxylicAcidCarbon,
  isDoubleBond,
  isTripleBond,
  listGroupsOnCarbon,
  listNeighbourCarbonIds,
} from './carbonSkeleton.js';
import {
  OXO_PREFIX,
  TERT_BUTYL_PREFIX,
  acylSubstituentName,
  compareSubstituentNamesAlphanumerically,
  mainChainName,
  unbranchedSubstituentName,
  writeSideChainPrefixes,
} from './alkaneNamingVocabulary.js';
import { nameSideChain, prefixForGroupOnSideChain } from './nameSideChain.js';
import { addStereoDescriptorsToGroupName } from './doubleBondConfiguration.js';
import { message } from '../languages/translate.js';

/** The carbons of a side chain, found by walking away from the carbon it hangs from. */
function listCarbonsBeyond(skeleton, startAtomId, fromAtomId) {
  const found = [];
  const visited = new Set([fromAtomId]);
  const toVisit = [startAtomId];
  while (toVisit.length > 0) {
    const atomId = toVisit.pop();
    if (visited.has(atomId)) continue;
    visited.add(atomId);
    found.push(atomId);
    for (const neighbourId of listNeighbourCarbonIds(skeleton, atomId)) if (!visited.has(neighbourId)) toVisit.push(neighbourId);
  }
  return found;
}

/** True when the carbons beyond startAtomId form a line, with no carbon joined to more than two others. */
function isLine(skeleton, startAtomId, fromAtomId) {
  let previousAtomId = fromAtomId;
  let atomId = startAtomId;
  for (;;) {
    const further = listNeighbourCarbonIds(skeleton, atomId).filter((neighbourId) => neighbourId !== previousAtomId);
    if (further.length === 0) return true;
    if (further.length > 1) return false;
    [previousAtomId, atomId] = [atomId, further[0]];
  }
}

function listLineFrom(skeleton, startAtomId, fromAtomId) {
  const ordered = [startAtomId];
  let previousAtomId = fromAtomId;
  for (;;) {
    const atomId = ordered[ordered.length - 1];
    const next = listNeighbourCarbonIds(skeleton, atomId).find((neighbourId) => neighbourId !== previousAtomId);
    if (next === undefined) return ordered;
    previousAtomId = atomId;
    ordered.push(next);
  }
}

function listBondLocants(skeleton, orderedAtomIds, isKindOfBond) {
  const locants = [];
  for (let index = 0; index + 1 < orderedAtomIds.length; index++) {
    if (isKindOfBond(findBondBetween(skeleton, orderedAtomIds[index], orderedAtomIds[index + 1]))) locants.push(index + 1);
  }
  return locants;
}
const listDoubleBondLocants = (skeleton, orderedAtomIds) => listBondLocants(skeleton, orderedAtomIds, isDoubleBond);
const listTripleBondLocants = (skeleton, orderedAtomIds) => listBondLocants(skeleton, orderedAtomIds, isTripleBond);

const compareLocants = (first, second) => {
  for (let index = 0; index < Math.min(first.length, second.length); index++) if (first[index] !== second[index]) return first[index] - second[index];
  return 0;
};

/**
 * Names any side chain joined to the carbon fromAtomId by its carbon startAtomId: branched ones
 * here, unbranched ones by nameSideChain.js or unbranchedSubstituentName. Returns
 * { substituentName, sideChain?, principalChainAtomIds } or { reasonNotNameable }.
 * With configurations (see doubleBondConfiguration.js), E and Z are written for the double bonds
 * along each chain, in front of that chain's own name: 3-[(1E)-prop-1-en-1-yl]hexan-2-yl.
 */
export function nameAnySideChain(skeleton, startAtomId, fromAtomId, isJoinedByDoubleBond, configurations = new Map()) {
  if (isLine(skeleton, startAtomId, fromAtomId)) {
    const orderedAtomIds = listLineFrom(skeleton, startAtomId, fromAtomId);
    const doubleBondLocants = listDoubleBondLocants(skeleton, orderedAtomIds);
    const tripleBondLocants = listTripleBondLocants(skeleton, orderedAtomIds);
    const hasGroupOnIt = orderedAtomIds.some((atomId) => listGroupsOnCarbon(findCarbonAtomById(skeleton, atomId)).length > 0);
    const named = hasGroupOnIt
      ? nameSideChain(skeleton, orderedAtomIds, doubleBondLocants, isJoinedByDoubleBond, tripleBondLocants)
      : { substituentName: unbranchedSubstituentName(orderedAtomIds.length, isJoinedByDoubleBond, doubleBondLocants, tripleBondLocants) };
    if (named.reasonNotNameable) return named;
    const substituentName = configurations.size > 0 && doubleBondLocants.length > 0 ? addStereoDescriptorsToGroupName(named.substituentName, orderedAtomIds, configurations) : named.substituentName;
    return { ...named, substituentName, principalChainAtomIds: orderedAtomIds };
  }
  return nameBranchedSideChain(skeleton, startAtomId, fromAtomId, isJoinedByDoubleBond, configurations);
}

/**
 * Names a branched side chain (see the top of this file). Returns
 *   {
 *     substituentName: '1-hydroxypropan-2-yl',
 *     sideChain: { kind: 'branched', parentName: 'propan-2-yl', prefixes: [{ locant: 1, substituentName: 'hydroxy' }], locantsLeftOut: false },
 *     principalChainAtomIds: [...],   // its principal chain, in the order it is numbered
 *   }
 * (kind 'acyl' for an acyl group such as 2-methylpropanoyl), or { reasonNotNameable }.
 */
export function nameBranchedSideChain(skeleton, startAtomId, fromAtomId, isJoinedByDoubleBond, configurations = new Map()) {
  const carbonAtomOf = (atomId) => findCarbonAtomById(skeleton, atomId);
  const isAcyl = describeCarbonylCarbon(skeleton, carbonAtomOf(startAtomId)) !== null && !isCarboxylicAcidCarbon(skeleton, carbonAtomOf(startAtomId));
  const branchAtomIds = listCarbonsBeyond(skeleton, startAtomId, fromAtomId);
  // A COOH carbon is never part of the principal chain (but for carbon 1 of an acyl group, which can't be one).
  const isChainCarbon = (atomId) => atomId === startAtomId || !isCarboxylicAcidCarbon(skeleton, carbonAtomOf(atomId));
  const inBranch = new Set(branchAtomIds.filter(isChainCarbon));
  const chainNeighbours = (atomId, previousAtomId) => listNeighbourCarbonIds(skeleton, atomId).filter((neighbourId) => neighbourId !== previousAtomId && inBranch.has(neighbourId));

  // Every path from the free valence carbon out to the end of the branch, one for each end.
  function listPathsOut(atomId, previousAtomId) {
    const further = chainNeighbours(atomId, previousAtomId);
    if (further.length === 0) return [[atomId]];
    return further.flatMap((nextAtomId) => listPathsOut(nextAtomId, atomId).map((path) => [atomId, ...path]));
  }
  // The longest chains through the free valence carbon run from the end of one of its branches to the end of another.
  const firstSteps = chainNeighbours(startAtomId, fromAtomId);
  const pathsByFirstStep = firstSteps.map((nextAtomId) => listPathsOut(nextAtomId, startAtomId));
  const chains = [];
  if (firstSteps.length <= 1 || isAcyl) {
    for (const path of firstSteps.length === 0 ? [[]] : pathsByFirstStep.flat()) chains.push([startAtomId, ...path]);
  } else {
    for (let first = 0; first < firstSteps.length; first++) {
      for (let second = first + 1; second < firstSteps.length; second++) {
        for (const firstPath of pathsByFirstStep[first]) for (const secondPath of pathsByFirstStep[second]) chains.push([...[...firstPath].reverse(), startAtomId, ...secondPath]);
      }
    }
  }
  // Each chain numbered from either end, except an acyl group's, which starts at its C=O carbon.
  const orientations = chains.flatMap((chain) => (isAcyl || chain.length === 1 ? [chain] : [chain, [...chain].reverse()]));

  const candidates = [];
  for (const orderedAtomIds of orientations) {
    const described = describeCandidate(skeleton, orderedAtomIds, startAtomId, fromAtomId, isAcyl, configurations);
    if (described.reasonNotNameable) return described;
    candidates.push(described);
  }
  candidates.sort(comparePrincipalChainCandidates);
  return writeBranchedName(candidates[0], isJoinedByDoubleBond, isAcyl, configurations, skeleton);
}

/** A chain, numbered from its first carbon, with what the criteria of P-46.1 compare. */
function describeCandidate(skeleton, orderedAtomIds, startAtomId, fromAtomId, isAcyl, configurations) {
  const onChain = new Set(orderedAtomIds);
  const freeValenceLocant = orderedAtomIds.indexOf(startAtomId) + 1;
  const doubleBondLocants = listDoubleBondLocants(skeleton, orderedAtomIds);
  const tripleBondLocants = listTripleBondLocants(skeleton, orderedAtomIds);
  const multipleBondLocants = [...doubleBondLocants, ...tripleBondLocants].sort((first, second) => first - second);
  const prefixes = [];
  for (const [index, atomId] of orderedAtomIds.entries()) {
    const locant = index + 1;
    const carbonAtom = findCarbonAtomById(skeleton, atomId);
    for (const group of listGroupsOnCarbon(carbonAtom)) {
      if (group.symbol === CARBONYL_OXYGEN) {
        if (!(isAcyl && atomId === startAtomId)) prefixes.push({ locant, substituentName: OXO_PREFIX });
      } else {
        prefixes.push({ locant, substituentName: prefixForGroupOnSideChain(group) });
      }
    }
    for (const neighbourId of listNeighbourCarbonIds(skeleton, atomId)) {
      if (onChain.has(neighbourId) || neighbourId === fromAtomId) continue;
      const branchIsJoinedByDoubleBond = isDoubleBond(findBondBetween(skeleton, atomId, neighbourId));
      const named = nameAnySideChain(skeleton, neighbourId, atomId, branchIsJoinedByDoubleBond, configurations);
      if (named.reasonNotNameable) return named;
      prefixes.push({ locant, substituentName: named.substituentName });
    }
  }
  if (isAcyl && prefixes.some(({ substituentName }) => substituentName === 'carboxy')) {
    // The acid such a group comes from has two COOH groups, and can't have carboxy as a prefix (P-15.1.8.2.1.1).
    return { reasonNotNameable: message('naming.acylGroupWithCarboxyNotCovered') };
  }
  const prefixLocants = prefixes.map(({ locant }) => locant).sort((first, second) => first - second);
  const locantsInOrderOfCitation = [...prefixes]
    .sort((first, second) => compareSubstituentNamesAlphanumerically(first.substituentName, second.substituentName) || first.locant - second.locant)
    .map(({ locant }) => locant);
  return { orderedAtomIds, freeValenceLocant, doubleBondLocants, tripleBondLocants, multipleBondLocants, prefixes, prefixLocants, locantsInOrderOfCitation };
}

/** The criteria of P-46.1 that apply to a carbon chain, in order: negative when the first candidate is preferred. */
function comparePrincipalChainCandidates(first, second) {
  return (
    second.orderedAtomIds.length - first.orderedAtomIds.length || // (b) longest chain
    second.multipleBondLocants.length - first.multipleBondLocants.length || // (d) most multiple bonds,
    second.doubleBondLocants.length - first.doubleBondLocants.length || //     then most double bonds
    first.freeValenceLocant - second.freeValenceLocant || // (h) lowest locant for the free valence
    compareLocants(first.multipleBondLocants, second.multipleBondLocants) || // (i) lowest locants for multiple bonds,
    compareLocants(first.doubleBondLocants, second.doubleBondLocants) || //     then for double bonds
    second.prefixes.length - first.prefixes.length || // (k) most substituents
    compareLocants(first.prefixLocants, second.prefixLocants) || // (l) lowest locants for substituents
    compareLocants(first.locantsInOrderOfCitation, second.locantsInOrderOfCitation) // (m) first cited, lowest locants
  );
}

/** The parent part of the name: "propan-2-yl", "2-methylpropyl"'s "propyl", "but-3-en-2-yl", "2-methylpropanoyl"'s "propanoyl". */
function principalChainName(carbonCount, freeValenceLocant, doubleBondLocants, isJoinedByDoubleBond, isAcyl, tripleBondLocants = []) {
  if (isAcyl) return acylSubstituentName(carbonCount, doubleBondLocants, tripleBondLocants);
  if (freeValenceLocant === 1) return unbranchedSubstituentName(carbonCount, isJoinedByDoubleBond, doubleBondLocants, tripleBondLocants);
  // Alkanyl type (P-29.2 (2)): the chain's name, losing its final "e" before "yl", with the locant written:
  // propan-2-yl, hept-1-en-6-yn-4-yl (P-32.1.1).
  const chainName = mainChainName(carbonCount, doubleBondLocants, true, [], { tripleBondLocants });
  return `${chainName.slice(0, -1)}-${freeValenceLocant}-${isJoinedByDoubleBond ? 'ylidene' : 'yl'}`;
}

function writeBranchedName(candidate, isJoinedByDoubleBond, isAcyl, configurations, skeleton) {
  const { orderedAtomIds, freeValenceLocant, doubleBondLocants, tripleBondLocants, prefixes } = candidate;
  const parentName = principalChainName(orderedAtomIds.length, freeValenceLocant, doubleBondLocants, isJoinedByDoubleBond, isAcyl, tripleBondLocants);
  const nameWithoutStereo = writeSideChainPrefixes(prefixes) + parentName;
  if (nameWithoutStereo === '2-methylpropan-2-yl') {
    return { substituentName: TERT_BUTYL_PREFIX, sideChain: { kind: 'tertButyl', parentName: TERT_BUTYL_PREFIX, prefixes: [], locantsLeftOut: true }, principalChainAtomIds: orderedAtomIds };
  }
  const substituentName = configurations.size > 0 && doubleBondLocants.length > 0 ? addStereoDescriptorsToGroupName(nameWithoutStereo, orderedAtomIds, configurations) : nameWithoutStereo;
  return {
    substituentName,
    sideChain: { kind: isAcyl ? 'acyl' : 'branched', parentName, prefixes, locantsLeftOut: false },
    principalChainAtomIds: orderedAtomIds,
  };
}

/** True for a skeleton's side chain that branches, which is named here rather than by nameSideChain.js. */
export function isBranchedSideChain(skeleton, startAtomId, fromAtomId) {
  return !isLine(skeleton, startAtomId, fromAtomId);
}

