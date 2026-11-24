/**
 * Working out where to draw the hydrogens that are added automatically, and the groups
 * (halogens, OH and the O of C=O).
 *
 * Each carbon has 4 bonds. Bonds to other carbons are already drawn, so the hydrogens and
 * groups (the "outer atoms") go in the remaining directions. We choose the directions one
 * at a time, each time taking the one furthest from every bond already there. For a carbon
 * in the middle of a horizontal chain this gives one direction straight up and one straight
 * down, which matches how displayed formulae are drawn in A-level textbooks.
 *
 * A group takes the direction it was given when it was drawn (its "place", counting
 * through the directions in the order they were chosen), so it appears where the student
 * clicked. A group without a place, as in a typed molecule, takes the first direction
 * that is free: straight up from the middle of a chain, or straight on from the end of one
 * (Cl-CH2-CH2-Cl). The hydrogens fill the directions that are left.
 *
 * A hydroxyl group is drawn as its oxygen in the group's direction, with the oxygen's
 * hydrogen further out along the same line: C-O-H.
 *
 * The O of C=O makes two bonds but is drawn in one direction (with two lines), so it takes
 * one place, like the other groups. An aldehyde carbon such as the C of CH3-CHO then has three
 * directions in all, and its H and O fan out at 120 degrees, as textbooks draw them.
 *
 * A ring carbon with two hydrogens (or groups), such as each CH2 of cyclohexane, has them
 * both outside the ring, one either side of the line straight out from the ring's middle,
 * as the inside of the ring has no room for them.
 *
 * All of that is only where atoms go until the student moves them by hand (see
 * rearrangeDrawing.js). Then the positions they were moved to are kept, as drawing details
 * that never change the molecule:
 *   a carbon's outerAtomLayout: [{ direction, distanceScale }], one for each of its places, in
 *       order: the direction from the carbon, and the bond's length as a multiple of the usual
 *       one. A carbon with this keeps its hydrogens and groups where they are, whatever its
 *       bonds to other carbons do. It is only used while the carbon has that many outer atoms,
 *       so adding or taking away one puts them all back in their usual places.
 *   a group's hydrogenLayout: [{ turn, distanceScale }], for the H of OH or the two of NH2:
 *       the direction from the O or N, as a turn from the line on from the carbon (so the H
 *       goes round with its O), and the length as a multiple of the usual one.
 *   a bond's linkAtomLayout: { along, across }, for its O or NH: how far along the bond from
 *       its first carbon, and how far to one side of it, as fractions of the bond's length
 *       (so it moves with the carbons), and linkHydrogenLayout: { turn, distanceScale }, for
 *       the H of the NH, as a turn from straight out to that side.
 * A new layout of the whole molecule forgets them all (forgetHandPlacedPositions).
 */

import {
  AMIDE_LINK_NITROGEN,
  AMINO_GROUP,
  CARBONYL_OXYGEN,
  HYDROXYL_GROUP,
  linkAtomOf,
  countHydrogensOnCarbon,
  findCarbonAtomById,
  listAtomIdsInRings,
  listGroupsOnCarbon,
  listNeighbourCarbonIds,
} from '../chemistry/carbonSkeleton.js';
import {
  CARBON_TO_HALOGEN_BOND_LENGTH,
  CARBON_TO_HYDROGEN_BOND_LENGTH,
  CARBON_TO_OXYGEN_BOND_LENGTH,
  HALOGEN_CIRCLE_RADIUS,
  HYDROGEN_CIRCLE_RADIUS,
  NITROGEN_CIRCLE_RADIUS,
  NITROGEN_TO_HYDROGEN_BOND_LENGTH,
  OXYGEN_CIRCLE_RADIUS,
  OXYGEN_TO_HYDROGEN_BOND_LENGTH,
} from './drawingDimensions.js';
import { angleFromPointToPoint, normaliseAngle, pointAtAngleAndDistance, sizeOfAngleBetweenDirections } from './vectorMaths.js';

/**
 * The directions we are allowed to choose from: every 15 degrees, measured from the
 * carbon's first bond (so when part of a molecule is turned, its hydrogens turn with it).
 * They are listed clockwise starting from straight up (-90). When two directions are
 * equally good, the one earlier in the list wins, so a lone carbon gets hydrogens up,
 * down, right and left, in that order.
 */
function listCandidateDirections(firstBondDirection) {
  const clockwiseFromStraightUp = (direction) => (direction + 90 + 360) % 360;
  return Array.from({ length: 24 }, (_, stepNumber) => normaliseAngle(firstBondDirection + stepNumber * 15)).sort(
    (first, second) => clockwiseFromStraightUp(first) - clockwiseFromStraightUp(second),
  );
}

/** How far either side of straight out from a ring the two hydrogens of a ring CH2 go, in degrees. */
const SPREAD_OF_TWO_OUTER_ATOMS_ON_A_RING_CARBON = 55;

/**
 * Chooses directions (in degrees) for the hydrogens and groups on one carbon.
 * directionsAlreadyTaken: the directions of its bonds to other carbons.
 * isRingCarbon: true for a carbon in a ring.
 */
export function chooseDirectionsForOuterAtoms(directionsAlreadyTaken, numberOfOuterAtoms, isRingCarbon = false) {
  const candidateDirections = listCandidateDirections(directionsAlreadyTaken[0] ?? -90);

  if (isRingCarbon && directionsAlreadyTaken.length === 2 && numberOfOuterAtoms === 2) {
    const [firstBond, secondBond] = directionsAlreadyTaken;
    const halfwayBetweenBonds = normaliseAngle(firstBond + normaliseAngle(secondBond - firstBond) / 2);
    const straightOut = normaliseAngle(halfwayBetweenBonds + 180);
    const clockwiseFromStraightUp = (direction) => (direction + 90 + 360) % 360;
    return [-SPREAD_OF_TWO_OUTER_ATOMS_ON_A_RING_CARBON, SPREAD_OF_TWO_OUTER_ATOMS_ON_A_RING_CARBON]
      .map((turn) => normaliseAngle(straightOut + turn))
      .sort((first, second) => clockwiseFromStraightUp(first) - clockwiseFromStraightUp(second));
  }

  // A carbon at the end of a double bond (as in CH2=) has 3 directions in all, so its two
  // outer atoms fan out at 120 degrees either side of the double bond, as textbooks draw them.
  // Choosing one at a time would put the first straight opposite and the second at a right angle.
  if (directionsAlreadyTaken.length === 1 && numberOfOuterAtoms === 2) {
    const fannedOut = [120, -120].map((turn) => normaliseAngle(directionsAlreadyTaken[0] + turn));
    return candidateDirections.filter((candidate) => fannedOut.some((direction) => sizeOfAngleBetweenDirections(candidate, direction) < 1));
  }

  // Methanal, H2C=O, on its own also has 3 directions, so they are spread evenly: one straight
  // up (where its O goes) and two down at 120 degrees.
  if (directionsAlreadyTaken.length === 0 && numberOfOuterAtoms === 3) {
    const spreadEvenly = [-90, 30, 150];
    return candidateDirections.filter((candidate) => spreadEvenly.some((direction) => sizeOfAngleBetweenDirections(candidate, direction) < 1));
  }

  const takenDirections = [...directionsAlreadyTaken];
  const chosenDirections = [];

  for (let outerAtomNumber = 0; outerAtomNumber < numberOfOuterAtoms; outerAtomNumber++) {
    let bestDirection = candidateDirections[0];
    let bestGapToNearestTakenDirection = -1;

    for (const candidateDirection of candidateDirections) {
      const gapToNearestTakenDirection =
        takenDirections.length === 0
          ? 360
          : Math.min(...takenDirections.map((takenDirection) => sizeOfAngleBetweenDirections(candidateDirection, takenDirection)));
      if (gapToNearestTakenDirection > bestGapToNearestTakenDirection) {
        bestGapToNearestTakenDirection = gapToNearestTakenDirection;
        bestDirection = candidateDirection;
      }
    }

    chosenDirections.push(bestDirection);
    takenDirections.push(bestDirection);
  }
  return chosenDirections;
}

/** The directions of a carbon's bonds to other carbons, in degrees. */
function listDirectionsOfCarbonBonds(skeleton, carbonAtom) {
  const carbonPosition = { x: carbonAtom.positionX, y: carbonAtom.positionY };
  return listNeighbourCarbonIds(skeleton, carbonAtom.atomId).map((neighbourId) => {
    const neighbour = findCarbonAtomById(skeleton, neighbourId);
    return angleFromPointToPoint(carbonPosition, { x: neighbour.positionX, y: neighbour.positionY });
  });
}

/** How many hydrogens and groups a carbon has: the number of its places. */
function countOuterAtomsOnCarbon(skeleton, carbonAtom) {
  return Math.max(0, countHydrogensOnCarbon(skeleton, carbonAtom.atomId)) + listGroupsOnCarbon(carbonAtom).length;
}

/**
 * Where each hydrogen and group on a carbon goes, in the order of its places:
 * [{ direction, distanceScale }]. The carbon's own outerAtomLayout if it has one (see the top
 * of this file), otherwise the usual directions, at the usual bond lengths.
 */
export function listOuterAtomLayout(skeleton, carbonAtom, ringAtomIds = listAtomIdsInRings(skeleton)) {
  const outerAtomCount = countOuterAtomsOnCarbon(skeleton, carbonAtom);
  const stored = carbonAtom.outerAtomLayout;
  if (stored !== undefined && stored.length === outerAtomCount) return stored;
  return chooseDirectionsForOuterAtoms(listDirectionsOfCarbonBonds(skeleton, carbonAtom), outerAtomCount, ringAtomIds.has(carbonAtom.atomId)).map(
    (direction) => ({ direction, distanceScale: 1 }),
  );
}

/** The directions of every hydrogen and group on a carbon, in the order of its places. */
export function listOuterAtomDirections(skeleton, carbonAtom, ringAtomIds = listAtomIdsInRings(skeleton)) {
  return listOuterAtomLayout(skeleton, carbonAtom, ringAtomIds).map(({ direction }) => direction);
}

/** How the hydrogens of a group are usually drawn: the H of OH straight on from the O, the two of NH2 either side. */
const USUAL_TURNS_OF_HYDROGENS_ON_GROUP = { [HYDROXYL_GROUP]: [0], [AMINO_GROUP]: [-50, 50] };

/** Where the hydrogens of a group (OH or NH2) go: [{ turn, distanceScale }], its own hydrogenLayout if it has one. */
export function listHydrogenLayoutOfGroup(group) {
  const usual = (USUAL_TURNS_OF_HYDROGENS_ON_GROUP[group.symbol] ?? []).map((turn) => ({ turn, distanceScale: 1 }));
  return group.hydrogenLayout?.length === usual.length ? group.hydrogenLayout : usual;
}

/** How long the bond from a group's O or N to its hydrogen usually is. */
export function bondLengthToHydrogenOfGroup(symbol) {
  return symbol === AMINO_GROUP ? NITROGEN_TO_HYDROGEN_BOND_LENGTH : OXYGEN_TO_HYDROGEN_BOND_LENGTH;
}

/**
 * The skeleton without any of the positions moved to by hand (see the top of this file), for
 * when the whole molecule is laid out again.
 */
export function forgetHandPlacedPositions(skeleton) {
  const withoutKeys = (object, keys) => {
    if (!keys.some((key) => key in object)) return object;
    const copy = { ...object };
    for (const key of keys) delete copy[key];
    return copy;
  };
  return {
    ...skeleton,
    carbonAtoms: skeleton.carbonAtoms.map((carbonAtom) => {
      const withoutLayout = withoutKeys(carbonAtom, ['outerAtomLayout', 'isOuterAtomLayoutHeld']);
      const groups = listGroupsOnCarbon(withoutLayout);
      if (!groups.some((group) => 'hydrogenLayout' in group)) return withoutLayout;
      return { ...withoutLayout, groups: groups.map((group) => withoutKeys(group, ['hydrogenLayout'])) };
    }),
    carbonCarbonBonds: skeleton.carbonCarbonBonds.map((bond) => withoutKeys(bond, ['linkAtomLayout', 'linkHydrogenLayout'])),
  };
}

/**
 * Which place (index into the carbon's outer atom directions) each of its groups is drawn
 * in: its own place if it has one that is free, otherwise the first free place.
 */
function choosePlacesForGroups(groups, numberOfPlaces) {
  const takenPlaces = new Set();
  const ownPlaces = groups.map(({ place }) => {
    if (place === undefined || place >= numberOfPlaces || takenPlaces.has(place)) return undefined;
    takenPlaces.add(place);
    return place;
  });
  return ownPlaces.map((place) => {
    if (place !== undefined) return place;
    let freePlace = 0;
    while (takenPlaces.has(freePlace)) freePlace++;
    takenPlaces.add(freePlace);
    return freePlace;
  });
}

/** How far from its carbon a hydrogen, halogen, oxygen (of OH or C=O) or nitrogen (of NH2) is drawn. */
export function bondLengthToOuterAtom(symbol) {
  if (symbol === 'H') return CARBON_TO_HYDROGEN_BOND_LENGTH;
  if (symbol === HYDROXYL_GROUP || symbol === CARBONYL_OXYGEN || symbol === AMINO_GROUP) return CARBON_TO_OXYGEN_BOND_LENGTH;
  return CARBON_TO_HALOGEN_BOND_LENGTH;
}

/** The radius of the circle drawn for a hydrogen, a halogen, an oxygen (of OH or C=O) or a nitrogen (of NH2). */
export function circleRadiusOfOuterAtom(symbol) {
  if (symbol === 'H') return HYDROGEN_CIRCLE_RADIUS;
  if (symbol === AMINO_GROUP) return NITROGEN_CIRCLE_RADIUS;
  if (symbol === HYDROXYL_GROUP || symbol === CARBONYL_OXYGEN) return OXYGEN_CIRCLE_RADIUS;
  return HALOGEN_CIRCLE_RADIUS;
}

/** The two hydrogens of an NH2 group: spread either side of the line on from the carbon, so the group reads C-N with an H on each side. */
export function placeHydrogensOfAminoGroup(carbonPosition, nitrogenPosition) {
  const direction = angleFromPointToPoint(carbonPosition, nitrogenPosition);
  return [-50, 50].map((turn) => pointAtAngleAndDistance(nitrogenPosition, direction + turn, NITROGEN_TO_HYDROGEN_BOND_LENGTH));
}

/** Where a bond's O or NH usually goes: halfway along it. */
const USUAL_LINK_ATOM_LAYOUT = { along: 0.5, across: 0 };
const USUAL_LINK_HYDROGEN_LAYOUT = { turn: 0, distanceScale: 1 };

/**
 * Where to draw the O or NH in the middle of a bond (see linkAtom in carbonSkeleton.js):
 * halfway between the carbons unless it has been moved (linkAtomLayout, see the top of this
 * file), and for NH its hydrogen out to one side.
 * Returns { atomX, atomY, hydrogenX, hydrogenY } (the hydrogen only for NH).
 */
export function placeLinkAtomOfBond(skeleton, bond) {
  const first = findCarbonAtomById(skeleton, bond.firstAtomId);
  const second = findCarbonAtomById(skeleton, bond.secondAtomId);
  const firstPoint = { x: first.positionX, y: first.positionY };
  const secondPoint = { x: second.positionX, y: second.positionY };
  const direction = angleFromPointToPoint(firstPoint, secondPoint);
  const bondLength = Math.hypot(secondPoint.x - firstPoint.x, secondPoint.y - firstPoint.y);
  const { along, across } = bond.linkAtomLayout ?? USUAL_LINK_ATOM_LAYOUT;
  const alongPoint = pointAtAngleAndDistance(firstPoint, direction, along * bondLength);
  const atom = pointAtAngleAndDistance(alongPoint, direction - 90, across * bondLength);
  const placed = { atomX: atom.x, atomY: atom.y };
  if (linkAtomOf(bond) !== AMIDE_LINK_NITROGEN) return placed;
  const { turn, distanceScale } = bond.linkHydrogenLayout ?? USUAL_LINK_HYDROGEN_LAYOUT;
  const hydrogen = pointAtAngleAndDistance(atom, direction - 90 + turn, NITROGEN_TO_HYDROGEN_BOND_LENGTH * distanceScale);
  return { ...placed, hydrogenX: hydrogen.x, hydrogenY: hydrogen.y };
}

/** The direction straight out to the side of a bond that its NH's hydrogen usually points, in degrees. */
export function directionToSideOfBond(skeleton, bond) {
  const first = findCarbonAtomById(skeleton, bond.firstAtomId);
  const second = findCarbonAtomById(skeleton, bond.secondAtomId);
  return normaliseAngle(angleFromPointToPoint({ x: first.positionX, y: first.positionY }, { x: second.positionX, y: second.positionY }) - 90);
}

/**
 * The hydrogen of a hydroxyl group: straight on from the oxygen, carrying on the line from
 * the carbon, so the group reads C-O-H.
 */
export function placeHydrogenOfHydroxylGroup(carbonPosition, oxygenPosition) {
  return pointAtAngleAndDistance(oxygenPosition, angleFromPointToPoint(carbonPosition, oxygenPosition), OXYGEN_TO_HYDROGEN_BOND_LENGTH);
}

/** Where the hydrogens of a group (OH or NH2) go, from its layout (listHydrogenLayoutOfGroup). */
function placeHydrogensOfGroup(group, carbonPosition, groupPosition) {
  const lineOn = angleFromPointToPoint(carbonPosition, groupPosition);
  return listHydrogenLayoutOfGroup(group).map(({ turn, distanceScale }) =>
    pointAtAngleAndDistance(groupPosition, lineOn + turn, bondLengthToHydrogenOfGroup(group.symbol) * distanceScale),
  );
}

/**
 * Every hydrogen, halogen and hydroxyl group, ready to draw:
 *   [{ outerAtomId: 'Cl-on-C3-number-1', carbonAtomId: 3, symbol: 'Cl', groupIndex: 0, place: 0, positionX, positionY },
 *    { outerAtomId: 'OH-on-C3-number-2', carbonAtomId: 3, symbol: 'OH', groupIndex: 1, place: 1, positionX, positionY,
 *      hydrogenPositionX, hydrogenPositionY },
 *    { outerAtomId: 'H-on-C3-number-3', carbonAtomId: 3, symbol: 'H', place: 2, positionX, positionY }, ...]
 * groupIndex is the group's position in its carbon's list of groups. For a hydroxyl group,
 * the position is its oxygen's, and the hydrogen position is that of the H joined to the oxygen.
 *
 * A skeleton is never changed once made (see carbonSkeleton.js), so the answer for each one is
 * kept and given again, as working out E and Z asks for it many times. It is frozen, so it
 * can't be changed by mistake either.
 */
export function placeAtomsAroundCarbons(skeleton) {
  let outerAtoms = outerAtomsBySkeleton.get(skeleton);
  if (outerAtoms === undefined) {
    outerAtoms = Object.freeze(placeAtomsAroundCarbonsAfresh(skeleton).map(Object.freeze));
    outerAtomsBySkeleton.set(skeleton, outerAtoms);
  }
  return outerAtoms;
}

const outerAtomsBySkeleton = new WeakMap();

function placeAtomsAroundCarbonsAfresh(skeleton) {
  const outerAtoms = [];
  const ringAtomIds = listAtomIdsInRings(skeleton);

  for (const carbonAtom of skeleton.carbonAtoms) {
    const carbonPosition = { x: carbonAtom.positionX, y: carbonAtom.positionY };
    const groups = listGroupsOnCarbon(carbonAtom);
    const layout = listOuterAtomLayout(skeleton, carbonAtom, ringAtomIds);
    const groupPlaces = choosePlacesForGroups(groups, layout.length);

    groups.forEach((group, groupIndex) => {
      const { symbol } = group;
      const place = groupPlaces[groupIndex];
      const position = pointAtAngleAndDistance(carbonPosition, layout[place].direction, bondLengthToOuterAtom(symbol) * layout[place].distanceScale);
      const outerAtom = {
        outerAtomId: `${symbol}-on-C${carbonAtom.atomId}-number-${groupIndex + 1}`,
        carbonAtomId: carbonAtom.atomId,
        symbol,
        groupIndex,
        place,
        positionX: position.x,
        positionY: position.y,
      };
      const [hydrogenPosition, secondHydrogenPosition] = placeHydrogensOfGroup(group, carbonPosition, position);
      if (hydrogenPosition) {
        outerAtom.hydrogenPositionX = hydrogenPosition.x;
        outerAtom.hydrogenPositionY = hydrogenPosition.y;
      }
      if (secondHydrogenPosition) {
        outerAtom.secondHydrogenPositionX = secondHydrogenPosition.x;
        outerAtom.secondHydrogenPositionY = secondHydrogenPosition.y;
      }
      outerAtoms.push(outerAtom);
    });

    const placesTakenByGroups = new Set(groupPlaces);
    layout.forEach(({ direction, distanceScale }, place) => {
      if (placesTakenByGroups.has(place)) return;
      const position = pointAtAngleAndDistance(carbonPosition, direction, CARBON_TO_HYDROGEN_BOND_LENGTH * distanceScale);
      outerAtoms.push({
        outerAtomId: `H-on-C${carbonAtom.atomId}-number-${place + 1}`,
        carbonAtomId: carbonAtom.atomId,
        symbol: 'H',
        place,
        positionX: position.x,
        positionY: position.y,
      });
    });
  }
  return outerAtoms;
}

/**
 * Every automatically added hydrogen on carbon, ready to draw:
 *   [{ hydrogenId: 'H-on-C3-number-1', carbonAtomId: 3, place: 0, positionX, positionY }, ...]
 */
export function placeHydrogensAroundCarbons(skeleton) {
  return placeAtomsAroundCarbons(skeleton)
    .filter((outerAtom) => outerAtom.symbol === 'H')
    .map(({ outerAtomId, carbonAtomId, place, positionX, positionY }) => ({ hydrogenId: outerAtomId, carbonAtomId, place, positionX, positionY }));
}

/**
 * After a change to the molecule (a carbon added or removed, a bond made double or single,
 * two hydrogens swapped for the O of C=O), a carbon's outer atom directions can change, and
 * a group's place could then point somewhere new. This gives each group the free place
 * nearest to the direction it pointed before, so the groups stay where the student put them.
 * groupDirectionsToUse: directions to use instead for some groups, such as one just added, as
 * a Map from "carbonAtomId/groupIndex" (numbered as in skeletonAfter) to degrees.
 */
export function keepGroupsPointingTheSameWay(skeletonBefore, skeletonAfter, groupDirectionsToUse = new Map()) {
  const groupDirectionBefore = new Map();
  for (const outerAtom of placeAtomsAroundCarbons(skeletonBefore)) {
    if (outerAtom.symbol === 'H') continue;
    const carbonAtom = findCarbonAtomById(skeletonBefore, outerAtom.carbonAtomId);
    const carbonPosition = { x: carbonAtom.positionX, y: carbonAtom.positionY };
    groupDirectionBefore.set(
      `${outerAtom.carbonAtomId}/${outerAtom.groupIndex}`,
      angleFromPointToPoint(carbonPosition, { x: outerAtom.positionX, y: outerAtom.positionY }),
    );
  }
  for (const [groupKey, direction] of groupDirectionsToUse) groupDirectionBefore.set(groupKey, direction);

  let anyPlaceChanged = false;
  const carbonAtoms = skeletonAfter.carbonAtoms.map((carbonAtom) => {
    const groups = listGroupsOnCarbon(carbonAtom);
    if (groups.length === 0) return carbonAtom;
    const directions = listOuterAtomDirections(skeletonAfter, carbonAtom);
    const takenPlaces = new Set();
    const updatedGroups = groups.map((group, groupIndex) => {
      const directionBefore = groupDirectionBefore.get(`${carbonAtom.atomId}/${groupIndex}`);
      if (directionBefore === undefined) return group;
      const freePlaces = directions.map((_, place) => place).filter((place) => !takenPlaces.has(place));
      if (freePlaces.length === 0) return group;
      const angleAway = (place) => sizeOfAngleBetweenDirections(directions[place], directionBefore);
      const nearestPlace = freePlaces.reduce((nearestSoFar, place) => (angleAway(place) < angleAway(nearestSoFar) ? place : nearestSoFar));
      takenPlaces.add(nearestPlace);
      if (nearestPlace === group.place) return group;
      anyPlaceChanged = true;
      return { ...group, place: nearestPlace };
    });
    return { ...carbonAtom, groups: updatedGroups };
  });
  return anyPlaceChanged ? { ...skeletonAfter, carbonAtoms } : skeletonAfter;
}
