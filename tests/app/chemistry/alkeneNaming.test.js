/**
 * Naming alkenes by the IUPAC 2013 Recommendations.
 *
 * Where a name is printed as an example in a source, the test says where:
 *   Blue Book  Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred
 *              Names 2013
 *   Brief Guide  Brief Guide to the Nomenclature of Organic Chemistry, IUPAC 2020,
 *              https://doi.org/10.1515/pac-2019-0104
 * The other names are worked out from the rules cited beside them.
 */
import { describe, expect, it } from 'vitest';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import {
  compareSubstituentNamesAlphanumerically,
  mainChainName,
  unbranchedSubstituentName,
  writeMultipliedSubstituent,
} from '../../../src/chemistry/alkaneNamingVocabulary.js';

/**
 * Builds a skeleton from a list of bonds between numbered carbons, "-" for single and
 * "=" for double: "1=2 2-3 2-4" is CH2=C(CH3)CH3. Positions don't matter for naming.
 */
function moleculeFromBonds(bondList) {
  const atomIds = new Set();
  const carbonCarbonBonds = bondList.split(/\s+/).map((bondText) => {
    const [, first, bondSymbol, second] = bondText.match(/^(\d+)([-=])(\d+)$/);
    atomIds.add(Number(first));
    atomIds.add(Number(second));
    const bond = { firstAtomId: Number(first), secondAtomId: Number(second) };
    return bondSymbol === '=' ? { ...bond, bondOrder: 2 } : bond;
  });
  return {
    carbonAtoms: [...atomIds].map((atomId) => ({ atomId, positionX: atomId * 50, positionY: 0 })),
    carbonCarbonBonds,
  };
}

/** Bonds for an unbranched chain of single bonds from carbon `from` to carbon `to`. */
function singleBondedChain(from, to) {
  return Array.from({ length: to - from }, (_, index) => `${from + index}-${from + index + 1}`).join(' ');
}

const nameOf = (bondList) => nameCarbonSkeleton(moleculeFromBonds(bondList)).iupacName;

describe('unbranched alkenes', () => {
  it.each([
    ['ethene', '1=2', 'Blue Book P-14.3.4.2 (d): locants left out'],
    ['propene', '1=2 2-3', 'Blue Book P-14.3.4.2 (d): locants left out'],
    ['but-1-ene', '1=2 2-3 3-4', 'Blue Book P-31.1.1'],
    ['but-2-ene', '1-2 2=3 3-4', 'P-14.4 (e): lowest locant for the double bond'],
    ['pent-2-ene', '1-2 2=3 3-4 4-5', 'Blue Book P-44.4.1.1'],
    ['hex-2-ene', '1-2 2=3 3-4 4-5 5-6', 'Blue Book P-31.1.1'],
    ['hex-3-ene', '1-2 2-3 3=4 4-5 5-6', 'P-14.4 (e): same locant either way'],
  ])('%s (%s)', (expectedName, bonds) => {
    expect(nameOf(bonds)).toBe(expectedName);
  });

  it('numbers from the end nearer the double bond, so it is never pent-3-ene (P-14.4 (e))', () => {
    expect(nameOf('1-2 2-3 3=4 4-5')).toBe('pent-2-ene');
  });
});

describe('more than one double bond', () => {
  it.each([
    ['buta-1,3-diene', '1=2 2-3 3=4', 'Blue Book P-31.1.1 and Brief Guide 5.4'],
    ['hexa-2,3-diene', '1-2 2=3 3=4 4-5 5-6', 'Blue Book P-31.1.1'],
    ['propa-1,2-diene', '1=2 2=3', 'Blue Book P-14.3.4.4: locants kept'],
    ['hexa-1,3,5-triene', '1=2 2-3 3=4 4-5 5=6', 'P-31.1.1.2: euphonic "a" before "triene"'],
  ])('%s (%s)', (expectedName, bonds) => {
    expect(nameOf(bonds)).toBe(expectedName);
  });
});

describe('alkenes with side chains', () => {
  it.each([
    ['2-methylprop-1-ene', '1=2 2-3 2-4', 'P-14.3.3: once any locant is needed, all are written'],
    ['2-methylbut-2-ene', '1-2 2=3 3-4 2-5', 'P-14.4 (f): then lowest locants for side chains'],
    ['2-methylbut-1-ene', '1=2 2-3 3-4 2-5', 'P-44.4.1.1: the chain with the double bond, of the two 4-carbon chains'],
    ['4-methylpent-1-ene', '1=2 2-3 3-4 4-5 4-6', 'P-14.4 (e): the double bond decides the numbering before side chains'],
    ['2-methylbuta-1,3-diene', '1=2 2-3 3=4 2-5', 'Blue Book P-31.1.1 (isoprene)'],
    ['3-ethylocta-1,4-diene', '1=2 2-3 3-4 4=5 5-6 6-7 7-8 3-9 9-10', 'Brief Guide 6 g: the chain with more double bonds'],
  ])('%s (%s)', (expectedName, bonds) => {
    expect(nameOf(bonds)).toBe(expectedName);
  });
});

describe('a double bond outside the longest chain (P-44.3: chain length comes first)', () => {
  it('4-ethenylnonane: a 9-carbon chain beats an 8-carbon chain with the double bond (Brief Guide 6 f.1)', () => {
    expect(nameOf(`${singleBondedChain(1, 9)} 4-10 10=11`)).toBe('4-ethenylnonane');
  });

  it('3-methylidenepentane: =CH2 on the middle of pentane (P-44.3 and P-29.2 methylidene)', () => {
    expect(nameOf('1-2 2-3 3-4 4-5 3=6')).toBe('3-methylidenepentane');
  });

  it('6-ethylideneundecane: CH3CH= on undecane (P-29.2)', () => {
    expect(nameOf(`${singleBondedChain(1, 11)} 6=12 12-13`)).toBe('6-ethylideneundecane');
  });

  it('5-(prop-2-en-1-yl)nonane: CH2=CHCH2- in brackets because it has locants (P-32.1, P-16.3.4)', () => {
    expect(nameOf(`${singleBondedChain(1, 9)} 5-10 10-11 11=12`)).toBe('5-(prop-2-en-1-yl)nonane');
  });

  it('6-(but-3-en-1-yl)undecane (Blue Book P-32: but-3-en-1-yl is the preferred prefix)', () => {
    expect(nameOf(`${singleBondedChain(1, 11)} 6-12 12-13 13-14 14=15`)).toBe('6-(but-3-en-1-yl)undecane');
  });

  it('5,7-di(prop-2-en-1-yl)undecane: "di" with brackets, not "bis" (P-16.3.4 (b))', () => {
    expect(nameOf(`${singleBondedChain(1, 11)} 5-12 12-13 13=14 7-15 15-16 16=17`)).toBe('5,7-di(prop-2-en-1-yl)undecane');
  });

  it('4-ethenyl-6-ethylnonane: ethenyl is written before ethyl, so gets the lower locant (P-14.5, P-45.2.3)', () => {
    expect(nameOf(`${singleBondedChain(1, 9)} 4-10 10=11 6-12 12-13`)).toBe('4-ethenyl-6-ethylnonane');
  });

  it('a double bond in the chain still names the chain as an alkene: 3-methylidenehex-1-ene', () => {
    // CH2=CH-C(=CH2)-CH2CH2CH3: the 6-carbon chain has one double bond, which comes first.
    expect(nameOf('1=2 2-3 3-4 4-5 5-6 3=7')).toBe('3-methylidenehex-1-ene');
  });
});

describe('the word parts', () => {
  it.each([
    [1, false, [], 'methyl'],
    [1, true, [], 'methylidene'],
    [2, true, [], 'ethylidene'],
    [3, true, [], 'propylidene'],
    [2, false, [1], 'ethenyl'],
    [2, true, [1], 'ethenylidene'],
    [3, false, [2], 'prop-2-en-1-yl'],
    [3, true, [2], 'prop-2-en-1-ylidene'],
    [3, false, [1], 'prop-1-en-1-yl'],
    [4, false, [1, 3], 'buta-1,3-dien-1-yl'],
  ])('a %i-carbon substituent (joined by a double bond: %s, double bonds at %j) is %s (P-29.2, P-32.1)', (carbonCount, isJoinedByDoubleBond, doubleBondLocants, expectedName) => {
    expect(unbranchedSubstituentName(carbonCount, isJoinedByDoubleBond, doubleBondLocants)).toBe(expectedName);
  });

  it('writes the main chain with its "ene" locants', () => {
    expect(mainChainName(3, [1], true)).toBe('prop-1-ene');
    expect(mainChainName(10, [1, 3, 5], false)).toBe('deca-1,3,5-triene');
  });

  it('puts substituents with locants in brackets', () => {
    expect(writeMultipliedSubstituent(1, 'prop-2-en-1-yl')).toBe('(prop-2-en-1-yl)');
    expect(writeMultipliedSubstituent(3, 'prop-2-en-1-yl')).toBe('tri(prop-2-en-1-yl)');
    expect(writeMultipliedSubstituent(2, 'methylidene')).toBe('dimethylidene');
  });

  it('orders substituent names by their letters, then by their locants (P-14.5)', () => {
    const names = ['propyl', 'ethylidene', 'but-3-en-1-yl', 'ethyl', 'prop-2-en-1-yl', 'ethenyl', 'but-2-en-1-yl', 'methyl'];
    expect(names.sort(compareSubstituentNamesAlphanumerically)).toEqual([
      'but-2-en-1-yl',
      'but-3-en-1-yl',
      'ethenyl',
      'ethyl',
      'ethylidene',
      'methyl',
      'prop-2-en-1-yl',
      'propyl',
    ]);
  });
});
