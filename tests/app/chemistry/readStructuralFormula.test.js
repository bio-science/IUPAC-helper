import { describe, expect, it } from 'vitest';
import { readStructuralFormula } from '../../../src/chemistry/readStructuralFormula.js';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { countAtomsInMolecule } from '../../../src/chemistry/carbonSkeleton.js';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { inBritishEnglish } from '../inBritishEnglish.js';

function nameOf(formulaText) {
  const result = readStructuralFormula(formulaText);
  expect(result?.carbonSkeleton, formulaText).toBeTruthy();
  return nameCarbonSkeleton(result.carbonSkeleton).iupacName;
}

describe('reading double bonds written as =', () => {
  it.each([
    ['CH2=CH2', 'ethene'],
    ['CH2=CHCH3', 'propene'],
    ['CH3CH=CHCH3', 'but-2-ene'],
    ['CH2=CH-CH2-CH3', 'but-1-ene'],
    ['CH2=C(CH3)CH3', '2-methylprop-1-ene'],
    ['(CH3)2C=CH2', '2-methylprop-1-ene'],
    ['(CH3)2C=CHCH3', '2-methylbut-2-ene'],
    ['CH2=CHCH=CH2', 'buta-1,3-diene'],
    ['CH2=C=CH2', 'propa-1,2-diene'],
    ['CH3C(=CH2)CH3', '2-methylprop-1-ene'],
    ['CH3CH2C(=CH2)CH2CH3', '3-methylidenepentane'],
    ['CH3CH(CH=CH2)CH3', '3-methylbut-1-ene'],
  ])('builds %s as %s', (formulaText, expectedName) => {
    expect(nameOf(formulaText)).toBe(expectedName);
  });

  it('gives C=C double bonds the right number of hydrogens', () => {
    expect(countAtomsInMolecule(readStructuralFormula('CH2=CHCH=CH2').carbonSkeleton)).toMatchObject({ carbonCount: 4, hydrogenCount: 6 });
  });

  it('suggests = when a double bond seems to have been left out', () => {
    expect(inBritishEnglish(readStructuralFormula('CH2CHCH3').errorMessage)).toMatch(/write =/);
  });

  it('does not suggest = when a carbon simply has too many hydrogens', () => {
    expect(inBritishEnglish(readStructuralFormula('CH3CH3CH3').errorMessage)).not.toMatch(/write =/);
  });

  it.each(['CH2=', '=CH2CH3', 'CH2==CH2', 'CH3(=)CH3'])('explains how to write %s', (formulaText) => {
    expect(inBritishEnglish(readStructuralFormula(formulaText).errorMessage)).toMatch(/= for a double bond/);
  });
});

describe('readStructuralFormula', () => {
  it.each([
    ['CH3CH3', 'ethane'],
    ['CH3CH2CH3', 'propane'],
    ['CH3CH2CH2CH3', 'butane'],
    ['CH3CH(CH3)CH3', '2-methylpropane'],
    ['(CH3)2CHCH3', '2-methylpropane'],
    ['CH(CH3)3', '2-methylpropane'],
    ['CH3C(CH3)2CH3', '2,2-dimethylpropane'],
    ['C(CH3)4', '2,2-dimethylpropane'],
    ['(CH3)3CCH3', '2,2-dimethylpropane'],
    ['CH3(CH2)4CH3', 'hexane'],
    ['CH3CH(CH3)CH2CH3', '2-methylbutane'],
    ['(CH3)2CHCH(CH3)2', '2,3-dimethylbutane'],
    ['CH3CH2CH(CH2CH3)CH2CH3', '3-ethylpentane'],
    ['CH3CH2CH(CH3)CH2CH3', '3-methylpentane'],
    ['CH3(CH2)2C(CH3)2CH3', '2,2-dimethylpentane'],
  ])('builds %s as %s', (formulaText, expectedName) => {
    expect(nameOf(formulaText)).toBe(expectedName);
  });

  it.each([
    ['CH3CH(C2H5)CH3', '2-methylbutane'],
    ['CH3CH2CH(C2H5)CH2CH3', '3-ethylpentane'],
    ['C2H5CH(CH3)C2H5', '3-methylpentane'],
    ['CH3C(C2H5)2CH3', '3,3-dimethylpentane'],
    ['C2H5C2H5', 'butane'],
    ['CH3C2H4CH3', 'butane'],
    ['CH3CH(C3H7)CH3', '2-methylpentane'],
    ['(C2H5)3CH', '3-ethylpentane'],
    ['H3CCH2CH3', 'propane'],
    ['(H3C)2CHCH3', '2-methylpropane'],
    ['CH3C[CH3]2CH3', '2,2-dimethylpropane'],
  ])('reads groups written by formula, and other ways of writing: %s is %s', (formulaText, expectedName) => {
    expect(nameOf(formulaText)).toBe(expectedName);
  });

  it('says when a group written by formula is not an alkyl group, and how to write a double bond instead', () => {
    expect(inBritishEnglish(readStructuralFormula('CH3CH(C2H3)CH3').errorMessage)).toBe(
      "C2H3 can't be read as a side chain: written as a formula, a side chain must be an alkyl group, where 2 carbons have 5 hydrogens (C2H5). Write a side chain with a double bond one carbon at a time, e.g. (CH=CH2).",
    );
  });

  it('builds the molecule as written, not just one with the same molecular formula', () => {
    expect(nameOf('CH3CH2CH2CH2CH3')).toBe('pentane');
    expect(nameOf('CH3CH(CH3)CH2CH3')).toBe('2-methylbutane');
    expect(nameOf('CH3C(CH3)2CH3')).toBe('2,2-dimethylpropane');
  });

  it('accepts lower case, spaces, bond dashes and subscript numbers', () => {
    expect(nameOf('ch3ch(ch3)ch3')).toBe('2-methylpropane');
    expect(nameOf('CH3 - CH2 - CH3')).toBe('propane');
    expect(nameOf('CH₃CH₂CH₃')).toBe('propane');
  });

  it('draws the chain as written from left to right', () => {
    const { carbonSkeleton, mainChainAtomIds } = readStructuralFormula('CH3CH(CH3)CH2CH3');
    expect(mainChainAtomIds).toHaveLength(4);
    const chainHeights = mainChainAtomIds.map((atomId) => carbonSkeleton.carbonAtoms.find((carbon) => carbon.atomId === atomId).positionY);
    expect(new Set(chainHeights).size).toBe(1);
  });

  it('starts the drawn chain with a side chain written at the start', () => {
    expect(readStructuralFormula('(CH3)2CHCH2CH3').mainChainAtomIds).toHaveLength(4);
  });

  it('leaves molecular formulae and names to the rest of the omnibox', () => {
    expect(readStructuralFormula('C5H12')).toBeNull();
    expect(readStructuralFormula('c4h10')).toBeNull();
    expect(readStructuralFormula('2-methylbutane')).toBeNull();
    expect(readStructuralFormula('C2H6O')).toBeNull();
    expect(readStructuralFormula('C2H5OH')).toBeNull();
  });

  // The Blue Book writes one-carbon molecules this way, as in P-63.1.2 (CH3-OH) and P-61.3.1 (CH3-I).
  it.each([
    ['CH4', 'methane'],
    ['CH3-OH', 'methanol'],
    ['CH3OH', 'methanol'],
    ['CH3Cl', 'chloromethane'],
    ['CH3-I', 'iodomethane'],
    ['HCBr3', 'tribromomethane'],
    ['H-COOH', 'formic acid'],
    ['HCOOH', 'formic acid'],
    ['Cl-CH2-OH', 'chloromethanol'],
    ['CH3-NH2', 'methanamine'],
  ])('reads a single carbon with its groups: %s is %s', (formulaText, expectedName) => {
    expect(nameOf(formulaText)).toBe(expectedName);
  });

  it('gives no error for a single carbon that is more likely the start of something longer', () => {
    expect(readStructuralFormula('C')).toBeNull();
    expect(readStructuralFormula('CH3')).toBeNull();
  });

  it('still lists one carbon written like a molecular formula as one, but draws it when written with dashes', () => {
    expect(interpretOmniboxText('CH4').kind).toBe('molecularFormula');
    expect(interpretOmniboxText('CH3OH').kind).toBe('molecularFormula');
    expect(interpretOmniboxText('CH3-OH').kind).toBe('structuralFormula');
    expect(interpretOmniboxText('Cl-CH2-OH').kind).toBe('structuralFormula');
  });

  // An O at the start or end of a bracket joins the group in it as an ether, as in P-15.2.2's CH3-CH2-CH(O-CH3)2.
  it.each([
    ['CH3-CH2-CH(O-CH3)2', '1,1-dimethoxypropane'],
    ['CH3CH(OCH3)CH2CH3', '2-methoxybutane'],
    ['(CH3O)2CHCH3', '1,1-dimethoxyethane'],
    ['(CH3CH2O)CH2CH3', 'ethoxyethane'],
  ])('reads an O at the start or end of a bracket as an ether: %s is %s', (formulaText, expectedName) => {
    expect(nameOf(formulaText)).toBe(expectedName);
  });

  it('reads an O at the end of a bracket as a C=O when its carbon has room for one', () => {
    expect(nameOf('CH3CH(CH2CHO)CH3')).toBe('3-methylbutanal');
    expect(nameOf('CH3CH(CHO)CH3')).toBe('2-methylpropanal');
  });

  it('reads an O at the start of a repeated part of the chain as an ether link', () => {
    const { carbonSkeleton } = readStructuralFormula('CH3(OCH2CH2)3OCH3');
    expect(carbonSkeleton.carbonAtoms).toHaveLength(8);
    expect(carbonSkeleton.carbonCarbonBonds.filter((bond) => bond.linkAtom === 'O')).toHaveLength(4);
  });

  it('says which carbon has the wrong number of bonds', () => {
    expect(inBritishEnglish(readStructuralFormula('CH3CH3CH3').errorMessage)).toBe(
      'Carbon 2 (CH3) would make 5 bonds, but every carbon makes exactly 4.',
    );
    expect(inBritishEnglish(readStructuralFormula('CH3CH2').errorMessage)).toMatch(/Carbon 2 \(CH2\) would make 3 bonds/);
    expect(inBritishEnglish(readStructuralFormula('CH3CH(CH3)2CH3').errorMessage)).toMatch(/Carbon 2 \(CH\) would make 5 bonds/);
  });

  it('explains how to write one it cannot read', () => {
    expect(inBritishEnglish(readStructuralFormula('CH3CH(CH3CH3').errorMessage)).toMatch(/one carbon at a time/);
    expect(inBritishEnglish(readStructuralFormula('(CH3)2').errorMessage)).toMatch(/one carbon at a time/);
  });

  it('draws molecules too big to name, but refuses ones too big to draw', () => {
    expect(readStructuralFormula('CH3(CH2)58CH3').carbonSkeleton.carbonAtoms).toHaveLength(60);
    expect(inBritishEnglish(readStructuralFormula('CH3(CH2)999CH3').errorMessage)).toMatch(/up to 500 carbons/);
  });
});

describe('the omnibox with a structural formula', () => {
  it('draws the molecule instead of listing isomers', () => {
    const result = interpretOmniboxText('CH3CH(CH3)CH3');
    expect(result.kind).toBe('structuralFormula');
    expect(countAtomsInMolecule(result.carbonSkeleton)).toMatchObject({ carbonCount: 4, hydrogenCount: 10 });
  });

  it('still lists the isomers of a molecular formula', () => {
    expect(interpretOmniboxText('C4H10').kind).toBe('molecularFormula');
  });
});
