/**
 * Once a main chain is picked, everything hanging off it is a substituent (a branch).
 * This file finds each branch, measures it and gives it a name such as "methyl" or "ethyl".
 *
 * A halogen on a main chain carbon is a substituent too: fluoro, chloro, bromo or iodo. So
 * is a hydroxyl group (OH), listed here as "hydroxy" though in a name it is usually the
 * suffix -ol instead, and the O of a C=O, listed as "oxo" though in a name it is usually the
 * suffix -al in an aldehyde, or -one in a ketone (see listSuffixSubstituents below, and
 * nameCarbonSkeleton.js). The carboxyl group of an acid, -COOH, is the =O and the OH on one
 * carbon, and is listed as one substituent, the suffix "oic acid". An NH2 group is listed as
 * "amino", though in a name it is usually the suffix -amine (P-62.2.1.2).
 *
 * The O of an ether and the NH of a secondary amine are listed as groups too, once the group
 * on their far side has been taken off and stored with them (see splitAtEthersAndAmines.js):
 * -O-CH3 as "methoxy" and -NH-CH3 as "methylamino" (P-63.2.2, P-62.2.3).
 *
 * This version names unbranched carbon substituents (methyl, ethyl, propyl, and ones with
 * double bonds such as methylidene, ethenyl and prop-2-en-1-yl), with or without groups on them
 * (chloromethyl, 2-hydroxyethyl, acetyl, carboxymethyl: see nameSideChain.js), and ones that
 * branch themselves (propan-2-yl, 2-methylpropyl, tert-butyl, 1-hydroxypropan-2-yl: see
 * nameBranchedSideChain.js).
 */

import {
  AMINO_GROUP,
  CARBONYL_OXYGEN,
  ETHER_OXYGEN_GROUP,
  isCarboxylicAcidCarbon,
  describeCarbonylCarbon,
  findBondBetween,
  findCarbonAtomById,
  hasDoubleBond,
  hasTripleBond,
  HYDROXYL_GROUP,
  isDoubleBond,
  isTripleBond,
  listGroupsOnCarbon,
  listNeighbourCarbonIds,
} from './carbonSkeleton.js';
import {
  AMINO_PREFIX,
  CARBOXY_PREFIX,
  FORMYL_PREFIX,
  HYDROXY_PREFIX,
  OXO_PREFIX,
  PREFIX_BY_HALOGEN,
  alkoxyPrefix,
  alkylaminoPrefix,
  cycloalkylSubstituentName,
  unbranchedSubstituentName,
} from './alkaneNamingVocabulary.js';
import { nameSideChain } from './nameSideChain.js';
import { nameBranchedSideChain } from './nameBranchedSideChain.js';

/**
 * The substituents named by the suffix, the "principal characteristic group" (P-41): the
 * carboxyl groups (-oic acid) if there are any, otherwise the aldehyde groups (-al), otherwise
 * the ketone groups (-one), otherwise the OH groups (-ol), otherwise the NH2 groups (-amine),
 * otherwise none. That is their order of seniority, so in 3-hydroxybutanal the OH is the
 * prefix hydroxy, in 3-oxobutanal the ketone's O is the prefix oxo, in 4-hydroxybutan-2-one the
 * OH is the prefix hydroxy, in 4-oxobutanoic acid the O of the CHO group is the prefix oxo, and
 * in 2-aminoethan-1-ol the NH2 is the prefix amino. An ether's O is never the suffix (P-63.2.2).
 * Every other substituent is a prefix.
 */
const PRINCIPAL_GROUPS_IN_ORDER_OF_SENIORITY = [
  (substituent) => substituent.isCarboxylicAcid,
  (substituent) => substituent.isAldehyde,
  (substituent) => substituent.isKetone,
  (substituent) => substituent.isHydroxy,
  (substituent) => substituent.isAmine,
];

export function listSuffixSubstituents(substituents) {
  for (const isPrincipalGroup of PRINCIPAL_GROUPS_IN_ORDER_OF_SENIORITY) {
    const principalGroups = substituents.filter(isPrincipalGroup);
    if (principalGroups.length > 0) return principalGroups;
  }
  return [];
}

/** Every substituent that is not named by the suffix (see listSuffixSubstituents). */
export function listPrefixSubstituents(substituents) {
  const suffixSubstituents = new Set(listSuffixSubstituents(substituents));
  return substituents.filter((substituent) => !suffixSubstituents.has(substituent));
}

/**
 * What kind of substituent a group on a chain carbon is, and its prefix. The =O and OH of a
 * carboxyl group are one substituent, given for the =O; the OH gives null. An NH2 or ether O
 * with a group beyond it keeps that group's description (linkedGroup) and name (linkedGroupName).
 */
function describeGroup(skeleton, chainAtomId, groupOnCarbon) {
  const group = describeGroupKind(skeleton, chainAtomId, groupOnCarbon);
  if (group === null || groupOnCarbon.linkedAtomIds === undefined) return group;
  return { ...group, linkedAtomIds: groupOnCarbon.linkedAtomIds, linkBond: groupOnCarbon.linkBond };
}

function describeGroupKind(skeleton, chainAtomId, { symbol, linkedGroup, linkedGroupName }) {
  const carbonAtom = findCarbonAtomById(skeleton, chainAtomId);
  if (isCarboxylicAcidCarbon(skeleton, carbonAtom)) {
    return symbol === CARBONYL_OXYGEN ? { isCarboxylicAcid: true, substituentName: CARBOXY_PREFIX } : null;
  }
  if (symbol === HYDROXYL_GROUP) return { isHydroxy: true, substituentName: HYDROXY_PREFIX };
  if (symbol === AMINO_GROUP) {
    if (linkedGroup === undefined) return { isAmine: true, substituentName: AMINO_PREFIX };
    return { isAmine: true, linkedGroup, linkedGroupName, substituentName: alkylaminoPrefix(linkedGroupName) };
  }
  if (symbol === ETHER_OXYGEN_GROUP) return { isEther: true, linkedGroup, linkedGroupName, substituentName: alkoxyPrefix(linkedGroupName) };
  if (symbol !== CARBONYL_OXYGEN) return { halogen: symbol, substituentName: PREFIX_BY_HALOGEN[symbol] };
  const isAldehyde = describeCarbonylCarbon(skeleton, carbonAtom) === 'aldehyde';
  return isAldehyde ? { isAldehyde: true, substituentName: OXO_PREFIX } : { isKetone: true, substituentName: OXO_PREFIX };
}

/** Every carbon in a branch, found by walking away from the main chain. */
export function listCarbonIdsInBranch(skeleton, branchStartAtomId, chainAtomIdItHangsFrom) {
  const carbonIdsInBranch = [];
  const visitedAtomIds = new Set([chainAtomIdItHangsFrom]);
  const atomIdsToVisit = [branchStartAtomId];

  while (atomIdsToVisit.length > 0) {
    const currentAtomId = atomIdsToVisit.pop();
    if (visitedAtomIds.has(currentAtomId)) continue;
    visitedAtomIds.add(currentAtomId);
    carbonIdsInBranch.push(currentAtomId);
    for (const neighbourId of listNeighbourCarbonIds(skeleton, currentAtomId)) {
      if (!visitedAtomIds.has(neighbourId)) atomIdsToVisit.push(neighbourId);
    }
  }
  return carbonIdsInBranch;
}

/**
 * True if the branch is a simple line of carbons, i.e. every carbon in it has at most
 * one further carbon leading away from the main chain.
 */
export function isBranchUnbranched(skeleton, branchStartAtomId, chainAtomIdItHangsFrom) {
  let previousAtomId = chainAtomIdItHangsFrom;
  let currentAtomId = branchStartAtomId;

  for (;;) {
    const carbonsLeadingFurtherAway = listNeighbourCarbonIds(skeleton, currentAtomId).filter(
      (neighbourId) => neighbourId !== previousAtomId,
    );
    if (carbonsLeadingFurtherAway.length === 0) return true;
    if (carbonsLeadingFurtherAway.length > 1) return false;
    previousAtomId = currentAtomId;
    currentAtomId = carbonsLeadingFurtherAway[0];
  }
}

/**
 * The locants of the double bonds along a line of carbons, each double bond given the
 * lower of its two locants: for CH2=CH-CH=CH2 listed in order, [1, 3].
 */
export function listDoubleBondLocantsAlong(skeleton, orderedAtomIds) {
  const doubleBondLocants = [];
  if (!hasDoubleBond(skeleton)) return doubleBondLocants;
  for (let index = 0; index + 1 < orderedAtomIds.length; index++) {
    if (isDoubleBond(findBondBetween(skeleton, orderedAtomIds[index], orderedAtomIds[index + 1]))) doubleBondLocants.push(index + 1);
  }
  return doubleBondLocants;
}

/** The same for the triple bonds: for HC≡C-CH2-C≡CH listed in order, [1, 4]. */
export function listTripleBondLocantsAlong(skeleton, orderedAtomIds) {
  const tripleBondLocants = [];
  if (!hasTripleBond(skeleton)) return tripleBondLocants;
  for (let index = 0; index + 1 < orderedAtomIds.length; index++) {
    if (isTripleBond(findBondBetween(skeleton, orderedAtomIds[index], orderedAtomIds[index + 1]))) tripleBondLocants.push(index + 1);
  }
  return tripleBondLocants;
}

/** The carbons of an unbranched branch in order, starting with the one joined to the main chain. */
export function listCarbonIdsAlongUnbranchedBranch(skeleton, branchStartAtomId, chainAtomIdItHangsFrom) {
  const orderedAtomIds = [branchStartAtomId];
  let previousAtomId = chainAtomIdItHangsFrom;
  for (;;) {
    const currentAtomId = orderedAtomIds[orderedAtomIds.length - 1];
    const nextAtomId = listNeighbourCarbonIds(skeleton, currentAtomId).find((neighbourId) => neighbourId !== previousAtomId);
    if (nextAtomId === undefined) return orderedAtomIds;
    previousAtomId = currentAtomId;
    orderedAtomIds.push(nextAtomId);
  }
}

/**
 * Lists the substituents on a chain, numbered from the first atom in orderedChainAtomIds.
 *
 * A carbon substituent looks like:
 *   {
 *     locant: 3,                    // which chain carbon it is attached to (counting from 1)
 *     substituentCarbonCount: 2,
 *     isUnbranched: true,
 *     hasGroupOnIt: false,          // true for -CH2Cl (chloromethyl), -CH2OH (hydroxymethyl) and the like
 *     isJoinedByDoubleBond: false,  // true for =CH2 (methylidene) and the like
 *     doubleBondLocants: [],        // double bonds inside it, numbered from the joining carbon
 *     tripleBondLocants: [],        // and triple bonds (only on a carbon branch; left out for groups)
 *     substituentName: 'ethyl',     // null when it is branched (not supported yet)
 *     branchStartAtomId: 7,
 *   }
 * A side chain with groups on it (hasGroupOnIt) is named by nameSideChain.js, and also has
 * sideChain, saying how: e.g. for 'chloromethyl'
 *   sideChain: { kind: 'substituted', parentName: 'methyl', prefixes: [{ locant: 1, substituentName: 'chloro' }], locantsLeftOut: true }
 * or, when it can't be named yet, substituentName null and reasonNotNameable, a message.
 * The name says how the substituent is joined and whether it has double bonds of its own:
 * 'ethyl', 'methylidene' (=CH2), 'ethenyl' (-CH=CH2), 'prop-2-en-1-yl' (-CH2-CH=CH2) ...
 * (see unbranchedSubstituentName in alkaneNamingVocabulary.js).
 *
 * A halogen substituent looks like:
 *   { locant: 2, halogen: 'Cl', substituentName: 'chloro', substituentCarbonCount: 0, isUnbranched: true,
 *     hasGroupOnIt: false, isJoinedByDoubleBond: false, doubleBondLocants: [] }
 *
 * a hydroxyl group like:
 *   { locant: 2, isHydroxy: true, substituentName: 'hydroxy', substituentCarbonCount: 0, isUnbranched: true,
 *     hasGroupOnIt: false, isJoinedByDoubleBond: false, doubleBondLocants: [] }
 *
 * the O of an aldehyde group (-CHO) like:
 *   { locant: 1, isAldehyde: true, substituentName: 'oxo', substituentCarbonCount: 0, isUnbranched: true,
 *     hasGroupOnIt: false, isJoinedByDoubleBond: false, doubleBondLocants: [] }
 * the O of a ketone like the aldehyde's, but with isKetone: true instead, and the carboxyl group
 * of an acid (-COOH, its =O and OH together) like:
 *   { locant: 1, isCarboxylicAcid: true, substituentName: 'carboxy', substituentCarbonCount: 0, isUnbranched: true,
 *     hasGroupOnIt: false, isJoinedByDoubleBond: false, doubleBondLocants: [] }
 * an NH2 group like the OH group, with isAmine: true and the name 'amino', and the O of an ether
 * with the group beyond it, -O-CH3, like:
 *   { locant: 1, isEther: true, linkedGroup: { carbonCount: 1, doubleBondLocants: [], isRing: false },
 *     linkedGroupName: 'methyl', substituentName: 'methoxy', substituentCarbonCount: 0, ... }
 * and the NH of a secondary amine, -NH-CH3, the same with isAmine in place of isEther, and the
 * name 'methylamino'.
 * (A C=O in none of these, as in an acyl chloride, is not named yet; nameCarbonSkeleton.js
 * stops before it gets here.)
 *
 * When the main chain is a ring (isRing), listed in order round the ring, a -COOH or -CHO
 * group can't be part of it, so it hangs off a ring carbon as a one-carbon branch. It is
 * listed like the carboxyl group above, or with isAldehyde and the name 'formyl' (P-65.1.2.2,
 * P-66.6.1.1.3): cyclohexanecarboxylic acid, cyclohexanecarbaldehyde,
 * 4-formylcyclohexane-1-carboxylic acid. Its substituentCarbonCount is still 0, as in
 * buildCarbonSkeletonFromDescription.js a ring's -COOH and -CHO bring their own carbon.
 *
 * When the molecule has rings other than the main chain (ringAtomIds: their carbons), a branch
 * that is one of them is listed with isRing and named like cyclohexyl (P-29.2), with
 * substituentCarbonCount the size of the ring. Only a saturated ring with nothing on it is
 * named this way; any other branch with ring carbons in it is marked isRingNotCovered.
 */
export function findSubstituentsOnChain(skeleton, orderedChainAtomIds, { isRing = false, ringAtomIds = new Set() } = {}) {
  const chainAtomIds = new Set(orderedChainAtomIds);
  const substituents = [];
  const skeletonHasDoubleBonds = hasDoubleBond(skeleton);
  const groupsByAtomId = new Map(skeleton.carbonAtoms.map((carbonAtom) => [carbonAtom.atomId, listGroupsOnCarbon(carbonAtom)]));

  orderedChainAtomIds.forEach((chainAtomId, positionInChain) => {
    const branchStartAtomIds = listNeighbourCarbonIds(skeleton, chainAtomId).filter(
      (neighbourId) => !chainAtomIds.has(neighbourId),
    );

    for (const groupOnCarbon of groupsByAtomId.get(chainAtomId)) {
      const group = describeGroup(skeleton, chainAtomId, groupOnCarbon);
      if (group === null) continue;
      substituents.push({
        locant: positionInChain + 1,
        ...group,
        groupSymbol: groupOnCarbon.symbol,
        substituentCarbonCount: 0,
        isUnbranched: true,
        hasGroupOnIt: false,
        isJoinedByDoubleBond: false,
        doubleBondLocants: [],
      });
    }

    for (const branchStartAtomId of branchStartAtomIds) {
      const carbonIdsInBranch = listCarbonIdsInBranch(skeleton, branchStartAtomId, chainAtomId);
      const isJoinedByDoubleBond = skeletonHasDoubleBonds && isDoubleBond(findBondBetween(skeleton, chainAtomId, branchStartAtomId));
      const sameForEveryGroup = { locant: positionInChain + 1, substituentCarbonCount: 0, isUnbranched: true, hasGroupOnIt: false, isJoinedByDoubleBond: false, doubleBondLocants: [] };

      if (isRing && carbonIdsInBranch.length === 1 && !isJoinedByDoubleBond) {
        const carbonylKind = describeCarbonylCarbon(skeleton, findCarbonAtomById(skeleton, branchStartAtomId));
        if (carbonylKind === 'carboxylicAcid') {
          substituents.push({ ...sameForEveryGroup, isCarboxylicAcid: true, substituentName: CARBOXY_PREFIX, branchStartAtomId });
          continue;
        }
        if (carbonylKind === 'aldehyde') {
          substituents.push({ ...sameForEveryGroup, isAldehyde: true, substituentName: FORMYL_PREFIX, branchStartAtomId });
          continue;
        }
      }

      if (carbonIdsInBranch.some((atomId) => ringAtomIds.has(atomId))) {
        const isPlainRing =
          ringAtomIds.has(branchStartAtomId) &&
          !isJoinedByDoubleBond &&
          carbonIdsInBranch.every((atomId) => ringAtomIds.has(atomId) && groupsByAtomId.get(atomId).length === 0) &&
          !skeleton.carbonCarbonBonds.some((bond) => (isDoubleBond(bond) || isTripleBond(bond)) && carbonIdsInBranch.includes(bond.firstAtomId) && carbonIdsInBranch.includes(bond.secondAtomId));
        substituents.push({
          ...sameForEveryGroup,
          substituentCarbonCount: carbonIdsInBranch.length,
          isJoinedByDoubleBond,
          isRing: true,
          ...(isPlainRing ? {} : { isRingNotCovered: true }),
          substituentName: isPlainRing ? cycloalkylSubstituentName(carbonIdsInBranch.length) : null,
          branchStartAtomId,
        });
        continue;
      }

      const substituentCarbonCount = carbonIdsInBranch.length;
      const hasGroupOnIt = carbonIdsInBranch.some((atomId) => groupsByAtomId.get(atomId).length > 0);
      const isUnbranched = isBranchUnbranched(skeleton, branchStartAtomId, chainAtomId);
      const orderedBranchAtomIds = isUnbranched ? listCarbonIdsAlongUnbranchedBranch(skeleton, branchStartAtomId, chainAtomId) : [];
      const doubleBondLocants = isUnbranched && skeletonHasDoubleBonds ? listDoubleBondLocantsAlong(skeleton, orderedBranchAtomIds) : [];
      const tripleBondLocants = isUnbranched ? listTripleBondLocantsAlong(skeleton, orderedBranchAtomIds) : [];
      const named = !isUnbranched
        ? nameBranchedSideChain(skeleton, branchStartAtomId, chainAtomId, isJoinedByDoubleBond)
        : hasGroupOnIt
          ? nameSideChain(skeleton, orderedBranchAtomIds, doubleBondLocants, isJoinedByDoubleBond, tripleBondLocants)
          : { substituentName: unbranchedSubstituentName(substituentCarbonCount, isJoinedByDoubleBond, doubleBondLocants, tripleBondLocants) };
      substituents.push({
        locant: positionInChain + 1,
        substituentCarbonCount,
        isUnbranched,
        hasGroupOnIt,
        isJoinedByDoubleBond,
        doubleBondLocants,
        ...(tripleBondLocants.length > 0 ? { tripleBondLocants } : {}),
        substituentName: named.substituentName ?? null,
        ...(named.sideChain ? { sideChain: named.sideChain } : {}),
        ...(named.reasonNotNameable ? { reasonNotNameable: named.reasonNotNameable } : {}),
        ...(isUnbranched ? {} : { principalChainAtomIds: named.principalChainAtomIds }),
        branchStartAtomId,
      });
    }
  });

  return substituents;
}
