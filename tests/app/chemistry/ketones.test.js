/**
 * Ketones: naming, reading typed names and formulae, listing isomers and checking answers.
 *
 * The rules come from the IUPAC 2013 Recommendations (the Blue Book):
 *   P-64.2.2.1  a C=O on a carbon in the middle of a chain is shown by the suffix "one"
 *               (propan-2-one), two of them by "dione" (pentane-2,4-dione)
 *   P-14.3.4.4  the locants of -one are always written, even in propan-2-one and butan-2-one
 *   P-41        an aldehyde is senior to a ketone, and a ketone to an alcohol, so the C=O of a
 *               ketone becomes the prefix oxo next to CHO (3-oxobutanal), and OH becomes
 *               hydroxy next to a ketone (4-hydroxybutan-2-one)
 *   P-44.1.1    the main chain has the most ketone C=O groups on it
 *   P-64.5      oxo is the prefix for the =O of a ketone
 */
import { describe, expect, it } from 'vitest';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { connectCarbonSkeletonFromDescription } from '../../../src/chemistry/buildCarbonSkeletonFromDescription.js';
import { readStructuralFormula } from '../../../src/chemistry/readStructuralFormula.js';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { countAtomsInMolecule } from '../../../src/chemistry/carbonSkeleton.js';
import { ANSWER_HINTS, ANSWER_VERDICTS, checkStudentAnswer } from '../../../src/chemistry/checkStudentAnswer.js';

const ketone = (locant) => ({ locant, isKetone: true, substituentName: 'oxo', substituentCarbonCount: 0 });
const aldehyde = (locant) => ({ locant, isAldehyde: true, substituentName: 'oxo', substituentCarbonCount: 0 });
const hydroxy = (locant) => ({ locant, isHydroxy: true, substituentName: 'hydroxy', substituentCarbonCount: 0 });
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

describe('naming ketones', () => {
  it.each([
    [3, [ketone(2)], [], 'propan-2-one'],
    [4, [ketone(2)], [], 'butan-2-one'],
    [5, [ketone(3)], [], 'pentan-3-one'],
    [5, [ketone(2), ketone(4)], [], 'pentane-2,4-dione'],
    [4, [ketone(2), ketone(3)], [], 'butane-2,3-dione'],
    [4, [ketone(2), methyl(3)], [], '3-methylbutan-2-one'],
    [4, [ketone(2), hydroxy(4)], [], '4-hydroxybutan-2-one'],
    [4, [ketone(3)], [1], 'but-3-en-2-one'],
    [4, [aldehyde(1), ketone(3)], [], '3-oxobutanal'],
    [3, [aldehyde(1), aldehyde(3), ketone(2)], [], 'oxopropanedial'],
  ])('names a %i-carbon chain with %j (double bonds %j) as %s', (carbonCount, substituents, doubleBondLocants, expectedName) => {
    expect(nameOfDescription(carbonCount, substituents, doubleBondLocants)).toBe(expectedName);
  });

  it('chooses the chain with the most C=O groups on it before the longest chain (P-44.1.1)', () => {
    expect(nameOfStructuralFormula('CH3COCH(CH2CH2CH3)COCH3')).toBe('3-propylpentane-2,4-dione');
  });

  it('counts the hydrogens and oxygens of a ketone', () => {
    expect(countAtomsInMolecule(skeletonOfDescription(3, [ketone(2)]))).toMatchObject({ carbonCount: 3, hydrogenCount: 6, oxygenCount: 1 });
  });

  it('names the C=O of a ketone in a carboxylic acid as oxo', () => {
    expect(nameCarbonSkeleton(readStructuralFormula('CH3COCOOH').carbonSkeleton).iupacName).toBe('2-oxopropanoic acid');
  });
});

describe('reading ketone structural formulae', () => {
  it.each([
    ['CH3COCH3', 'propan-2-one'],
    ['CH3C(=O)CH3', 'propan-2-one'],
    ['CH3C(O)CH3', 'propan-2-one'],
    ['CH3COCH2CH3', 'butan-2-one'],
    ['CH3CH2COCH2CH3', 'pentan-3-one'],
    ['CH3COCH2COCH3', 'pentane-2,4-dione'],
    ['CH2=CHCOCH3', 'but-3-en-2-one'],
    ['CH3CH=CHCOCH3', 'pent-3-en-2-one'],
    ['CH3COCH2CH2OH', '4-hydroxybutan-2-one'],
    ['CH3CH(OH)COCH3', '3-hydroxybutan-2-one'],
    ['ClCH2COCH3', '1-chloropropan-2-one'],
    ['CH3COCH2CHO', '3-oxobutanal'],
    ['CH3COCHO', '2-oxopropanal'],
  ])('reads %s as %s', (formulaText, expectedName) => {
    expect(nameOfStructuralFormula(formulaText)).toBe(expectedName);
  });
});

describe('reading typed ketone names', () => {
  it.each(['propan-2-one', 'butan-2-one', 'pentan-3-one', 'pentane-2,4-dione', '3-methylbutan-2-one', '4-hydroxybutan-2-one', '3-oxobutanal', 'but-3-en-2-one'])(
    'reads %s as the IUPAC name',
    (name) => {
      expect(interpretOmniboxText(name)).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
    },
  );

  it.each([
    ['propanone', 'propan-2-one', 'otherNames.locantLeftOutAccepted'],
    ['acetone', 'propan-2-one', 'otherNames.generalNameAccepted'],
    ['butanone', 'butan-2-one', 'otherNames.locantLeftOutAccepted'],
  ])('accepts %s for %s, with a note that it is not the PIN (P-64.2.1.2, P-14.3.4.4)', (typedName, iupacName, noteKey) => {
    const result = interpretOmniboxText(typedName);
    expect(result).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true, note: { key: noteKey } });
    expect(nameCarbonSkeleton(result.carbonSkeleton).iupacName).toBe(iupacName);
  });

  it('draws the older-style 2-butanone as butan-2-one', () => {
    const result = interpretOmniboxText('2-butanone');
    expect(result.kind).toBe('name');
    expect(nameCarbonSkeleton(result.carbonSkeleton).iupacName).toBe('butan-2-one');
  });

  it('asks for the locant of -one where the C=O could go in more than one place', () => {
    expect(interpretOmniboxText('pentanone').message.key).toBe('readingNames.ketoneNeedsLocant');
  });

  it('explains a ketone C=O at the end of the chain', () => {
    expect(interpretOmniboxText('propan-1-one').message.key).toBe('readingNames.ketoneAtChainEnd');
  });
});

describe('molecular formulae of ketones', () => {
  const namesOf = (formulaText) => interpretOmniboxText(formulaText).nameableIsomers.map((isomer) => isomer.iupacName).sort();

  it('lists the ketones of C5H10O with the aldehydes and alcohols', () => {
    expect(namesOf('C5H10O')).toEqual(expect.arrayContaining(['3-methylbutan-2-one', 'pentan-2-one', 'pentan-3-one', 'pentanal']));
  });

  it('lists the diones and oxo aldehydes of C4H6O2', () => {
    expect(namesOf('C4H6O2')).toEqual(expect.arrayContaining(['butane-2,3-dione', '2-oxobutanal', '3-oxobutanal', 'butanedial']));
  });

  it('can type back every isomer it lists', () => {
    for (const formulaText of ['C3H6O', 'C4H8O', 'C5H10O', 'C4H6O2', 'C3H4O2']) {
      for (const { iupacName } of interpretOmniboxText(formulaText).nameableIsomers) {
        expect(interpretOmniboxText(iupacName), iupacName).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
      }
    }
  });
});

describe('checking ketone answers', () => {
  it.each([
    ['propan-2-one', 'propan-2-one'],
    ['propanone', 'propan-2-one'],
    ['Acetone', 'propan-2-one'],
    ['butanone', 'butan-2-one'],
  ])('accepts %s for %s', (answer, correctName) => {
    expect(checkStudentAnswer(answer, correctName).verdict).toBe(ANSWER_VERDICTS.correct);
  });

  it('notes the PIN when the answer is acetone or propanone, but not for the PIN itself', () => {
    expect(checkStudentAnswer('propan-2-one', 'propan-2-one').note).toBeUndefined();
    expect(checkStudentAnswer('Acetone', 'propan-2-one').note).toEqual({ key: 'otherNames.generalNameAccepted', values: { typedName: 'Acetone', name: 'propan-2-one' } });
    expect(checkStudentAnswer('propanone', 'propan-2-one').note).toEqual({ key: 'otherNames.locantLeftOutAccepted', values: { typedName: 'propanone', name: 'propan-2-one' } });
  });

  it('says a ketone is named with -one, not oxo', () => {
    expect(checkStudentAnswer('2-oxopropane', 'propan-2-one').hint).toBe(ANSWER_HINTS.ketoneAsSuffix);
  });

  it('asks for the locant of -one', () => {
    expect(checkStudentAnswer('pentanone', 'pentan-2-one').hint).toEqual(ANSWER_HINTS.ketoneNeedsLocant);
  });
});
