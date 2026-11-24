/**
 * Deciding what happens when the student drops a new carbon at a point.
 *
 * The student never draws bonds. A new carbon is automatically bonded to the nearest
 * carbon that still has room for another bond (a carbon has room while it has at least
 * one hydrogen that the new carbon can replace).
 *
 * The new carbon takes the place of one of that carbon's hydrogens: the one pointing most
 * nearly towards the drop point. The preview shows which one, so the student can see that
 * adding a carbon means losing a hydrogen.
 */

import { carbonHasRoomForAnotherCarbon, findCarbonAtomById, isSkeletonEmpty } from '../chemistry/carbonSkeleton.js';
import { CLOSEST_ALLOWED_DISTANCE_BETWEEN_CARBONS } from './drawingDimensions.js';
import { placeHydrogensAroundCarbons } from './placeAtomsAroundCarbons.js';
import { angleFromPointToPoint, distanceBetweenPoints, sizeOfAngleBetweenDirections } from './vectorMaths.js';
import { message } from '../languages/translate.js';

/** The id of the hydrogen on the given carbon that points most nearly towards the drop point. */
function findHydrogenReplacedByNewCarbon(skeleton, bondToAtomId, dropPoint) {
  const carbonAtom = findCarbonAtomById(skeleton, bondToAtomId);
  const carbonPosition = { x: carbonAtom.positionX, y: carbonAtom.positionY };
  const directionToDropPoint = angleFromPointToPoint(carbonPosition, dropPoint);
  const angleAwayFromDropPoint = (hydrogen) =>
    sizeOfAngleBetweenDirections(angleFromPointToPoint(carbonPosition, { x: hydrogen.positionX, y: hydrogen.positionY }), directionToDropPoint);

  const hydrogensOnCarbon = placeHydrogensAroundCarbons(skeleton).filter((hydrogen) => hydrogen.carbonAtomId === bondToAtomId);
  const nearestHydrogen = hydrogensOnCarbon.reduce((nearestSoFar, hydrogen) =>
    angleAwayFromDropPoint(hydrogen) < angleAwayFromDropPoint(nearestSoFar) ? hydrogen : nearestSoFar,
  );
  return nearestHydrogen.hydrogenId;
}

/**
 * Returns one of:
 *   { canPlace: true,  bondToAtomId: 4, hydrogenIdReplaced: 'H-on-C4-number-2' }
 *   { canPlace: true,  bondToAtomId: null, hydrogenIdReplaced: null }    first carbon, nothing to bond to
 *   { canPlace: false, reasonCannotPlace }    a message, put into words by src/languages/translate.js
 */
export function planNewCarbonPlacement(skeleton, dropPoint) {
  if (isSkeletonEmpty(skeleton)) return { canPlace: true, bondToAtomId: null, hydrogenIdReplaced: null };

  const carbonsWithDistances = skeleton.carbonAtoms.map((carbonAtom) => ({
    carbonAtom,
    distanceFromDropPoint: distanceBetweenPoints(dropPoint, { x: carbonAtom.positionX, y: carbonAtom.positionY }),
  }));

  const isTooCloseToAnExistingCarbon = carbonsWithDistances.some(
    ({ distanceFromDropPoint }) => distanceFromDropPoint < CLOSEST_ALLOWED_DISTANCE_BETWEEN_CARBONS,
  );
  if (isTooCloseToAnExistingCarbon) {
    return { canPlace: false, reasonCannotPlace: message('drawing.tooCloseToAnotherCarbon') };
  }

  const carbonsWithRoomNearestFirst = carbonsWithDistances
    .filter(({ carbonAtom }) => carbonHasRoomForAnotherCarbon(skeleton, carbonAtom.atomId))
    .sort((first, second) => first.distanceFromDropPoint - second.distanceFromDropPoint);

  if (carbonsWithRoomNearestFirst.length === 0) {
    return { canPlace: false, reasonCannotPlace: message('drawing.everyCarbonHasFourBonds') };
  }

  const bondToAtomId = carbonsWithRoomNearestFirst[0].carbonAtom.atomId;
  return { canPlace: true, bondToAtomId, hydrogenIdReplaced: findHydrogenReplacedByNewCarbon(skeleton, bondToAtomId, dropPoint) };
}
