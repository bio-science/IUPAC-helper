/**
 * Deciding what happens when the student drops an O, an N or a halogen (chosen in the Add atom
 * menu) at a point in the drawing. What it becomes depends on where it lands:
 *
 *   on a hydrogen, or a carbon     it takes the place of a hydrogen: O as an OH group (an
 *                                  alcohol, or with a C=O on the same carbon, a carboxylic acid),
 *                                  N as an NH2 group (an amine, or on a C=O carbon, an amide)
 *   on a bond between two carbons  O and N go in the middle of it: O as -O- (an ether, or next
 *                                  to a C=O an ester), N as -NH- (a secondary amine, or next to
 *                                  a C=O an N-substituted amide)
 *   on the bond to an OH or C=O    with O chosen, the bond is made double (C=O) or single (OH)
 *   on a group                     of the same element: the group comes off again; of another:
 *                                  it changes to the chosen one (Cl -> OH)
 *
 * Halogens make only one bond, so they only ever take the place of a hydrogen.
 */

import {
  AMIDE_LINK_NITROGEN,
  AMINO_GROUP,
  CARBONYL_OXYGEN,
  ESTER_LINK_OXYGEN,
  HYDROXYL_GROUP,
  chooseGroupBondChange,
  findCarbonAtomById,
  isDoubleBond,
  isHalogenSymbol,
  linkAtomOf,
} from '../chemistry/carbonSkeleton.js';
import { planGroupSwap } from './planGroupSwap.js';
import { circleRadiusOfOuterAtom, placeAtomsAroundCarbons } from './placeAtomsAroundCarbons.js';
import { CARBON_CIRCLE_RADIUS, HYDROGEN_CIRCLE_RADIUS } from './drawingDimensions.js';
import { distanceBetweenPoints, distanceFromPointToSegment } from './vectorMaths.js';

/** The elements the Add atom menu places by where they are dropped. */
export const OXYGEN = 'O';
export const NITROGEN = 'N';

/** The group each element makes in place of a hydrogen, and the atom it makes in the middle of a bond. */
const GROUP_MADE_BY_ELEMENT = { [OXYGEN]: HYDROXYL_GROUP, [NITROGEN]: AMINO_GROUP };
const LINK_ATOM_MADE_BY_ELEMENT = { [OXYGEN]: ESTER_LINK_OXYGEN, [NITROGEN]: AMIDE_LINK_NITROGEN };

/** The groups that count as "the same element" for each choice, so dropping on one takes it off. */
const GROUPS_OF_ELEMENT = { [OXYGEN]: [HYDROXYL_GROUP, CARBONYL_OXYGEN], [NITROGEN]: [AMINO_GROUP] };

/** How close (in drawing units) the point must be to a bond's line to land on it. */
const BOND_REACH = 10;

/** How close the point must be to an atom's circle (beyond its edge) to land on it. */
const ATOM_REACH = 3;

/** True for every symbol this module can place: O, N and the halogens. */
export function canBePlacedByDropping(symbol) {
  return symbol === OXYGEN || symbol === NITROGEN || isHalogenSymbol(symbol);
}

/** The group the chosen symbol makes in place of a hydrogen: OH for O, NH2 for N, the halogen itself. */
export function groupMadeBy(symbol) {
  return GROUP_MADE_BY_ELEMENT[symbol] ?? symbol;
}

/** The outer atom (hydrogen or group) whose circle the point is on, if any. */
function findOuterAtomAtPoint(skeleton, point) {
  return placeAtomsAroundCarbons(skeleton).find((outerAtom) => {
    if (distanceBetweenPoints(point, { x: outerAtom.positionX, y: outerAtom.positionY }) <= circleRadiusOfOuterAtom(outerAtom.symbol) + ATOM_REACH) {
      return true;
    }
    const hydrogensOfGroup = [
      [outerAtom.hydrogenPositionX, outerAtom.hydrogenPositionY],
      [outerAtom.secondHydrogenPositionX, outerAtom.secondHydrogenPositionY],
    ].filter(([x]) => x !== undefined);
    return hydrogensOfGroup.some(([x, y]) => distanceBetweenPoints(point, { x, y }) <= HYDROGEN_CIRCLE_RADIUS + ATOM_REACH);
  });
}

/** The carbon whose circle the point is on, if any. */
export function findCarbonAtPoint(skeleton, point) {
  return skeleton.carbonAtoms.find(
    (carbonAtom) => distanceBetweenPoints(point, { x: carbonAtom.positionX, y: carbonAtom.positionY }) <= CARBON_CIRCLE_RADIUS + ATOM_REACH,
  );
}

/** The bond between two carbons whose line the point is on (the nearest, if more than one), or undefined. */
export function findCarbonCarbonBondAtPoint(skeleton, point) {
  let nearestBond;
  let nearestDistance = BOND_REACH;
  for (const bond of skeleton.carbonCarbonBonds) {
    const first = findCarbonAtomById(skeleton, bond.firstAtomId);
    const second = findCarbonAtomById(skeleton, bond.secondAtomId);
    const distance = distanceFromPointToSegment(point, { x: first.positionX, y: first.positionY }, { x: second.positionX, y: second.positionY });
    if (distance <= nearestDistance) {
      nearestDistance = distance;
      nearestBond = bond;
    }
  }
  return nearestBond;
}

/** The group (not a hydrogen) whose bond to its carbon the point is on: { carbonAtomId, groupIndex, symbol }, or undefined. */
export function findGroupBondAtPoint(skeleton, point) {
  let nearestGroup;
  let nearestDistance = BOND_REACH;
  for (const outerAtom of placeAtomsAroundCarbons(skeleton)) {
    if (outerAtom.symbol === 'H') continue;
    const carbon = findCarbonAtomById(skeleton, outerAtom.carbonAtomId);
    const distance = distanceFromPointToSegment(point, { x: carbon.positionX, y: carbon.positionY }, { x: outerAtom.positionX, y: outerAtom.positionY });
    if (distance <= nearestDistance) {
      nearestDistance = distance;
      nearestGroup = { carbonAtomId: outerAtom.carbonAtomId, groupIndex: outerAtom.groupIndex, symbol: outerAtom.symbol };
    }
  }
  return nearestGroup;
}

/**
 * Swapping a hydrogen or group for the chosen symbol's group, as planGroupSwap does, except that
 * dropping O on an OH or C=O (or N on an NH2) takes it off, as the same element is already there.
 */
function planSwapAt(skeleton, point, symbol) {
  const group = groupMadeBy(symbol);
  const swapPlan = planGroupSwap(skeleton, point, group);
  if (swapPlan === null) return null;
  if (swapPlan.action === 'change' || swapPlan.action === 'blocked') {
    const { symbol: existingSymbol } = placeAtomsAroundCarbons(skeleton).find(({ outerAtomId }) => outerAtomId === swapPlan.outerAtomId);
    if ((GROUPS_OF_ELEMENT[symbol] ?? [symbol]).includes(existingSymbol)) return { kind: 'group', group, ...swapPlan, action: 'remove' };
  }
  return { kind: 'group', group, ...swapPlan };
}

/** Dropping on a carbon: its hydrogen nearest the point is swapped. */
function planDropOnCarbon(skeleton, carbonAtom, point, symbol) {
  const hydrogensOnCarbon = placeAtomsAroundCarbons(skeleton).filter(
    (outerAtom) => outerAtom.carbonAtomId === carbonAtom.atomId && outerAtom.symbol === 'H',
  );
  if (hydrogensOnCarbon.length === 0) return { kind: 'carbonIsFull', carbonAtomId: carbonAtom.atomId };
  const distanceTo = (hydrogen) => distanceBetweenPoints(point, { x: hydrogen.positionX, y: hydrogen.positionY });
  const nearestHydrogen = hydrogensOnCarbon.reduce((nearestSoFar, hydrogen) => (distanceTo(hydrogen) < distanceTo(nearestSoFar) ? hydrogen : nearestSoFar));
  return planSwapAt(skeleton, { x: nearestHydrogen.positionX, y: nearestHydrogen.positionY }, symbol);
}

/** Dropping O or N on a bond between two carbons. */
function planDropOnBond(bond, symbol) {
  const linkAtom = LINK_ATOM_MADE_BY_ELEMENT[symbol];
  const { firstAtomId, secondAtomId } = bond;
  if (isDoubleBond(bond)) return { kind: 'link', action: 'cannotLink', firstAtomId, secondAtomId, linkAtom };
  return { kind: 'link', action: linkAtomOf(bond) === linkAtom ? 'removeLink' : 'addLink', firstAtomId, secondAtomId, linkAtom };
}

/**
 * What dropping the chosen symbol (O, N, F, Cl, Br or I) at the point would do. Returns null when
 * the point isn't on or near anything it could go on, otherwise one of:
 *   { kind: 'group', group: 'OH', action: 'add' | 'change' | 'remove' | 'blocked', ... }
 *       a hydrogen or group swapped, with the details from planGroupSwap.js
 *   { kind: 'link', action: 'addLink' | 'removeLink' | 'cannotLink', firstAtomId, secondAtomId, linkAtom: 'O' | 'NH' }
 *       an O or NH put in the middle of a bond between two carbons, or taken out again
 *       (cannotLink: it is a double bond)
 *   { kind: 'groupBond', action: 'makeDouble' | 'makeSingle' | 'cannotMakeDouble', carbonAtomId, groupIndex }
 *       the bond from a carbon to its OH made double, or of its C=O made single
 *   { kind: 'carbonIsFull', carbonAtomId }
 *       on a carbon with no hydrogen left to swap
 */
export function planAtomDrop(skeleton, point, symbol) {
  if (!canBePlacedByDropping(symbol)) return null;
  const isHalogen = isHalogenSymbol(symbol);

  if (findOuterAtomAtPoint(skeleton, point)) return planSwapAt(skeleton, point, symbol);

  const carbonAtom = findCarbonAtPoint(skeleton, point);
  if (carbonAtom) return planDropOnCarbon(skeleton, carbonAtom, point, symbol);

  if (symbol === OXYGEN) {
    const groupBond = findGroupBondAtPoint(skeleton, point);
    const change = groupBond && chooseGroupBondChange(skeleton, groupBond.carbonAtomId, groupBond.groupIndex);
    if (change && change !== 'notOxygen') {
      return { kind: 'groupBond', action: change, carbonAtomId: groupBond.carbonAtomId, groupIndex: groupBond.groupIndex };
    }
  }

  if (!isHalogen) {
    const bond = findCarbonCarbonBondAtPoint(skeleton, point);
    if (bond) return planDropOnBond(bond, symbol);
  }

  return planSwapAt(skeleton, point, symbol);
}

