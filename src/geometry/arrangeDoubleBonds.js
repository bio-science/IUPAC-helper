/**
 * Drawing a double bond as E or Z.
 *
 * The drawing is the only record of whether a double bond is E or Z (see
 * doubleBondConfiguration.js), so a molecule built from a name such as (2E)-but-2-ene has to
 * be drawn that way. The textbook layout draws the main chain in a straight line, which
 * shows neither, so here each double bond asked for is bent into shape:
 *
 *   1. The carbons on each side of the double bond are turned to 120 degrees from it, as
 *      textbooks draw them, each taking everything beyond it along. The chain beyond those
 *      carbons is turned back, so it still runs across the page:
 *
 *        C - C = C - C - C          C               C - C
 *                          becomes   \             /
 *                                     C = C ... = C
 *
 *   2. If that shows the wrong one of E and Z, one side of the double bond (the smaller one)
 *      is reflected in the line through its two carbons, which swaps E and Z over. Reflecting
 *      a whole side keeps every other double bond on that side as it was.
 *
 * A double bond in a ring is drawn Z by the round ring layout. For E, one of its carbons is
 * pushed into the ring instead (reflected in the line joining its two ring neighbours).
 *
 * Only the drawing changes, never the molecule.
 *
 * When a molecule is laid out again, as when a ring is closed by hand, drawDoubleBondsAsBefore
 * puts each double bond back the way it was drawn.
 */

import { findCarbonAtomById, isRingBond, listCarbonIdsBeyondBond, listNeighbourCarbonIds } from '../chemistry/carbonSkeleton.js';
import { bondKey, describeEveryDoubleBond } from '../chemistry/doubleBondConfiguration.js';
import { countOverlapsInDrawing } from './countOverlapsInDrawing.js';
import { keepGroupsPointingTheSameWay, placeAtomsAroundCarbons } from './placeAtomsAroundCarbons.js';
import { angleFromPointToPoint, normaliseAngle, rotatePointAroundCentre, sizeOfAngleBetweenDirections } from './vectorMaths.js';

/** The angle between a double bond and each carbon joined to it, as textbooks draw it. */
const ANGLE_AT_DOUBLE_BOND_CARBON = 120;

/** Turns smaller than this, in degrees, are not worth making. */
const SMALLEST_TURN = 0.5;

function positionOf(skeleton, atomId) {
  const carbonAtom = findCarbonAtomById(skeleton, atomId);
  return { x: carbonAtom.positionX, y: carbonAtom.positionY };
}

/**
 * Moves some carbons, with their groups pointing the matching new way.
 * movePoint: where a point ends up. moveDirection: where a direction (in degrees) ends up.
 */
function moveCarbons(skeleton, atomIds, movePoint, moveDirection) {
  const groupDirectionsToUse = new Map();
  for (const outerAtom of placeAtomsAroundCarbons(skeleton)) {
    if (outerAtom.symbol === 'H' || !atomIds.has(outerAtom.carbonAtomId)) continue;
    const carbon = positionOf(skeleton, outerAtom.carbonAtomId);
    const direction = angleFromPointToPoint(carbon, { x: outerAtom.positionX, y: outerAtom.positionY });
    groupDirectionsToUse.set(`${outerAtom.carbonAtomId}/${outerAtom.groupIndex}`, moveDirection(direction));
  }
  const moved = {
    ...skeleton,
    carbonAtoms: skeleton.carbonAtoms.map((carbonAtom) => {
      if (!atomIds.has(carbonAtom.atomId)) return carbonAtom;
      const position = movePoint({ x: carbonAtom.positionX, y: carbonAtom.positionY });
      return { ...carbonAtom, positionX: position.x, positionY: position.y };
    }),
  };
  return keepGroupsPointingTheSameWay(skeleton, moved, groupDirectionsToUse);
}

function turnCarbons(skeleton, atomIds, centre, angle) {
  return moveCarbons(skeleton, atomIds, (point) => rotatePointAroundCentre(point, centre, angle), (direction) => direction + angle);
}

/** Reflects some carbons in the line through two points. */
function reflectCarbons(skeleton, atomIds, lineStart, lineEnd) {
  const lineDirection = angleFromPointToPoint(lineStart, lineEnd);
  const alongX = lineEnd.x - lineStart.x;
  const alongY = lineEnd.y - lineStart.y;
  const reflectPoint = (point) => {
    const fraction = ((point.x - lineStart.x) * alongX + (point.y - lineStart.y) * alongY) / (alongX * alongX + alongY * alongY);
    const foot = { x: lineStart.x + fraction * alongX, y: lineStart.y + fraction * alongY };
    return { x: 2 * foot.x - point.x, y: 2 * foot.y - point.y };
  };
  return moveCarbons(skeleton, atomIds, reflectPoint, (direction) => 2 * lineDirection - direction);
}

/** Every carbon beyond atomId, seen from fromAtomId: all those reached from it without going back through fromAtomId. */
function listCarbonIdsPast(skeleton, fromAtomId, atomId) {
  const beyond = new Set();
  for (const neighbourId of listNeighbourCarbonIds(skeleton, atomId)) {
    if (neighbourId === fromAtomId) continue;
    for (const beyondId of listCarbonIdsBeyondBond(skeleton, atomId, neighbourId)) if (beyondId !== atomId) beyond.add(beyondId);
  }
  return beyond;
}

/**
 * Step 1 for one carbon of the double bond: turns each carbon joined to it to 120 degrees from
 * the double bond. A carbon that could go either way goes clockwise (seen from atomId), so a
 * straight chain bends into a zigzag. Each carbon turned takes everything beyond it along, and
 * then (unless it is on a double bond already arranged) turns that back, so the chain beyond
 * it carries on in the direction it had.
 */
function bendAtCarbon(skeleton, atomId, otherAtomId, arrangedAtomIds, { clockwise = true, turnBack = true } = {}) {
  const centre = positionOf(skeleton, atomId);
  const alongBond = angleFromPointToPoint(centre, positionOf(skeleton, otherAtomId));
  const targets = [alongBond + ANGLE_AT_DOUBLE_BOND_CARBON, alongBond - ANGLE_AT_DOUBLE_BOND_CARBON].map(normaliseAngle);
  const branchIds = listNeighbourCarbonIds(skeleton, atomId).filter((neighbourId) => neighbourId !== otherAtomId);
  // A ring keeps its shape: the double bond is bent at its other carbon instead.
  if (branchIds.length === 0 || branchIds.length > 2 || branchIds.some((branchId) => isRingBond(skeleton, atomId, branchId))) return skeleton;
  const directionOf = (branchId) => angleFromPointToPoint(centre, positionOf(skeleton, branchId));

  let targetOfBranch;
  if (branchIds.length === 1) {
    const [toFirst, toSecond] = targets.map((target) => sizeOfAngleBetweenDirections(directionOf(branchIds[0]), target));
    const isEitherWay = Math.abs(toFirst - toSecond) < 1;
    targetOfBranch = [(isEitherWay ? clockwise : toFirst < toSecond) ? targets[0] : targets[1]];
  } else {
    // Whichever way round turns the two carbons least.
    const turnFor = (order) => order.reduce((total, target, index) => total + sizeOfAngleBetweenDirections(directionOf(branchIds[index]), target), 0);
    targetOfBranch = turnFor(targets) <= turnFor([targets[1], targets[0]]) ? targets : [targets[1], targets[0]];
  }

  let bent = skeleton;
  branchIds.forEach((branchId, index) => {
    const turn = normaliseAngle(targetOfBranch[index] - directionOf(branchId));
    if (Math.abs(turn) < SMALLEST_TURN) return;
    bent = turnCarbons(bent, listCarbonIdsBeyondBond(bent, atomId, branchId), centre, turn);
    if (turnBack && !arrangedAtomIds.has(branchId)) {
      bent = turnCarbons(bent, listCarbonIdsPast(bent, atomId, branchId), positionOf(bent, branchId), -turn);
    }
  });
  return bent;
}

/**
 * Each way of bending a double bond not in a ring into shape, best first: steps 1 and 2 from
 * the top of this file, then the same with the chain beyond not turned back, or bent the
 * other way, or with the other side reflected.
 */
function* listWaysToBend(skeleton, firstAtomId, secondAtomId, arrangedAtomIds) {
  for (const turnBack of [true, false]) {
    for (const [firstClockwise, secondClockwise] of [[true, true], [false, false], [true, false], [false, true]]) {
      let bent = bendAtCarbon(skeleton, firstAtomId, secondAtomId, arrangedAtomIds, { clockwise: firstClockwise, turnBack });
      bent = bendAtCarbon(bent, secondAtomId, firstAtomId, arrangedAtomIds, { clockwise: secondClockwise, turnBack });
      yield bent;
      yield swapEAndZOfDoubleBond(bent, firstAtomId, secondAtomId);
      yield swapEAndZOfDoubleBond(bent, firstAtomId, secondAtomId, { reflectLargerSide: true });
    }
  }
}

/** Reflects the smaller side of a double bond not in a ring in the line of the bond, swapping E and Z over. */
export function swapEAndZOfDoubleBond(skeleton, firstAtomId, secondAtomId, { reflectLargerSide = false } = {}) {
  const firstSide = listCarbonIdsBeyondBond(skeleton, secondAtomId, firstAtomId);
  const secondSide = listCarbonIdsBeyondBond(skeleton, firstAtomId, secondAtomId);
  const [sideToReflect, keptAtomId, reflectedAtomId] =
    secondSide.size <= firstSide.size !== reflectLargerSide ? [secondSide, firstAtomId, secondAtomId] : [firstSide, secondAtomId, firstAtomId];
  return reflectCarbons(skeleton, sideToReflect, positionOf(skeleton, keptAtomId), positionOf(skeleton, reflectedAtomId));
}

/**
 * For a double bond in a ring: pushes one of its carbons into the ring, reflecting it (and
 * whatever is joined to it outside the ring) in the line between its two ring neighbours.
 */
function pushCarbonIntoRing(skeleton, atomId, otherAtomId) {
  const otherRingNeighbourId = listNeighbourCarbonIds(skeleton, atomId).find(
    (neighbourId) => neighbourId !== otherAtomId && isRingBond(skeleton, atomId, neighbourId),
  );
  if (otherRingNeighbourId === undefined) return skeleton;
  const moving = new Set([atomId]);
  for (const neighbourId of listNeighbourCarbonIds(skeleton, atomId)) {
    if (neighbourId === otherAtomId || neighbourId === otherRingNeighbourId) continue;
    for (const beyondId of listCarbonIdsBeyondBond(skeleton, atomId, neighbourId)) moving.add(beyondId);
  }
  return reflectCarbons(skeleton, moving, positionOf(skeleton, otherAtomId), positionOf(skeleton, otherRingNeighbourId));
}

/** How many carbons, outside the ring, are joined to a ring carbon. */
function countSideChainsOnRingCarbon(skeleton, atomId) {
  return listNeighbourCarbonIds(skeleton, atomId).filter((neighbourId) => !isRingBond(skeleton, atomId, neighbourId)).length;
}

/** True when every double bond already arranged is still drawn as it was asked for. */
function keepsArrangedBonds(skeleton, arrangedRequests) {
  const configurations = describeEveryDoubleBond(skeleton);
  return arrangedRequests.every(({ firstAtomId, secondAtomId, descriptor }) => configurations.get(bondKey(firstAtomId, secondAtomId)) === descriptor);
}

/**
 * Returns the skeleton redrawn so that each double bond asked for is E or Z.
 * requests: [{ firstAtomId, secondAtomId, descriptor: 'E' | 'Z' }, ...]
 * A double bond whose E or Z depends on others (by Sequence Rule 3) is tried again once they
 * are done. One that can't be E or Z is left as it is.
 */
export function arrangeDoubleBonds(skeleton, requests) {
  let arranged = skeleton;
  const arrangedRequests = [];
  const arrangedAtomIds = new Set();
  const overlapsBefore = countOverlapsInDrawing(skeleton);
  // Each double bond is first bent into some shape, so that those whose E or Z depends on
  // another (by Sequence Rule 3) can be worked out.
  for (const { firstAtomId, secondAtomId } of requests) {
    if (isRingBond(arranged, firstAtomId, secondAtomId)) continue;
    const bent = listWaysToBend(arranged, firstAtomId, secondAtomId, arrangedAtomIds).next().value;
    if (countOverlapsInDrawing(bent) <= overlapsBefore) arranged = bent;
  }
  let waiting = requests;
  while (waiting.length > 0) {
    const stillWaiting = [];
    for (const request of waiting) {
      arranged = arrangeOneDoubleBond(arranged, request, arrangedRequests, arrangedAtomIds, overlapsBefore);
      if (arrangedRequests.includes(request)) continue;
      stillWaiting.push(request);
    }
    if (stillWaiting.length === waiting.length) break;
    waiting = stillWaiting;
  }
  return arranged;
}

/** Arranges one double bond if it can, adding it to arrangedRequests and its carbons to arrangedAtomIds. */
function arrangeOneDoubleBond(skeleton, request, arrangedRequests, arrangedAtomIds, overlapsBefore) {
  const { firstAtomId, secondAtomId, descriptor } = request;
  const isWanted = (someSkeleton) => describeEveryDoubleBond(someSkeleton).get(bondKey(firstAtomId, secondAtomId)) === descriptor;
  const isAcceptable = (someSkeleton) => isWanted(someSkeleton) && keepsArrangedBonds(someSkeleton, arrangedRequests);

  let arranged = skeleton;
  if (isRingBond(skeleton, firstAtomId, secondAtomId)) {
    if (!isWanted(skeleton)) {
      // The carbon with fewer side chains is the one pushed in, as there is little room inside the ring.
      const [fewer, more] =
        countSideChainsOnRingCarbon(skeleton, secondAtomId) <= countSideChainsOnRingCarbon(skeleton, firstAtomId)
          ? [secondAtomId, firstAtomId]
          : [firstAtomId, secondAtomId];
      const candidates = [pushCarbonIntoRing(skeleton, fewer, more), pushCarbonIntoRing(skeleton, more, fewer)];
      arranged = candidates.find(isAcceptable) ?? skeleton;
    }
  } else {
    // The first way of bending it that has no more overlaps than before, or failing that, the one with fewest.
    let fewestOverlaps = Infinity;
    for (const bent of listWaysToBend(skeleton, firstAtomId, secondAtomId, arrangedAtomIds)) {
      if (!isAcceptable(bent)) continue;
      const overlaps = countOverlapsInDrawing(bent);
      if (overlaps < fewestOverlaps) [arranged, fewestOverlaps] = [bent, overlaps];
      if (overlaps <= overlapsBefore) break;
    }
  }
  if (!isAcceptable(arranged)) return skeleton;
  arrangedRequests.push(request);
  arrangedAtomIds.add(firstAtomId).add(secondAtomId);
  return arranged;
}

/**
 * Returns newSkeleton, the same molecule as oldSkeleton laid out again, with each double bond
 * drawn E or Z as it is in oldSkeleton.
 */
export function drawDoubleBondsAsBefore(oldSkeleton, newSkeleton) {
  const requests = [...describeEveryDoubleBond(oldSkeleton)]
    .filter(([, configuration]) => configuration === 'E' || configuration === 'Z')
    .map(([key, descriptor]) => {
      const [firstAtomId, secondAtomId] = key.split('-').map(Number);
      return { firstAtomId, secondAtomId, descriptor };
    });
  return requests.length === 0 ? newSkeleton : arrangeDoubleBonds(newSkeleton, requests);
}
