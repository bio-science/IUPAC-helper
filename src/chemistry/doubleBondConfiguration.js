/**
 * Working out whether a C=C double bond is E or Z, from the drawing.
 *
 * A double bond can't turn, so when each of its carbons has two different groups, the
 * molecule has two forms, "stereoisomers": one with the higher-ranked group on each carbon
 * on the same side of the double bond, Z (from the German zusammen, together), and one with
 * them on opposite sides, E (entgegen, opposite). The groups are ranked by the CIP rules
 * (see rankByCipRules.js).                                                      P-92.4.1
 *
 * The app keeps no separate note of which form a molecule is: the drawing shows it. Each
 * group is on one side of the line through the two carbons of the double bond or the other,
 * and that decides it. A group drawn on that line, or very close to it, shows neither, as in
 * a straight chain such as CH3-CH=CH-CH3 drawn in one line: that double bond is
 * "unspecified", and the name has no E or Z for it.
 *
 * When a carbon's two groups are the same atoms all the way out, and differ only in whether a
 * double bond in them is E or Z, the one with the Z double bond ranks higher: Sequence Rule 3,
 * Z before E, and E before a double bond that can't be either (P-92.4.2). So in
 * (2Z,4E,5E)-4-ethylidenehepta-2,5-diene, the -CH=CH-CH3 that is 2Z outranks the one that is
 * 5E, and decides whether the ethylidene's double bond is E or Z. The double bonds are first
 * worked out without the rule, and then again with it.
 * A double bond that is not E or Z in the molecule as a whole may still be one of them as it
 * is met going out along one group: an "auxiliary" descriptor (P-92.4.2.2). In
 * 1,4-diethylidenecyclohexane, the two halves of the ring are the same, so going out from
 * carbon 1 either way round, carbon 4's two ring neighbours can only be told apart by which one
 * leads back the way the exploration came, and that one counts higher. Its ethylidene is then Z
 * going one way round, and E going the other, and Sequence Rule 3 ranks the Z way higher.
 * So the cis isomer, with both CH3 groups towards the same half of the ring, is
 * (1Z,4Z)-1,4-diethylidenecyclohexane (P-93.5.1.4.2, example 2).
 *
 * There is no E or Z when:
 *   - a carbon of the double bond has two groups that are the same, as in but-1-ene, whose
 *     carbon 1 has two hydrogens, or 2-methylbut-2-ene, whose carbon 2 has two methyls
 *   - the double bond is in a ring of 3 to 7 carbons, as in cyclohexene: the ring is too
 *     small to go round the other way, so the bond is always Z, and Z is left out    P-93.5.1.4.1
 *   - the double bond is in a ring of 8 carbons with another double bond in it, as in
 *     cycloocta-1,3,5,7-tetraene. (With only one, as in cyclooctene, it can be E or Z, and
 *     from 9 carbons on, always.)                                                    P-91.2.2
 *   - the carbon has a double bond on its other side too, as in propa-1,2-diene, CH2=C=CH2
 */

import { findBondBetween, findCarbonAtomById, isDoubleBond, isLinkBond, listNeighbourCarbonIds } from './carbonSkeleton.js';
import { buildGraphOfAtoms, carbonKey, compareBranchesByCipRules, explainBranchComparison, listBranchesOfAtom } from './rankByCipRules.js';
import { writeGroupFormula } from './writeGroupFormula.js';
import { placeAtomsAroundCarbons, placeLinkAtomOfBond } from '../geometry/placeAtomsAroundCarbons.js';
import { angleFromPointToPoint, sizeOfAngleBetweenDirections } from '../geometry/vectorMaths.js';

/** A group drawn closer than this to the line of the double bond, in degrees, shows neither side. */
const SMALLEST_ANGLE_THAT_SHOWS_A_SIDE = 10;

/** The largest ring whose double bonds are always Z (P-93.5.1.4.1). */
const LARGEST_RING_WITH_FIXED_DOUBLE_BONDS = 7;

/** The ring size where only a single double bond can be E or Z (P-91.2.2). */
const RING_SIZE_WHERE_ONLY_ONE_DOUBLE_BOND_HAS_E_OR_Z = 8;

/** A key for a bond that doesn't depend on which way round it was stored: "3-4". */
export function bondKey(firstAtomId, secondAtomId) {
  return firstAtomId < secondAtomId ? `${firstAtomId}-${secondAtomId}` : `${secondAtomId}-${firstAtomId}`;
}

/**
 * The carbons of the smallest ring the bond is in, in order round it starting with the bond's
 * first carbon and ending with its second, or null if it isn't in a ring.
 */
function findSmallestRingThroughBond(skeleton, firstAtomId, secondAtomId) {
  const cameFrom = new Map([[firstAtomId, null]]);
  const queue = [firstAtomId];
  while (queue.length > 0) {
    const atomId = queue.shift();
    for (const neighbourId of listNeighbourCarbonIds(skeleton, atomId)) {
      if (atomId === firstAtomId && neighbourId === secondAtomId) continue;
      if (cameFrom.has(neighbourId)) continue;
      cameFrom.set(neighbourId, atomId);
      if (neighbourId === secondAtomId) {
        const path = [secondAtomId];
        while (path[path.length - 1] !== firstAtomId) path.push(cameFrom.get(path[path.length - 1]));
        return path.reverse();
      }
      queue.push(neighbourId);
    }
  }
  return null;
}

/** True when a double bond in a ring can't be E or Z (see the top of this file). */
function isRingDoubleBondFixed(skeleton, firstAtomId, secondAtomId) {
  const ring = findSmallestRingThroughBond(skeleton, firstAtomId, secondAtomId);
  if (ring === null) return false;
  if (ring.length <= LARGEST_RING_WITH_FIXED_DOUBLE_BONDS) return true;
  if (ring.length !== RING_SIZE_WHERE_ONLY_ONE_DOUBLE_BOND_HAS_E_OR_Z) return false;
  const ringBonds = ring.map((atomId, index) => findBondBetween(skeleton, atomId, ring[(index + 1) % ring.length]));
  return ringBonds.filter(isDoubleBond).length > 1;
}

/**
 * Everything worked out once for a skeleton, for describing any of its double bonds: the graph
 * of its atoms for the CIP rules, and where each hydrogen and group is drawn.
 */
export function prepareToDescribeDoubleBonds(skeleton, earlierConfigurations = null) {
  const outerAtomByKey = new Map();
  for (const outerAtom of placeAtomsAroundCarbons(skeleton)) {
    const key = outerAtom.symbol === 'H' ? `H${outerAtom.carbonAtomId}` : `G${outerAtom.carbonAtomId}/${outerAtom.groupIndex}`;
    outerAtomByKey.set(key, outerAtom);
  }
  return { skeleton, atoms: buildGraphOfAtoms(skeleton), outerAtomByKey, earlierConfigurations };
}

/** The carbon a group on a carbon starts with, or reaches through an O or NH, or null for a hydrogen or a group such as OH. */
function firstCarbonOfBranch(atomId, neighbourKey) {
  if (neighbourKey === null || neighbourKey.startsWith('G')) return null;
  if (neighbourKey.startsWith('C')) return Number(neighbourKey.slice(1));
  const [firstAtomId, secondAtomId] = neighbourKey.slice(1).split('-').map(Number);
  return firstAtomId === atomId ? secondAtomId : firstAtomId;
}

/** How Sequence Rule 3 ranks a double bond: Z before E, E before one that can't be either. */
const RANK_BY_SEQUENCE_RULE_3 = { Z: 2, E: 1, none: 0 };

/**
 * The double bonds of one group on a carbon, sphere by sphere outwards: for each distance from
 * the carbon, how each double bond whose nearer carbon is that far away is drawn
 * ('Z', 'E', 'none' or 'unspecified'), Z first.
 */
function listDoubleBondsOfBranchBySphere(prepared, atomId, firstCarbonId) {
  const { skeleton, earlierConfigurations } = prepared;
  const distanceById = new Map([[firstCarbonId, 1]]);
  const cameFromById = new Map([[firstCarbonId, atomId]]);
  const queue = [firstCarbonId];
  while (queue.length > 0) {
    const currentId = queue.shift();
    for (const neighbourId of listNeighbourCarbonIds(skeleton, currentId)) {
      if (neighbourId === atomId || distanceById.has(neighbourId)) continue;
      distanceById.set(neighbourId, distanceById.get(currentId) + 1);
      cameFromById.set(neighbourId, currentId);
      queue.push(neighbourId);
    }
  }
  const spheres = [];
  for (const bond of skeleton.carbonCarbonBonds) {
    const { firstAtomId, secondAtomId } = bond;
    if (!isDoubleBond(bond) || isLinkBond(bond) || !distanceById.has(firstAtomId) || !distanceById.has(secondAtomId)) continue;
    const [nearId, farId] = distanceById.get(firstAtomId) <= distanceById.get(secondAtomId) ? [firstAtomId, secondAtomId] : [secondAtomId, firstAtomId];
    // As met along this group, or failing that, as worked out for the molecule as a whole.
    const metAlongBranch = describeAsMetAlongBranch(prepared, nearId, farId, cameFromById.get(nearId));
    const configuration = metAlongBranch === 'none' ? (earlierConfigurations.get(bondKey(firstAtomId, secondAtomId)) ?? 'none') : metAlongBranch;
    (spheres[distanceById.get(nearId)] ??= []).push(configuration);
  }
  const order = { Z: 0, E: 1, unspecified: 2, none: 3 };
  return spheres.map((sphere = []) => sphere.sort((first, second) => order[first] - order[second]));
}

/**
 * The auxiliary descriptor of a double bond that is not E or Z in the molecule as a whole, as
 * it is met going out along a group (see the top of this file): 'E', 'Z', 'unspecified' or 'none'.
 * nearId: its carbon met first, reached from cameFromId.
 */
function describeAsMetAlongBranch(prepared, nearId, farId, cameFromId) {
  const withoutRule3 = { ...prepared, earlierConfigurations: null };
  if (isRingDoubleBondFixed(prepared.skeleton, nearId, farId)) return 'none';
  const nearSide = sideOfHigherRankedGroup(withoutRule3, nearId, farId, cameFromId);
  const farSide = sideOfHigherRankedGroup(withoutRule3, farId, nearId);
  if (nearSide === null || farSide === null) return 'none';
  if (nearSide === 0 || farSide === 0) return 'unspecified';
  return nearSide === farSide ? 'E' : 'Z';
}

/**
 * Sequence Rule 3 for two groups on a carbon that Sequence Rule 1 can't tell apart: positive
 * when the first ranks higher, negative when the second does, 0 when it can't say (as when a
 * double bond it needs is unspecified).
 */
function compareBySequenceRule3(prepared, atomId, firstBranch, secondBranch) {
  const [firstCarbonId, secondCarbonId] = [firstBranch, secondBranch].map(({ neighbourKey }) => firstCarbonOfBranch(atomId, neighbourKey));
  if (firstCarbonId === null || secondCarbonId === null) return 0;
  const firstSpheres = listDoubleBondsOfBranchBySphere(prepared, atomId, firstCarbonId);
  const secondSpheres = listDoubleBondsOfBranchBySphere(prepared, atomId, secondCarbonId);
  for (let distance = 0; distance < Math.max(firstSpheres.length, secondSpheres.length); distance++) {
    const [first = [], second = []] = [firstSpheres[distance], secondSpheres[distance]];
    for (let index = 0; index < Math.max(first.length, second.length); index++) {
      if (first[index] === 'unspecified' || second[index] === 'unspecified') return 0;
      const difference = RANK_BY_SEQUENCE_RULE_3[first[index] ?? 'none'] - RANK_BY_SEQUENCE_RULE_3[second[index] ?? 'none'];
      if (difference !== 0) return difference;
    }
  }
  return 0;
}

/** Where a group on a carbon is drawn: the carbon, group, hydrogen, or O or NH in a bond, that it starts with. */
function positionOfBranch(prepared, atomId, neighbourKey) {
  const { skeleton, outerAtomByKey } = prepared;
  if (neighbourKey === null || neighbourKey.startsWith('G')) {
    const outerAtom = outerAtomByKey.get(neighbourKey ?? `H${atomId}`);
    return outerAtom && { x: outerAtom.positionX, y: outerAtom.positionY };
  }
  if (neighbourKey.startsWith('L')) {
    const [firstAtomId, secondAtomId] = neighbourKey.slice(1).split('-').map(Number);
    const { atomX, atomY } = placeLinkAtomOfBond(skeleton, findBondBetween(skeleton, firstAtomId, secondAtomId));
    return { x: atomX, y: atomY };
  }
  const neighbour = findCarbonAtomById(skeleton, firstCarbonOfBranch(atomId, neighbourKey));
  return { x: neighbour.positionX, y: neighbour.positionY };
}

/**
 * For one carbon of a double bond: which side of the bond its higher-ranked group is drawn on,
 * +1 or -1, or 0 if the drawing doesn't show it. null if its two groups are the same, or it
 * has no two groups (the other side of the carbon is a double bond too).
 * neighbourIdWhenSame: for an auxiliary descriptor, the carbon that counts higher if the two
 * groups are the same.
 */
function sideOfHigherRankedGroup(prepared, atomId, otherAtomId, neighbourIdWhenSame = null) {
  const ranked = rankGroupsOnCarbon(prepared, atomId, otherAtomId, neighbourIdWhenSame);
  if (ranked === null) return null;
  return sideOfRankedGroups(prepared, atomId, otherAtomId, ranked);
}

/**
 * The two groups on one carbon of a double bond, higher-ranked first, with which rule decided it:
 *   { higher, lower, decidedBy: 'sequenceRule1' | 'sequenceRule3' | 'wayBack' }
 * (higher and lower from listBranchesOfAtom). null if its two groups are the same, or it has no
 * two groups. neighbourIdWhenSame: as for sideOfHigherRankedGroup.
 */
function rankGroupsOnCarbon(prepared, atomId, otherAtomId, neighbourIdWhenSame = null) {
  const branches = listBranchesOfAtom(prepared.atoms, carbonKey(atomId)).filter(({ neighbourKey }) => neighbourKey !== carbonKey(otherAtomId));
  if (branches.length !== 2) return null;
  let decidedBy = 'sequenceRule1';
  let ranking = compareBranchesByCipRules(branches[0], branches[1]);
  if (ranking === 0 && prepared.earlierConfigurations) {
    decidedBy = 'sequenceRule3';
    ranking = compareBySequenceRule3(prepared, atomId, branches[0], branches[1]);
  }
  if (ranking === 0 && neighbourIdWhenSame !== null) {
    decidedBy = 'wayBack';
    ranking = branches[0].neighbourKey === carbonKey(neighbourIdWhenSame) ? 1 : branches[1].neighbourKey === carbonKey(neighbourIdWhenSame) ? -1 : 0;
  }
  if (ranking === 0) return null;
  return ranking > 0 ? { higher: branches[0], lower: branches[1], decidedBy } : { higher: branches[1], lower: branches[0], decidedBy };
}

/** Which side of the double bond the higher-ranked of two ranked groups is drawn on: +1 or -1, or 0 if the drawing doesn't show it. */
function sideOfRankedGroups(prepared, atomId, otherAtomId, { higher, lower }) {
  const { skeleton } = prepared;
  const carbon = findCarbonAtomById(skeleton, atomId);
  const other = findCarbonAtomById(skeleton, otherAtomId);
  const centre = { x: carbon.positionX, y: carbon.positionY };
  const alongBond = angleFromPointToPoint(centre, { x: other.positionX, y: other.positionY });
  const sideOf = (branch) => {
    const position = positionOfBranch(prepared, atomId, branch.neighbourKey);
    if (!position) return 0;
    const direction = angleFromPointToPoint(centre, position);
    const angleFromLine = sizeOfAngleBetweenDirections(direction, alongBond);
    if (angleFromLine < SMALLEST_ANGLE_THAT_SHOWS_A_SIDE || angleFromLine > 180 - SMALLEST_ANGLE_THAT_SHOWS_A_SIDE) return 0;
    const cross = (other.positionX - centre.x) * (position.y - centre.y) - (other.positionY - centre.y) * (position.x - centre.x);
    return Math.sign(cross);
  };
  const higherSide = sideOf(higher);
  // Both groups must be drawn clearly on opposite sides, or the drawing doesn't say which is where.
  return higherSide !== 0 && sideOf(lower) === -higherSide ? higherSide : 0;
}

/**
 * Whether a double bond is E or Z, as drawn:
 *   'E' or 'Z'
 *   'unspecified' when it could be either, but the drawing doesn't show which (a group on the
 *                 line of the double bond)
 *   null          when it can't be either (see the top of this file), or the bond isn't a C=C
 * prepared: from prepareToDescribeDoubleBonds, for the same skeleton, with the configurations
 * already worked out without Sequence Rule 3, for the rule to use (see the top of this file).
 */
export function describeDoubleBondConfiguration(prepared, firstAtomId, secondAtomId) {
  const { skeleton } = prepared;
  const bond = findBondBetween(skeleton, firstAtomId, secondAtomId);
  if (!bond || !isDoubleBond(bond) || isLinkBond(bond)) return null;
  const firstSide = sideOfHigherRankedGroup(prepared, firstAtomId, secondAtomId);
  if (firstSide === null) return null;
  const secondSide = sideOfHigherRankedGroup(prepared, secondAtomId, firstAtomId);
  if (secondSide === null) return null;
  if (isRingDoubleBondFixed(skeleton, firstAtomId, secondAtomId)) return null;
  if (firstSide === 0 || secondSide === 0) return 'unspecified';
  // Seen from each carbon towards the other, the sides are mirrored: the same sign means opposite sides.
  return firstSide === secondSide ? 'E' : 'Z';
}

/**
 * Why a double bond that is E or Z is that one, for showing a student:
 *   {
 *     configuration: 'E' | 'Z',
 *     carbons: [                            // the bond's first carbon, then its second
 *       {
 *         atomId,
 *         higher: { formula: 'CH2CH3', firstElement: 'C', firstCarbonId: 4 },  // the higher-ranked group
 *         lower: { formula: 'CH3', firstElement: 'C', firstCarbonId: 5 },
 *         decidedBy: 'sequenceRule1' | 'sequenceRule3',
 *         sphere: 1,                        // for Sequence Rule 1: 0 when the groups' first atoms
 *                                           // differ, or how many bonds beyond them it was decided
 *         higherAtoms: [{ element: 'C', isDuplicate: false }, ...],  // the atoms compared there,
 *         lowerAtoms: [...],                                         // highest first
 *       },
 *       { ... },
 *     ],
 *   }
 * formula: the group as a condensed formula (writeGroupFormula.js), or null when it leads round a
 * ring. firstCarbonId: the carbon the group starts with (or reaches through an O or NH), or null.
 * configurations: from describeEveryDoubleBond for the same skeleton (for Sequence Rule 3).
 * null when the bond is not E or Z as drawn.
 */
export function explainDoubleBondConfiguration(skeleton, firstAtomId, secondAtomId, configurations = describeEveryDoubleBond(skeleton)) {
  const configuration = configurations.get(bondKey(firstAtomId, secondAtomId));
  if (configuration !== 'E' && configuration !== 'Z') return null;
  const prepared = { ...prepareToDescribeDoubleBonds(skeleton), earlierConfigurations: configurations };
  const describeGroup = (atomId, { neighbourKey, node }) => ({
    formula: writeGroupFormula(prepared.atoms, carbonKey(atomId), neighbourKey),
    firstElement: node.element,
    firstCarbonId: firstCarbonOfBranch(atomId, neighbourKey),
  });
  const carbons = [];
  for (const [atomId, otherAtomId] of [[firstAtomId, secondAtomId], [secondAtomId, firstAtomId]]) {
    const ranked = rankGroupsOnCarbon(prepared, atomId, otherAtomId);
    if (ranked === null) return null;
    const why = ranked.decidedBy === 'sequenceRule1' ? explainBranchComparison(ranked.higher, ranked.lower) : null;
    carbons.push({
      atomId,
      higher: describeGroup(atomId, ranked.higher),
      lower: describeGroup(atomId, ranked.lower),
      decidedBy: ranked.decidedBy,
      sphere: why?.sphere ?? null,
      higherAtoms: why?.firstAtoms ?? [],
      lowerAtoms: why?.secondAtoms ?? [],
    });
  }
  return { configuration, carbons };
}

/**
 * Every double bond that can be E or Z, with how it is drawn:
 *   Map from bondKey to 'E', 'Z' or 'unspecified'
 */
export function describeEveryDoubleBond(skeleton) {
  const configurations = new Map();
  const doubleBonds = skeleton.carbonCarbonBonds.filter((bond) => isDoubleBond(bond) && !isLinkBond(bond));
  if (doubleBonds.length === 0) return configurations;
  const describeEach = (prepared) => {
    const described = new Map();
    for (const { firstAtomId, secondAtomId } of doubleBonds) {
      const configuration = describeDoubleBondConfiguration(prepared, firstAtomId, secondAtomId);
      if (configuration !== null) described.set(bondKey(firstAtomId, secondAtomId), configuration);
    }
    return described;
  };
  const prepared = prepareToDescribeDoubleBonds(skeleton);
  let described = describeEach(prepared);
  // Sequence Rule 3 may then decide more, which may in turn decide others further in.
  for (let round = 0; round < doubleBonds.length; round++) {
    const withRule3 = describeEach({ ...prepared, earlierConfigurations: described });
    if (withRule3.size === described.size && [...withRule3].every(([key, value]) => described.get(key) === value)) break;
    described = withRule3;
  }
  return described;
}

/**
 * The E and Z double bonds along a line of carbons, numbered from its first carbon:
 *   [{ locant: 2, descriptor: 'E' }, ...]
 * Each double bond has the lower of its two locants. With closesRing, the line is a ring, and
 * a double bond from the last carbon back to the first has the last carbon's locant.
 * configurations: from describeEveryDoubleBond.
 */
export function listStereoDescriptorsAlong(orderedAtomIds, configurations, { closesRing = false } = {}) {
  const descriptors = [];
  const bondCount = closesRing ? orderedAtomIds.length : orderedAtomIds.length - 1;
  for (let index = 0; index < bondCount; index++) {
    const descriptor = configurations.get(bondKey(orderedAtomIds[index], orderedAtomIds[(index + 1) % orderedAtomIds.length]));
    if (descriptor === 'E' || descriptor === 'Z') descriptors.push({ locant: index + 1, descriptor });
  }
  return descriptors;
}

/**
 * The stereodescriptors at the front of a name or a substituent's name, in brackets, in
 * increasing order of their locants and followed by a hyphen (P-91.3, P-93.4.2.1.2):
 *   [{ locant: 2, descriptor: 'Z' }, { locant: 4, descriptor: 'E' }] -> "(2Z,4E)-"
 * Without locants (for a name that has none, such as cyclooctene): "(E)-". "" for none.
 */
export function writeStereoDescriptors(descriptors, withLocants = true) {
  if (descriptors.length === 0) return '';
  const inOrder = [...descriptors].sort((first, second) => first.locant - second.locant);
  return `(${inOrder.map(({ locant, descriptor }) => (withLocants ? `${locant}${descriptor}` : descriptor)).join(',')})-`;
}

/**
 * The name of an unbranched group with its own E and Z double bonds in front of it:
 * "prop-1-en-1-yl" -> "(1E)-prop-1-en-1-yl". orderedAtomIds: its carbons, starting with the one
 * joined to the rest of the molecule (its carbon 1).
 */
export function addStereoDescriptorsToGroupName(groupName, orderedAtomIds, configurations) {
  return writeStereoDescriptors(listStereoDescriptorsAlong(orderedAtomIds, configurations)) + groupName;
}
