import { describe, expect, it } from 'vitest';
import { keepGroupsPointingTheSameWay, placeAtomsAroundCarbons } from '../../../src/geometry/placeAtomsAroundCarbons.js';
import { planGroupSwap } from '../../../src/geometry/planGroupSwap.js';
import { addCarbonAtom, addGroupToCarbon, countAtomsInMolecule, toggleDoubleBond } from '../../../src/chemistry/carbonSkeleton.js';
import { CARBON_TO_HALOGEN_BOND_LENGTH } from '../../../src/geometry/drawingDimensions.js';

/** Ethane drawn left to right, with a chlorine in the given place on carbon 1. */
function chloroethane(place) {
  const ethane = {
    carbonAtoms: [
      { atomId: 1, positionX: 100, positionY: 200 },
      { atomId: 2, positionX: 210, positionY: 200 },
    ],
    carbonCarbonBonds: [{ firstAtomId: 1, secondAtomId: 2 }],
  };
  return addGroupToCarbon(ethane, 1, 'Cl', place);
}

const outerAtomsOnCarbon = (skeleton, atomId) => placeAtomsAroundCarbons(skeleton).filter((outerAtom) => outerAtom.carbonAtomId === atomId);
const findChlorine = (skeleton) => placeAtomsAroundCarbons(skeleton).find((outerAtom) => outerAtom.symbol === 'Cl');

describe('placing halogens around carbons', () => {
  it('puts a halogen in place of one hydrogen, a bond length away', () => {
    const skeleton = chloroethane(0);
    const onCarbon1 = outerAtomsOnCarbon(skeleton, 1);
    expect(onCarbon1.map((outerAtom) => outerAtom.symbol).sort()).toEqual(['Cl', 'H', 'H']);
    const chlorine = findChlorine(skeleton);
    expect(Math.hypot(chlorine.positionX - 100, chlorine.positionY - 200)).toBeCloseTo(CARBON_TO_HALOGEN_BOND_LENGTH);
    expect(countAtomsInMolecule(skeleton)).toMatchObject({ carbonCount: 2, hydrogenCount: 5, halogenCounts: { Cl: 1 } });
  });

  it('draws the halogen in the place it was given', () => {
    const places = [0, 1, 2].map((place) => findChlorine(chloroethane(place)));
    expect(places.map((chlorine) => chlorine.place)).toEqual([0, 1, 2]);
    expect(new Set(places.map((chlorine) => `${Math.round(chlorine.positionX)},${Math.round(chlorine.positionY)}`)).size).toBe(3);
  });

  it('puts a halogen without a place at the end of the chain, straight on', () => {
    const chlorine = findChlorine(chloroethane(undefined));
    expect(chlorine.positionY).toBeCloseTo(200);
    expect(chlorine.positionX).toBeLessThan(100);
  });

  it.each([0, 1])('keeps a halogen in place %i pointing nearly the same way when a carbon is added below', (place) => {
    const before = chloroethane(place);
    const { updatedSkeleton } = addCarbonAtom(before, { positionX: 100, positionY: 310, bondToAtomId: 1 });
    const after = keepGroupsPointingTheSameWay(before, updatedSkeleton);
    const directionOf = (skeleton) => {
      const chlorine = findChlorine(skeleton);
      return (Math.atan2(chlorine.positionY - 200, chlorine.positionX - 100) * 180) / Math.PI;
    };
    const turn = Math.abs(directionOf(after) - directionOf(before));
    expect(Math.min(turn, 360 - turn)).toBeLessThanOrEqual(45);
    expect(outerAtomsOnCarbon(after, 1).map((outerAtom) => outerAtom.symbol).sort()).toEqual(['Cl', 'H']);
  });

  it('keeps the halogen when a bond becomes double', () => {
    const before = chloroethane(0);
    const after = keepGroupsPointingTheSameWay(before, toggleDoubleBond(before, 1, 2));
    expect(outerAtomsOnCarbon(after, 1).map((outerAtom) => outerAtom.symbol).sort()).toEqual(['Cl', 'H']);
  });
});

describe('planning a halogen swap', () => {
  it('swaps the hydrogen nearest the pointer', () => {
    const ethane = chloroethane(0);
    const hydrogen = outerAtomsOnCarbon(ethane, 2).find((outerAtom) => outerAtom.symbol === 'H');
    expect(planGroupSwap(ethane, { x: hydrogen.positionX + 2, y: hydrogen.positionY }, 'Br')).toMatchObject({
      action: 'add',
      carbonAtomId: 2,
      place: hydrogen.place,
      outerAtomId: hydrogen.outerAtomId,
    });
  });

  it('changes a different halogen, and takes off the same one', () => {
    const skeleton = chloroethane(0);
    const chlorine = findChlorine(skeleton);
    const pointer = { x: chlorine.positionX, y: chlorine.positionY };
    expect(planGroupSwap(skeleton, pointer, 'Br')).toMatchObject({ action: 'change', carbonAtomId: 1, groupIndex: 0 });
    expect(planGroupSwap(skeleton, pointer, 'Cl')).toMatchObject({ action: 'remove', carbonAtomId: 1, groupIndex: 0 });
  });

  it('does nothing far from every atom', () => {
    expect(planGroupSwap(chloroethane(0), { x: 600, y: 600 }, 'Cl')).toBeNull();
  });
});
