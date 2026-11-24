/**
 * Making practice molecules a little harder to read.
 *
 * Molecules built from a name are laid out the textbook way: the main chain in a straight
 * line with side chains straight up or down. In an exam the longest chain is often drawn
 * with turns in it, so it isn't always the line running across the page. Here a practice
 * molecule sometimes has a few of its bonds turned at random, using the same bond turning
 * the student does by hand (see rearrangeDrawing.js), so nothing ends up overlapping.
 *
 * Sometimes the molecule is left as it is, so practice has a mix of both.
 *
 * A turn may change a double bond from E to Z, which is fine, as the name is worked out from
 * the drawing. But a turn that leaves a double bond in a straight line, showing neither, is
 * not made, so the molecule always has one name (see doubleBondConfiguration.js).
 */

import { isRingBond, listCarbonIdsBeyondBond } from '../chemistry/carbonSkeleton.js';
import { arrangeSkeletonForTurn, startTurningBond, turnBondTowards } from './rearrangeDrawing.js';
import { pickRandomWholeNumber } from '../chemistry/generateRandomGuessMolecule.js';
import { describeEveryDoubleBond } from '../chemistry/doubleBondConfiguration.js';

/** True when a double bond with E and Z forms is drawn in a straight line, so shows neither. */
function hasDoubleBondShowingNeitherEOrZ(skeleton) {
  return [...describeEveryDoubleBond(skeleton).values()].includes('unspecified');
}

/**
 * How each molecule is laid out:
 *   half of them      the textbook layout, unchanged
 *   a quarter         bonds turned by right angles only
 *   a quarter         bonds turned by 60, 90 or 120 degrees
 */
const CHANCE_OF_KEEPING_TEXTBOOK_LAYOUT = 0.5;
const CHANCE_OF_RIGHT_ANGLES_ONLY = 0.25;

const RIGHT_ANGLE_TURN_SIZES = [90];
const ALL_TURN_SIZES = [60, 90, 120];

/** The most bonds turned in one molecule. */
const MOST_BONDS_TURNED = 3;

/**
 * Returns the skeleton with up to 3 of its bonds turned, or unchanged.
 * randomNumberGenerator: a function returning a number from 0 up to (not including) 1.
 */
export function bendChainsAtRandom(skeleton, randomNumberGenerator = Math.random) {
  if (skeleton.carbonCarbonBonds.length === 0) return skeleton;

  const layoutChoice = randomNumberGenerator();
  if (layoutChoice < CHANCE_OF_KEEPING_TEXTBOOK_LAYOUT) return skeleton;
  const turnSizes =
    layoutChoice < CHANCE_OF_KEEPING_TEXTBOOK_LAYOUT + CHANCE_OF_RIGHT_ANGLES_ONLY ? RIGHT_ANGLE_TURN_SIZES : ALL_TURN_SIZES;

  let bentSkeleton = skeleton;
  const numberOfTurns = pickRandomWholeNumber(1, Math.min(MOST_BONDS_TURNED, skeleton.carbonCarbonBonds.length), randomNumberGenerator);

  for (let turnNumber = 0; turnNumber < numberOfTurns; turnNumber++) {
    const bondIndex = pickRandomWholeNumber(0, skeleton.carbonCarbonBonds.length - 1, randomNumberGenerator);
    const { firstAtomId, secondAtomId } = skeleton.carbonCarbonBonds[bondIndex];
    // A bond in a ring can't be turned without bending the ring out of shape.
    if (isRingBond(bentSkeleton, firstAtomId, secondAtomId)) continue;

    // The smaller side of the bond swings, so the bulk of the molecule stays where it is.
    const firstSideSize = listCarbonIdsBeyondBond(bentSkeleton, secondAtomId, firstAtomId).size;
    const secondSideSize = listCarbonIdsBeyondBond(bentSkeleton, firstAtomId, secondAtomId).size;
    const [swingingAtomId, pivotAtomId] = firstSideSize <= secondSideSize ? [firstAtomId, secondAtomId] : [secondAtomId, firstAtomId];

    const turnSize = turnSizes[pickRandomWholeNumber(0, turnSizes.length - 1, randomNumberGenerator)];
    const turnDirection = randomNumberGenerator() < 0.5 ? -1 : 1;
    const turn = turnBondTowards(startTurningBond(bentSkeleton, pivotAtomId, swingingAtomId), turnSize * turnDirection);
    const turnedSkeleton = arrangeSkeletonForTurn(turn);
    if (!hasDoubleBondShowingNeitherEOrZ(turnedSkeleton)) bentSkeleton = turnedSkeleton;
  }
  return bentSkeleton;
}
