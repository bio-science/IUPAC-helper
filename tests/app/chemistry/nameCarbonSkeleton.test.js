import { describe, expect, it } from 'vitest';
import { nameCarbonSkeleton, assembleName } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { buildCarbonSkeletonFromDescription } from '../../../src/chemistry/buildCarbonSkeletonFromDescription.js';
import { addCarbonAtom, createEmptyCarbonSkeleton } from '../../../src/chemistry/carbonSkeleton.js';

/** Builds a molecule from a (possibly non-IUPAC) description, then names it. */
function nameMoleculeDescribedAs(mainChainCarbonCount, sideChains) {
  const substituents = sideChains.map(([locant, substituentCarbonCount]) => ({ locant, substituentCarbonCount }));
  const { carbonSkeleton } = buildCarbonSkeletonFromDescription({ mainChainCarbonCount, substituents });
  return nameCarbonSkeleton(carbonSkeleton);
}

describe('naming unbranched alkanes', () => {
  it.each([
    [1, 'methane'],
    [2, 'ethane'],
    [3, 'propane'],
    [4, 'butane'],
    [5, 'pentane'],
    [6, 'hexane'],
    [7, 'heptane'],
    [8, 'octane'],
    [9, 'nonane'],
    [10, 'decane'],
  ])('%i carbons in a line is %s', (carbonCount, expectedName) => {
    expect(nameMoleculeDescribedAs(carbonCount, []).iupacName).toBe(expectedName);
  });
});

describe('naming branched alkanes', () => {
  it.each([
    ['2-methylpropane', 3, [[2, 1]]],
    ['2-methylbutane', 4, [[2, 1]]],
    ['2,2-dimethylpropane', 3, [[2, 1], [2, 1]]],
    ['2,2,4-trimethylpentane', 5, [[2, 1], [2, 1], [4, 1]]],
    ['3-ethyl-2-methylpentane', 5, [[2, 1], [3, 2]]],
    ['3-ethyl-3-methylpentane', 5, [[3, 1], [3, 2]]],
    ['2,2,3,3-tetramethylbutane', 4, [[2, 1], [2, 1], [3, 1], [3, 1]]],
    ['3,3-diethylpentane', 5, [[3, 2], [3, 2]]],
    ['4-propylheptane', 7, [[4, 3]]],
  ])('%s', (expectedName, mainChainCarbonCount, sideChains) => {
    expect(nameMoleculeDescribedAs(mainChainCarbonCount, sideChains).iupacName).toBe(expectedName);
  });

  it('names a side chain that is itself branched (P-29.2)', () => {
    // 4-(propan-2-yl)heptane: a heptane chain with a branched 3-carbon side chain on carbon 4.
    let skeleton = buildCarbonSkeletonFromDescription({ mainChainCarbonCount: 7, substituents: [{ locant: 4, substituentCarbonCount: 2 }] }).carbonSkeleton;
    const firstSideChainCarbon = 8;
    skeleton = addCarbonAtom(skeleton, { positionX: 0, positionY: 0, bondToAtomId: firstSideChainCarbon }).updatedSkeleton;
    expect(nameCarbonSkeleton(skeleton).iupacName).toBe('4-(propan-2-yl)heptane');
  });
});

describe('the rules for choosing and numbering the main chain', () => {
  it('uses the longest chain, even when the drawing suggests a shorter one (P-44.3)', () => {
    // Drawn as "2-ethylbutane": the longest chain actually has 5 carbons.
    expect(nameMoleculeDescribedAs(4, [[2, 2]]).iupacName).toBe('3-methylpentane');
    // Drawn as "1-methylpropane": that is just butane.
    expect(nameMoleculeDescribedAs(3, [[1, 1]]).iupacName).toBe('butane');
  });

  it('numbers from the end that gives the lowest locants (P-14.4(f))', () => {
    expect(nameMoleculeDescribedAs(4, [[3, 1]]).iupacName).toBe('2-methylbutane');
    expect(nameMoleculeDescribedAs(5, [[4, 1], [4, 1], [2, 1]]).iupacName).toBe('2,2,4-trimethylpentane');
  });

  it('when both ends tie, gives the lower locant to the side chain written first (P-14.4(g))', () => {
    expect(nameMoleculeDescribedAs(7, [[5, 2], [3, 1]]).iupacName).toBe('3-ethyl-5-methylheptane');
  });

  it('chooses the longest chain with the most side chains (P-45.2.1)', () => {
    // The Blue Book example: 3-ethyl-2-methylhexane, not 3-(propan-2-yl)hexane.
    expect(nameMoleculeDescribedAs(6, [[3, 2], [2, 1]]).iupacName).toBe('3-ethyl-2-methylhexane');
  });

  it('names long chains with numerical terms (P-21.2.1)', () => {
    expect(nameMoleculeDescribedAs(11, []).iupacName).toBe('undecane');
    expect(nameMoleculeDescribedAs(21, []).iupacName).toBe('henicosane');
    expect(nameMoleculeDescribedAs(30, [[12, 11]]).iupacName).toBe('12-undecyltriacontane');
  });

  it('puts a multiplied decyl group in brackets (P-16.3.4 (d))', () => {
    expect(nameMoleculeDescribedAs(22, [[11, 10]]).iupacName).toBe('11-decyldocosane');
    expect(nameMoleculeDescribedAs(22, [[11, 10], [12, 10]]).iupacName).toBe('11,12-di(decyl)docosane');
  });
});

describe('molecules this version cannot name', () => {
  it('explains when nothing is drawn', () => {
    const result = nameCarbonSkeleton(createEmptyCarbonSkeleton());
    expect(result.isNameable).toBe(false);
  });

  it('explains when two pieces are drawn separately', () => {
    let skeleton = addCarbonAtom(createEmptyCarbonSkeleton(), { positionX: 0, positionY: 0 }).updatedSkeleton;
    skeleton = addCarbonAtom(skeleton, { positionX: 100, positionY: 0 }).updatedSkeleton;
    expect(nameCarbonSkeleton(skeleton).isNameable).toBe(false);
  });
});

describe('assembleName', () => {
  it('sorts side chains alphabetically, ignoring di- and tri- (P-14.5)', () => {
    const name = assembleName(5, [
      { locant: 2, substituentName: 'methyl' },
      { locant: 2, substituentName: 'methyl' },
      { locant: 3, substituentName: 'ethyl' },
    ]);
    expect(name).toBe('3-ethyl-2,2-dimethylpentane');
  });
});
