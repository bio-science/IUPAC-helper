import { describe, expect, it } from 'vitest';
import { NITROGEN, OXYGEN, planAtomDrop } from '../../../src/geometry/planAtomDrop.js';
import { placeAtomsAroundCarbons } from '../../../src/geometry/placeAtomsAroundCarbons.js';
import {
  addGroupToCarbon,
  chooseGroupBondChange,
  countAtomsInMolecule,
  describeCarbonylCarbon,
  findCarbonAtomById,
  setLinkAtomOfBond,
  toggleDoubleBond,
  toggleGroupDoubleBond,
} from '../../../src/chemistry/carbonSkeleton.js';

/** Ethane drawn left to right. */
const ethane = {
  carbonAtoms: [
    { atomId: 1, positionX: 100, positionY: 200 },
    { atomId: 2, positionX: 210, positionY: 200 },
  ],
  carbonCarbonBonds: [{ firstAtomId: 1, secondAtomId: 2 }],
};
const middleOfCarbonCarbonBond = { x: 155, y: 200 };

const outerAtomsOf = (skeleton, symbol) => placeAtomsAroundCarbons(skeleton).filter((outerAtom) => outerAtom.symbol === symbol);
const pointOf = (outerAtom) => ({ x: outerAtom.positionX, y: outerAtom.positionY });

/** Halfway along the bond from a group's carbon to the group. */
function middleOfBondToGroup(skeleton, group) {
  const carbon = findCarbonAtomById(skeleton, group.carbonAtomId);
  return { x: (carbon.positionX + group.positionX) / 2, y: (carbon.positionY + group.positionY) / 2 };
}

describe('dropping O or N on a hydrogen or carbon', () => {
  it('swaps a hydrogen for OH (O) or NH2 (N)', () => {
    const hydrogen = outerAtomsOf(ethane, 'H')[0];
    expect(planAtomDrop(ethane, pointOf(hydrogen), OXYGEN)).toMatchObject({ kind: 'group', action: 'add', group: 'OH', outerAtomId: hydrogen.outerAtomId });
    expect(planAtomDrop(ethane, pointOf(hydrogen), NITROGEN)).toMatchObject({ kind: 'group', action: 'add', group: 'NH2' });
  });

  it('on a carbon, swaps its hydrogen nearest the drop point', () => {
    const plan = planAtomDrop(ethane, { x: 104, y: 200 }, OXYGEN);
    expect(plan).toMatchObject({ kind: 'group', action: 'add', carbonAtomId: 1, group: 'OH' });
  });

  it('says so when the carbon has no hydrogen left', () => {
    const ethene = toggleDoubleBond(ethane, 1, 2);
    const full = [0, 1].reduce((skeleton) => addGroupToCarbon(skeleton, 1, 'Cl'), ethene);
    expect(planAtomDrop(full, { x: 100, y: 200 }, OXYGEN)).toEqual({ kind: 'carbonIsFull', carbonAtomId: 1 });
  });

  it('takes an OH or C=O off again when O is dropped on it, and changes OH to NH2 when N is', () => {
    const ethanol = addGroupToCarbon(ethane, 1, 'OH', 0);
    const [hydroxyl] = outerAtomsOf(ethanol, 'OH');
    expect(planAtomDrop(ethanol, pointOf(hydroxyl), OXYGEN)).toMatchObject({ kind: 'group', action: 'remove', groupIndex: 0 });
    expect(planAtomDrop(ethanol, pointOf(hydroxyl), NITROGEN)).toMatchObject({ kind: 'group', action: 'change', group: 'NH2' });

    const ethanal = toggleGroupDoubleBond(ethanol, 1, 0);
    const [carbonylOxygen] = outerAtomsOf(ethanal, 'O');
    expect(planAtomDrop(ethanal, pointOf(carbonylOxygen), OXYGEN)).toMatchObject({ kind: 'group', action: 'remove', groupIndex: 0 });
  });

  it('changes a halogen to OH', () => {
    const chloroethane = addGroupToCarbon(ethane, 1, 'Cl', 0);
    const [chlorine] = outerAtomsOf(chloroethane, 'Cl');
    expect(planAtomDrop(chloroethane, pointOf(chlorine), OXYGEN)).toMatchObject({ kind: 'group', action: 'change', group: 'OH' });
  });
});

describe('dropping O or N on a bond between two carbons', () => {
  it('puts O or NH in the middle of a single bond', () => {
    expect(planAtomDrop(ethane, middleOfCarbonCarbonBond, OXYGEN)).toEqual({
      kind: 'link',
      action: 'addLink',
      firstAtomId: 1,
      secondAtomId: 2,
      linkAtom: 'O',
    });
    expect(planAtomDrop(ethane, middleOfCarbonCarbonBond, NITROGEN)).toMatchObject({ kind: 'link', action: 'addLink', linkAtom: 'NH' });
  });

  it('takes the same atom out again, and swaps O for NH', () => {
    const dimethylEther = setLinkAtomOfBond(ethane, 1, 2, 'O');
    expect(planAtomDrop(dimethylEther, middleOfCarbonCarbonBond, OXYGEN)).toMatchObject({ kind: 'link', action: 'removeLink' });
    expect(planAtomDrop(dimethylEther, middleOfCarbonCarbonBond, NITROGEN)).toMatchObject({ kind: 'link', action: 'addLink', linkAtom: 'NH' });
  });

  it("can't go in a double bond", () => {
    const ethene = toggleDoubleBond(ethane, 1, 2);
    expect(planAtomDrop(ethene, middleOfCarbonCarbonBond, OXYGEN)).toMatchObject({ kind: 'link', action: 'cannotLink' });
  });

  it('is never done with a halogen, which makes only one bond', () => {
    expect(planAtomDrop(ethane, middleOfCarbonCarbonBond, 'Cl')?.kind).not.toBe('link');
  });
});

describe('making the bond to an OH double', () => {
  const ethanol = addGroupToCarbon(ethane, 1, 'OH', 0);

  it('turns ethanol into ethanal, and back', () => {
    expect(chooseGroupBondChange(ethanol, 1, 0)).toBe('makeDouble');
    const ethanal = toggleGroupDoubleBond(ethanol, 1, 0);
    expect(describeCarbonylCarbon(ethanal, findCarbonAtomById(ethanal, 1))).toBe('aldehyde');
    expect(countAtomsInMolecule(ethanal)).toMatchObject({ carbonCount: 2, hydrogenCount: 4, oxygenCount: 1 });
    expect(chooseGroupBondChange(ethanal, 1, 0)).toBe('makeSingle');
    expect(toggleGroupDoubleBond(ethanal, 1, 0)).toEqual(ethanol);
  });

  it('is planned when O is dropped on the bond to an OH or C=O', () => {
    const [hydroxyl] = outerAtomsOf(ethanol, 'OH');
    expect(planAtomDrop(ethanol, middleOfBondToGroup(ethanol, hydroxyl), OXYGEN)).toEqual({
      kind: 'groupBond',
      action: 'makeDouble',
      carbonAtomId: 1,
      groupIndex: 0,
    });
    const ethanal = toggleGroupDoubleBond(ethanol, 1, 0);
    const [carbonylOxygen] = outerAtomsOf(ethanal, 'O');
    expect(planAtomDrop(ethanal, middleOfBondToGroup(ethanal, carbonylOxygen), OXYGEN)).toMatchObject({ kind: 'groupBond', action: 'makeSingle' });
  });

  it("can't happen when the carbon has no hydrogen left, or for a bond to anything but O", () => {
    const crowded = addGroupToCarbon(addGroupToCarbon(ethanol, 1, 'Cl'), 1, 'Cl');
    expect(chooseGroupBondChange(crowded, 1, 0)).toBe('cannotMakeDouble');
    expect(() => toggleGroupDoubleBond(crowded, 1, 0)).toThrow();
    expect(chooseGroupBondChange(crowded, 1, 1)).toBe('notOxygen');
    expect(chooseGroupBondChange(addGroupToCarbon(ethane, 1, 'NH2'), 1, 0)).toBe('notOxygen');
  });
});

it('plans nothing far from the molecule', () => {
  expect(planAtomDrop(ethane, { x: 600, y: 600 }, OXYGEN)).toBeNull();
});
