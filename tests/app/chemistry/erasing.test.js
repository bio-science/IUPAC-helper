/**
 * Erasing part of a drawn molecule: listWhatErasingRemoves says beforehand exactly what the
 * removing functions will take away, so the drawing can mark it.
 */
import { describe, expect, it } from 'vitest';
import {
  bondTwoCarbons,
  listWhatErasingRemoves,
  removeCarbonAndItsSmallerBranches,
  removeGroupFromCarbon,
  removeSmallerSideOfBond,
  setLinkAtomOfBond,
} from '../../../src/chemistry/carbonSkeleton.js';

/** A chain of carbons 1-2-...-n, with extra bonds and groups as given. */
function chain(carbonCount, { extraBonds = [], groupsByAtomId = {}, linkAtomByBond = {} } = {}) {
  const carbonAtoms = Array.from({ length: carbonCount }, (_, index) => {
    const atomId = index + 1;
    const carbonAtom = { atomId, positionX: index * 100, positionY: 0 };
    return groupsByAtomId[atomId] ? { ...carbonAtom, groups: groupsByAtomId[atomId] } : carbonAtom;
  });
  const carbonCarbonBonds = [];
  for (let atomId = 1; atomId < carbonCount; atomId += 1) {
    const linkAtom = linkAtomByBond[`${atomId}-${atomId + 1}`];
    carbonCarbonBonds.push(linkAtom ? { firstAtomId: atomId, secondAtomId: atomId + 1, linkAtom } : { firstAtomId: atomId, secondAtomId: atomId + 1 });
  }
  return { carbonAtoms, carbonCarbonBonds: [...carbonCarbonBonds, ...extraBonds] };
}

const sortedIds = (ids) => [...ids].sort((a, b) => a - b);

describe('listWhatErasingRemoves', () => {
  it('erasing a carbon in the middle of a chain also takes the shorter side with it', () => {
    // A chain 1-...-7 with carbon 8 (and its Cl) on carbon 2: erasing carbon 3 leaves 4-5-6-7.
    const skeleton = chain(7, { extraBonds: [{ firstAtomId: 2, secondAtomId: 8 }] });
    skeleton.carbonAtoms.push({ atomId: 8, positionX: 100, positionY: 100, groups: [{ symbol: 'Cl' }] });
    const removal = listWhatErasingRemoves(skeleton, { kind: 'carbon', atomId: 3 });
    expect(sortedIds(removal.carbonAtomIds)).toEqual([1, 2, 3, 8]);
    expect(removal.bonds).toHaveLength(4);
    expect(removal.groups).toEqual([{ atomId: 8, groupIndex: 0 }]);
    const after = removeCarbonAndItsSmallerBranches(skeleton, 3);
    expect(sortedIds(after.carbonAtoms.map(({ atomId }) => atomId))).toEqual([4, 5, 6, 7]);
    expect(after.carbonCarbonBonds).toHaveLength(skeleton.carbonCarbonBonds.length - removal.bonds.length);
  });

  it('erasing a bond takes away its smaller side, with the O in a bond on that side', () => {
    const skeleton = chain(5, { linkAtomByBond: { '1-2': 'O' } });
    const removal = listWhatErasingRemoves(skeleton, { kind: 'bond', firstAtomId: 2, secondAtomId: 3, atomIdToRemoveIfEven: 2 });
    expect(sortedIds(removal.carbonAtomIds)).toEqual([1, 2]);
    expect(removal.bonds).toEqual([
      { firstAtomId: 1, secondAtomId: 2 },
      { firstAtomId: 2, secondAtomId: 3 },
    ]);
    const after = removeSmallerSideOfBond(skeleton, 2, 3, 2);
    expect(sortedIds(after.carbonAtoms.map(({ atomId }) => atomId))).toEqual([3, 4, 5]);
  });

  it('erasing a bond with sides the same size takes the side given', () => {
    const removal = listWhatErasingRemoves(chain(4), { kind: 'bond', firstAtomId: 3, secondAtomId: 2, atomIdToRemoveIfEven: 3 });
    expect(sortedIds(removal.carbonAtomIds)).toEqual([3, 4]);
  });

  it('erasing a bond in a ring only takes that bond away', () => {
    const cyclohexane = bondTwoCarbons(chain(6), 1, 6);
    const removal = listWhatErasingRemoves(cyclohexane, { kind: 'bond', firstAtomId: 3, secondAtomId: 4, atomIdToRemoveIfEven: 4 });
    expect(removal).toEqual({ carbonAtomIds: [], bonds: [{ firstAtomId: 3, secondAtomId: 4 }], groups: [], linkAtoms: [] });
    expect(removeSmallerSideOfBond(cyclohexane, 3, 4, 4).carbonCarbonBonds).toHaveLength(5);
  });

  it('erasing a group takes away only that group', () => {
    const skeleton = chain(2, { groupsByAtomId: { 2: [{ symbol: 'O' }, { symbol: 'OH' }] } });
    expect(listWhatErasingRemoves(skeleton, { kind: 'group', atomId: 2, groupIndex: 1 })).toEqual({
      carbonAtomIds: [],
      bonds: [],
      groups: [{ atomId: 2, groupIndex: 1 }],
      linkAtoms: [],
    });
    expect(removeGroupFromCarbon(skeleton, 2, 1).carbonAtoms[1].groups).toEqual([{ symbol: 'O' }]);
  });

  it('erasing the O in a bond takes away only the O', () => {
    const skeleton = chain(3, { linkAtomByBond: { '2-3': 'O' } });
    expect(listWhatErasingRemoves(skeleton, { kind: 'linkAtom', firstAtomId: 3, secondAtomId: 2 })).toEqual({
      carbonAtomIds: [],
      bonds: [],
      groups: [],
      linkAtoms: [{ firstAtomId: 2, secondAtomId: 3 }],
    });
    expect(setLinkAtomOfBond(skeleton, 2, 3, null).carbonCarbonBonds[1].linkAtom).toBeUndefined();
  });

  it('gives null for a part that is no longer there', () => {
    const skeleton = chain(3);
    expect(listWhatErasingRemoves(skeleton, { kind: 'carbon', atomId: 9 })).toBeNull();
    expect(listWhatErasingRemoves(skeleton, { kind: 'bond', firstAtomId: 1, secondAtomId: 3, atomIdToRemoveIfEven: 1 })).toBeNull();
    expect(listWhatErasingRemoves(skeleton, { kind: 'group', atomId: 1, groupIndex: 0 })).toBeNull();
    expect(listWhatErasingRemoves(skeleton, { kind: 'linkAtom', firstAtomId: 1, secondAtomId: 2 })).toBeNull();
  });
});
