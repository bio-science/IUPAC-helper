/**
 * Which part of the drawing is shown (computeViewBox.js): the whole molecule, centred in the part
 * of the drawing area the menus at its sides don't cover, as large as fits there.
 */
import { describe, expect, it } from 'vitest';
import { computeViewBoxFittingMolecule } from '../../../src/geometry/computeViewBox.js';
import { createEmptyCarbonSkeleton } from '../../../src/chemistry/carbonSkeleton.js';

/** A straight row of carbons, 110 apart. */
function buildChain(length) {
  return {
    carbonAtoms: Array.from({ length }, (_, index) => ({ atomId: index + 1, positionX: index * 110, positionY: 0 })),
    carbonCarbonBonds: Array.from({ length: length - 1 }, (_, index) => ({ firstAtomId: index + 1, secondAtomId: index + 2 })),
  };
}

/** Where the drawing point (x, y) lands on the screen, in pixels, for a view filling the drawing area. */
function onScreen(view, screenWidth, point) {
  const pixelsPerUnit = screenWidth / view.width;
  return { x: (point.x - view.left) * pixelsPerUnit, y: (point.y - view.top) * pixelsPerUnit };
}

/** The pixels of the first and last carbon of a chain. */
function chainEndsOnScreen(chain, view, screenWidth) {
  const first = chain.carbonAtoms[0];
  const last = chain.carbonAtoms[chain.carbonAtoms.length - 1];
  return [onScreen(view, screenWidth, { x: first.positionX, y: 0 }), onScreen(view, screenWidth, { x: last.positionX, y: 0 })];
}

describe('fitting the molecule into the drawing area', () => {
  const screen = { screenWidth: 1200, screenHeight: 600 };

  it('has the shape of the drawing area, so it fills it exactly', () => {
    const view = computeViewBoxFittingMolecule(buildChain(4), screen);
    expect(view.width / view.height).toBeCloseTo(1200 / 600);
  });

  it('centres the molecule in the part that is not covered', () => {
    const chain = buildChain(4);
    const view = computeViewBoxFittingMolecule(chain, { ...screen, coveredLeft: 100, coveredRight: 400 });
    const [first, last] = chainEndsOnScreen(chain, view, 1200);
    expect((first.x + last.x) / 2).toBeCloseTo(100 + (1200 - 500) / 2);
    expect(first.y).toBeCloseTo(300);
  });

  it('does not blow a small molecule up past the size the standard view shows it at', () => {
    const chain = buildChain(2);
    const open = computeViewBoxFittingMolecule(chain, screen);
    const covered = computeViewBoxFittingMolecule(chain, { ...screen, coveredLeft: 60, coveredRight: 350 });
    expect(covered.width).toBeCloseTo(open.width);
  });

  it('makes a long molecule as large as fits in the room left, and no smaller', () => {
    const chain = buildChain(12);
    const view = computeViewBoxFittingMolecule(chain, { ...screen, coveredLeft: 60, coveredRight: 350 });
    const [first, last] = chainEndsOnScreen(chain, view, 1200);
    expect(first.x).toBeGreaterThan(60);
    expect(last.x).toBeLessThan(1200 - 350);
    // Only the margin round the molecule (its hydrogens and a little space) is left either side.
    expect(first.x - 60).toBeLessThan(80);
    expect(1200 - 350 - last.x).toBeLessThan(80);
  });

  it('draws over menus that would leave almost no room, instead of shrinking the molecule to a sliver', () => {
    const chain = buildChain(12);
    const view = computeViewBoxFittingMolecule(chain, { ...screen, coveredLeft: 500, coveredRight: 650 });
    const [first, last] = chainEndsOnScreen(chain, view, 1200);
    expect(last.x - first.x).toBeGreaterThan(1200 / 4 - 160);
  });

  it('still gives a view when nothing is drawn, or before the drawing area has a size', () => {
    expect(computeViewBoxFittingMolecule(createEmptyCarbonSkeleton(), screen).width).toBeGreaterThan(0);
    expect(computeViewBoxFittingMolecule(buildChain(3), { screenWidth: 0, screenHeight: 0 }).width).toBeGreaterThan(0);
  });
});
