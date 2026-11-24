import { describe, expect, it } from 'vitest';
import {
  alkaneNameForCarbonCount,
  carbonCountForAlkaneStem,
  countForMultiplyingPrefixOfSuffix,
  numericalTerm,
  writeMultipliedSubstituent,
  writeMultipliedSuffix,
} from '../../../src/chemistry/alkaneNamingVocabulary.js';

describe('numerical terms (P-14.2.1)', () => {
  it.each([
    [2, 'di'],
    [4, 'tetra'],
    [10, 'deca'],
    [11, 'undeca'],
    [12, 'dodeca'],
    [14, 'tetradeca'],
    [20, 'icosa'],
    [21, 'henicosa'],
    [22, 'docosa'],
    [23, 'tricosa'],
    [24, 'tetracosa'],
    [41, 'hentetraconta'],
    [52, 'dopentaconta'],
    [100, 'hecta'],
    [111, 'undecahecta'],
    [200, 'dicta'],
    [363, 'trihexacontatricta'],
    [486, 'hexaoctacontatetracta'],
    [1000, 'kilia'],
    [2000, 'dilia'],
  ])('%i is %s', (number, expectedTerm) => {
    expect(numericalTerm(number)).toBe(expectedTerm);
  });
});

describe('alkane names (P-21.2.1)', () => {
  it.each([
    [1, 'methane'],
    [4, 'butane'],
    [5, 'pentane'],
    [11, 'undecane'],
    [20, 'icosane'],
    [23, 'tricosane'],
    [70, 'heptacontane'],
    [100, 'hectane'],
  ])('%i carbons is %s', (carbonCount, expectedName) => {
    expect(alkaneNameForCarbonCount(carbonCount)).toBe(expectedName);
  });

  it('reads every stem back to its number', () => {
    for (let carbonCount = 1; carbonCount <= 9999; carbonCount++) {
      const stem = alkaneNameForCarbonCount(carbonCount).replace(/ane$/, '');
      expect(carbonCountForAlkaneStem(stem)).toBe(carbonCount);
    }
  });
});

describe('multiplied substituents', () => {
  it('writes the prefix straight onto most substituents', () => {
    expect(writeMultipliedSubstituent(1, 'methyl')).toBe('methyl');
    expect(writeMultipliedSubstituent(3, 'methyl')).toBe('trimethyl');
    expect(writeMultipliedSubstituent(11, 'ethyl')).toBe('undecaethyl');
  });

  it('brackets decyl, so tri(decyl) is not read as tridecyl (P-16.3.4 (d))', () => {
    expect(writeMultipliedSubstituent(2, 'decyl')).toBe('di(decyl)');
    expect(writeMultipliedSubstituent(3, 'decyl')).toBe('tri(decyl)');
  });

  it('brackets any other substituent that would read as a different one', () => {
    expect(writeMultipliedSubstituent(3, 'hectyl')).toBe('tri(hectyl)');
  });
});

describe('multiplied suffixes', () => {
  it('leaves out the final "a" of tetra, penta ... before a suffix beginning with "a" or "o" (P-16.7.1 (c))', () => {
    expect(writeMultipliedSuffix(4, 'ol')).toBe('tetrol');
    expect(writeMultipliedSuffix(6, 'ol')).toBe('hexol');
    expect(writeMultipliedSuffix(4, 'one')).toBe('tetrone');
    expect(writeMultipliedSuffix(4, 'amine')).toBe('tetramine');
  });

  it('keeps it before "ene" and before a consonant (P-31.1.1.2)', () => {
    expect(writeMultipliedSuffix(4, 'ene')).toBe('tetraene');
    expect(writeMultipliedSuffix(4, 'carboxylic acid')).toBe('tetracarboxylic acid');
    expect(writeMultipliedSuffix(1, 'ol')).toBe('ol');
    expect(writeMultipliedSuffix(2, 'ol')).toBe('diol');
    expect(writeMultipliedSuffix(3, 'ol')).toBe('triol');
  });

  it('reads the prefix back, with or without the "a"', () => {
    expect(countForMultiplyingPrefixOfSuffix('tetr', 'ol')).toBe(4);
    expect(countForMultiplyingPrefixOfSuffix('tetra', 'ol')).toBe(4);
    expect(countForMultiplyingPrefixOfSuffix('di', 'one')).toBe(2);
    expect(countForMultiplyingPrefixOfSuffix('tetr', 'carboxylic acid')).toBeUndefined();
  });
});
