/**
 * Side chains that branch: naming them, reading their names back, and marking answers that use
 * the older prefixes for them.
 *
 * The rules come from the IUPAC 2013 Recommendations (the Blue Book):
 *   P-29.2      a side chain joined at carbon 1 is named as an alkyl group (2-methylpropyl), one
 *               joined at another carbon from its alkane with that locant (propan-2-yl, but-3-en-2-yl)
 *   P-46.1      the principal chain of a side chain: the longest chain through the carbon joined
 *               to the main chain, then the most double bonds, then the lowest locant for that
 *               carbon, then for the double bonds, then the most prefixes and their lowest locants
 *   P-29.6.1    tert-butyl is the preferred prefix for -C(CH3)3, and can't have groups on it
 *   P-29.6.2.2  isopropyl and isopropylidene are kept only outside preferred IUPAC names, with
 *               nothing on them: the preferred prefixes are propan-2-yl and propan-2-ylidene
 *   P-29.6.3    isobutyl, sec-butyl, isopentyl, tert-pentyl and neopentyl are no longer recommended
 *   P-14.5.3    the italic tert and sec are left out of alphabetical order, but iso is not
 *   P-16.3.6    a prefix with prefixes of its own is multiplied with bis, tris ...: bis(2-methylpropyl)
 *   P-16.3.4    italic prefixes keep their hyphen after di: di-tert-butyl
 */
import { describe, expect, it } from 'vitest';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { readStructuralFormula } from '../../../src/chemistry/readStructuralFormula.js';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { parseTypedName } from '../../../src/chemistry/parseTypedName.js';
import { listNamingSteps } from '../../../src/chemistry/listNamingSteps.js';
import { ANSWER_VERDICTS, checkStudentAnswer } from '../../../src/chemistry/checkStudentAnswer.js';
import { compareSubstituentNamesAlphanumerically, writeMultipliedSubstituent } from '../../../src/chemistry/alkaneNamingVocabulary.js';

const nameOfFormula = (formulaText) => nameCarbonSkeleton(readStructuralFormula(formulaText).carbonSkeleton).iupacName;
const nameOfTypedName = (typedName) => nameCarbonSkeleton(interpretOmniboxText(typedName).carbonSkeleton).iupacName;

describe('naming a side chain that branches', () => {
  it.each([
    ['CH3CH2CH2CH(CH(CH3)2)CH2CH2CH2CH3', '4-(propan-2-yl)octane'],
    ['CH3CH2CH2CH(C(CH3)3)CH2CH2CH2CH3', '4-tert-butyloctane'],
    ['CH3CH2CH2CH2CH(CH(CH3)CH2CH3)CH2CH2CH2CH3', '5-(butan-2-yl)nonane'],
    ['CH3CH2CH2CH2CH2CH(CH(CH3)CH2CH2CH3)CH2CH2CH2CH2CH3', '6-(pentan-2-yl)undecane'],
    ['CH3CH2CH2CH2CH2CH(CH(CH2CH3)CH(CH3)CH3)CH2CH2CH2CH2CH3', '6-(2-methylpentan-3-yl)undecane'],
    ['CH3CH2CH2CH2CH2CH(CH(CH2CH2Br)CH(CH3)CH3)CH2CH2CH2CH2CH3', '6-(1-bromo-4-methylpentan-3-yl)undecane'],
    ['CH3CH2CH2CH2CH(CH(CHBrCH3)CHClCH3)CH2CH2CH2CH3', '5-(2-bromo-4-chloropentan-3-yl)nonane'],
    ['CH3CH2CH2CH2CH2CH(CH(CH3)C(CH3)3)CH2CH2CH2CH2CH3', '6-(3,3-dimethylbutan-2-yl)undecane'],
    ['CH3(CH2)5CH(CH2CH(CH3)CH2CH(CH3)2)CH2CH(CH2CH3)CH2CH2CH2CH3', '7-(2,4-dimethylpentyl)-5-ethyltridecane'],
    ['CH3CH2CH2CH2CH(CH(CH3)CH=CH2)CH2CH2CH2CH3', '5-(but-3-en-2-yl)nonane'],
    ['CH3CH2CH2CH(C(=CH2)CH3)CH2CH2CH3', '4-(prop-1-en-2-yl)heptane'],
    ['CH3CH2CH2C(=C(CH3)2)CH2CH2CH3', '4-(propan-2-ylidene)heptane'],
    ['CH3CH2CH2C(C(CH3)3)(C(CH3)3)CH2CH2CH3', '4,4-di-tert-butylheptane'],
    ['CH3CH2CH2C(CH(CH3)2)(CH(CH3)2)CH2CH2CH3', '4,4-di(propan-2-yl)heptane'],
    ['CH3CH2CH2CH2C(CH2CH(CH3)2)(CH2CH(CH3)2)CH2CH2CH2CH3', '5,5-bis(2-methylpropyl)nonane'],
    ['CH3CH2CH2CH2CH(C(CH3)3)CH(CH2CH2CH3)CH2CH2CH2CH3', '5-tert-butyl-6-propyldecane'],
  ])('%s is %s', (formulaText, expectedName) => {
    expect(nameOfFormula(formulaText)).toBe(expectedName);
    expect(interpretOmniboxText(expectedName)).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
  });

  it.each([
    '5-(1-chloro-2-methylpropan-2-yl)nonane',
    '4-tert-butylcyclohexan-1-ol',
    '1-tert-butyl-4-methylcyclohexane',
    '3-(prop-1-en-2-yl)cyclohexan-1-ol',
    '(propan-2-yl)cyclopropane',
  ])('reads back %s', (typedName) => {
    expect(interpretOmniboxText(typedName)).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
  });

  it('keeps the E or Z of a double bond inside the side chain (P-93.4.2.1.1)', () => {
    expect(nameOfTypedName('6-[(3E)-pent-3-en-2-yl]undecane')).toBe('6-[(3E)-pent-3-en-2-yl]undecane');
    expect(nameOfTypedName('6-[(3Z)-pent-3-en-2-yl]undecane')).toBe('6-[(3Z)-pent-3-en-2-yl]undecane');
    expect(nameOfTypedName('6-[(2E)-but-2-en-2-yl]undecane')).toBe('6-[(2E)-but-2-en-2-yl]undecane');
  });

  it('sorts tert-butyl under b, after butyl (P-14.5.3): 4-butyl-4-tert-butylcyclohexan-1-ol', () => {
    expect(interpretOmniboxText('4-butyl-4-tert-butylcyclohexan-1-ol')).toMatchObject({ typedNameIsCorrectIupacName: true });
    expect(compareSubstituentNamesAlphanumerically('butyl', 'tert-butyl')).toBeLessThan(0);
    expect(compareSubstituentNamesAlphanumerically('butan-2-yl', 'tert-butyl')).toBeLessThan(0);
    expect(compareSubstituentNamesAlphanumerically('tert-butyl', 'chloro')).toBeLessThan(0);
    expect(compareSubstituentNamesAlphanumerically('sec-butyl', 'chloro')).toBeLessThan(0);
    expect(compareSubstituentNamesAlphanumerically('isopropyl', 'methyl')).toBeLessThan(0);
  });

  it('multiplies branched prefixes with di for italic or numbered ones, and bis for compound ones (P-16.3)', () => {
    expect(writeMultipliedSubstituent(2, 'tert-butyl')).toBe('di-tert-butyl');
    expect(writeMultipliedSubstituent(2, 'propan-2-yl')).toBe('di(propan-2-yl)');
    expect(writeMultipliedSubstituent(2, '2-methylpropyl')).toBe('bis(2-methylpropyl)');
  });

  it('explains each kind of branched prefix in its own naming step', () => {
    const prefixExplanation = (typedName) => {
      const skeleton = interpretOmniboxText(typedName).carbonSkeleton;
      return listNamingSteps(skeleton, nameCarbonSkeleton(skeleton)).find(({ stepKind }) => stepKind === 'prefix').explanation;
    };
    expect(prefixExplanation('6-(pentan-2-yl)undecane')).toMatchObject({ key: 'namingSteps.prefix.alkanyl', values: { substituentName: 'pentan-2-yl' } });
    expect(prefixExplanation('4-(propan-2-ylidene)heptane').key).toBe('namingSteps.prefix.alkanyl');
    expect(prefixExplanation('4,4-di-tert-butylheptane')).toMatchObject({ key: 'namingSteps.prefix.tertButyl', values: { count: 2 } });
    expect(prefixExplanation('7-(2,4-dimethylpentyl)-5-ethyltridecane')).toMatchObject({
      key: 'namingSteps.prefix.branchedSideChain',
      values: { parentName: 'pentyl', hasOwnPrefixes: true },
    });
  });
});

describe('reading the names of side chains that branch', () => {
  it('reads 1-methylethyl, numbered from the joining carbon, as propan-2-yl', () => {
    expect(nameOfTypedName('5-(1-methylethyl)nonane')).toBe('5-(propan-2-yl)nonane');
  });

  it('reads a branch of one carbon with a COOH on it: 1-carboxyethyl (P-65.1.2.2.3)', () => {
    expect(nameOfTypedName('3-(1-carboxyethyl)hexanedioic acid')).toBe('3-(carboxymethyl)-2-methylhexanedioic acid');
  });

  it('reads a branch on a branch: 5-[2-(chloromethyl)butyl]nonane', () => {
    expect(nameOfTypedName('5-[2-(chloromethyl)butyl]nonane')).toBe('5-butyl-3-(chloromethyl)nonane');
  });

  it.each([
    ['5-(chloro-tert-butyl)nonane', 'readingNames.tertButylCannotBeSubstituted'],
    ['4-(chloroisopropyl)octane', 'readingNames.olderPrefixCannotBeSubstituted'],
    ['3-(methylpropyl)hexane', 'readingNames.groupOnSideChainNeedsLocant'],
  ])('%s: %s', (typedName, errorKey) => {
    expect(parseTypedName(typedName).errorMessage.key).toBe(errorKey);
  });

  it.each([
    ['5-isopropylnonane', '5-(propan-2-yl)nonane'],
    ['4,4-diisopropylheptane', '4,4-di(propan-2-yl)heptane'],
    ['4-isopropylideneheptane', '4-(propan-2-ylidene)heptane'],
    ['6-isobutylundecane', '6-(2-methylpropyl)undecane'],
    ['6-sec-butylundecane', '6-(butan-2-yl)undecane'],
    ['5,5-di-sec-butylnonane', '5,5-di(butan-2-yl)nonane'],
    ['6-isopentylundecane', '6-(3-methylbutyl)undecane'],
    ['6-tert-pentylundecane', '6-(2-methylbutan-2-yl)undecane'],
    ['6-neopentylundecane', '6-(2,2-dimethylpropyl)undecane'],
  ])('reads the older prefix in %s, so the molecule can be drawn: %s', (typedName, preferredName) => {
    expect(nameOfTypedName(typedName)).toBe(preferredName);
  });
});

describe('marking answers with the older prefixes', () => {
  it.each([
    ['5-isopropylnonane', '5-(propan-2-yl)nonane'],
    ['3-isopropylhexan-1-ol', '3-(propan-2-yl)hexan-1-ol'],
    ['4-isopropyl-3-methylheptane', '3-methyl-4-(propan-2-yl)heptane'],
    ['4-isopropylideneheptane', '4-(propan-2-ylidene)heptane'],
  ])('accepts %s, which IUPAC keeps for general use, with a note giving the PIN (P-29.6.2.2)', (answer, preferredName) => {
    const result = checkStudentAnswer(answer, preferredName);
    expect(result.verdict).toBe(ANSWER_VERDICTS.correct);
    expect(result.note.key).toBe('otherNames.generalPrefixAccepted');
    expect(result.note.values).toMatchObject({ name: preferredName });
  });

  it('sorts isopropyl under i, so it goes before methyl (P-14.5.3)', () => {
    expect(checkStudentAnswer('3-methyl-4-isopropylheptane', '3-methyl-4-(propan-2-yl)heptane').hint.key).toBe('answer.hintAlphabeticalOrder');
  });

  it.each([
    ['6-isobutylundecane', '6-(2-methylpropyl)undecane', 'isobutyl', '2-methylpropyl'],
    ['6-sec-butylundecane', '6-(butan-2-yl)undecane', 'sec-butyl', 'butan-2-yl'],
    ['6-isopentylundecane', '6-(3-methylbutyl)undecane', 'isopentyl', '3-methylbutyl'],
    ['6-tert-pentylundecane', '6-(2-methylbutan-2-yl)undecane', 'tert-pentyl', '2-methylbutan-2-yl'],
    ['6-neopentylundecane', '6-(2,2-dimethylpropyl)undecane', 'neopentyl', '2,2-dimethylpropyl'],
  ])('marks %s wrong, as IUPAC no longer recommends the prefix (P-29.6.3)', (answer, preferredName, prefix, preferredPrefix) => {
    expect(checkStudentAnswer(answer, preferredName)).toEqual({
      verdict: ANSWER_VERDICTS.incorrect,
      hint: { key: 'answer.hintPrefixNotRecommended', values: { prefix, preferredPrefix } },
    });
  });

  it('says first when the chain is not the longest', () => {
    expect(checkStudentAnswer('3-isobutylheptane', '4-ethyl-2-methyloctane').hint.key).toBe('answer.hintNotTheLongestChain');
  });
});
