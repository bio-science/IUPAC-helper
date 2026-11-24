/**
 * Deciding what a click does while a halogen (F, Cl, Br or I), OH or =O is chosen in the Add atom menu.
 *
 * The click goes to the hydrogen or group nearest the pointer, as long as it is close enough:
 *   a hydrogen on carbon          is swapped for the chosen group, in the same place
 *   a different group             is changed to the chosen one (Cl -> Br, Cl -> OH)
 *   the same group                is swapped back for a hydrogen, so a second click undoes the first
 * The O of C=O makes two bonds, so it takes the place of two hydrogens: the one clicked, and
 * another on the same carbon. On a carbon without enough hydrogens, the click is blocked.
 */

import { carbonHasRoomForGroup, groupCanBeChanged } from '../chemistry/carbonSkeleton.js';
import { placeAtomsAroundCarbons } from './placeAtomsAroundCarbons.js';
import { distanceBetweenPoints } from './vectorMaths.js';

/** How close (in drawing units) the pointer must be to a hydrogen or group for a click to reach it. */
const FURTHEST_REACH_FROM_POINTER = 34;

/**
 * Returns null if no hydrogen or group is close enough, otherwise one of:
 *   { action: 'add',    carbonAtomId: 2, place: 1,      outerAtomId: 'H-on-C2-number-2',   positionX, positionY }
 *   { action: 'change', carbonAtomId: 2, groupIndex: 0, outerAtomId: 'Cl-on-C2-number-1',  positionX, positionY }
 *   { action: 'remove', carbonAtomId: 2, groupIndex: 0, outerAtomId: 'Br-on-C2-number-1',  positionX, positionY }
 *   { action: 'blocked', ... }  like 'add' or 'change', when the carbon has no hydrogen to spare for C=O
 * positionX and positionY are where the atom that is clicked is drawn (for OH, its oxygen).
 * The hydrogen of an OH group counts as part of the group.
 */
export function planGroupSwap(skeleton, pointerPoint, chosenGroup) {
  let nearestOuterAtom = null;
  let nearestDistance = FURTHEST_REACH_FROM_POINTER;
  for (const outerAtom of placeAtomsAroundCarbons(skeleton)) {
    const pointsOfAtom = [{ x: outerAtom.positionX, y: outerAtom.positionY }];
    if (outerAtom.hydrogenPositionX !== undefined) pointsOfAtom.push({ x: outerAtom.hydrogenPositionX, y: outerAtom.hydrogenPositionY });
    const distance = Math.min(...pointsOfAtom.map((point) => distanceBetweenPoints(pointerPoint, point)));
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestOuterAtom = outerAtom;
    }
  }
  if (nearestOuterAtom === null) return null;

  const { carbonAtomId, outerAtomId, positionX, positionY, symbol } = nearestOuterAtom;
  if (symbol === 'H') {
    const action = carbonHasRoomForGroup(skeleton, carbonAtomId, chosenGroup) ? 'add' : 'blocked';
    return { action, carbonAtomId, place: nearestOuterAtom.place, outerAtomId, positionX, positionY };
  }
  const { groupIndex } = nearestOuterAtom;
  if (symbol === chosenGroup) return { action: 'remove', carbonAtomId, groupIndex, outerAtomId, positionX, positionY };
  const action = groupCanBeChanged(skeleton, carbonAtomId, groupIndex, chosenGroup) ? 'change' : 'blocked';
  return { action, carbonAtomId, groupIndex, outerAtomId, positionX, positionY };
}
