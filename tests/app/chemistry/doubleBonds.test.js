import { describe, expect, it } from 'vitest';
import {
  bondCanBecomeDouble,
  countAtomsInMolecule,
  countHydrogensOnCarbon,
  findBondBetween,
  hasDoubleBond,
  isDoubleBond,
  toggleDoubleBond,
} from '../../../src/chemistry/carbonSkeleton.js';
import { buildCarbonSkeletonFromDescription } from '../../../src/chemistry/buildCarbonSkeletonFromDescription.js';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { chooseDirectionsForOuterAtoms } from '../../../src/geometry/placeAtomsAroundCarbons.js';
import { listSkeletalDoubleBondLines } from '../../../src/geometry/doubleBondLines.js';

/** A straight chain with carbons numbered 1, 2, 3... along it, drawn left to right. */
function straightChain(carbonCount) {
  return {
    carbonAtoms: Array.from({ length: carbonCount }, (_, index) => ({ atomId: index + 1, positionX: index * 110, positionY: 0 })),
    carbonCarbonBonds: Array.from({ length: carbonCount - 1 }, (_, index) => ({ firstAtomId: index + 1, secondAtomId: index + 2 })),
  };
}

describe('making a bond double', () => {
  it('turns ethane (C2H6) into ethene (C2H4)', () => {
    const ethene = toggleDoubleBond(straightChain(2), 1, 2);
    expect(hasDoubleBond(ethene)).toBe(true);
    expect(countAtomsInMolecule(ethene)).toMatchObject({ carbonCount: 2, hydrogenCount: 4 });
  });

  it('gives but-1-ene CH2=CHCH2CH3 the formula C4H8', () => {
    const butene = toggleDoubleBond(straightChain(4), 1, 2);
    expect([1, 2, 3, 4].map((atomId) => countHydrogensOnCarbon(butene, atomId))).toEqual([2, 1, 2, 3]);
    expect(countAtomsInMolecule(butene)).toMatchObject({ carbonCount: 4, hydrogenCount: 8 });
  });

  it('finds the bond whichever way round its carbons are given', () => {
    const propene = toggleDoubleBond(straightChain(3), 3, 2);
    expect(isDoubleBond(findBondBetween(propene, 2, 3))).toBe(true);
    expect(isDoubleBond(findBondBetween(propene, 1, 2))).toBe(false);
  });

  it('makes a double bond single again on a second toggle', () => {
    const ethane = toggleDoubleBond(toggleDoubleBond(straightChain(2), 1, 2), 1, 2);
    expect(hasDoubleBond(ethane)).toBe(false);
    expect(countAtomsInMolecule(ethane)).toMatchObject({ carbonCount: 2, hydrogenCount: 6 });
  });

  it('does not change the skeleton it was given', () => {
    const ethane = straightChain(2);
    toggleDoubleBond(ethane, 1, 2);
    expect(hasDoubleBond(ethane)).toBe(false);
  });

  it('refuses when a carbon has no hydrogen left to give up', () => {
    // 2,2-dimethylpropane: the middle carbon already has 4 single bonds to carbon.
    const { carbonSkeleton } = buildCarbonSkeletonFromDescription({
      mainChainCarbonCount: 3,
      substituents: [{ locant: 2, substituentCarbonCount: 1 }, { locant: 2, substituentCarbonCount: 1 }],
    });
    const [firstBond] = carbonSkeleton.carbonCarbonBonds;
    expect(bondCanBecomeDouble(carbonSkeleton, firstBond.firstAtomId, firstBond.secondAtomId)).toBe(false);
    expect(() => toggleDoubleBond(carbonSkeleton, firstBond.firstAtomId, firstBond.secondAtomId)).toThrow();
  });

  it('allows two double bonds on one carbon, as in propadiene CH2=C=CH2', () => {
    const propadiene = toggleDoubleBond(toggleDoubleBond(straightChain(3), 1, 2), 2, 3);
    expect(countHydrogensOnCarbon(propadiene, 2)).toBe(0);
    expect(countAtomsInMolecule(propadiene)).toMatchObject({ carbonCount: 3, hydrogenCount: 4 });
  });
});

describe('naming a molecule drawn with a double bond', () => {
  it('names it as an alkene', () => {
    expect(nameCarbonSkeleton(toggleDoubleBond(straightChain(4), 2, 3)).iupacName).toBe('but-2-ene');
  });
});

describe('drawing a double bond', () => {
  it('fans the two hydrogens of a CH2= carbon out at 120 degrees either side of the double bond', () => {
    const directions = chooseDirectionsForOuterAtoms([0], 2).map((direction) => Math.round(direction));
    expect(directions.sort((first, second) => first - second)).toEqual([-120, 120]);
  });

  it('still gives a CH3 carbon its hydrogens straight up, straight down and straight on', () => {
    const directions = chooseDirectionsForOuterAtoms([180], 3).map((direction) => Math.round(direction));
    expect(directions.sort((first, second) => first - second)).toEqual([-90, 0, 90]);
  });

  it('puts the skeletal formula\'s second line on the side the rest of the molecule is on', () => {
    // but-1-ene with C3 bent up from C2, so the inner line of C1=C2 should be above it (smaller y).
    const butene = toggleDoubleBond(straightChain(4), 1, 2);
    butene.carbonAtoms[2] = { atomId: 3, positionX: 270, positionY: -60 };
    const [mainLine, innerLine] = listSkeletalDoubleBondLines(butene, 1, 2);
    expect(mainLine).toEqual({ x1: 0, y1: 0, x2: 110, y2: 0 });
    expect(innerLine.y1).toBeLessThan(0);
    expect(innerLine.x2 - innerLine.x1).toBeLessThan(110);
  });

  it('centres the two lines of ethene, which has nothing on either side', () => {
    const [firstLine, secondLine] = listSkeletalDoubleBondLines(toggleDoubleBond(straightChain(2), 1, 2), 1, 2);
    expect(firstLine.y1 + secondLine.y1).toBeCloseTo(0);
  });
});
