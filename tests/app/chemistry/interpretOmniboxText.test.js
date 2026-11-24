import { describe, expect, it } from 'vitest';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { parseMolecularFormula, formatMolecularFormula } from '../../../src/chemistry/molecularFormula.js';
import { listOpenChainIsomers } from '../../../src/chemistry/listIsomers.js';
import { inBritishEnglish } from '../inBritishEnglish.js';
import { writeDigitsAsSubscripts, writeSubscriptDigitsAsOrdinaryDigits } from '../../../src/chemistry/subscriptDigits.js';

describe('interpretOmniboxText', () => {
  it('does nothing for empty text', () => {
    expect(interpretOmniboxText('  ').kind).toBe('empty');
  });

  it('draws a correctly named alkane', () => {
    const result = interpretOmniboxText('2-methylbutane');
    expect(result.kind).toBe('name');
    expect(result.typedNameIsCorrectIupacName).toBe(true);
    expect(result.carbonSkeleton.carbonAtoms).toHaveLength(5);
  });

  it('draws a wrongly named alkane and gives its correct name', () => {
    const result = interpretOmniboxText('2-ethylbutane');
    expect(result.kind).toBe('name');
    expect(result.typedNameIsCorrectIupacName).toBe(false);
    expect(result.correctIupacName).toBe('3-methylpentane');
  });

  it('lists the isomers of a formula', () => {
    const result = interpretOmniboxText('C5H12');
    expect(result.kind).toBe('molecularFormula');
    expect(result.nameableIsomers).toHaveLength(3);
  });

  it('accepts a formula typed in lower case', () => {
    expect(interpretOmniboxText('c4h10').kind).toBe('molecularFormula');
  });

  it('accepts formulae with subscript digits, as copied from a page or document', () => {
    expect(interpretOmniboxText('C₄H₁₀')).toMatchObject({ kind: 'molecularFormula', formulaText: 'C4H10' });
    expect(interpretOmniboxText('C₂H₇N').nameableIsomers.map((isomer) => isomer.iupacName)).toEqual(['ethanamine', 'N-methylmethanamine']);
    expect(interpretOmniboxText('CH₃NH₂').nameableIsomers.map((isomer) => isomer.iupacName)).toEqual(['methanamine']);
    expect(interpretOmniboxText('CH₃CH₂OCH₃').kind).toBe('structuralFormula');
    expect(interpretOmniboxText('CH₃CH(CH₃)CH₃').kind).toBe('structuralFormula');
  });

  it('explains a formula with too many hydrogens, or an odd number', () => {
    expect(inBritishEnglish(interpretOmniboxText('C5H14').message)).toMatch(/C5H12/);
    expect(inBritishEnglish(interpretOmniboxText('C5H11').message)).toMatch(/C5H12/);
  });

  it('lists the alkenes and rings of CnH2n, open chains first', () => {
    const result = interpretOmniboxText('C4H8');
    expect(result.kind).toBe('molecularFormula');
    expect(result.nameableIsomers.map((isomer) => isomer.iupacName)).toEqual([
      'but-1-ene',
      '(2E)-but-2-ene',
      '(2Z)-but-2-ene',
      '2-methylprop-1-ene',
      'cyclobutane',
      'methylcyclopropane',
    ]);
    expect(inBritishEnglish(result.message)).toMatch(/6 isomers.*one C=C double bond or a ring/);
  });

  it('lists the dienes and the rings with one double bond of CnH2n-2, saying triple bonds are not covered', () => {
    const result = interpretOmniboxText('C4H6');
    expect(result.nameableIsomers.map((isomer) => isomer.iupacName)).toEqual([
      'buta-1,2-diene',
      'buta-1,3-diene',
      'cyclobutene',
      '1-methylcycloprop-1-ene',
      '3-methylcycloprop-1-ene',
      'methylidenecyclopropane',
    ]);
    expect(inBritishEnglish(result.message)).toMatch(/2 C=C double bonds, or a ring in place of one of them.*triple/);
  });

  it('explains a formula that would need more than one ring or a triple bond', () => {
    expect(inBritishEnglish(interpretOmniboxText('C3H2').message)).toMatch(/more than one ring, or a C≡C triple bond/);
    expect(inBritishEnglish(interpretOmniboxText('C2H0').message)).toMatch(/more than one ring, or a C≡C triple bond/);
  });

  it('draws an alkene from its name, and gives the IUPAC name for an older-style one', () => {
    expect(interpretOmniboxText('2-methylbut-2-ene')).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
    expect(interpretOmniboxText('2-pentene')).toMatchObject({ kind: 'name', correctIupacName: 'pent-2-ene' });
    expect(interpretOmniboxText('2-methylpropene')).toMatchObject({ correctIupacName: '2-methylprop-1-ene' });
  });

  it('gives the 2013 name when a typed name has the double bond off the longest chain', () => {
    expect(interpretOmniboxText('2-ethylbut-1-ene')).toMatchObject({ kind: 'name', correctIupacName: '3-methylidenepentane' });
  });

  it('reads back every name it gives an open-chain isomer with up to 3 double bonds and 7 carbons', () => {
    for (let carbonCount = 2; carbonCount <= 7; carbonCount++) {
      for (let doubleBondCount = 0; doubleBondCount <= Math.min(3, carbonCount - 1); doubleBondCount++) {
        for (const { iupacName } of listOpenChainIsomers(carbonCount, doubleBondCount).nameableIsomers) {
          expect(interpretOmniboxText(iupacName), iupacName).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
        }
      }
    }
  });

  it('reads back names with side chains that have their own double bonds', () => {
    for (const name of ['4-ethenylnonane', '3-methylidenepentane', '6-ethylideneundecane', '5-(prop-2-en-1-yl)nonane', '5,7-di(prop-2-en-1-yl)undecane']) {
      expect(interpretOmniboxText(name), name).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
    }
  });

  it('draws an alkene from its structural formula', () => {
    const result = interpretOmniboxText('CH2=CHCH3');
    expect(result.kind).toBe('structuralFormula');
    expect(result.carbonSkeleton.carbonCarbonBonds.filter((bond) => bond.bondOrder === 2)).toHaveLength(1);
  });

  it('explains a carbon left with too many hydrogens on a typed alkene name', () => {
    expect(inBritishEnglish(interpretOmniboxText('2,2-dimethylbut-2-ene').message)).toMatch(/Carbon 2 would have more than 4 bonds/);
  });

  it('explains an O that leaves its carbon with too many bonds', () => {
    const result = interpretOmniboxText('CH3CHOCH3');
    expect(result.kind).toBe('notRecognised');
    expect(inBritishEnglish(result.message)).toMatch(/more than 4 bonds/);
  });

  it('draws a long-chain alkane from its name', () => {
    const result = interpretOmniboxText('tetractane');
    expect(result.kind).toBe('name');
    expect(result.typedNameIsCorrectIupacName).toBe(true);
    expect(result.carbonSkeleton.carbonAtoms).toHaveLength(400);
  });

  it('refuses a name for a molecule too big to draw', () => {
    expect(inBritishEnglish(interpretOmniboxText('kiliane').message)).toMatch(/up to 500 carbons/);
  });

  it('lists isomers up to 12 carbons, and suggests a name or structural formula beyond that', () => {
    expect(interpretOmniboxText('C12H26').kind).toBe('molecularFormula');
    expect(inBritishEnglish(interpretOmniboxText('C13H28').message)).toMatch(/too many isomers/);
  });

  it('gives a hint for half-typed text', () => {
    expect(interpretOmniboxText('2-meth').kind).toBe('notRecognised');
  });
});

describe('molecular formulae', () => {
  it('reads a formula, including repeated elements', () => {
    const noHalogens = { F: 0, Cl: 0, Br: 0, I: 0 };
    expect(parseMolecularFormula('C5H12')).toEqual({ carbonCount: 5, hydrogenCount: 12, oxygenCount: 0, nitrogenCount: 0, halogenCounts: noHalogens });
    expect(parseMolecularFormula('CH3CH2CH3')).toEqual({ carbonCount: 3, hydrogenCount: 8, oxygenCount: 0, nitrogenCount: 0, halogenCounts: noHalogens });
    expect(parseMolecularFormula('C2H7N')).toEqual({ carbonCount: 2, hydrogenCount: 7, oxygenCount: 0, nitrogenCount: 1, halogenCounts: noHalogens });
  });

  it('writes a formula without 1s', () => {
    expect(formatMolecularFormula({ carbonCount: 1, hydrogenCount: 4 })).toBe('CH4');
    expect(formatMolecularFormula({ carbonCount: 6, hydrogenCount: 14 })).toBe('C6H14');
  });
});

describe('subscript digits', () => {
  it('writes digits as Unicode subscripts, and back', () => {
    expect(writeDigitsAsSubscripts('C2H6O')).toBe('C₂H₆O');
    expect(writeDigitsAsSubscripts('1234567890')).toBe('₁₂₃₄₅₆₇₈₉₀');
    expect(writeSubscriptDigitsAsOrdinaryDigits('C₁₂H₂₆')).toBe('C12H26');
    expect(writeSubscriptDigitsAsOrdinaryDigits('propan-2-ol')).toBe('propan-2-ol');
  });
});
