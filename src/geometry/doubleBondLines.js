/**
 * Where to draw the two lines of a double bond: between two carbons, or from a carbon to the
 * O of C=O.
 *
 * Displayed formula: two equal lines, one either side of where a single bond would be.
 *
 * Skeletal formula: as in A-level textbooks, one line joins the two carbons exactly, so the
 * zigzag still meets at the corners, and a slightly shorter second line runs alongside it
 * on the side where the rest of the molecule is. If neither side has more of the molecule
 * (as in ethene, or a double bond with a branch on each side), the two lines are centred
 * like the displayed formula's. In a ring, the second line is always inside the ring.
 *
 * C=O, in both views: two equal lines, one either side of where a single bond would be.
 *
 * A C≡C triple bond, in both views: one line joining the two carbons exactly, and one either
 * side of it.
 */
import { findCarbonAtomById, isRingBond, listAtomIdsInRings, listNeighbourCarbonIds } from '../chemistry/carbonSkeleton.js';

/** Distance between the two lines of a double bond, in drawing units. */
export const GAP_BETWEEN_DOUBLE_BOND_LINES = 9;

/** In the skeletal formula, how much of the bond's length the inner line loses at each end. */
const INNER_LINE_SHORTENING_AT_EACH_END = 0.15;

const positionOf = (carbonAtom) => ({ x: carbonAtom.positionX, y: carbonAtom.positionY });

/** A line from start to end, moved sideways by distance (positive = to the left, walking from start to end, on screen). */
function shiftSideways(start, end, distance) {
  const length = Math.hypot(end.x - start.x, end.y - start.y);
  const offsetX = ((end.y - start.y) / length) * distance;
  const offsetY = (-(end.x - start.x) / length) * distance;
  return { x1: start.x + offsetX, y1: start.y + offsetY, x2: end.x + offsetX, y2: end.y + offsetY };
}

function twoCentredLines(start, end) {
  return [shiftSideways(start, end, GAP_BETWEEN_DOUBLE_BOND_LINES / 2), shiftSideways(start, end, -GAP_BETWEEN_DOUBLE_BOND_LINES / 2)];
}

/** The two lines of a double bond in the displayed formula: [{ x1, y1, x2, y2 }, { x1, y1, x2, y2 }]. */
export function listDisplayedDoubleBondLines(skeleton, firstAtomId, secondAtomId) {
  return twoCentredLines(positionOf(findCarbonAtomById(skeleton, firstAtomId)), positionOf(findCarbonAtomById(skeleton, secondAtomId)));
}

/** The three lines of a triple bond, in either view: [{ x1, y1, x2, y2 } × 3]. */
export function listTripleBondLines(skeleton, firstAtomId, secondAtomId) {
  const start = positionOf(findCarbonAtomById(skeleton, firstAtomId));
  const end = positionOf(findCarbonAtomById(skeleton, secondAtomId));
  return [shiftSideways(start, end, GAP_BETWEEN_DOUBLE_BOND_LINES), shiftSideways(start, end, 0), shiftSideways(start, end, -GAP_BETWEEN_DOUBLE_BOND_LINES)];
}

/** The two lines of a C=O double bond, from the carbon's point to the oxygen's (or its label's): [{ x1, y1, x2, y2 }, { x1, y1, x2, y2 }]. */
export function listCarbonylDoubleBondLines(carbonPoint, oxygenPoint) {
  return twoCentredLines(carbonPoint, oxygenPoint);
}

/** The two lines of a double bond in the skeletal formula: [{ x1, y1, x2, y2 }, { x1, y1, x2, y2 }]. */
export function listSkeletalDoubleBondLines(skeleton, firstAtomId, secondAtomId) {
  const start = positionOf(findCarbonAtomById(skeleton, firstAtomId));
  const end = positionOf(findCarbonAtomById(skeleton, secondAtomId));

  // Positive for a carbon to the left of the bond (walking from start to end), negative to the right.
  const sideOfBond = (point) => (end.x - start.x) * (start.y - point.y) - (end.y - start.y) * (start.x - point.x);
  const ringAtomIds = isRingBond(skeleton, firstAtomId, secondAtomId) ? listAtomIdsInRings(skeleton) : null;
  const otherNeighbours = [
    ...listNeighbourCarbonIds(skeleton, firstAtomId).filter((atomId) => atomId !== secondAtomId),
    ...listNeighbourCarbonIds(skeleton, secondAtomId).filter((atomId) => atomId !== firstAtomId),
  ].filter((atomId) => ringAtomIds === null || ringAtomIds.has(atomId));
  const sideWithMoreOfTheMolecule = Math.sign(
    otherNeighbours.reduce((total, atomId) => total + Math.sign(sideOfBond(positionOf(findCarbonAtomById(skeleton, atomId)))), 0),
  );
  if (sideWithMoreOfTheMolecule === 0) return twoCentredLines(start, end);

  const pointAlong = (fraction) => ({ x: start.x + (end.x - start.x) * fraction, y: start.y + (end.y - start.y) * fraction });
  const innerLine = shiftSideways(
    pointAlong(INNER_LINE_SHORTENING_AT_EACH_END),
    pointAlong(1 - INNER_LINE_SHORTENING_AT_EACH_END),
    sideWithMoreOfTheMolecule * GAP_BETWEEN_DOUBLE_BOND_LINES,
  );
  return [{ x1: start.x, y1: start.y, x2: end.x, y2: end.y }, innerLine];
}
