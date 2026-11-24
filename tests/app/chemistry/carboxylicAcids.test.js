/**
 * Carboxylic acids: naming, reading typed names and formulae, listing isomers and checking answers.
 *
 * The rules come from the IUPAC 2013 Recommendations (the Blue Book):
 *   P-65.1.2.1  a -COOH group whose carbon is part of the chain is shown by the suffix
 *               "oic acid" (propanoic acid), two of them by "dioic acid" (butanedioic acid)
 *   P-14.3.4.1  the locants of -oic acid are never written, as its carbon is always at the
 *               end of the chain, and nor is the locant of a group that could only go in one
 *               place, as in chlorobutanedioic acid
 *   P-14.3.4.4  the locant of the double bond is kept in prop-2-enoic acid
 *   P-41        an acid is senior to an aldehyde, a ketone and an alcohol, so they become the
 *               prefixes oxo and hydroxy (4-oxobutanoic acid, 2-hydroxypropanoic acid)
 *   P-65.1.6.3  in an acid, the O of a CHO group at the end of the chain is the prefix oxo
 *   P-65.1.1.1  formic acid, acetic acid and oxalic acid are retained names, and the preferred
 *               IUPAC names; only acetic acid can be substituted (chloroacetic acid). The
 *               systematic names (ethanoic acid ...) are accepted, with a note.
 *   P-14.3.4.6  when every group can only be on one carbon, no locants are written:
 *   P-16.5.1.3.2  and the second and later prefixes go in brackets: bromo(chloro)acetic acid
 */
import { describe, expect, it } from 'vitest';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { connectCarbonSkeletonFromDescription } from '../../../src/chemistry/buildCarbonSkeletonFromDescription.js';
import { readStructuralFormula } from '../../../src/chemistry/readStructuralFormula.js';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { countAtomsInMolecule } from '../../../src/chemistry/carbonSkeleton.js';
import { ANSWER_HINTS, ANSWER_VERDICTS, checkStudentAnswer } from '../../../src/chemistry/checkStudentAnswer.js';

const acid = (locant) => ({ locant, isCarboxylicAcid: true, substituentName: 'carboxy', substituentCarbonCount: 0 });
const aldehyde = (locant) => ({ locant, isAldehyde: true, substituentName: 'oxo', substituentCarbonCount: 0 });
const ketone = (locant) => ({ locant, isKetone: true, substituentName: 'oxo', substituentCarbonCount: 0 });
const hydroxy = (locant) => ({ locant, isHydroxy: true, substituentName: 'hydroxy', substituentCarbonCount: 0 });
const chloro = (locant) => ({ locant, halogen: 'Cl' });
const bromo = (locant) => ({ locant, halogen: 'Br' });
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

describe('naming carboxylic acids', () => {
  it.each([
    [1, [acid(1)], [], 'formic acid'],
    [2, [acid(1)], [], 'acetic acid'],
    [3, [acid(1)], [], 'propanoic acid'],
    [2, [acid(1), acid(2)], [], 'oxalic acid'],
    [4, [acid(1), acid(4)], [], 'butanedioic acid'],
    [3, [acid(1), methyl(2)], [], '2-methylpropanoic acid'],
    [3, [acid(1)], [2], 'prop-2-enoic acid'],
    [3, [acid(1), hydroxy(2)], [], '2-hydroxypropanoic acid'],
    [4, [acid(1), ketone(3)], [], '3-oxobutanoic acid'],
    [4, [acid(1), aldehyde(4)], [], '4-oxobutanoic acid'],
    [3, [acid(1), aldehyde(3)], [], '3-oxopropanoic acid'],
    [2, [acid(1), aldehyde(2)], [], 'oxoacetic acid'],
    [3, [acid(1), ketone(2), acid(3)], [], 'oxopropanedioic acid'],
    [2, [acid(1), chloro(2)], [], 'chloroacetic acid'],
    [2, [acid(1), chloro(2), bromo(2)], [], 'bromo(chloro)acetic acid'],
    [4, [acid(1), chloro(2), acid(4)], [], 'chlorobutanedioic acid'],
  ])('names a %i-carbon chain with %j (double bonds %j) as %s', (carbonCount, substituents, doubleBondLocants, expectedName) => {
    expect(nameOfDescription(carbonCount, substituents, doubleBondLocants)).toBe(expectedName);
  });

  it('numbers the chain from the COOH group, even past a chlorine that would get a lower locant', () => {
    expect(nameOfDescription(4, [chloro(1), acid(4)])).toBe('4-chlorobutanoic acid');
  });

  it('chooses the chain with the most COOH groups on it before the longest chain (P-44.1.1)', () => {
    expect(nameOfStructuralFormula('HOOCCH2CH(CH2CH2CH3)COOH')).toBe('2-propylbutanedioic acid');
  });

  it('counts the hydrogens and oxygens of an acid', () => {
    expect(countAtomsInMolecule(skeletonOfDescription(2, [acid(1)]))).toMatchObject({ carbonCount: 2, hydrogenCount: 4, oxygenCount: 2 });
  });
});

describe('reading carboxylic acid structural formulae', () => {
  it.each([
    ['CH3COOH', 'acetic acid'],
    ['CH3CO2H', 'acetic acid'],
    ['CH3C(=O)OH', 'acetic acid'],
    ['HOOCCOOH', 'oxalic acid'],
    ['HOOCCH2COOH', 'propanedioic acid'],
    ['HO2CCH2CO2H', 'propanedioic acid'],
    ['CH3CH(OH)COOH', '2-hydroxypropanoic acid'],
    ['CH2=CHCOOH', 'prop-2-enoic acid'],
    ['CH3CH(COOH)CH3', '2-methylpropanoic acid'],
    ['OHCCH2CH2COOH', '4-oxobutanoic acid'],
    ['CH3COCH2COOH', '3-oxobutanoic acid'],
    ['CF3CF2CF2COOH', 'heptafluorobutanoic acid'],
  ])('reads %s as %s', (formulaText, expectedName) => {
    expect(nameOfStructuralFormula(formulaText)).toBe(expectedName);
  });
});

describe('reading typed carboxylic acid names', () => {
  it.each([
    'formic acid',
    'acetic acid',
    'oxalic acid',
    'butanedioic acid',
    'prop-2-enoic acid',
    '2-hydroxypropanoic acid',
    '4-oxobutanoic acid',
    'chloroacetic acid',
    'bromo(chloro)acetic acid',
    'cyclohexylacetic acid',
    'acetic  acid',
  ])('reads %s as the IUPAC name', (name) => {
    const result = interpretOmniboxText(name);
    expect(result).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
    expect(result.note).toBeUndefined();
  });

  it.each([
    ['methanoic acid', 'formic acid'],
    ['ethanoic acid', 'acetic acid'],
    ['ethanedioic acid', 'oxalic acid'],
    ['chloroethanoic acid', 'chloroacetic acid'],
    ['bromo(chloro)ethanoic acid', 'bromo(chloro)acetic acid'],
    ['ethanoic  acid', 'acetic acid'],
  ])('accepts the systematic name %s for the PIN %s, with a note (P-65.1.1.1)', (typedName, iupacName) => {
    const result = interpretOmniboxText(typedName);
    expect(result).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true, note: { key: 'otherNames.systematicNameAccepted' } });
    expect(nameCarbonSkeleton(result.carbonSkeleton).iupacName).toBe(iupacName);
  });

  it('gives the systematic name and the PIN for a retained acid', () => {
    const named = nameCarbonSkeleton(interpretOmniboxText('chloroacetic acid').carbonSkeleton);
    expect(named).toMatchObject({ iupacName: 'chloroacetic acid', systematicName: 'chloroethanoic acid' });
    expect(named.retainedName).toMatchObject({ retainedParent: 'acetic acid', systematicParent: 'ethanoic acid', blueBookRules: ['P-65.1.1.1'] });
  });

  it('reads a side chain without a locant where there is only one carbon for it, as in cyclohexylacetic acid (P-14.3.4.6)', () => {
    expect(interpretOmniboxText('2-cyclohexylacetic acid')).toMatchObject({ kind: 'name', correctIupacName: 'cyclohexylacetic acid', typedNameIsCorrectIupacName: false });
    expect(interpretOmniboxText('methylpropanedioic acid')).toMatchObject({ kind: 'name', correctIupacName: 'methylpropanedioic acid', typedNameIsCorrectIupacName: true });
  });

  it('reads propenoic acid as prop-2-enoic acid', () => {
    const result = interpretOmniboxText('propenoic acid');
    expect(result.kind).toBe('name');
    expect(nameCarbonSkeleton(result.carbonSkeleton).iupacName).toBe('prop-2-enoic acid');
  });

  it('asks for the word acid', () => {
    expect(interpretOmniboxText('ethanoic').message.key).toBe('readingNames.acidNeedsTheWordAcid');
  });

  it('explains a COOH group that is not at the end of the chain', () => {
    expect(interpretOmniboxText('propan-2-oic acid').message.key).toBe('readingNames.acidAtChainEnd');
  });

  it('explains that methane has room for only one COOH group', () => {
    expect(interpretOmniboxText('methanedioic acid').message.key).toBe('readingNames.tooManyAcidGroups');
  });
});

describe('molecular formulae of carboxylic acids', () => {
  const namesOf = (formulaText) => interpretOmniboxText(formulaText).nameableIsomers.map((isomer) => isomer.iupacName).sort();

  it('lists formic acid for CH2O2', () => {
    expect(namesOf('CH2O2')).toEqual(['formic acid']);
  });

  it('lists acetic acid with hydroxyacetaldehyde and the ester methyl formate for C2H4O2', () => {
    expect(namesOf('C2H4O2')).toEqual(['acetic acid', 'hydroxyacetaldehyde', 'methyl formate']);
  });

  it('lists the acids of C4H8O2 with the aldehydes, ketones and alcohols', () => {
    expect(namesOf('C4H8O2')).toEqual(expect.arrayContaining(['2-methylpropanoic acid', 'butanoic acid', '3-hydroxybutanal']));
  });

  it('can type back every isomer it lists', () => {
    for (const formulaText of ['CH2O2', 'C2H4O2', 'C3H6O2', 'C4H8O2', 'C2H2O4', 'C3H4O3']) {
      for (const { iupacName } of interpretOmniboxText(formulaText).nameableIsomers) {
        expect(interpretOmniboxText(iupacName), iupacName).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
      }
    }
  });
});

describe('checking carboxylic acid answers', () => {
  it.each([
    ['acetic acid', 'acetic acid'],
    ['Acetic acid', 'acetic acid'],
    ['formic acid', 'formic acid'],
    ['oxalic acid', 'oxalic acid'],
    ['chloroacetic acid', 'chloroacetic acid'],
  ])('accepts %s for %s', (answer, correctName) => {
    expect(checkStudentAnswer(answer, correctName)).toEqual({ verdict: ANSWER_VERDICTS.correct, hint: null });
  });

  it.each([
    ['ethanoic acid', 'acetic acid'],
    ['Methanoic acid', 'formic acid'],
    ['ethanedioic acid', 'oxalic acid'],
    ['chloroethanoic acid', 'chloroacetic acid'],
  ])('accepts the systematic name %s for %s, with a note that it is not the PIN', (answer, correctName) => {
    expect(checkStudentAnswer(answer, correctName)).toEqual({
      verdict: ANSWER_VERDICTS.correct,
      hint: null,
      note: { key: 'otherNames.systematicNameAccepted', values: { typedName: answer, name: correctName } },
    });
  });

  it('asks for the brackets in bromo(chloro)acetic acid (P-16.5.1.3.2)', () => {
    expect(checkStudentAnswer('bromochloroacetic acid', 'bromo(chloro)acetic acid').hint).toEqual(ANSWER_HINTS.bracketsAfterFirstPrefix);
    expect(checkStudentAnswer('bromochloroethanoic acid', 'bromo(chloro)acetic acid').hint).toEqual(ANSWER_HINTS.bracketsAfterFirstPrefix);
  });

  it.each([
    ['ethan-1-oic acid', 'acetic acid'],
    ['butane-1,4-dioic acid', 'butanedioic acid'],
  ])('says the locants of -oic acid are left out, for %s', (answer, correctName) => {
    expect(checkStudentAnswer(answer, correctName).hint).toEqual(ANSWER_HINTS.carboxylicAcidLocant);
  });

  it('asks for the space before acid', () => {
    expect(checkStudentAnswer('aceticacid', 'acetic acid').hint).toEqual(ANSWER_HINTS.punctuation);
    expect(checkStudentAnswer('ethanoicacid', 'acetic acid').hint).toEqual(ANSWER_HINTS.punctuation);
  });

  it('asks for the locant of the double bond in prop-2-enoic acid', () => {
    expect(checkStudentAnswer('propenoic acid', 'prop-2-enoic acid').hint).toEqual(ANSWER_HINTS.doubleBondNeedsLocant);
  });

  it('says to leave out a locant where the group could only go in one place', () => {
    expect(checkStudentAnswer('2-chloroacetic acid', 'chloroacetic acid').hint).toEqual(ANSWER_HINTS.leaveOutLocants);
    expect(checkStudentAnswer('2-chloroethanoic acid', 'chloroacetic acid').hint).toEqual(ANSWER_HINTS.leaveOutLocants);
  });
});
