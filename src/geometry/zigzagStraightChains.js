/**
 * Putting corners into straight chains, so a skeletal formula can be read.
 *
 * In a skeletal formula every corner is a carbon. A carbon whose two bonds carry straight
 * on has no corner, so it would vanish: pentane drawn in a straight line looks like a
 * single long bond. Here every other carbon along such a straight run is nudged to one
 * side, giving a gentle zigzag. The change is kept, so the displayed formula then shows
 * the same zigzag.
 *
 * Only carbons with exactly two carbon neighbours are moved, so no side chains move.
 * A run is only nudged to a side where it doesn't make anything overlap, and where it keeps
 * every double bond E, Z or unspecified, as it was (see doubleBondConfiguration.js): a
 * double bond drawn in a straight line stays straight, as nudging it would make it E or Z.
 *
 * The two carbons of a C≡C triple bond, and the carbons joined to them, stay in a straight
 * line, as the bonds of a triple-bonded carbon are at 180°: in hex-3-yne, carbons 2 to 5 are
 * in a line, and the corners are made by moving carbons 1 and 6 (an end carbon, with one
 * carbon neighbour, can move without moving anything else).
 */

import { isDoubleBond, isTripleBond, listNeighbourCarbonIds } from '../chemistry/carbonSkeleton.js';
import { countOverlapsInDrawing } from './countOverlapsInDrawing.js';
import { describeEveryDoubleBond } from '../chemistry/doubleBondConfiguration.js';
import { angleFromPointToPoint, pointAtAngleAndDistance, sizeOfAngleBetweenDirections } from './vectorMaths.js';

/** Two bonds at least this far apart (180 = dead straight) count as a straight line. */
const SMALLEST_ANGLE_THAT_LOOKS_STRAIGHT = 165;

/**
 * How far every other carbon is moved sideways. With 110-long bonds, 40 tilts each bond by
 * about 20 degrees. The smaller nudges are tried when a crowded molecule has no room for that.
 */
const SIDEWAYS_NUDGES_TO_TRY = [40, 28, 20];

function positionOf(skeleton, atomId) {
  const carbonAtom = skeleton.carbonAtoms.find((carbon) => carbon.atomId === atomId);
  return { x: carbonAtom.positionX, y: carbonAtom.positionY };
}

/** True for a carbon with two carbon neighbours in a straight line either side of it. */
function isCarbonWithoutCorner(skeleton, atomId) {
  const neighbourIds = listNeighbourCarbonIds(skeleton, atomId);
  if (neighbourIds.length !== 2) return false;
  const position = positionOf(skeleton, atomId);
  const [firstDirection, secondDirection] = neighbourIds.map((neighbourId) => angleFromPointToPoint(position, positionOf(skeleton, neighbourId)));
  return sizeOfAngleBetweenDirections(firstDirection, secondDirection) >= SMALLEST_ANGLE_THAT_LOOKS_STRAIGHT;
}

/**
 * Walks from one carbon through its neighbour and on in a straight line, collecting each
 * carbon without a corner. Returns those carbons in order, and the carbon where the run ends.
 */
function walkAlongStraightRun(skeleton, fromAtomId, firstStepAtomId) {
  const carbonsWithoutCorners = [];
  let previousAtomId = fromAtomId;
  let currentAtomId = firstStepAtomId;
  while (isCarbonWithoutCorner(skeleton, currentAtomId)) {
    carbonsWithoutCorners.push(currentAtomId);
    const nextAtomId = listNeighbourCarbonIds(skeleton, currentAtomId).find((neighbourId) => neighbourId !== previousAtomId);
    previousAtomId = currentAtomId;
    currentAtomId = nextAtomId;
  }
  return { carbonsWithoutCorners, endAtomId: currentAtomId };
}

/** True when two skeletons with the same bonds have every double bond drawn the same way: E, Z or unspecified. */
function haveSameDoubleBondConfigurations(firstSkeleton, secondSkeleton) {
  const [first, second] = [firstSkeleton, secondSkeleton].map(describeEveryDoubleBond);
  return [...first].every(([key, configuration]) => second.get(key) === configuration);
}

function moveCarbonsSideways(skeleton, atomIds, direction, distance) {
  return {
    carbonAtoms: skeleton.carbonAtoms.map((carbonAtom) => {
      if (!atomIds.includes(carbonAtom.atomId)) return carbonAtom;
      const newPosition = pointAtAngleAndDistance({ x: carbonAtom.positionX, y: carbonAtom.positionY }, direction, distance);
      return { ...carbonAtom, positionX: newPosition.x, positionY: newPosition.y };
    }),
    carbonCarbonBonds: skeleton.carbonCarbonBonds,
  };
}

/**
 * Which carbons to move to give a corner to every carbon of the run that should have one, when
 * some carbons must stay in a line (see the top of this file). Moving a carbon gives it and
 * its neighbours along the run a corner. Each carbon still needing one is given it by moving
 * itself, or else the next carbon, or else the one before, if that one can move.
 */
function chooseCarbonsToNudgeAroundTripleBonds(skeleton, run, backwards, forwards, carbonsOnTripleBonds, carbonsKeptInLine) {
  const line = [backwards.endAtomId, ...run, forwards.endAtomId];
  const canMove = (index) =>
    index >= 0 && index < line.length && !carbonsKeptInLine.has(line[index]) && listNeighbourCarbonIds(skeleton, line[index]).length <= 2;
  const hasCorner = new Set();
  const toNudge = [];
  for (let index = 1; index < line.length - 1; index++) {
    if (hasCorner.has(index) || carbonsOnTripleBonds.has(line[index])) continue;
    const moved = [index, index + 1, index - 1].find(canMove);
    if (moved === undefined) continue;
    toNudge.push(line[moved]);
    [moved - 1, moved, moved + 1].forEach((cornered) => hasCorner.add(cornered));
  }
  return toNudge;
}

/** Returns the skeleton with its straight runs zigzagged, or the same skeleton if there were none. */
export function zigzagStraightChains(skeleton) {
  let currentSkeleton = skeleton;
  const carbonsAlreadyChecked = new Set();
  const carbonsOnDoubleBonds = new Set(
    skeleton.carbonCarbonBonds.filter(isDoubleBond).flatMap(({ firstAtomId, secondAtomId }) => [firstAtomId, secondAtomId]),
  );
  const carbonsOnTripleBonds = new Set(
    skeleton.carbonCarbonBonds.filter(isTripleBond).flatMap(({ firstAtomId, secondAtomId }) => [firstAtomId, secondAtomId]),
  );
  const carbonsKeptInLine = new Set([...carbonsOnTripleBonds].flatMap((atomId) => [atomId, ...listNeighbourCarbonIds(skeleton, atomId)]));

  for (const { atomId } of skeleton.carbonAtoms) {
    if (carbonsAlreadyChecked.has(atomId) || !isCarbonWithoutCorner(currentSkeleton, atomId)) continue;

    const [firstNeighbourId, secondNeighbourId] = listNeighbourCarbonIds(currentSkeleton, atomId);
    const backwards = walkAlongStraightRun(currentSkeleton, atomId, firstNeighbourId);
    const forwards = walkAlongStraightRun(currentSkeleton, atomId, secondNeighbourId);
    const run = [...backwards.carbonsWithoutCorners.reverse(), atomId, ...forwards.carbonsWithoutCorners];
    run.forEach((runAtomId) => carbonsAlreadyChecked.add(runAtomId));

    // Nudging the 1st, 3rd, 5th... carbon gives every carbon in the run a corner. If that
    // would change a double bond, the carbons of double bonds are left where they are.
    const everyOtherCarbon =
      carbonsKeptInLine.size === 0
        ? run.filter((_, index) => index % 2 === 0)
        : chooseCarbonsToNudgeAroundTripleBonds(currentSkeleton, run, backwards, forwards, carbonsOnTripleBonds, carbonsKeptInLine);
    const carbonsToNudgeInTurn = [everyOtherCarbon, everyOtherCarbon.filter((atomId) => !carbonsOnDoubleBonds.has(atomId))];
    const directionOfRun = angleFromPointToPoint(positionOf(currentSkeleton, backwards.endAtomId), positionOf(currentSkeleton, forwards.endAtomId));
    const overlapsBefore = countOverlapsInDrawing(currentSkeleton);

    const nudgesToTry = SIDEWAYS_NUDGES_TO_TRY.flatMap((distance) => [
      { direction: directionOfRun - 90, distance },
      { direction: directionOfRun + 90, distance },
    ]);
    nudging: for (const carbonsToNudge of carbonsToNudgeInTurn) {
      if (carbonsToNudge.length === 0) continue;
      for (const { direction, distance } of nudgesToTry) {
        const nudgedSkeleton = moveCarbonsSideways(currentSkeleton, carbonsToNudge, direction, distance);
        if (countOverlapsInDrawing(nudgedSkeleton) <= overlapsBefore && haveSameDoubleBondConfigurations(currentSkeleton, nudgedSkeleton)) {
          currentSkeleton = nudgedSkeleton;
          break nudging;
        }
      }
    }
  }
  return currentSkeleton;
}
