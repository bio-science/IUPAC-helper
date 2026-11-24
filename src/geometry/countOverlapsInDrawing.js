/**
 * Checking that a displayed formula is tidy. Three things count as an overlap:
 *
 *   - two atoms drawn on top of each other
 *   - a bond running through an atom that isn't at either end of it
 *   - two bonds crossing
 *
 * Used to stop the student moving or turning part of a molecule into another part.
 * Every atom is included, placed exactly as it would be drawn: the hydrogens, halogens, OH and
 * NH2 groups with their own hydrogens, the O of C=O, and the O or NH in a bond, whose bond
 * then runs in two parts, from each carbon to it.
 */

import { isLinkBond, linkAtomOf, AMIDE_LINK_NITROGEN } from '../chemistry/carbonSkeleton.js';
import { circleRadiusOfOuterAtom, placeAtomsAroundCarbons, placeLinkAtomOfBond } from './placeAtomsAroundCarbons.js';
import { CARBON_CIRCLE_RADIUS, HYDROGEN_CIRCLE_RADIUS, NITROGEN_CIRCLE_RADIUS, OXYGEN_CIRCLE_RADIUS } from './drawingDimensions.js';
import { distanceBetweenPoints, distanceFromPointToSegment, doSegmentsCross } from './vectorMaths.js';

/** Atoms closer together than this (edge to edge) count as touching. */
const SMALLEST_GAP_BETWEEN_ATOMS = 2;

/** Every atom as drawn ({ atomKey, centre, radius }), and every bond as a line between two of them ({ endAtomKeys, start, end }). */
export function listAtomsAndBondsAsDrawn(skeleton) {
  const atoms = [];
  const bonds = [];
  const centreByKey = new Map();
  const addAtom = (atomKey, centre, radius) => {
    atoms.push({ atomKey, centre, radius });
    centreByKey.set(atomKey, centre);
  };
  const addBond = (firstKey, secondKey) => {
    bonds.push({ endAtomKeys: [firstKey, secondKey], start: centreByKey.get(firstKey), end: centreByKey.get(secondKey) });
  };

  for (const carbonAtom of skeleton.carbonAtoms) {
    addAtom(`C${carbonAtom.atomId}`, { x: carbonAtom.positionX, y: carbonAtom.positionY }, CARBON_CIRCLE_RADIUS);
  }

  for (const bond of skeleton.carbonCarbonBonds) {
    const [firstKey, secondKey] = [`C${bond.firstAtomId}`, `C${bond.secondAtomId}`];
    if (!isLinkBond(bond)) {
      addBond(firstKey, secondKey);
      continue;
    }
    const linkKey = `L${bond.firstAtomId}-${bond.secondAtomId}`;
    const { atomX, atomY, hydrogenX, hydrogenY } = placeLinkAtomOfBond(skeleton, bond);
    const isNitrogen = linkAtomOf(bond) === AMIDE_LINK_NITROGEN;
    addAtom(linkKey, { x: atomX, y: atomY }, isNitrogen ? NITROGEN_CIRCLE_RADIUS : OXYGEN_CIRCLE_RADIUS);
    addBond(firstKey, linkKey);
    addBond(linkKey, secondKey);
    if (hydrogenX !== undefined) {
      addAtom(`${linkKey}-H`, { x: hydrogenX, y: hydrogenY }, HYDROGEN_CIRCLE_RADIUS);
      addBond(linkKey, `${linkKey}-H`);
    }
  }

  for (const outerAtom of placeAtomsAroundCarbons(skeleton)) {
    addAtom(outerAtom.outerAtomId, { x: outerAtom.positionX, y: outerAtom.positionY }, circleRadiusOfOuterAtom(outerAtom.symbol));
    addBond(`C${outerAtom.carbonAtomId}`, outerAtom.outerAtomId);
    const hydrogensOfGroup = [
      [outerAtom.hydrogenPositionX, outerAtom.hydrogenPositionY],
      [outerAtom.secondHydrogenPositionX, outerAtom.secondHydrogenPositionY],
    ].filter(([x]) => x !== undefined);
    hydrogensOfGroup.forEach(([x, y], hydrogenIndex) => {
      const hydrogenKey = `${outerAtom.outerAtomId}-H${hydrogenIndex + 1}`;
      addAtom(hydrogenKey, { x, y }, HYDROGEN_CIRCLE_RADIUS);
      addBond(outerAtom.outerAtomId, hydrogenKey);
    });
  }
  return { atoms, bonds };
}

/** Returns how many overlaps there are. 0 means the drawing is tidy. */
export function countOverlapsInDrawing(skeleton) {
  const { atoms, bonds } = listAtomsAndBondsAsDrawn(skeleton);
  let overlapCount = 0;

  for (let firstIndex = 0; firstIndex < atoms.length; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < atoms.length; secondIndex++) {
      const firstAtom = atoms[firstIndex];
      const secondAtom = atoms[secondIndex];
      const closestAllowed = firstAtom.radius + secondAtom.radius + SMALLEST_GAP_BETWEEN_ATOMS;
      if (distanceBetweenPoints(firstAtom.centre, secondAtom.centre) < closestAllowed) overlapCount++;
    }
  }

  for (const bond of bonds) {
    for (const atom of atoms) {
      if (bond.endAtomKeys.includes(atom.atomKey)) continue;
      if (distanceFromPointToSegment(atom.centre, bond.start, bond.end) < atom.radius) overlapCount++;
    }
  }

  for (let firstIndex = 0; firstIndex < bonds.length; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < bonds.length; secondIndex++) {
      const firstBond = bonds[firstIndex];
      const secondBond = bonds[secondIndex];
      // Bonds that share an atom meet at that atom, which is fine.
      if (firstBond.endAtomKeys.some((atomKey) => secondBond.endAtomKeys.includes(atomKey))) continue;
      if (doSegmentsCross(firstBond.start, firstBond.end, secondBond.start, secondBond.end)) overlapCount++;
    }
  }

  return overlapCount;
}
