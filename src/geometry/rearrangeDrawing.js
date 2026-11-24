/**
 * Rearranging a drawing by hand. These change where atoms are drawn, never how they are joined.
 *
 *   Moving an atom:   any atom follows the pointer, but stops short of anything it would
 *                     overlap. That is a carbon, a hydrogen on a carbon, a halogen, OH, =O or
 *                     NH2 group (with its own hydrogens), a hydrogen of an OH or NH2, or the
 *                     O or NH in a bond (with its hydrogen). Its bonds stay as they are, and
 *                     only get longer or shorter, so the student can space the atoms out as
 *                     they like. The rest of the molecule stays where it is, except that the
 *                     hydrogens of a group go with it, and the hydrogens and groups of a carbon
 *                     go with the carbon.
 *
 *   Turning a bond:   one carbon of the bond stays still (the "pivot") and the other swings around
 *                     it, taking everything attached on its side of the bond with it.
 *                     If the swinging part runs into another branch on the pivot, that branch is
 *                     pushed round too, as long as it has room. The branch with the most carbons
 *                     never moves, so the molecule as a whole stays put. When nothing more can be
 *                     pushed, the turn stops at the furthest point with no overlaps.
 *
 * A hand-drawn molecule may already have overlaps, so "no overlaps" really means
 * "no more overlaps than when the drag started" (see countOverlapsInDrawing.js).
 *
 * None of these may change the molecule's name. Whether a C=C is E or Z is read from the
 * drawing (see doubleBondConfiguration.js), so a move or turn that would take a group across
 * the line of a C=C, swapping its E and Z (or onto that line, so it is neither), stops just
 * before it, as it does before an overlap. A C=C drawn in a straight line, which is neither E
 * nor Z, can still be bent either way, as that is how a student draws one of its stereoisomers.
 *
 * Hydrogens and groups are usually placed afresh round a carbon's bonds whenever they change
 * (see placeAtomsAroundCarbons.js). Once one of them is moved by hand, the carbon keeps all of
 * them where they are (its outerAtomLayout), so they stay where the student put them. While a
 * drag is going on, the hydrogens and groups on each carbon of a C=C are kept where they are
 * too, so they get in the way like any other atom rather than slipping round to the other side.
 * When the drag ends (letGoOfHeldOuterAtoms) those go back to their usual places, which are
 * checked at every step not to overlap or change E or Z either.
 */

import { findBondBetween, findCarbonAtomById, listCarbonIdsBeyondBond, listGroupsOnCarbon, listNeighbourCarbonIds } from '../chemistry/carbonSkeleton.js';
import { describeEveryDoubleBond } from '../chemistry/doubleBondConfiguration.js';
import { countOverlapsInDrawing } from './countOverlapsInDrawing.js';
import { NITROGEN_TO_HYDROGEN_BOND_LENGTH } from './drawingDimensions.js';
import {
  bondLengthToHydrogenOfGroup,
  bondLengthToOuterAtom,
  directionToSideOfBond,
  keepGroupsPointingTheSameWay,
  listHydrogenLayoutOfGroup,
  listOuterAtomLayout,
  placeAtomsAroundCarbons,
  placeLinkAtomOfBond,
} from './placeAtomsAroundCarbons.js';
import { angleFromPointToPoint, distanceBetweenPoints, normaliseAngle, pointAtAngleAndDistance, rotatePointAroundCentre } from './vectorMaths.js';

/** A turn is tried in steps this small, so that it stops close to whatever is in the way. */
const LARGEST_TURN_STEP_IN_DEGREES = 2;

/** Why a move or turn stopped short of where the pointer is. */
export const HELD_BACK_BY_OVERLAP = 'overlap';
export const HELD_BACK_BY_DOUBLE_BOND_CONFIGURATION = 'doubleBondConfiguration';

function positionOfCarbon(skeleton, atomId) {
  const carbonAtom = findCarbonAtomById(skeleton, atomId);
  return { x: carbonAtom.positionX, y: carbonAtom.positionY };
}

/** Every C=C that is E or Z as drawn: Map from bondKey to 'E' or 'Z'. These must stay as they are. */
function listConfigurationsToKeep(skeleton) {
  return new Map([...describeEveryDoubleBond(skeleton)].filter(([, configuration]) => configuration !== 'unspecified'));
}

function keepsEveryConfiguration(skeleton, configurationsToKeep) {
  if (configurationsToKeep.size === 0) return true;
  const configurations = describeEveryDoubleBond(skeleton);
  return [...configurationsToKeep].every(([key, configuration]) => configurations.get(key) === configuration);
}

/** The carbon with its hydrogens and groups kept where they are drawn now, and each group in the place it is drawn in. */
function keepOuterAtomsOfCarbonWhereTheyAre(skeleton, carbonAtom, isOnlyForThisDrag) {
  const drawnPlaceByGroupIndex = new Map();
  for (const outerAtom of placeAtomsAroundCarbons(skeleton)) {
    if (outerAtom.carbonAtomId === carbonAtom.atomId && outerAtom.symbol !== 'H') drawnPlaceByGroupIndex.set(outerAtom.groupIndex, outerAtom.place);
  }
  const { isOuterAtomLayoutHeld, ...kept } = carbonAtom;
  kept.outerAtomLayout = listOuterAtomLayout(skeleton, carbonAtom).map((placed) => ({ ...placed }));
  if (isOnlyForThisDrag) kept.isOuterAtomLayoutHeld = true;
  if (drawnPlaceByGroupIndex.size > 0) {
    kept.groups = listGroupsOnCarbon(carbonAtom).map((group, groupIndex) => ({ ...group, place: drawnPlaceByGroupIndex.get(groupIndex) }));
  }
  return kept;
}

/** Whether a carbon already keeps its hydrogens and groups where they were put by hand. */
function hasOuterAtomsPlacedByHand(skeleton, carbonAtom) {
  return (
    carbonAtom.outerAtomLayout !== undefined &&
    !carbonAtom.isOuterAtomLayoutHeld &&
    listOuterAtomLayout(skeleton, carbonAtom) === carbonAtom.outerAtomLayout
  );
}

/**
 * The skeleton with the hydrogens and groups on each carbon of a C=C held where they are drawn
 * now, until letGoOfHeldOuterAtoms. Carbons whose hydrogens and groups were put where they are
 * by hand keep them there anyway.
 */
export function holdOuterAtomsOfDoubleBondCarbons(skeleton) {
  const heldCarbonIds = new Set();
  for (const key of describeEveryDoubleBond(skeleton).keys()) {
    for (const atomId of key.split('-').map(Number)) {
      if (!hasOuterAtomsPlacedByHand(skeleton, findCarbonAtomById(skeleton, atomId))) heldCarbonIds.add(atomId);
    }
  }
  if (heldCarbonIds.size === 0) return skeleton;
  return {
    ...skeleton,
    carbonAtoms: skeleton.carbonAtoms.map((carbonAtom) =>
      heldCarbonIds.has(carbonAtom.atomId) ? keepOuterAtomsOfCarbonWhereTheyAre(skeleton, carbonAtom, true) : carbonAtom,
    ),
  };
}

/** Puts held hydrogens and groups back in their usual places, each group in the free place nearest where it was. */
export function letGoOfHeldOuterAtoms(skeleton) {
  if (!skeleton.carbonAtoms.some((carbonAtom) => carbonAtom.isOuterAtomLayoutHeld)) return skeleton;
  const released = {
    ...skeleton,
    carbonAtoms: skeleton.carbonAtoms.map((carbonAtom) => {
      if (!carbonAtom.isOuterAtomLayoutHeld) return carbonAtom;
      const { outerAtomLayout, isOuterAtomLayoutHeld, ...carbonAtomWithoutThem } = carbonAtom;
      return carbonAtomWithoutThem;
    }),
  };
  return keepGroupsPointingTheSameWay(skeleton, released);
}

/**
 * Whether a rearranged drawing may be shown: null if so, otherwise why not. The drawing is
 * checked both as it is shown during the drag and as it will be once the held atoms are let go.
 */
function findWhatHoldsBack(skeleton, overlapsAllowed, configurationsToKeep) {
  const released = letGoOfHeldOuterAtoms(skeleton);
  const drawingsToCheck = released === skeleton ? [skeleton] : [skeleton, released];
  if (drawingsToCheck.some((drawing) => countOverlapsInDrawing(drawing) > overlapsAllowed)) return HELD_BACK_BY_OVERLAP;
  if (drawingsToCheck.some((drawing) => !keepsEveryConfiguration(drawing, configurationsToKeep))) return HELD_BACK_BY_DOUBLE_BOND_CONFIGURATION;
  return null;
}

/*
 * Which atom is being moved is given as one of:
 *   { kind: 'carbon', atomId }
 *   { kind: 'outerAtom', carbonAtomId, place }       a hydrogen or group on a carbon
 *   { kind: 'groupHydrogen', carbonAtomId, groupIndex, hydrogenIndex }
 *                                                     the H of OH, or one of the two of NH2
 *   { kind: 'linkAtom', firstAtomId, secondAtomId }   the O or NH in a bond
 *   { kind: 'linkHydrogen', firstAtomId, secondAtomId }  the H of that NH
 */
export const MOVED_CARBON = 'carbon';
export const MOVED_OUTER_ATOM = 'outerAtom';
export const MOVED_GROUP_HYDROGEN = 'groupHydrogen';
export const MOVED_LINK_ATOM = 'linkAtom';
export const MOVED_LINK_HYDROGEN = 'linkHydrogen';

function findOuterAtom(skeleton, carbonAtomId, isWanted) {
  return placeAtomsAroundCarbons(skeleton).find((outerAtom) => outerAtom.carbonAtomId === carbonAtomId && isWanted(outerAtom));
}

function findGroupAtom(skeleton, carbonAtomId, wantedGroupIndex) {
  return findOuterAtom(skeleton, carbonAtomId, ({ symbol, groupIndex }) => symbol !== 'H' && groupIndex === wantedGroupIndex);
}

function linkBondOf(skeleton, atom) {
  return findBondBetween(skeleton, atom.firstAtomId, atom.secondAtomId);
}

function positionOfCarbonAtom(carbonAtom) {
  return { x: carbonAtom.positionX, y: carbonAtom.positionY };
}

/** Where an atom (described as above) is drawn now, as { x, y }, or null if there is no such atom. */
export function findAtomPosition(skeleton, atom) {
  switch (atom.kind) {
    case MOVED_CARBON: {
      const carbonAtom = findCarbonAtomById(skeleton, atom.atomId);
      return carbonAtom ? positionOfCarbonAtom(carbonAtom) : null;
    }
    case MOVED_OUTER_ATOM: {
      const outerAtom = findOuterAtom(skeleton, atom.carbonAtomId, ({ place }) => place === atom.place);
      return outerAtom ? { x: outerAtom.positionX, y: outerAtom.positionY } : null;
    }
    case MOVED_GROUP_HYDROGEN: {
      const outerAtom = findGroupAtom(skeleton, atom.carbonAtomId, atom.groupIndex);
      const [x, y] =
        atom.hydrogenIndex === 0
          ? [outerAtom?.hydrogenPositionX, outerAtom?.hydrogenPositionY]
          : [outerAtom?.secondHydrogenPositionX, outerAtom?.secondHydrogenPositionY];
      return x === undefined ? null : { x, y };
    }
    case MOVED_LINK_ATOM:
    case MOVED_LINK_HYDROGEN: {
      const bond = linkBondOf(skeleton, atom);
      if (!bond?.linkAtom) return null;
      const { atomX, atomY, hydrogenX, hydrogenY } = placeLinkAtomOfBond(skeleton, bond);
      if (atom.kind === MOVED_LINK_ATOM) return { x: atomX, y: atomY };
      return hydrogenX === undefined ? null : { x: hydrogenX, y: hydrogenY };
    }
    default:
      return null;
  }
}

function withCarbonChanged(skeleton, atomId, changeCarbon) {
  return { ...skeleton, carbonAtoms: skeleton.carbonAtoms.map((carbonAtom) => (carbonAtom.atomId === atomId ? changeCarbon(carbonAtom) : carbonAtom)) };
}

function withBondChanged(skeleton, bondToChange, changeBond) {
  return { ...skeleton, carbonCarbonBonds: skeleton.carbonCarbonBonds.map((bond) => (bond === bondToChange ? changeBond(bond) : bond)) };
}

/** The skeleton with the atom drawn at newPosition, its bonds made longer or shorter to reach it. */
function placeAtomAt(skeleton, atom, newPosition) {
  switch (atom.kind) {
    case MOVED_CARBON:
      return withCarbonChanged(skeleton, atom.atomId, (carbonAtom) => ({ ...carbonAtom, positionX: newPosition.x, positionY: newPosition.y }));
    case MOVED_OUTER_ATOM:
      return withCarbonChanged(skeleton, atom.carbonAtomId, (carbonAtom) => {
        const carbonPosition = positionOfCarbonAtom(carbonAtom);
        const { symbol } = findOuterAtom(skeleton, atom.carbonAtomId, ({ place }) => place === atom.place);
        const outerAtomLayout = [...carbonAtom.outerAtomLayout];
        outerAtomLayout[atom.place] = {
          direction: angleFromPointToPoint(carbonPosition, newPosition),
          distanceScale: distanceBetweenPoints(carbonPosition, newPosition) / bondLengthToOuterAtom(symbol),
        };
        return { ...carbonAtom, outerAtomLayout };
      });
    case MOVED_GROUP_HYDROGEN:
      return withCarbonChanged(skeleton, atom.carbonAtomId, (carbonAtom) => {
        const outerAtom = findGroupAtom(skeleton, atom.carbonAtomId, atom.groupIndex);
        const groupPosition = { x: outerAtom.positionX, y: outerAtom.positionY };
        const lineOn = angleFromPointToPoint(positionOfCarbonAtom(carbonAtom), groupPosition);
        const groups = listGroupsOnCarbon(carbonAtom).map((group, groupIndex) => {
          if (groupIndex !== atom.groupIndex) return group;
          const hydrogenLayout = listHydrogenLayoutOfGroup(group).map((placed) => ({ ...placed }));
          hydrogenLayout[atom.hydrogenIndex] = {
            turn: normaliseAngle(angleFromPointToPoint(groupPosition, newPosition) - lineOn),
            distanceScale: distanceBetweenPoints(groupPosition, newPosition) / bondLengthToHydrogenOfGroup(group.symbol),
          };
          return { ...group, hydrogenLayout };
        });
        return { ...carbonAtom, groups };
      });
    case MOVED_LINK_ATOM: {
      const bond = linkBondOf(skeleton, atom);
      const firstPoint = positionOfCarbonAtom(findCarbonAtomById(skeleton, bond.firstAtomId));
      const secondPoint = positionOfCarbonAtom(findCarbonAtomById(skeleton, bond.secondAtomId));
      const bondLength = distanceBetweenPoints(firstPoint, secondPoint);
      const alongUnit = pointAtAngleAndDistance({ x: 0, y: 0 }, angleFromPointToPoint(firstPoint, secondPoint), 1);
      const acrossUnit = pointAtAngleAndDistance({ x: 0, y: 0 }, directionToSideOfBond(skeleton, bond), 1);
      const offset = { x: newPosition.x - firstPoint.x, y: newPosition.y - firstPoint.y };
      const linkAtomLayout = {
        along: (offset.x * alongUnit.x + offset.y * alongUnit.y) / bondLength,
        across: (offset.x * acrossUnit.x + offset.y * acrossUnit.y) / bondLength,
      };
      return withBondChanged(skeleton, bond, (linkBond) => ({ ...linkBond, linkAtomLayout }));
    }
    case MOVED_LINK_HYDROGEN: {
      const bond = linkBondOf(skeleton, atom);
      const { atomX, atomY } = placeLinkAtomOfBond(skeleton, bond);
      const atomPosition = { x: atomX, y: atomY };
      const linkHydrogenLayout = {
        turn: normaliseAngle(angleFromPointToPoint(atomPosition, newPosition) - directionToSideOfBond(skeleton, bond)),
        distanceScale: distanceBetweenPoints(atomPosition, newPosition) / NITROGEN_TO_HYDROGEN_BOND_LENGTH,
      };
      return withBondChanged(skeleton, bond, (linkBond) => ({ ...linkBond, linkHydrogenLayout }));
    }
    default:
      return skeleton;
  }
}

/**
 * Sets up moving one atom (described as above). The returned "move" is passed to moveAtom. Its
 * startingSkeleton has the hydrogens and groups of the C=C carbons held, and, when a hydrogen
 * or group is moved, those of its carbon kept where they are (see the top of this file).
 */
export function startMovingAtom(skeleton, atom) {
  const prepared =
    atom.kind === MOVED_OUTER_ATOM
      ? withCarbonChanged(skeleton, atom.carbonAtomId, (carbonAtom) => keepOuterAtomsOfCarbonWhereTheyAre(skeleton, carbonAtom, false))
      : skeleton;
  return {
    startingSkeleton: holdOuterAtomsOfDoubleBondCarbons(prepared),
    atom,
    overlapsAllowed: countOverlapsInDrawing(skeleton),
    configurationsToKeep: listConfigurationsToKeep(skeleton),
  };
}

/**
 * Moves the atom to a new position: { skeleton } with it moved, or { heldBackBy } if that
 * would make anything overlap, or change whether a C=C is E or Z.
 */
export function moveAtom(move, newPosition) {
  const movedSkeleton = placeAtomAt(move.startingSkeleton, move.atom, newPosition);
  const heldBackBy = findWhatHoldsBack(movedSkeleton, move.overlapsAllowed, move.configurationsToKeep);
  return heldBackBy === null ? { skeleton: movedSkeleton } : { heldBackBy };
}

/**
 * Returns the skeleton with one atom moved, or null if that would make anything overlap
 * (overlapsAllowed: how many overlaps there were before the move started) or change whether
 * a C=C is E or Z.
 */
export function moveAtomIfThereIsRoom(skeleton, atom, newPosition, overlapsAllowed = countOverlapsInDrawing(skeleton)) {
  const moved = moveAtom({ ...startMovingAtom(skeleton, atom), overlapsAllowed }, newPosition);
  return moved.skeleton ? letGoOfHeldOuterAtoms(moved.skeleton) : null;
}

/** moveAtomIfThereIsRoom for a carbon. */
export function moveCarbonIfThereIsRoom(skeleton, atomId, newPosition, overlapsAllowed = countOverlapsInDrawing(skeleton)) {
  return moveAtomIfThereIsRoom(skeleton, { kind: MOVED_CARBON, atomId }, newPosition, overlapsAllowed);
}

/**
 * Sets up a turn of the bond between pivotAtomId and swingingAtomId.
 * The returned "turn" is passed to turnBondTowards and arrangeSkeletonForTurn.
 */
export function startTurningBond(skeleton, pivotAtomId, swingingAtomId) {
  // A branch is one neighbour of the pivot and everything beyond it.
  const branches = listNeighbourCarbonIds(skeleton, pivotAtomId).map((firstAtomId) => ({
    firstAtomId,
    carbonIds: listCarbonIdsBeyondBond(skeleton, pivotAtomId, firstAtomId),
  }));
  const otherBranches = branches.filter((branch) => branch.firstAtomId !== swingingAtomId);
  const largestOtherBranch = otherBranches.reduce(
    (largestSoFar, branch) => (largestSoFar === null || branch.carbonIds.size > largestSoFar.carbonIds.size ? branch : largestSoFar),
    null,
  );

  return {
    startingSkeleton: holdOuterAtomsOfDoubleBondCarbons(skeleton),
    pivotPoint: positionOfCarbon(skeleton, pivotAtomId),
    branches,
    swingingAtomId,
    fixedBranchFirstAtomId: largestOtherBranch?.firstAtomId ?? null,
    overlapsAllowed: countOverlapsInDrawing(skeleton),
    configurationsToKeep: listConfigurationsToKeep(skeleton),
    /** How far each branch has turned so far, by the id of its first carbon. */
    turnByBranch: new Map(branches.map((branch) => [branch.firstAtomId, 0])),
    /** Why the turn last stopped short of where it was wanted (HELD_BACK_BY_...), or null. */
    heldBackBy: null,
  };
}

/**
 * The skeleton with every branch turned by the amount stored in the turn. Hydrogens and groups
 * kept where they are (see the top of this file) turn with their carbon.
 */
export function arrangeSkeletonForTurn(turn) {
  const turnByCarbonId = new Map();
  for (const branch of turn.branches) {
    for (const carbonId of branch.carbonIds) turnByCarbonId.set(carbonId, turn.turnByBranch.get(branch.firstAtomId));
  }

  return {
    ...turn.startingSkeleton,
    carbonAtoms: turn.startingSkeleton.carbonAtoms.map((carbonAtom) => {
      const turnInDegrees = turnByCarbonId.get(carbonAtom.atomId) ?? 0;
      if (turnInDegrees === 0) return carbonAtom;
      const turnedPosition = rotatePointAroundCentre({ x: carbonAtom.positionX, y: carbonAtom.positionY }, turn.pivotPoint, turnInDegrees);
      const turnedCarbon = { ...carbonAtom, positionX: turnedPosition.x, positionY: turnedPosition.y };
      if (carbonAtom.outerAtomLayout !== undefined) {
        turnedCarbon.outerAtomLayout = carbonAtom.outerAtomLayout.map((placed) => ({ ...placed, direction: normaliseAngle(placed.direction + turnInDegrees) }));
      }
      return turnedCarbon;
    }),
  };
}

/**
 * The other branches the swinging branch would meet, nearest first, when turning in one
 * direction (+1 clockwise, -1 anticlockwise). Stops before the fixed branch, because
 * branches beyond it can't be reached without pushing it.
 */
function listBranchesThatCanBePushed(turn, turnDirection) {
  const arrangedSkeleton = arrangeSkeletonForTurn(turn);
  const directionFromPivot = (atomId) => angleFromPointToPoint(turn.pivotPoint, positionOfCarbon(arrangedSkeleton, atomId));
  const swingingDirection = directionFromPivot(turn.swingingAtomId);

  const otherBranchesNearestFirst = turn.branches
    .filter((branch) => branch.firstAtomId !== turn.swingingAtomId)
    .map((branch) => {
      const angleAhead = (((directionFromPivot(branch.firstAtomId) - swingingDirection) * turnDirection) % 360 + 360) % 360;
      return { branch, angleAhead };
    })
    .sort((first, second) => first.angleAhead - second.angleAhead)
    .map(({ branch }) => branch);

  const fixedBranchPosition = otherBranchesNearestFirst.findIndex((branch) => branch.firstAtomId === turn.fixedBranchFirstAtomId);
  return fixedBranchPosition === -1 ? otherBranchesNearestFirst : otherBranchesNearestFirst.slice(0, fixedBranchPosition);
}

/** Tries one small step of the turn. Returns { turn } with the new turn, or { heldBackBy } if it can't be made. */
function tryTurnStep(turn, stepInDegrees) {
  const pushableBranches = listBranchesThatCanBePushed(turn, Math.sign(stepInDegrees));
  let heldBackBy = HELD_BACK_BY_OVERLAP;

  // First try moving only the swinging branch, then pushing one more neighbouring branch each time.
  for (let pushedCount = 0; pushedCount <= pushableBranches.length; pushedCount++) {
    const branchesToTurn = [{ firstAtomId: turn.swingingAtomId }, ...pushableBranches.slice(0, pushedCount)];
    const turnByBranch = new Map(turn.turnByBranch);
    for (const { firstAtomId } of branchesToTurn) turnByBranch.set(firstAtomId, turnByBranch.get(firstAtomId) + stepInDegrees);

    const candidateTurn = { ...turn, turnByBranch };
    const reason = findWhatHoldsBack(arrangeSkeletonForTurn(candidateTurn), turn.overlapsAllowed, turn.configurationsToKeep);
    if (reason === null) return { turn: candidateTurn };
    if (reason === HELD_BACK_BY_DOUBLE_BOND_CONFIGURATION) heldBackBy = reason;
  }
  return { heldBackBy };
}

/**
 * Turns the swinging branch as far as it can towards the wanted total turn (in degrees from
 * where it started), stopping at the last position without overlaps, and before any C=C would
 * change between E and Z. The returned turn's heldBackBy says which of the two stopped it.
 */
export function turnBondTowards(turn, wantedTotalTurn) {
  let currentTurn = { ...turn, heldBackBy: null };
  for (;;) {
    const remainingTurn = wantedTotalTurn - currentTurn.turnByBranch.get(currentTurn.swingingAtomId);
    if (Math.abs(remainingTurn) < 1e-6) return currentTurn;

    const step = Math.max(-LARGEST_TURN_STEP_IN_DEGREES, Math.min(LARGEST_TURN_STEP_IN_DEGREES, remainingTurn));
    const tried = tryTurnStep(currentTurn, step);
    if (tried.turn === undefined) return { ...currentTurn, heldBackBy: tried.heldBackBy };
    currentTurn = tried.turn;
  }
}

/** How far the pointer has gone round the pivot since last time, between -180 and 180 degrees. */
export function changeInPointerAngleAroundPivot(turn, previousPointerPoint, pointerPoint) {
  return normaliseAngle(
    angleFromPointToPoint(turn.pivotPoint, pointerPoint) - angleFromPointToPoint(turn.pivotPoint, previousPointerPoint),
  );
}
