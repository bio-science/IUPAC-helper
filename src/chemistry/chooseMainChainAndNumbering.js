/**
 * Choosing which chain is the main chain, and which end to number it from.
 *
 * The main chain has the most carboxyl groups (-COOH) or, without any, the most aldehyde
 * groups, or ketone groups, or OH groups, or NH2 groups, in that order (P-44.1.1), and then the most carbons (P-44.3),
 * even if a shorter chain would contain a double bond: e.g. 3-methylidenepentane,
 * 4-ethenylnonane. (Earlier recommendations, still taught in some courses, put the double
 * bond first.) See findLongestCarbonChains.js.
 *
 * Every such chain can be numbered from either end, so each (chain, direction)
 * pair is a "numbering candidate". The candidates are ranked by these IUPAC rules,
 * checked in order (IUPAC 2013 Recommendations; summarised in the IUPAC "Brief Guide
 * to the Nomenclature of Organic Chemistry", 2020, sections 6 and 7):
 *
 *   1. Most multiple bonds (double and triple) in the chain.            P-44.4.1.1
 *      e.g. 3-ethylocta-1,4-diene, not a chain with only one double bond
 *      (only between chains of the same length, as the length comes first)
 *   1a. Then the most double bonds.                                     P-44.4.1.2
 *      e.g. hepta-1,6-diene rather than hept-1-en-6-yne for a chain that could be either
 *   2. Lowest locants for the suffix: the carboxyl groups (-oic acid),  P-14.4 (c)
 *      or without any, the aldehyde groups (-al), the ketone groups (-one), the OH groups (-ol),
 *      or the NH2 groups (-amine).
 *      e.g. but-3-en-2-ol, not but-1-en-3-ol; but-3-en-2-one, not but-1-en-3-one
 *      (P-64.2.2.3); an aldehyde's carbon is always carbon 1 (3-hydroxybutanal, not
 *      2-hydroxybutan-4-al), and so is an acid's (4-oxobutanoic acid)
 *   3. Lowest locants for the multiple bonds, double and triple together. P-31.1.1.1, P-14.4 (e) (ii)
 *      e.g. pent-3-en-1-yne, not pent-2-en-4-yne; but-1-yne, not but-3-yne
 *   3a. Then lowest locants for the double bonds.                       P-44.4.1.10 and P-14.4 (e)
 *      e.g. pent-2-ene, not pent-3-ene; 4-methylpent-1-ene, not 2-methylpent-4-ene;
 *      6-methylhept-2-en-4-ol, not 2-methylhept-5-en-4-ol; pent-1-en-4-yne, not pent-4-en-1-yne
 *   4. Most substituents on the chain (prefixes only, so not the suffix). P-45.2.1
 *      e.g. 3-ethyl-2-methylhexane, not 3-(propan-2-yl)hexane
 *   5. Lowest set of locants for all prefixes together.                 P-45.2.2 and P-14.4 (f)
 *      e.g. 2,2,4-trimethylpentane, not 2,4,4-trimethylpentane
 *   6. Lowest locants for the prefixes in the order they are             P-45.2.3 and P-14.4 (g)
 *      written in the name (which is alphanumerical order).
 *      e.g. 3-ethyl-5-methylheptane, not 5-ethyl-3-methylheptane
 * (If all of these are equal, the name that comes first alphanumerically is chosen,
 * P-45.5; see nameCarbonSkeleton.js.)
 *
 * "Lowest set of locants" means comparing the numbers one by one and stopping at the
 * first place they differ (P-14.3.5): 2,3,5,8 is lower than 3,4,6,8.
 *
 * A molecule with rings (each on its own: rings sharing carbons aren't named yet):
 *   - A ring is the parent when it has at least as many of the principal characteristic
 *     group as the best chain outside the rings, so always when there is none (P-44.1.2.2,
 *     P-52.2.8): methylcyclohexane, ethenylcyclohexane, decylcyclohexane,
 *     cyclohexanecarboxylic acid (the -COOH carbon joined to the ring counts for the ring).
 *     Otherwise the chain is, with the rings as substituents: cyclohexylmethanol,
 *     2-cyclohexylethan-1-ol, dicyclohexylmethanone.
 *   - Of several rings with as many of the principal group, the parent has the most carbons
 *     (P-44.2.1 (e)): cyclopentylcyclohexane. Rings of the same size are not named yet: the
 *     PIN would be a ring assembly when they are joined straight to each other, even with a
 *     C=C in one (1,1'-bi(cyclohexane), [1,1'-bi(cyclohexan)]-1-ene, P-28), or otherwise a
 *     multiplicative name (1,1'-methylenedi(cyclohexane), P-51.3.1) or one chosen by rules for
 *     identical rings with different groups on them.
 *   - The ring can be numbered from any of its carbons, either way round, and the same
 *     rules choose between these. A double bond is given the locants of two carbons next to
 *     each other in the numbering, so carbon 1 and the last carbon (n) are never the two ends
 *     of a double bond if that can be helped: cyclohexene's double bond is 1, not 6, and
 *     cyclohex-2-en-1-ol is not cyclohex-6-en-1-ol.             P-31.1.3.1, P-14.4 (e)
 */

import {
  countRings,
  findBondBetween,
  isAldehydeCarbon,
  isCarboxylicAcidCarbon,
  isDoubleBond,
  isTripleBond,
  listNeighbourCarbonIds,
  listSeparateRings,
} from './carbonSkeleton.js';
import { findAllMainChainCandidates, principalGroupCounter } from './findLongestCarbonChains.js';
import { findSubstituentsOnChain, listDoubleBondLocantsAlong, listPrefixSubstituents, listSuffixSubstituents, listTripleBondLocantsAlong } from './findSubstituentsOnChain.js';
import { compareSubstituentNamesAlphanumerically } from './alkaneNamingVocabulary.js';

/**
 * Compares two lists of locants at their first point of difference.
 * Returns a negative number if the first list is lower (preferred),
 * a positive number if the second is lower, and 0 if they are the same.
 */
export function compareLocantsAtFirstPointOfDifference(firstLocants, secondLocants) {
  const shorterLength = Math.min(firstLocants.length, secondLocants.length);
  for (let index = 0; index < shorterLength; index++) {
    if (firstLocants[index] !== secondLocants[index]) {
      return firstLocants[index] - secondLocants[index];
    }
  }
  return 0;
}

/** All substituent locants, smallest first: [4, 2, 2] -> [2, 2, 4]. */
export function listLocantsInAscendingOrder(substituents) {
  return substituents.map((substituent) => substituent.locant).sort((first, second) => first - second);
}

/**
 * The locants in the order they would be written in the name.
 * Substituents are written in alphanumerical order of their names; repeated substituents
 * (e.g. the two methyls in "2,4-dimethyl") are written with their locants in increasing order.
 */
export function listLocantsInOrderOfCitation(substituents) {
  const nameUsedForSorting = (substituent) => substituent.substituentName ?? '~unnamed';
  return [...substituents]
    .sort(
      (first, second) =>
        compareSubstituentNamesAlphanumerically(nameUsedForSorting(first), nameUsedForSorting(second)) || first.locant - second.locant,
    )
    .map((substituent) => substituent.locant);
}

/** Every multiple bond's locant, double and triple together, smallest first. */
export function listMultipleBondLocants(candidate) {
  return [...candidate.doubleBondLocants, ...(candidate.tripleBondLocants ?? [])].sort((first, second) => first - second);
}

/**
 * Ranks two numbering candidates using the rules at the top of this file.
 * Returns a negative number when the first candidate is preferred.
 */
export function compareNumberingCandidates(firstCandidate, secondCandidate) {
  for (const { compare } of NUMBERING_RULES) {
    const comparison = compare(firstCandidate, secondCandidate);
    if (comparison !== 0) return comparison;
  }
  return 0;
}

/**
 * The rules at the top of this file, in the order they are checked, each with the Blue Book
 * rules it follows and a comparison that is negative when the first candidate is preferred.
 */
export const NUMBERING_RULES = [
  {
    ruleName: 'mostMultipleBonds',
    blueBookRules: ['P-44.4.1.1'],
    compare: (first, second) => listMultipleBondLocants(second).length - listMultipleBondLocants(first).length,
  },
  {
    ruleName: 'mostDoubleBonds',
    blueBookRules: ['P-44.4.1.2'],
    compare: (first, second) => second.doubleBondLocants.length - first.doubleBondLocants.length,
  },
  {
    ruleName: 'lowestSuffixLocants',
    blueBookRules: ['P-14.4 (c)'],
    compare: (first, second) =>
      compareLocantsAtFirstPointOfDifference(
        listLocantsInAscendingOrder(listSuffixSubstituents(first.substituents)),
        listLocantsInAscendingOrder(listSuffixSubstituents(second.substituents)),
      ),
  },
  {
    ruleName: 'lowestMultipleBondLocants',
    blueBookRules: ['P-31.1.1.1', 'P-14.4 (e)'],
    compare: (first, second) => compareLocantsAtFirstPointOfDifference(listMultipleBondLocants(first), listMultipleBondLocants(second)),
  },
  {
    ruleName: 'lowestDoubleBondLocants',
    blueBookRules: ['P-14.4 (e)', 'P-44.4.1.10'],
    compare: (first, second) => compareLocantsAtFirstPointOfDifference(first.doubleBondLocants, second.doubleBondLocants),
  },
  {
    ruleName: 'mostPrefixes',
    blueBookRules: ['P-45.2.1'],
    compare: (first, second) => listPrefixSubstituents(second.substituents).length - listPrefixSubstituents(first.substituents).length,
  },
  {
    ruleName: 'lowestPrefixLocants',
    blueBookRules: ['P-14.4 (f)', 'P-45.2.2'],
    compare: (first, second) =>
      compareLocantsAtFirstPointOfDifference(
        listLocantsInAscendingOrder(listPrefixSubstituents(first.substituents)),
        listLocantsInAscendingOrder(listPrefixSubstituents(second.substituents)),
      ),
  },
  {
    ruleName: 'lowestLocantsInOrderOfCitation',
    blueBookRules: ['P-14.4 (g)', 'P-45.2.3'],
    compare: (first, second) =>
      compareLocantsAtFirstPointOfDifference(
        listLocantsInOrderOfCitation(listPrefixSubstituents(first.substituents)),
        listLocantsInOrderOfCitation(listPrefixSubstituents(second.substituents)),
      ),
  },
];

/**
 * Which of NUMBERING_RULES first prefers one candidate to the other: its index, or -1 if
 * none of them does.
 */
export function findIndexOfDecidingNumberingRule(firstCandidate, secondCandidate) {
  return NUMBERING_RULES.findIndex(({ compare }) => compare(firstCandidate, secondCandidate) !== 0);
}

/**
 * Every chain that could be the main chain, numbered from each end in turn:
 *   [{ orderedChainAtomIds, doubleBondLocants, tripleBondLocants, substituents }, ...]
 * In a molecule with a ring, these are chains outside the ring (ringAtomIds), with the
 * ring as a substituent.
 */
export function listAllNumberingCandidates(skeleton, ringAtomIds = new Set()) {
  const numberingCandidates = [];
  for (const chainInOneDirection of findAllMainChainCandidates(skeleton, ringAtomIds)) {
    const chainInOtherDirection = [...chainInOneDirection].reverse();
    for (const orderedChainAtomIds of chainInOneDirection.length === 1 ? [chainInOneDirection] : [chainInOneDirection, chainInOtherDirection]) {
      numberingCandidates.push({
        orderedChainAtomIds,
        doubleBondLocants: listDoubleBondLocantsAlong(skeleton, orderedChainAtomIds),
        tripleBondLocants: listTripleBondLocantsAlong(skeleton, orderedChainAtomIds),
        substituents: findSubstituentsOnChain(skeleton, orderedChainAtomIds, { ringAtomIds }),
      });
    }
  }
  return numberingCandidates;
}

/**
 * The locants of a ring's double bonds, numbered round the ring in the given order. A
 * double bond joining the last carbon back to carbon 1 is given the last carbon's locant.
 */
export function listDoubleBondLocantsRoundRing(skeleton, orderedRingAtomIds) {
  const lastAtomId = orderedRingAtomIds[orderedRingAtomIds.length - 1];
  const closesWithDoubleBond = isDoubleBond(findBondBetween(skeleton, lastAtomId, orderedRingAtomIds[0]));
  return [...listDoubleBondLocantsAlong(skeleton, orderedRingAtomIds), ...(closesWithDoubleBond ? [orderedRingAtomIds.length] : [])];
}

/** The same for a ring's triple bonds, as in cyclooctyne. */
export function listTripleBondLocantsRoundRing(skeleton, orderedRingAtomIds) {
  const lastAtomId = orderedRingAtomIds[orderedRingAtomIds.length - 1];
  const closesWithTripleBond = isTripleBond(findBondBetween(skeleton, lastAtomId, orderedRingAtomIds[0]));
  return [...listTripleBondLocantsAlong(skeleton, orderedRingAtomIds), ...(closesWithTripleBond ? [orderedRingAtomIds.length] : [])];
}

/**
 * Every way of numbering the ring: from each of its carbons, each way round. Those with a
 * double or triple bond from the last carbon back to carbon 1 are left out when there are others.
 *   [{ orderedChainAtomIds, doubleBondLocants, tripleBondLocants, substituents, isRing: true }, ...]
 */
export function listAllRingNumberingCandidates(skeleton, ringAtomIdsInOrder, otherRingAtomIds = new Set()) {
  const ringSize = ringAtomIdsInOrder.length;
  const numberingCandidates = [];
  for (let startIndex = 0; startIndex < ringSize; startIndex++) {
    const forwards = Array.from({ length: ringSize }, (_, step) => ringAtomIdsInOrder[(startIndex + step) % ringSize]);
    const backwards = Array.from({ length: ringSize }, (_, step) => ringAtomIdsInOrder[(startIndex - step + ringSize) % ringSize]);
    for (const orderedChainAtomIds of [forwards, backwards]) {
      numberingCandidates.push({
        orderedChainAtomIds,
        doubleBondLocants: listDoubleBondLocantsRoundRing(skeleton, orderedChainAtomIds),
        tripleBondLocants: listTripleBondLocantsRoundRing(skeleton, orderedChainAtomIds),
        substituents: findSubstituentsOnChain(skeleton, orderedChainAtomIds, { isRing: true, ringAtomIds: otherRingAtomIds }),
        isRing: true,
      });
    }
  }
  const closesWithDoubleBond = (candidate) => listMultipleBondLocants(candidate).includes(ringSize);
  const withoutClosingDoubleBond = numberingCandidates.filter((candidate) => !closesWithDoubleBond(candidate));
  return withoutClosingDoubleBond.length > 0 ? withoutClosingDoubleBond : numberingCandidates;
}

/**
 * Which part of the molecule is the parent (see the top of this file):
 *   { kind: 'chain', ringAtomIds }                 a chain, with any rings as substituents
 *   { kind: 'ring', ring, ringAtomIds, ruleName }  a ring (its carbons in order round it);
 *                                                  ruleName says what chose it from other rings:
 *                                                  'onlyRing', 'mostPrincipalGroups' or 'mostRingCarbons'
 *   { kind: 'tiedRings', rings, ringAtomIds }      rings of the same size tie, which isn't named yet
 *   { kind: 'ringsSharingCarbons' }                fused, bridged or spiro rings, not named yet
 * ringAtomIds is every carbon in a ring.
 */
export function chooseParent(skeleton) {
  if (countRings(skeleton) <= 0) return { kind: 'chain', ringAtomIds: new Set() };
  const { rings, hasRingsSharingCarbons } = listSeparateRings(skeleton);
  if (hasRingsSharingCarbons) return { kind: 'ringsSharingCarbons' };
  const ringAtomIds = new Set(rings.flat());
  const countPrincipalGroupsOnCarbon = principalGroupCounter(skeleton);
  const carbonById = new Map(skeleton.carbonAtoms.map((carbonAtom) => [carbonAtom.atomId, carbonAtom]));

  // The principal characteristic groups on a ring's carbons, and the -COOH and -CHO groups joined straight to it.
  const countOnRing = (ring) => {
    let count = 0;
    for (const ringAtomId of ring) {
      count += countPrincipalGroupsOnCarbon(carbonById.get(ringAtomId));
      for (const neighbourId of listNeighbourCarbonIds(skeleton, ringAtomId)) {
        const neighbour = carbonById.get(neighbourId);
        const isCarbonylEnd = isCarboxylicAcidCarbon(skeleton, neighbour) || isAldehydeCarbon(skeleton, neighbour);
        if (!ringAtomIds.has(neighbourId) && isCarbonylEnd) count += countPrincipalGroupsOnCarbon(neighbour);
      }
    }
    return count;
  };
  const bestChains = findAllMainChainCandidates(skeleton, ringAtomIds);
  const countAlongChain = bestChains.length === 0 ? -1 : bestChains[0].reduce((total, atomId) => total + countPrincipalGroupsOnCarbon(carbonById.get(atomId)), 0);
  const ringCounts = rings.map(countOnRing);
  const mostOnARing = Math.max(...ringCounts);
  if (mostOnARing < countAlongChain) return { kind: 'chain', ringAtomIds };

  const contenders = rings.filter((_, index) => ringCounts[index] === mostOnARing);
  if (rings.length === 1) return { kind: 'ring', ring: rings[0], ringAtomIds, ruleName: 'onlyRing' };
  if (contenders.length === 1) return { kind: 'ring', ring: contenders[0], ringAtomIds, ruleName: 'mostPrincipalGroups' };
  const mostCarbons = Math.max(...contenders.map((ring) => ring.length));
  const largest = contenders.filter((ring) => ring.length === mostCarbons);
  if (largest.length > 1) return { kind: 'tiedRings', rings: largest, ringAtomIds };
  return { kind: 'ring', ring: largest[0], ringAtomIds, ruleName: 'mostRingCarbons' };
}

/**
 * Every numbering candidate, before the rules at the top of this file rank them: of the ring,
 * or of the chains that could be the main chain, whichever is the parent (chooseParent). When
 * rings tie, the first of them is numbered, so there is still an answer, though
 * nameCarbonSkeleton.js doesn't name these.
 */
export function listNumberingCandidatesOfParent(skeleton) {
  const parent = chooseParent(skeleton);
  if (parent.kind === 'ringsSharingCarbons') return [];
  if (parent.kind === 'chain') return listAllNumberingCandidates(skeleton, parent.ringAtomIds);
  const ring = parent.kind === 'ring' ? parent.ring : parent.rings[0];
  const otherRingAtomIds = new Set([...parent.ringAtomIds].filter((atomId) => !ring.includes(atomId)));
  return listAllRingNumberingCandidates(skeleton, ring, otherRingAtomIds);
}

/**
 * Every numbering candidate that the rules at the top of this file rank first.
 * Usually they all give the same name; nameCarbonSkeleton.js picks between them if not.
 * Returns an empty list for an empty skeleton. For a molecule with one ring, these number
 * the ring or a chain, whichever is the parent.
 */
export function listBestNumberingCandidates(skeleton) {
  const sortedCandidates = listNumberingCandidatesOfParent(skeleton).sort(compareNumberingCandidates);
  return sortedCandidates.filter((candidate) => compareNumberingCandidates(candidate, sortedCandidates[0]) === 0);
}

/**
 * The preferred main chain and numbering:
 *   { orderedChainAtomIds: [...], doubleBondLocants: [...], tripleBondLocants: [...], substituents: [...] }
 * (carbon 1 is orderedChainAtomIds[0]). Returns null for an empty skeleton.
 */
export function chooseMainChainAndNumbering(skeleton) {
  return listBestNumberingCandidates(skeleton)[0] ?? null;
}
