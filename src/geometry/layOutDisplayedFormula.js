/**
 * Positions for molecules that come from a typed name or formula (rather than being
 * drawn by hand), laid out the way displayed formulae appear in A-level textbooks:
 *
 *   - the main chain runs left to right in a straight line
 *   - each side chain goes straight up or straight down from its carbon
 *   - hydrogens and halogens are then added around each carbon (see placeAtomsAroundCarbons.js)
 *
 * When neighbouring chain carbons both have side chains, they alternate up and down so
 * that the hydrogens on the side chains don't crash into each other.
 *
 * A molecule with a ring is drawn with the ring as a regular polygon (a hexagon for
 * cyclohexane), with everything joined to the ring pointing straight out from its middle.
 * With more rings, the parent (a ring or the main chain) is drawn first, and each other ring
 * as a polygon on the line of the bond that reaches it: dicyclohexylmethanone,
 * 1,4-dicyclopentylcyclohexane.
 */

import { countRings, listNeighbourCarbonIds, listRingAtomIdsInOrder, listSeparateRings } from '../chemistry/carbonSkeleton.js';
import { CARBON_TO_CARBON_BOND_LENGTH, SMALLEST_VISIBLE_DRAWING_AREA } from './drawingDimensions.js';
import { boundingBoxAroundPoints, pointAtAngleAndDistance } from './vectorMaths.js';
import { forgetHandPlacedPositions } from './placeAtomsAroundCarbons.js';

/** How far either side of straight out from the ring two side chains on one ring carbon go, in degrees. */
const SPREAD_OF_TWO_SIDE_CHAINS_ON_A_RING_CARBON = 35;

/** The same when one of them is a ring, which needs more room: 1,1-dicyclopentylcyclohexane. */
const SPREAD_OF_TWO_SIDE_CHAINS_WITH_A_RING = 50;

/** How far a branch turns away from the line of its side chain, in degrees. */
const TURN_OF_A_BRANCH = 60;

const STEP_FOR_EACH_DIRECTION = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

const ANGLE_OF_EACH_DIRECTION = { up: -90, down: 90, left: 180, right: 0 };

const DIRECTIONS_AT_RIGHT_ANGLES = {
  up: ['left', 'right'],
  down: ['right', 'left'],
  left: ['down', 'up'],
  right: ['up', 'down'],
};

/**
 * Places a side chain carbon, then everything further along that side chain.
 * The side chain carries straight on in the same direction. (Branched side chains
 * are not supported for naming, but if one turns up its extra carbons go off at right angles.)
 * A carbon in a ring (ringByAtomId) brings its whole ring with it.
 */
function placeSideChainInDirection(skeleton, positionByAtomId, atomIdToPlace, previousAtomId, direction, ringByAtomId) {
  if (ringByAtomId.has(atomIdToPlace)) {
    placeBranchAtAngle(skeleton, positionByAtomId, atomIdToPlace, previousAtomId, ANGLE_OF_EACH_DIRECTION[direction], ringByAtomId);
    return;
  }
  const previousPosition = positionByAtomId.get(previousAtomId);
  const step = STEP_FOR_EACH_DIRECTION[direction];
  positionByAtomId.set(atomIdToPlace, {
    x: previousPosition.x + step.x * CARBON_TO_CARBON_BOND_LENGTH,
    y: previousPosition.y + step.y * CARBON_TO_CARBON_BOND_LENGTH,
  });

  const nextAtomIds = listNeighbourCarbonIds(skeleton, atomIdToPlace).filter((atomId) => !positionByAtomId.has(atomId));
  const directionsForNextAtoms = [direction, ...DIRECTIONS_AT_RIGHT_ANGLES[direction]];
  nextAtomIds.forEach((nextAtomId, index) => {
    placeSideChainInDirection(skeleton, positionByAtomId, nextAtomId, atomIdToPlace, directionsForNextAtoms[index], ringByAtomId);
  });
}

/**
 * Places a carbon a bond's length from the carbon before it in the given direction (in
 * degrees), then everything beyond it: straight on for a single next carbon, and spread
 * out either side for more. A carbon in a ring (ringByAtomId) brings its whole ring with it.
 */
function placeBranchAtAngle(skeleton, positionByAtomId, atomIdToPlace, previousAtomId, direction, ringByAtomId) {
  const position = pointAtAngleAndDistance(positionByAtomId.get(previousAtomId), direction, CARBON_TO_CARBON_BOND_LENGTH);
  if (ringByAtomId.has(atomIdToPlace)) {
    placeRingEnteredAt(skeleton, positionByAtomId, ringByAtomId.get(atomIdToPlace), atomIdToPlace, position, direction, ringByAtomId);
    return;
  }
  positionByAtomId.set(atomIdToPlace, position);
  const nextAtomIds = listNeighbourCarbonIds(skeleton, atomIdToPlace).filter((atomId) => !positionByAtomId.has(atomId));
  const turns = nextAtomIds.length === 1 ? [0] : nextAtomIds.length === 2 ? [-TURN_OF_A_BRANCH, TURN_OF_A_BRANCH] : [-TURN_OF_A_BRANCH, 0, TURN_OF_A_BRANCH];
  nextAtomIds.forEach((nextAtomId, index) => {
    placeBranchAtAngle(skeleton, positionByAtomId, nextAtomId, atomIdToPlace, direction + turns[index], ringByAtomId);
  });
}

/**
 * Places a ring as a regular polygon, given where the carbon it is reached at goes and the
 * direction (in degrees) it is reached from: the ring's middle is further on in that
 * direction, so the bond in points straight at it. Then everything else joined to the ring
 * goes straight out from its middle. ring: its carbons in order round it, starting anywhere.
 */
function placeRingEnteredAt(skeleton, positionByAtomId, ring, entryAtomId, entryPosition, direction, ringByAtomId) {
  const ringSize = ring.length;
  const radius = CARBON_TO_CARBON_BOND_LENGTH / (2 * Math.sin(Math.PI / ringSize));
  const centre = pointAtAngleAndDistance(entryPosition, direction, radius);
  const entryIndex = ring.indexOf(entryAtomId);
  const orderedRing = ring.map((_, index) => ring[(entryIndex + index) % ringSize]);
  const outwardDirections = orderedRing.map((_, index) => direction + 180 + (360 * index) / ringSize);
  orderedRing.forEach((atomId, index) => positionByAtomId.set(atomId, pointAtAngleAndDistance(centre, outwardDirections[index], radius)));
  placeEverythingOffRing(skeleton, positionByAtomId, orderedRing, outwardDirections, ringByAtomId);
}

/** Places what is joined to each carbon of a placed ring, pointing out from the ring's middle. */
function placeEverythingOffRing(skeleton, positionByAtomId, ringAtomIds, outwardDirections, ringByAtomId) {
  ringAtomIds.forEach((ringAtomId, index) => {
    const sideChainStartAtomIds = listNeighbourCarbonIds(skeleton, ringAtomId).filter((atomId) => !positionByAtomId.has(atomId));
    const spreadAngle = sideChainStartAtomIds.some((atomId) => ringByAtomId.has(atomId)) ? SPREAD_OF_TWO_SIDE_CHAINS_WITH_A_RING : SPREAD_OF_TWO_SIDE_CHAINS_ON_A_RING_CARBON;
    const spread = sideChainStartAtomIds.length === 2 ? [-spreadAngle, spreadAngle] : [0];
    sideChainStartAtomIds.forEach((sideChainStartAtomId, sideChainNumber) => {
      placeBranchAtAngle(skeleton, positionByAtomId, sideChainStartAtomId, ringAtomId, outwardDirections[index] + spread[sideChainNumber], ringByAtomId);
    });
  });
}

/**
 * Positions for a molecule laid out round a ring: the ring as a regular polygon with its first
 * carbon at the top, and the side chains on each ring carbon pointing out from its middle.
 * ringAtomIds: the ring's carbons in order round it.
 */
function layOutAroundRing(skeleton, ringAtomIds, ringByAtomId) {
  const ringSize = ringAtomIds.length;
  const radius = CARBON_TO_CARBON_BOND_LENGTH / (2 * Math.sin(Math.PI / ringSize));
  const positionByAtomId = new Map();
  const centre = { x: 0, y: 0 };
  const outwardDirections = ringAtomIds.map((_, index) => -90 + (360 * index) / ringSize);
  ringAtomIds.forEach((atomId, index) => positionByAtomId.set(atomId, pointAtAngleAndDistance(centre, outwardDirections[index], radius)));
  placeEverythingOffRing(skeleton, positionByAtomId, ringAtomIds, outwardDirections, ringByAtomId);
  return positionByAtomId;
}

/**
 * Returns a copy of the skeleton with every carbon given a position.
 * mainChainAtomIds: the main chain, or the parent ring, in order from carbon 1. A molecule
 * with one ring is laid out round its ring, whichever is the parent; so is one with more
 * rings when no main chain is given.
 */
export function layOutDisplayedFormula(skeleton, mainChainAtomIds) {
  const ringCount = countRings(skeleton);
  if (ringCount === 1) return withPositions(skeleton, layOutAroundRing(skeleton, listRingAtomIdsInOrder(skeleton), new Map()));
  const { rings } = ringCount > 1 ? listSeparateRings(skeleton) : { rings: [] };
  const ringByAtomId = new Map(rings.flatMap((ring) => ring.map((atomId) => [atomId, ring])));
  const hasMainChain = mainChainAtomIds !== undefined && mainChainAtomIds.length > 0;
  if (hasMainChain && ringByAtomId.has(mainChainAtomIds[0])) return withPositions(skeleton, layOutAroundRing(skeleton, mainChainAtomIds, ringByAtomId));
  if (!hasMainChain && rings.length > 0) return withPositions(skeleton, layOutAroundRing(skeleton, rings[0], ringByAtomId));

  const positionByAtomId = new Map();
  mainChainAtomIds.forEach((atomId, index) => {
    positionByAtomId.set(atomId, { x: index * CARBON_TO_CARBON_BOND_LENGTH, y: 0 });
  });

  let firstDirectionUsedByPreviousChainCarbon = null;
  // A ring is wider than a side chain, so one two carbons along from another goes the other way.
  let lastRingBranch = null;

  mainChainAtomIds.forEach((chainAtomId, index) => {
    const sideChainStartAtomIds = listNeighbourCarbonIds(skeleton, chainAtomId).filter(
      (atomId) => !positionByAtomId.has(atomId),
    );
    if (sideChainStartAtomIds.length === 0) {
      firstDirectionUsedByPreviousChainCarbon = null;
      return;
    }

    const isRingNearBefore = lastRingBranch !== null && index - lastRingBranch.index <= 2;
    const directionToAvoid = isRingNearBefore ? lastRingBranch.direction : firstDirectionUsedByPreviousChainCarbon;
    const freeDirections = directionToAvoid === 'up' ? ['down', 'up'] : ['up', 'down'];
    // A ring on an end carbon carries the chain on, as in 1,3-dicyclohexylpropan-2-one.
    const ringStartAtomIds = sideChainStartAtomIds.filter((atomId) => ringByAtomId.has(atomId));
    const endDirection = index === 0 ? 'left' : index === mainChainAtomIds.length - 1 ? 'right' : null;
    if (endDirection !== null && ringStartAtomIds.length > 0 && mainChainAtomIds.length > 1) freeDirections.unshift(endDirection);
    else if (endDirection !== null) freeDirections.push(endDirection);
    if (index === 0 && index === mainChainAtomIds.length - 1) freeDirections.push('right');

    const inPlacingOrder = [...ringStartAtomIds, ...sideChainStartAtomIds.filter((atomId) => !ringByAtomId.has(atomId))];
    inPlacingOrder.forEach((sideChainStartAtomId, sideChainNumber) => {
      placeSideChainInDirection(skeleton, positionByAtomId, sideChainStartAtomId, chainAtomId, freeDirections[sideChainNumber], ringByAtomId);
      if (ringByAtomId.has(sideChainStartAtomId) && ['up', 'down'].includes(freeDirections[sideChainNumber])) lastRingBranch = { index, direction: freeDirections[sideChainNumber] };
    });
    firstDirectionUsedByPreviousChainCarbon = freeDirections.find((direction) => direction === 'up' || direction === 'down');
  });

  return withPositions(skeleton, positionByAtomId);
}

/**
 * The skeleton with each carbon moved to its new position, then centred in the drawing area.
 * Atoms moved by hand go back to their usual places round the new layout.
 */
function withPositions(laidOutSkeleton, positionByAtomId) {
  const skeleton = forgetHandPlacedPositions(laidOutSkeleton);
  return moveSkeletonToCentreOfDrawingArea({
    carbonAtoms: skeleton.carbonAtoms.map((carbonAtom) => ({
      ...carbonAtom,
      positionX: positionByAtomId.get(carbonAtom.atomId).x,
      positionY: positionByAtomId.get(carbonAtom.atomId).y,
    })),
    carbonCarbonBonds: skeleton.carbonCarbonBonds,
  });
}

/** Slides the whole molecule so that it sits in the middle of the drawing area. */
export function moveSkeletonToCentreOfDrawingArea(skeleton) {
  if (skeleton.carbonAtoms.length === 0) return skeleton;

  const box = boundingBoxAroundPoints(skeleton.carbonAtoms.map((carbonAtom) => ({ x: carbonAtom.positionX, y: carbonAtom.positionY })));
  const shiftX = SMALLEST_VISIBLE_DRAWING_AREA.left + SMALLEST_VISIBLE_DRAWING_AREA.width / 2 - (box.left + box.width / 2);
  const shiftY = SMALLEST_VISIBLE_DRAWING_AREA.top + SMALLEST_VISIBLE_DRAWING_AREA.height / 2 - (box.top + box.height / 2);

  return {
    carbonAtoms: skeleton.carbonAtoms.map((carbonAtom) => ({
      ...carbonAtom,
      positionX: carbonAtom.positionX + shiftX,
      positionY: carbonAtom.positionY + shiftY,
    })),
    carbonCarbonBonds: skeleton.carbonCarbonBonds,
  };
}
