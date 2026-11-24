/**
 * Alcohols: naming, reading typed names and formulae, and listing isomers.
 *
 * The rules come from the IUPAC 2013 Recommendations (the Blue Book):
 *   P-63.1.2      an OH group is shown by the suffix "ol" (propan-2-ol), and by the prefix
 *                 hydroxy only when a group with a higher priority is the suffix
 *   P-16.7.1      the final "e" of the parent is dropped before a vowel (propan-1-ol,
 *                 but-3-en-2-ol), but kept before a consonant (ethane-1,2-diol); and the
 *                 final "a" of tetra, penta ... is dropped before "ol" (butane-1,2,3,4-tetrol)
 *   P-44.1.1      the main chain has the most OH groups on it, before it is the longest
 *   P-14.4        lowest locants go to the OH groups first (c), then to the double bonds
 *                 (e), then to the prefixes (f)
 *   P-14.3.3      locants are left out only when no other molecule is possible (ethanol);
 *                 once any locant is needed, all of them are written (2-chloroethan-1-ol)
 *   P-16.5.1.3.1  on methane, the second and later prefixes go in brackets
 */
import { describe, expect, it } from 'vitest';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { connectCarbonSkeletonFromDescription } from '../../../src/chemistry/buildCarbonSkeletonFromDescription.js';
import { readStructuralFormula } from '../../../src/chemistry/readStructuralFormula.js';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { formatMolecularFormula } from '../../../src/chemistry/molecularFormula.js';
import { countAtomsInMolecule, isUnstableAlcohol } from '../../../src/chemistry/carbonSkeleton.js';
import { ANSWER_HINTS, ANSWER_VERDICTS, checkStudentAnswer } from '../../../src/chemistry/checkStudentAnswer.js';
import { inBritishEnglish } from '../inBritishEnglish.js';

const hydroxy = (locant) => ({ locant, isHydroxy: true, substituentName: 'hydroxy', substituentCarbonCount: 0 });
const chloro = (locant) => ({ locant, halogen: 'Cl', substituentName: 'chloro' });
const bromo = (locant) => ({ locant, halogen: 'Br', substituentName: 'bromo' });
const methyl = (locant) => ({ locant, substituentCarbonCount: 1 });

function skeletonOfDescription(mainChainCarbonCount, substituents, mainChainDoubleBondLocants = []) {
  const { carbonSkeleton, errorMessage } = connectCarbonSkeletonFromDescription({ mainChainCarbonCount, mainChainDoubleBondLocants, substituents });
  expect(errorMessage).toBeUndefined();
  return carbonSkeleton;
}

const nameOfDescription = (...description) => nameCarbonSkeleton(skeletonOfDescription(...description)).iupacName;

function nameOfStructuralFormula(formulaText) {
  const result = readStructuralFormula(formulaText);
  expect(result?.carbonSkeleton, formulaText).toBeTruthy();
  return nameCarbonSkeleton(result.carbonSkeleton).iupacName;
}

describe('naming alcohols', () => {
  it.each([
    ['methanol', 1, [hydroxy(1)]],
    ['ethanol', 2, [hydroxy(1)]],
    ['propan-1-ol', 3, [hydroxy(1)]],
    ['propan-2-ol', 3, [hydroxy(2)]],
    ['butan-2-ol', 4, [hydroxy(3)]],
    ['2-methylpropan-2-ol', 3, [hydroxy(2), methyl(2)]],
    ['2-methylpropan-1-ol', 3, [hydroxy(1), methyl(2)]],
    ['3-methylbutan-2-ol', 4, [hydroxy(2), methyl(3)]],
    ['ethane-1,2-diol', 2, [hydroxy(1), hydroxy(2)]],
    ['propane-1,2,3-triol', 3, [hydroxy(1), hydroxy(2), hydroxy(3)]],
    ['butane-1,2,3,4-tetrol', 4, [hydroxy(1), hydroxy(2), hydroxy(3), hydroxy(4)]],
    ['2-chloroethan-1-ol', 2, [hydroxy(1), chloro(2)]],
    ['1-chloropropan-2-ol', 3, [hydroxy(2), chloro(3)]],
  ])('%s', (expectedName, mainChainCarbonCount, substituents) => {
    expect(nameOfDescription(mainChainCarbonCount, substituents)).toBe(expectedName);
  });

  it('numbers the OH groups before the double bonds, and the double bonds before the prefixes', () => {
    expect(nameOfDescription(4, [hydroxy(3)], [1])).toBe('but-3-en-2-ol');
    expect(nameOfDescription(3, [hydroxy(3)], [1])).toBe('prop-2-en-1-ol');
    // The OH is on carbon 4 either way, so the double bond decides: not 2-methylhept-5-en-4-ol.
    expect(nameOfDescription(7, [hydroxy(4), methyl(2)], [5])).toBe('6-methylhept-2-en-4-ol');
  });

  it('chooses the chain with the most OH groups before the longest chain (P-44.1.1)', () => {
    // HOCH2CH(CH2CH2CH3)CH2OH: the 5-carbon chain has only one OH group on it.
    expect(nameOfStructuralFormula('HOCH2CH(CH2CH2CH3)CH2OH')).toBe('2-propylpropane-1,3-diol');
  });

  it('brackets the second and later prefixes on methanol (P-16.5.1.3.1)', () => {
    expect(nameOfDescription(1, [hydroxy(1), bromo(1), chloro(1)])).toBe('bromo(chloro)methanol');
    expect(nameOfDescription(1, [hydroxy(1), chloro(1), chloro(1), chloro(1)])).toBe('trichloromethanol');
  });

  it('leaves out locants only when the OH could go in just one place', () => {
    expect(nameOfDescription(2, [hydroxy(1)], [1])).toBe('ethenol');
    expect(nameOfDescription(1, [hydroxy(1), hydroxy(1)])).toBe('methanediol');
  });

  it('puts an OH group on the main chain even when the chain is then shorter', () => {
    // CH3CH2CH(CH2OH)CH2CH3: the 5-carbon chain would leave the OH group on a side chain.
    const carbonSkeleton = skeletonOfDescription(5, [methyl(3)]);
    carbonSkeleton.carbonAtoms[5].groups = [{ symbol: 'OH' }];
    expect(nameCarbonSkeleton(carbonSkeleton).iupacName).toBe('2-ethylbutan-1-ol');
  });

  it('names an OH group that has to be on a side chain as hydroxymethyl', () => {
    // CH(CH2OH)3: no chain can carry all three OH groups, so the one with two is the main chain (P-44.1.1).
    const result = nameCarbonSkeleton(readStructuralFormula('HOCH2CH(CH2OH)CH2OH').carbonSkeleton);
    expect(result.iupacName).toBe('2-(hydroxymethyl)propane-1,3-diol');
  });
});

describe('reading typed alcohol names', () => {
  it.each([
    ['methanol', 'CH4O'],
    ['ethanol', 'C2H6O'],
    ['propan-1-ol', 'C3H8O'],
    ['propan-2-ol', 'C3H8O'],
    ['2-methylpropan-2-ol', 'C4H10O'],
    ['ethane-1,2-diol', 'C2H6O2'],
    ['propane-1,2,3-triol', 'C3H8O3'],
    ['butane-1,2,3,4-tetrol', 'C4H10O4'],
    ['prop-2-en-1-ol', 'C3H6O'],
    ['but-2-ene-1,4-diol', 'C4H8O2'],
    ['2-chloroethan-1-ol', 'C2H5ClO'],
  ])('%s draws %s', (typedName, expectedFormula) => {
    const result = interpretOmniboxText(typedName);
    expect(result).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
    expect(formatMolecularFormula(countAtomsInMolecule(result.carbonSkeleton))).toBe(expectedFormula);
  });

  it.each([
    ['2-propanol', 'propan-2-ol'],
    ['1,2-ethanediol', 'ethane-1,2-diol'],
    ['3-buten-2-ol', 'but-3-en-2-ol'],
    ['2-methyl-2-propanol', '2-methylpropan-2-ol'],
    ['propan-1,2-diol', 'propane-1,2-diol'],
    ['butane-1,2,3,4-tetraol', 'butane-1,2,3,4-tetrol'],
    ['ethan-1-ol', 'ethanol'],
    ['but-1-en-3-ol', 'but-3-en-2-ol'],
    ['2-hydroxypropane', 'propan-2-ol'],
  ])('draws %s, and gives the IUPAC name %s', (typedName, iupacName) => {
    expect(interpretOmniboxText(typedName)).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: false, correctIupacName: iupacName });
  });

  it.each(['propanol', '2-chloroethanol'])('asks for a locant in %s', (typedName) => {
    const result = interpretOmniboxText(typedName);
    expect(result.kind).toBe('notRecognised');
    expect(result.message.key).toBe('readingNames.hydroxyNeedsLocant');
  });
});

describe('reading alcohol structural formulae', () => {
  it.each([
    ['CH3CH2OH', 'ethanol'],
    ['CH3CH2CH2OH', 'propan-1-ol'],
    ['CH3CH(OH)CH3', 'propan-2-ol'],
    ['(CH3)3COH', '2-methylpropan-2-ol'],
    ['HOCH2CH2OH', 'ethane-1,2-diol'],
    ['CH2OHCH2OH', 'ethane-1,2-diol'],
    ['CH2=CHCH2OH', 'prop-2-en-1-ol'],
    ['ClCH2CH2OH', '2-chloroethan-1-ol'],
  ])('reads %s as %s', (formulaText, expectedName) => {
    expect(nameOfStructuralFormula(formulaText)).toBe(expectedName);
  });

  it('explains an O that leaves its carbon with too many bonds, as in CH3CHOCH3', () => {
    const result = interpretOmniboxText('CH3CHOCH3');
    expect(result.kind).toBe('notRecognised');
    expect(result.message.key).toBe('omnibox.oxygenWithTooManyBonds');
  });
});

describe('molecular formulae with oxygen', () => {
  it('writes O last, after the halogens (Hill order)', () => {
    expect(formatMolecularFormula({ carbonCount: 2, hydrogenCount: 5, halogenCounts: { Cl: 1 }, oxygenCount: 1 })).toBe('C2H5ClO');
  });

  // Alcohols CnH2n+1OH, like the monochloroalkanes, follow the number of alkyl groups (OEIS A000598):
  // 1, 1, 2, 4, 8. The ethers CnH2n+2O come with them: 1 for C2 and C3, 3 for C4, 6 for C5.
  // Diols with both OH groups on one carbon, enols (OH on a C=C carbon), and an OH on the same
  // carbon as an ether's O (a hemiacetal) are left out as unstable.
  it.each([
    ['CH4O', 1],
    ['CH3OH', 1],
    ['C2H6O', 2],
    ['C2H5OH', 2],
    ['C3H8O', 3],
    ['C4H10O', 7],
    ['C5H12O', 14],
    ['C2H6O2', 1],
    ['C3H8O2', 4],
  ])('%s has %i stable alcohol and ether isomers', (formulaText, expectedCount) => {
    const result = interpretOmniboxText(formulaText);
    expect(result.kind).toBe('molecularFormula');
    expect(result.nameableIsomers.length + result.countOfIsomersNotYetSupported).toBe(expectedCount);
  });

  it('lists the alcohols and ethers of C3H8O, C4H10O and C3H8O2 by name', () => {
    const namesOf = (formulaText) => interpretOmniboxText(formulaText).nameableIsomers.map((isomer) => isomer.iupacName).sort();
    expect(namesOf('C3H8O')).toEqual(['methoxyethane', 'propan-1-ol', 'propan-2-ol']);
    expect(namesOf('C4H10O')).toEqual([
      '1-methoxypropane',
      '2-methoxypropane',
      '2-methylpropan-1-ol',
      '2-methylpropan-2-ol',
      'butan-1-ol',
      'butan-2-ol',
      'ethoxyethane',
    ]);
    expect(namesOf('C3H8O2')).toEqual(['2-methoxyethan-1-ol', 'dimethoxymethane', 'propane-1,2-diol', 'propane-1,3-diol']);
  });

  it('never lists an unstable alcohol', () => {
    for (const formulaText of ['C3H8O2', 'C4H8O', 'C3H6O2', 'C2H3ClO']) {
      const { nameableIsomers = [] } = interpretOmniboxText(formulaText);
      for (const { iupacName } of nameableIsomers) {
        expect(isUnstableAlcohol(interpretOmniboxText(iupacName).carbonSkeleton), iupacName).toBe(false);
      }
    }
  });

  it('explains when a formula has no stable isomers it can name', () => {
    const result = interpretOmniboxText('CH4O2');
    expect(result.kind).toBe('notRecognised');
    expect(result.message.key).toBe('omnibox.noOxygenOrNitrogenCompoundIsomers');
  });

  it('explains an alcohol formula with too many hydrogens', () => {
    const result = interpretOmniboxText('C2H8O');
    expect(result.kind).toBe('notRecognised');
    expect(inBritishEnglish(result.message)).toMatch(/OH group/);
  });

  it('can type back every isomer it lists', () => {
    for (const formulaText of ['C4H10O', 'C4H10O2', 'C4H8O', 'C3H7ClO']) {
      for (const { iupacName } of interpretOmniboxText(formulaText).nameableIsomers) {
        expect(interpretOmniboxText(iupacName), iupacName).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
      }
    }
  });
});

describe('checking alcohol answers', () => {
  it('accepts the IUPAC name', () => {
    expect(checkStudentAnswer('propan-2-ol', 'propan-2-ol').verdict).toBe(ANSWER_VERDICTS.correct);
  });

  it('asks for the -ol ending rather than the prefix hydroxy', () => {
    expect(checkStudentAnswer('2-hydroxypropane', 'propan-2-ol').hint).toBe(ANSWER_HINTS.hydroxyAsSuffix);
  });

  it('says when a locant is needed', () => {
    expect(checkStudentAnswer('propanol', 'propan-1-ol').hint).toBe(ANSWER_HINTS.hydroxyNeedsLocant);
  });

  it('says when the locants should be left out', () => {
    expect(checkStudentAnswer('ethan-1-ol', 'ethanol').hint).toBe(ANSWER_HINTS.leaveOutLocants);
  });

  it('says when the numbering is not right', () => {
    expect(checkStudentAnswer('butan-3-ol', 'butan-2-ol').hint).toBe(ANSWER_HINTS.notLowestLocants);
  });
});
