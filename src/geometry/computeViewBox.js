/**
 * Working out which part of the drawing to show (the SVG "viewBox").
 *
 * The student can drag the view around, and "Reset view" brings it back to this one:
 * the whole molecule, with its hydrogens, halogens and OH groups, in the middle of the part
 * of the drawing area that the menus beside, above or below it don't cover. The same view is used for the
 * displayed and skeletal formulae, so switching between them doesn't move anything.
 */

import {
  CARBON_TO_HALOGEN_BOND_LENGTH,
  CARBON_TO_HYDROGEN_BOND_LENGTH,
  CARBON_TO_OXYGEN_BOND_LENGTH,
  HALOGEN_CIRCLE_RADIUS,
  HYDROGEN_CIRCLE_RADIUS,
  OXYGEN_TO_HYDROGEN_BOND_LENGTH,
  SMALLEST_VISIBLE_DRAWING_AREA,
  SPACE_AROUND_DRAWING,
} from './drawingDimensions.js';
import { listAtomsAndBondsAsDrawn } from './countOverlapsInDrawing.js';
import { boundingBoxAroundPoints, growBoundingBoxOnEverySide } from './vectorMaths.js';

/**
 * The molecule and its hydrogens, halogens and OH groups, with a margin. null if nothing is drawn.
 * Room is left round each carbon for its atoms wherever they are usually drawn, so the view
 * doesn't change as they are placed, and the box also takes in any atom moved further out by hand.
 */
function boxAroundMolecule(skeleton) {
  if (skeleton.carbonAtoms.length === 0) return null;
  const carbonPoints = skeleton.carbonAtoms.map((carbonAtom) => ({ x: carbonAtom.positionX, y: carbonAtom.positionY }));
  const reachOfOuterAtoms = Math.max(
    CARBON_TO_HYDROGEN_BOND_LENGTH + HYDROGEN_CIRCLE_RADIUS,
    CARBON_TO_HALOGEN_BOND_LENGTH + HALOGEN_CIRCLE_RADIUS,
    CARBON_TO_OXYGEN_BOND_LENGTH + OXYGEN_TO_HYDROGEN_BOND_LENGTH + HYDROGEN_CIRCLE_RADIUS,
  );
  const usualBox = growBoundingBoxOnEverySide(boundingBoxAroundPoints(carbonPoints), reachOfOuterAtoms);
  const edgesOfAtoms = listAtomsAndBondsAsDrawn(skeleton).atoms.flatMap(({ centre, radius }) => [
    { x: centre.x - radius, y: centre.y - radius },
    { x: centre.x + radius, y: centre.y + radius },
  ]);
  const cornersOfUsualBox = [
    { x: usualBox.left, y: usualBox.top },
    { x: usualBox.left + usualBox.width, y: usualBox.top + usualBox.height },
  ];
  return growBoundingBoxOnEverySide(boundingBoxAroundPoints([...cornersOfUsualBox, ...edgesOfAtoms]), SPACE_AROUND_DRAWING);
}

/**
 * The molecule and its hydrogens with a margin, centred, and never smaller than the
 * standard drawing area (so a small molecule isn't blown up to fill the screen).
 */
export function computeViewBoxAroundMolecule(skeleton) {
  const box = boxAroundMolecule(skeleton);
  if (box === null) return SMALLEST_VISIBLE_DRAWING_AREA;

  const centreX = box.left + box.width / 2;
  const centreY = box.top + box.height / 2;
  const width = Math.max(box.width, SMALLEST_VISIBLE_DRAWING_AREA.width);
  const height = Math.max(box.height, SMALLEST_VISIBLE_DRAWING_AREA.height);
  return { left: centreX - width / 2, top: centreY - height / 2, width, height };
}

/**
 * How much of one direction of the drawing area (its width or height) is left free by menus
 * covering coveredBefore and coveredAfter pixels at its two ends: { freeStart, freeLength }.
 * Menus that would leave almost nothing are drawn over, rather than squeezing the molecule
 * into a sliver: then each is counted as covering less, in proportion, so a quarter stays free.
 */
function findFreeRoom(screenLength, coveredBefore, coveredAfter) {
  const smallestFreeLength = screenLength / 4;
  const covered = coveredBefore + coveredAfter;
  const shrink = covered > screenLength - smallestFreeLength ? (screenLength - smallestFreeLength) / covered : 1;
  return { freeStart: coveredBefore * shrink, freeLength: screenLength - covered * shrink };
}

/**
 * The view for a drawing area of screenWidth x screenHeight pixels whose edges are covered by
 * menus over the drawing: coveredLeft, coveredRight, coveredTop and coveredBottom pixels. The
 * molecule is centred in the part that isn't covered, as large as it fits there, but never larger
 * than the standard drawing area would show it in the whole drawing area (so a small molecule
 * isn't blown up to fill the screen). The view has the drawing area's own shape, so it fills it exactly.
 */
export function computeViewBoxFittingMolecule(
  skeleton,
  { screenWidth, screenHeight, coveredLeft = 0, coveredRight = 0, coveredTop = 0, coveredBottom = 0 },
) {
  if (!(screenWidth > 0 && screenHeight > 0)) return computeViewBoxAroundMolecule(skeleton);
  const box = boxAroundMolecule(skeleton) ?? SMALLEST_VISIBLE_DRAWING_AREA;

  const across = findFreeRoom(screenWidth, coveredLeft, coveredRight);
  const down = findFreeRoom(screenHeight, coveredTop, coveredBottom);

  const largestScale = Math.min(screenWidth / SMALLEST_VISIBLE_DRAWING_AREA.width, screenHeight / SMALLEST_VISIBLE_DRAWING_AREA.height);
  const pixelsPerDrawingUnit = Math.min(largestScale, across.freeLength / box.width, down.freeLength / box.height);

  const centreX = box.left + box.width / 2;
  const centreY = box.top + box.height / 2;
  return {
    left: centreX - (across.freeStart + across.freeLength / 2) / pixelsPerDrawingUnit,
    top: centreY - (down.freeStart + down.freeLength / 2) / pixelsPerDrawingUnit,
    width: screenWidth / pixelsPerDrawingUnit,
    height: screenHeight / pixelsPerDrawingUnit,
  };
}

/** The view slid along by the given distance, in drawing units. */
export function slideViewBox(viewBox, distanceRight, distanceDown) {
  return { ...viewBox, left: viewBox.left + distanceRight, top: viewBox.top + distanceDown };
}

/** { left, top, width, height } -> the "left top width height" text that SVG expects. */
export function formatViewBoxForSvg({ left, top, width, height }) {
  return `${left} ${top} ${width} ${height}`;
}
