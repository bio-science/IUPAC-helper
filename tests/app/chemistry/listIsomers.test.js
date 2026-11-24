import { describe, expect, it } from 'vitest';
import { listOpenChainIsomers, listEveryAlkaneSkeletonWithCarbonCount, listEveryOpenChainSkeleton } from '../../../src/chemistry/listIsomers.js';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';

describe('counting alkane isomers', () => {
  // The number of structural isomers of each alkane is a well-known sequence
  // (OEIS A000602): 1, 1, 1, 2, 3, 5, 9, 18, 35, 75.
  it.each([
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 2],
    [5, 3],
    [6, 5],
    [7, 9],
    [8, 18],
    [9, 35],
    [10, 75],
  ])('C%i has %i isomers', (carbonCount, expectedIsomerCount) => {
    expect(listEveryAlkaneSkeletonWithCarbonCount(carbonCount)).toHaveLength(expectedIsomerCount);
  });

  it('names every isomer up to 9 carbons (none have branched side chains)', () => {
    for (let carbonCount = 1; carbonCount <= 9; carbonCount++) {
      expect(listOpenChainIsomers(carbonCount).countOfIsomersNotYetSupported).toBe(0);
    }
  });

  it('gives every isomer a different name', () => {
    for (let carbonCount = 1; carbonCount <= 10; carbonCount++) {
      const names = listOpenChainIsomers(carbonCount).nameableIsomers.map((isomer) => isomer.iupacName);
      expect(new Set(names).size).toBe(names.length);
    }
  });

  it('accounts for all 75 decane isomers, named or not', () => {
    const { nameableIsomers, countOfIsomersNotYetSupported } = listOpenChainIsomers(10);
    expect(nameableIsomers.length + countOfIsomersNotYetSupported).toBe(75);
  });

  it('lists the isomers of C5H12 longest chain first', () => {
    const names = listOpenChainIsomers(5).nameableIsomers.map((isomer) => isomer.iupacName);
    expect(names).toEqual(['pentane', '2-methylbutane', '2,2-dimethylpropane']);
  });

  // The number of structural isomers of the alkenes CnH2n (open chains only) is OEIS A000631,
  // "Number of ethylene derivatives with n carbon atoms": 1, 1, 3, 5, 13, 27, 66, 153.
  it.each([
    [2, 1],
    [3, 1],
    [4, 3],
    [5, 5],
    [6, 13],
    [7, 27],
    [8, 66],
    [9, 153],
  ])('C%i alkenes have %i open-chain structural isomers', (carbonCount, expectedIsomerCount) => {
    expect(listEveryOpenChainSkeleton(carbonCount, 1)).toHaveLength(expectedIsomerCount);
  });

  it('names every alkene isomer up to 8 carbons, each differently', () => {
    for (let carbonCount = 2; carbonCount <= 8; carbonCount++) {
      const { nameableIsomers, countOfIsomersNotYetSupported } = listOpenChainIsomers(carbonCount, 1);
      expect(countOfIsomersNotYetSupported).toBe(0);
      const names = nameableIsomers.map((isomer) => isomer.iupacName);
      expect(new Set(names).size).toBe(names.length);
    }
  });

  it('names all 153 C9H18 alkenes, with branched side chains such as 3-(propan-2-yl)hex-1-ene', () => {
    const { nameableIsomers, countOfIsomersNotYetSupported } = listOpenChainIsomers(9, 1);
    expect(countOfIsomersNotYetSupported).toBe(0);
    expect(nameableIsomers.map(({ iupacName }) => iupacName)).toEqual(expect.arrayContaining(['3-(propan-2-yl)hex-1-ene', '4-methyl-3-(propan-2-yl)pent-2-ene']));
    // E and Z isomers are listed separately, so count the names without their E and Z.
    const structuralIsomerNames = new Set(nameableIsomers.map(({ iupacName }) => iupacName.replace(/^\(\d+[EZ]\)-/, '')));
    expect(structuralIsomerNames.size + countOfIsomersNotYetSupported).toBe(153);
  });

  it('lists the alkene isomers of C5H10', () => {
    const names = listOpenChainIsomers(5, 1).nameableIsomers.map((isomer) => isomer.iupacName);
    expect(names).toEqual(['pent-1-ene', '(2E)-pent-2-ene', '(2Z)-pent-2-ene', '2-methylbut-1-ene', '2-methylbut-2-ene', '3-methylbut-1-ene']);
  });

  it('lists the E and Z isomers of each double bond that has them, once each', () => {
    const names = listOpenChainIsomers(6, 2).nameableIsomers.map((isomer) => isomer.iupacName);
    // (2E,4Z) numbered from the other end is (2Z,4E), the same molecule.
    expect(names.filter((name) => name.endsWith('hexa-2,4-diene'))).toEqual(['(2E,4E)-hexa-2,4-diene', '(2Z,4E)-hexa-2,4-diene', '(2Z,4Z)-hexa-2,4-diene']);
    expect(names.filter((name) => name.endsWith('hexa-1,3-diene'))).toEqual(['(3E)-hexa-1,3-diene', '(3Z)-hexa-1,3-diene']);
    expect(names).toContain('hexa-1,5-diene');
  });

  it('draws each isomer as named', () => {
    for (const { iupacName, carbonSkeleton } of listOpenChainIsomers(6, 2).nameableIsomers) {
      expect(nameCarbonSkeleton(carbonSkeleton).iupacName).toBe(iupacName);
    }
  });

  it('lists the isomers of C6H14', () => {
    const names = listOpenChainIsomers(6).nameableIsomers.map((isomer) => isomer.iupacName);
    expect(names).toEqual(['hexane', '2-methylpentane', '3-methylpentane', '2,2-dimethylbutane', '2,3-dimethylbutane']);
  });
});
