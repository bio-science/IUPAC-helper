/**
 * Haloalkanes (and haloalkenes): naming, reading typed names and formulae, and listing isomers.
 *
 * The rules come from the IUPAC 2013 Recommendations (the Blue Book):
 *   P-61.3.1      halogens are only ever prefixes: fluoro, chloro, bromo, iodo
 *   P-14.4 (f)    lowest locants go to all the prefixes together, then (g) to the one cited first
 *   P-14.3.4.4    locants are left out when moving or swapping the prefixes can't give another
 *                 isomer: chloroethane, trichloroethene
 *   P-14.3.4.5    and when every hydrogen has been replaced in the same way: hexachloroethane
 *   P-16.5.1.3.1  on methane, the second and later prefixes go in brackets: trichloro(fluoro)methane
 */
import { describe, expect, it } from 'vitest';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { connectCarbonSkeletonFromDescription } from '../../../src/chemistry/buildCarbonSkeletonFromDescription.js';
import { readStructuralFormula } from '../../../src/chemistry/readStructuralFormula.js';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { listOpenChainIsomers } from '../../../src/chemistry/listIsomers.js';
import { formatMolecularFormula, parseMolecularFormula } from '../../../src/chemistry/molecularFormula.js';
import { countAtomsInMolecule } from '../../../src/chemistry/carbonSkeleton.js';
import { ANSWER_HINTS, ANSWER_VERDICTS, checkStudentAnswer } from '../../../src/chemistry/checkStudentAnswer.js';
import { areLocantsNeeded } from '../../../src/chemistry/decideWhetherLocantsAreNeeded.js';
import { inBritishEnglish } from '../inBritishEnglish.js';

const PREFIX_BY_HALOGEN = { F: 'fluoro', Cl: 'chloro', Br: 'bromo', I: 'iodo' };
const halogen = (locant, elementSymbol) => ({ locant, halogen: elementSymbol, substituentName: PREFIX_BY_HALOGEN[elementSymbol] });
const methyl = (locant) => ({ locant, substituentCarbonCount: 1 });

function nameOfDescription(mainChainCarbonCount, substituents, mainChainDoubleBondLocants = []) {
  const { carbonSkeleton, errorMessage } = connectCarbonSkeletonFromDescription({ mainChainCarbonCount, mainChainDoubleBondLocants, substituents });
  expect(errorMessage).toBeUndefined();
  return nameCarbonSkeleton(carbonSkeleton).iupacName;
}

function nameOfStructuralFormula(formulaText) {
  const result = readStructuralFormula(formulaText);
  expect(result?.carbonSkeleton, formulaText).toBeTruthy();
  return nameCarbonSkeleton(result.carbonSkeleton).iupacName;
}

describe('naming haloalkanes', () => {
  it.each([
    ['chloromethane', 1, [halogen(1, 'Cl')]],
    ['dichloromethane', 1, [halogen(1, 'Cl'), halogen(1, 'Cl')]],
    ['tetrachloromethane', 1, [1, 1, 1, 1].map((locant) => halogen(locant, 'Cl'))],
    ['chloroethane', 2, [halogen(1, 'Cl')]],
    ['1,2-dibromoethane', 2, [halogen(1, 'Br'), halogen(2, 'Br')]],
    ['1,1,1-trichloroethane', 2, [1, 1, 1].map((locant) => halogen(locant, 'Cl'))],
    ['1,1,2-trichloroethane', 2, [1, 1, 2].map((locant) => halogen(locant, 'Cl'))],
    ['hexachloroethane', 2, [1, 1, 1, 2, 2, 2].map((locant) => halogen(locant, 'Cl'))],
    ['1-chloropropane', 3, [halogen(1, 'Cl')]],
    ['2-chloropropane', 3, [halogen(2, 'Cl')]],
    ['1-bromo-3-chloropropane', 3, [halogen(1, 'Br'), halogen(3, 'Cl')]],
    ['2-bromo-2-methylpropane', 3, [halogen(2, 'Br'), methyl(2)]],
    ['1-chloro-2-methylpropane', 3, [halogen(1, 'Cl'), methyl(2)]],
    ['2-chloro-3-methylbutane', 4, [halogen(2, 'Cl'), methyl(3)]],
    ['3-bromo-1-chlorobutane', 4, [halogen(1, 'Cl'), halogen(3, 'Br')]],
    ['1-iodobutane', 4, [halogen(1, 'I')]],
    ['2-fluorobutane', 4, [halogen(2, 'F')]],
  ])('%s', (expectedName, mainChainCarbonCount, substituents) => {
    expect(nameOfDescription(mainChainCarbonCount, substituents)).toBe(expectedName);
  });

  it('brackets the second and later prefixes on methane (P-16.5.1.3.1)', () => {
    expect(nameOfDescription(1, [halogen(1, 'Cl'), halogen(1, 'Cl'), halogen(1, 'Cl'), halogen(1, 'F')])).toBe('trichloro(fluoro)methane');
    expect(nameOfDescription(1, [halogen(1, 'Br'), halogen(1, 'Cl'), halogen(1, 'F'), halogen(1, 'F')])).toBe('bromo(chloro)di(fluoro)methane');
  });

  it('names haloalkenes, with the double bond numbered first', () => {
    expect(nameOfDescription(2, [halogen(1, 'Cl')], [1])).toBe('chloroethene');
    expect(nameOfDescription(2, [1, 1, 2].map((locant) => halogen(locant, 'Cl')), [1])).toBe('trichloroethene');
    expect(nameOfDescription(2, [1, 1, 2, 2].map((locant) => halogen(locant, 'F')), [1])).toBe('tetrafluoroethene');
    expect(nameOfDescription(3, [halogen(3, 'Cl')], [1])).toBe('3-chloroprop-1-ene');
    expect(nameOfDescription(5, [halogen(4, 'Cl')], [2])).toBe('4-chloropent-2-ene');
  });

  it('chooses between equally long chains by the most substituents, counting halogens', () => {
    // CH2Cl-CH(CH3)-CH2-CH3: the chain through the CH2Cl carbon carries the chlorine and the methyl.
    const { carbonSkeleton } = connectCarbonSkeletonFromDescription({ mainChainCarbonCount: 4, substituents: [methyl(2)] });
    carbonSkeleton.carbonAtoms[0].groups = [{ symbol: 'Cl' }];
    expect(nameCarbonSkeleton(carbonSkeleton).iupacName).toBe('1-chloro-2-methylbutane');
  });

  it('names a halogen on a side chain as part of the side chain', () => {
    // CH3CH2CH(CH2Cl)CH2CH3
    const { carbonSkeleton } = connectCarbonSkeletonFromDescription({ mainChainCarbonCount: 5, substituents: [methyl(3)] });
    carbonSkeleton.carbonAtoms[5].groups = [{ symbol: 'Cl' }];
    expect(nameCarbonSkeleton(carbonSkeleton).iupacName).toBe('3-(chloromethyl)pentane');
  });
});

describe('deciding whether locants are needed (P-14.3.4.4)', () => {
  it.each([
    [false, 2, [halogen(1, 'Cl')]],
    [true, 3, [halogen(1, 'Cl')]],
    [true, 2, [halogen(1, 'Cl'), halogen(1, 'Cl')]],
    [false, 2, [1, 1, 1, 2, 2].map((locant) => halogen(locant, 'Cl')).concat([halogen(2, 'F')])],
    [true, 2, [1, 1, 1].map((locant) => halogen(locant, 'Cl')).concat([2, 2, 2].map((locant) => halogen(locant, 'F')))],
  ])('%s for %i carbons with %j', (expected, mainChainCarbonCount, substituents) => {
    expect(areLocantsNeeded({ mainChainCarbonCount, mainChainDoubleBondLocants: [], substituents })).toBe(expected);
  });
});

describe('reading typed haloalkane names', () => {
  it.each([
    ['chloromethane', 'CH3Cl'],
    ['trichloromethane', 'CHCl3'],
    ['trichloro(fluoro)methane', 'CCl3F'],
    ['bromoethane', 'C2H5Br'],
    ['1,2-dichloroethane', 'C2H4Cl2'],
    ['2-chloro-2-methylpropane', 'C4H9Cl'],
    ['1-bromo-3-chloropropane', 'C3H6BrCl'],
    ['trichloroethene', 'C2HCl3'],
  ])('%s draws %s', (typedName, expectedFormula) => {
    const result = interpretOmniboxText(typedName);
    expect(result).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
    expect(formatMolecularFormula(countAtomsInMolecule(result.carbonSkeleton))).toBe(expectedFormula);
  });

  it('draws a name with needless locants, and gives the IUPAC name', () => {
    expect(interpretOmniboxText('1-chloroethane')).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: false, correctIupacName: 'chloroethane' });
  });

  it('draws a name in the wrong order, and gives the IUPAC name', () => {
    expect(interpretOmniboxText('3-chloro-1-bromopropane')).toMatchObject({ kind: 'name', correctIupacName: '1-bromo-3-chloropropane' });
  });

  it('asks for a locant when leaving it out could mean more than one molecule', () => {
    const result = interpretOmniboxText('chloropropane');
    expect(result.kind).toBe('notRecognised');
    expect(result.message.key).toBe('readingNames.halogenNeedsLocant');
  });

  it('explains that a halogen prefix ends in -o', () => {
    expect(interpretOmniboxText('2-chlorinepropane').message.key).toBe('readingNames.halogenPrefixes');
  });
});

describe('reading haloalkane structural formulae', () => {
  it.each([
    ['CH3CH2Cl', 'chloroethane'],
    ['CH3CHClCH3', '2-chloropropane'],
    ['CH3CH(Cl)CH3', '2-chloropropane'],
    ['ClCH2CH2Cl', '1,2-dichloroethane'],
    ['CH2ClCH2Cl', '1,2-dichloroethane'],
    ['CH3CCl2CH3', '2,2-dichloropropane'],
    ['CH3C(Cl)2CH3', '2,2-dichloropropane'],
    ['(CH3)3CBr', '2-bromo-2-methylpropane'],
    ['CCl3CH3', '1,1,1-trichloroethane'],
    ['CH2=CHCl', 'chloroethene'],
    ['CH3CHBrCH2I', '2-bromo-1-iodopropane'],
    ['CH3CH2CL', 'chloroethane'],
  ])('reads %s as %s', (formulaText, expectedName) => {
    expect(nameOfStructuralFormula(formulaText)).toBe(expectedName);
  });

  it('reads a single carbon with halogens as a molecular formula', () => {
    expect(interpretOmniboxText('CH2Cl2')).toMatchObject({ kind: 'molecularFormula' });
  });
});

describe('molecular formulae with halogens', () => {
  it('writes halogens after C and H in alphabetical order (Hill order)', () => {
    expect(formatMolecularFormula({ carbonCount: 1, hydrogenCount: 1, halogenCounts: { F: 1, Cl: 1, Br: 1, I: 0 } })).toBe('CHBrClF');
    expect(formatMolecularFormula({ carbonCount: 1, hydrogenCount: 0, halogenCounts: { Cl: 4 } })).toBe('CCl4');
  });

  it('reads halogens in a formula, in any order', () => {
    expect(parseMolecularFormula('C2H4BrCl')).toMatchObject({ carbonCount: 2, hydrogenCount: 4, halogenCounts: { Br: 1, Cl: 1 } });
    expect(parseMolecularFormula('C2ClH5')).toMatchObject({ carbonCount: 2, hydrogenCount: 5, halogenCounts: { Cl: 1 } });
  });

  it('explains a haloalkane formula with too many atoms on the carbons', () => {
    const result = interpretOmniboxText('C2H5Cl2');
    expect(result.kind).toBe('notRecognised');
    expect(inBritishEnglish(result.message)).toMatch(/halogen/);
  });

  // Structural isomer counts. Monochloroalkanes CnH2n+1Cl follow the number of alkyl groups,
  // OEIS A000598: 1, 1, 2, 4, 8, 17, 39, 89.
  it.each([
    ['CH3Cl', 1],
    ['C2H5Cl', 1],
    ['C3H7Cl', 2],
    ['C4H9Cl', 4],
    ['C5H11Cl', 8],
    ['C2H4Cl2', 2],
    ['C3H6Cl2', 4],
    ['C4H8Cl2', 9],
    ['C2H3Cl3', 2],
    ['C2H4BrCl', 2],
    // 1,1-dichloroethene, and (1E)- and (1Z)-1,2-dichloroethene
    ['C2H2Cl2', 3],
    // (1E)- and (1Z)-1-chloroprop-1-ene, 2-chloroprop-1-ene, 3-chloroprop-1-ene and chlorocyclopropane
    ['C3H5Cl', 5],
  ])('%s has %i isomers', (formulaText, expectedCount) => {
    const result = interpretOmniboxText(formulaText);
    expect(result.kind).toBe('molecularFormula');
    expect(result.nameableIsomers.length + result.countOfIsomersNotYetSupported).toBe(expectedCount);
  });

  it('C8H17Cl has 89 isomers (OEIS A000598), all named, some with the chlorine on a side chain', () => {
    const { nameableIsomers, countOfIsomersNotYetSupported } = listOpenChainIsomers(8, 0, { Cl: 1 });
    expect(nameableIsomers.length).toBe(89);
    expect(countOfIsomersNotYetSupported).toBe(0);
    expect(nameableIsomers.map((isomer) => isomer.iupacName)).toContain('3-(chloromethyl)heptane');
  });

  it('lists the isomers of C4H9Cl by name', () => {
    expect(interpretOmniboxText('C4H9Cl').nameableIsomers.map((isomer) => isomer.iupacName)).toEqual([
      '1-chlorobutane',
      '2-chlorobutane',
      '1-chloro-2-methylpropane',
      '2-chloro-2-methylpropane',
    ]);
  });

  it('can type back every isomer it lists', () => {
    for (const formulaText of ['C3H6BrCl', 'C4H8Cl2', 'C3H4Cl2', 'CHBrClF']) {
      for (const { iupacName } of interpretOmniboxText(formulaText).nameableIsomers) {
        expect(interpretOmniboxText(iupacName), iupacName).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
      }
    }
  });
});

describe('checking haloalkane answers', () => {
  it('accepts the IUPAC name', () => {
    expect(checkStudentAnswer('2-bromo-2-methylpropane', '2-bromo-2-methylpropane').verdict).toBe(ANSWER_VERDICTS.correct);
  });

  it('asks for brackets on methane', () => {
    expect(checkStudentAnswer('trichlorofluoromethane', 'trichloro(fluoro)methane').hint).toBe(ANSWER_HINTS.bracketsAfterFirstPrefix);
  });

  it('says when the locants should be left out', () => {
    expect(checkStudentAnswer('1-chloroethane', 'chloroethane').hint).toBe(ANSWER_HINTS.leaveOutLocants);
  });

  it('says when a locant is needed', () => {
    expect(checkStudentAnswer('chloropropane', '1-chloropropane').hint).toBe(ANSWER_HINTS.halogenNeedsLocant);
  });

  it('asks for alphabetical order', () => {
    expect(checkStudentAnswer('3-chloro-1-bromopropane', '1-bromo-3-chloropropane').hint).toBe(ANSWER_HINTS.notAlphabetical);
  });
});
