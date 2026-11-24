/**
 * Finding the chains that could be the main chain: the first step in naming.
 *
 * IUPAC rules (IUPAC 2013 Recommendations):
 *   - The main chain has the greatest number of the "principal characteristic group", the
 *     group named by the suffix: carboxyl groups (-oic acid) if the molecule has any,
 *     otherwise aldehyde groups (-al), otherwise ketone groups (-one), otherwise OH groups
 *     (-ol), otherwise NH2 groups (-amine). That is their order of seniority.
 *                                                                           P-44.1.1, P-41
 *     e.g. 2-propylpropane-1,3-diol has a 3-carbon main chain, not a 5-carbon one,
 *     2-ethylbutanal a 4-carbon one ending in the CHO group, and 3-propylpentane-2,4-dione
 *     a 5-carbon one through both ketone carbons, not a 6-carbon one through only one.
 *     A -COOH carbon, like a -CHO carbon, is always at the end of the chain.
 *   - Then it is the chain with the greatest number of carbon atoms.      P-44.3
 *
 * Such a chain always runs from one end carbon (a carbon with only one carbon neighbour)
 * to another, because a chain can always be made longer, keeping its OH groups, until it
 * reaches an end. (The carbon of a CHO group is always an end carbon.) So we try every pair
 * of end carbons and keep the best paths.
 */

import {
  countAminoGroupsOnCarbon,
  countHydroxylGroupsOnCarbon,
  hasAldehydeGroup,
  hasCarboxylicAcidGroup,
  hasHydroxylGroup,
  hasKetoneGroup,
  isAldehydeCarbon,
  isCarboxylicAcidCarbon,
  isKetoneCarbon,
  listNeighbourCarbonIds,
} from './carbonSkeleton.js';

/**
 * The list of carbon ids walked through to get from one carbon to another, both included.
 * Uses a breadth-first search, remembering which atom we came from to reach each atom.
 * Returns null if the two carbons aren't connected.
 */
export function findPathBetweenTwoCarbons(skeleton, startAtomId, endAtomId) {
  const previousAtomIdOnPath = new Map([[startAtomId, null]]);
  const atomIdsToVisit = [startAtomId];

  while (atomIdsToVisit.length > 0) {
    const currentAtomId = atomIdsToVisit.shift();
    if (currentAtomId === endAtomId) break;
    for (const neighbourId of listNeighbourCarbonIds(skeleton, currentAtomId)) {
      if (!previousAtomIdOnPath.has(neighbourId)) {
        previousAtomIdOnPath.set(neighbourId, currentAtomId);
        atomIdsToVisit.push(neighbourId);
      }
    }
  }

  if (!previousAtomIdOnPath.has(endAtomId)) return null;

  const pathOfAtomIds = [];
  for (let atomId = endAtomId; atomId !== null; atomId = previousAtomIdOnPath.get(atomId)) {
    pathOfAtomIds.unshift(atomId);
  }
  return pathOfAtomIds;
}

/** Carbons with at most one carbon neighbour: the places a chain can start or finish. */
export function listEndCarbonIds(skeleton) {
  return skeleton.carbonAtoms
    .map((carbonAtom) => carbonAtom.atomId)
    .filter((atomId) => listNeighbourCarbonIds(skeleton, atomId).length <= 1);
}

/**
 * Every chain that has the greatest possible number of carbons.
 * There is often more than one (e.g. 3-methylpentane has two chains of 5).
 * Each chain is a list of atom ids, listed once (in one direction only).
 */
export function findAllLongestCarbonChains(skeleton) {
  return findBestEndToEndChains(skeleton, (chain) => [chain.length]);
}

/**
 * A function giving how many of the molecule's principal characteristic groups (the group
 * named by the suffix) a carbon has: its carboxyl group (-COOH) if the molecule has any,
 * otherwise its aldehyde group (-CHO), or ketone group, or OH groups, or NH2 groups, in that
 * order (P-41). (By the time a molecule is named this way, any NH2 is an amine's, as the
 * amides have been named from their acids; see nameCarbonSkeleton.js.)
 */
export function principalGroupCounter(skeleton) {
  if (hasCarboxylicAcidGroup(skeleton)) return (carbonAtom) => (isCarboxylicAcidCarbon(skeleton, carbonAtom) ? 1 : 0);
  if (hasAldehydeGroup(skeleton)) return (carbonAtom) => (isAldehydeCarbon(skeleton, carbonAtom) ? 1 : 0);
  if (hasKetoneGroup(skeleton)) return (carbonAtom) => (isKetoneCarbon(skeleton, carbonAtom) ? 1 : 0);
  if (hasHydroxylGroup(skeleton)) return countHydroxylGroupsOnCarbon;
  return countAminoGroupsOnCarbon;
}

/**
 * Every chain that could be the main chain: the most carboxyl groups or, without any, the
 * most aldehyde groups, or ketone groups, or OH groups first (P-44.1.1), then the most
 * carbons (P-44.3). For a molecule with none of them, these are the longest chains.
 *
 * atomIdsLeftOut: carbons no chain may go through, such as those of a ring (see
 * chooseMainChainAndNumbering.js). Without them, the molecule may fall into pieces, and
 * a piece can be a single carbon, which is then a chain of its own.
 */
export function findAllMainChainCandidates(skeleton, atomIdsLeftOut = new Set()) {
  const countPrincipalGroupsOnCarbon = principalGroupCounter(skeleton);
  const principalGroupCountByAtomId = new Map(skeleton.carbonAtoms.map((carbonAtom) => [carbonAtom.atomId, countPrincipalGroupsOnCarbon(carbonAtom)]));
  const countPrincipalGroupsAlong = (chain) => chain.reduce((total, atomId) => total + principalGroupCountByAtomId.get(atomId), 0);
  const skeletonForChains =
    atomIdsLeftOut.size === 0
      ? skeleton
      : {
          carbonAtoms: skeleton.carbonAtoms.filter(({ atomId }) => !atomIdsLeftOut.has(atomId)),
          carbonCarbonBonds: skeleton.carbonCarbonBonds.filter(({ firstAtomId, secondAtomId }) => !atomIdsLeftOut.has(firstAtomId) && !atomIdsLeftOut.has(secondAtomId)),
        };
  return findBestEndToEndChains(skeletonForChains, (chain) => [countPrincipalGroupsAlong(chain), chain.length]);
}

/**
 * The end-to-end chains with the highest score, where a score is a list of numbers compared
 * in turn (higher is better).
 */
function findBestEndToEndChains(skeleton, scoreOfChain) {
  const endCarbonIds = listEndCarbonIds(skeleton);
  let bestChainsFoundSoFar = [];
  let bestScoreSoFar = null;
  function consider(chain) {
    const score = scoreOfChain(chain);
    const comparison = bestScoreSoFar === null ? 1 : compareScores(score, bestScoreSoFar);
    if (comparison > 0) {
      bestChainsFoundSoFar = [chain];
      bestScoreSoFar = score;
    } else if (comparison === 0) {
      bestChainsFoundSoFar.push(chain);
    }
  }

  for (let firstIndex = 0; firstIndex < endCarbonIds.length; firstIndex++) {
    // A carbon with no carbon neighbours at all, such as methane's, is a chain on its own.
    if (listNeighbourCarbonIds(skeleton, endCarbonIds[firstIndex]).length === 0) consider([endCarbonIds[firstIndex]]);
    for (let secondIndex = firstIndex + 1; secondIndex < endCarbonIds.length; secondIndex++) {
      const chain = findPathBetweenTwoCarbons(skeleton, endCarbonIds[firstIndex], endCarbonIds[secondIndex]);
      if (chain !== null) consider(chain);
    }
  }
  return bestChainsFoundSoFar;
}

/** Positive when the first score is higher at the first number that differs. */
function compareScores(firstScore, secondScore) {
  for (let index = 0; index < firstScore.length; index++) {
    if (firstScore[index] !== secondScore[index]) return firstScore[index] - secondScore[index];
  }
  return 0;
}
