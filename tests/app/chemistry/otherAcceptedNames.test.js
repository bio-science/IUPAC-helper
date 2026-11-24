/**
 * Names that are right but are not the preferred IUPAC name (PIN): they are read and accepted
 * as answers, with a note that gives the PIN.
 *
 * The rules come from the IUPAC 2013 Recommendations (the Blue Book):
 *   P-12.1        the PIN is one of the names IUPAC accepts; the others are still IUPAC names,
 *                 used in general nomenclature
 *   P-65.1.1.1    formic, acetic and oxalic acid are retained PINs; methanoic, ethanoic and
 *                 ethanedioic acid are the systematic names
 *   P-65.6.3.2.1  so are formate, acetate and oxalate (methanoate, ethanoate, ethanedioate)
 *   P-66.1.1.1.2  and formamide, acetamide and oxamide (methanamide, ethanamide, ethanediamide)
 *   P-66.6.1.2.1  and formaldehyde and acetaldehyde (methanal, ethanal)
 *   P-64.2.1.2    acetone is kept, but not as the PIN, which is propan-2-one
 *   P-34.1.1.2    glyoxal is kept, but not as the PIN, which is ethanedial
 *   P-14.3.4.4    the locant of -one is kept in the PIN: propan-2-one, butan-2-one
 */
import { describe, expect, it } from 'vitest';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { ANSWER_HINTS, ANSWER_VERDICTS, checkStudentAnswer } from '../../../src/chemistry/checkStudentAnswer.js';
import { EXPLAINED_NAMES, listNamingSteps } from '../../../src/chemistry/listNamingSteps.js';
import { RETAINED_PREFERRED_PARENTS } from '../../../src/chemistry/retainedNames.js';
import { inBritishEnglish } from '../inBritishEnglish.js';

/** Systematic names whose PIN uses a retained parent: [systematic name, PIN]. */
const SYSTEMATIC_NAMES = [
  ['methanoic acid', 'formic acid'],
  ['ethanoic acid', 'acetic acid'],
  ['chloroethanoic acid', 'chloroacetic acid'],
  ['dichloroethanoic acid', 'dichloroacetic acid'],
  ['bromo(chloro)ethanoic acid', 'bromo(chloro)acetic acid'],
  ['hydroxyethanoic acid', 'hydroxyacetic acid'],
  ['oxoethanoic acid', 'oxoacetic acid'],
  ['cyclohexylethanoic acid', 'cyclohexylacetic acid'],
  ['ethanedioic acid', 'oxalic acid'],
  ['methyl methanoate', 'methyl formate'],
  ['ethyl methanoate', 'ethyl formate'],
  ['methyl ethanoate', 'methyl acetate'],
  ['ethyl ethanoate', 'ethyl acetate'],
  ['methyl chloroethanoate', 'methyl chloroacetate'],
  ['methyl dichloroethanoate', 'methyl dichloroacetate'],
  ['methanamide', 'formamide'],
  ['N-methylmethanamide', 'N-methylformamide'],
  ['ethanamide', 'acetamide'],
  ['N-methylethanamide', 'N-methylacetamide'],
  ['2-chloroethanamide', '2-chloroacetamide'],
  ['2-chloro-N-methylethanamide', '2-chloro-N-methylacetamide'],
  ['ethanediamide', 'oxamide'],
  ['ethyne', 'acetylene'],
  ['methanal', 'formaldehyde'],
  ['ethanal', 'acetaldehyde'],
  ['chloroethanal', 'chloroacetaldehyde'],
  ['hydroxyethanal', 'hydroxyacetaldehyde'],
  ['aminoethanal', 'aminoacetaldehyde'],
];

/** Other names IUPAC accepts but not as the PIN: [name, PIN, note key]. */
const OTHER_ACCEPTED_NAMES = [
  ['acetone', 'propan-2-one', 'otherNames.generalNameAccepted'],
  ['glyoxal', 'ethanedial', 'otherNames.generalNameAccepted'],
  ['propanone', 'propan-2-one', 'otherNames.locantLeftOutAccepted'],
  ['butanone', 'butan-2-one', 'otherNames.locantLeftOutAccepted'],
];

/** Every name that is right but not the PIN, with its PIN and note key. */
const ALL_NOT_PREFERRED = [
  ...SYSTEMATIC_NAMES.map(([name, pin]) => [name, pin, 'otherNames.systematicNameAccepted']),
  ...OTHER_ACCEPTED_NAMES,
];

describe('the systematic names of retained PINs', () => {
  it('are tested for every retained parent', () => {
    const tested = new Set(SYSTEMATIC_NAMES.map(([, pin]) => pin));
    // Oxalate is only in diesters (dimethyl oxalate, for dimethyl ethanedioate), which can't be read yet.
    const notReadYet = new Set(['oxalate']);
    expect(interpretOmniboxText('dimethyl ethanedioate').kind).not.toBe('name');
    for (const { retainedParent } of RETAINED_PREFERRED_PARENTS.filter(({ retainedParent }) => !notReadYet.has(retainedParent))) {
      expect([...tested].some((pin) => pin.endsWith(retainedParent)), retainedParent).toBe(true);
    }
  });

  it.each(SYSTEMATIC_NAMES)('%s is the same molecule as %s, and is its systematic name', (systematicName, pin) => {
    const fromSystematic = nameCarbonSkeleton(interpretOmniboxText(systematicName).carbonSkeleton);
    const fromPin = nameCarbonSkeleton(interpretOmniboxText(pin).carbonSkeleton);
    expect(fromSystematic).toMatchObject({ iupacName: pin, systematicName });
    expect(fromPin).toMatchObject({ iupacName: pin, systematicName });
    expect(fromSystematic.retainedName).toMatchObject({ systematicName });
  });

  it.each(SYSTEMATIC_NAMES)('%s can be explained step by step, as can %s', (systematicName, pin) => {
    const skeleton = interpretOmniboxText(systematicName).carbonSkeleton;
    const named = nameCarbonSkeleton(skeleton);
    const systematicSteps = listNamingSteps(skeleton, named, { explain: EXPLAINED_NAMES.systematicName });
    expect(systematicSteps.at(-1)).toMatchObject({
      stepKind: 'notPreferredName',
      explanation: { values: { systematicName, preferredName: pin } },
    });
    const preferredSteps = listNamingSteps(skeleton, named, { explain: EXPLAINED_NAMES.preferredName });
    expect(preferredSteps[0]).toMatchObject({ stepKind: 'retainedName' });
  });
});

describe('names that are right but not the PIN', () => {
  it.each(ALL_NOT_PREFERRED)('typed in, %s is read as right, with a note giving %s', (name, pin, noteKey) => {
    expect(interpretOmniboxText(name)).toMatchObject({
      kind: 'name',
      correctIupacName: pin,
      typedNameIsCorrectIupacName: true,
      note: { key: noteKey, values: { typedName: name, name: pin } },
    });
  });

  it.each(ALL_NOT_PREFERRED)('as an answer, %s is correct, with a note giving %s', (name, pin, noteKey) => {
    expect(checkStudentAnswer(name, pin)).toEqual({
      verdict: ANSWER_VERDICTS.correct,
      hint: null,
      note: { key: noteKey, values: { typedName: name, name: pin } },
    });
  });

  it.each(ALL_NOT_PREFERRED)('the note for %s says it is right and names %s', (name, pin) => {
    const text = inBritishEnglish(checkStudentAnswer(name, pin).note);
    expect(text).toContain(`${name} is right`);
    expect(text).toContain(pin);
  });

  it.each([
    ['Ethanoic Acid', 'acetic acid'],
    ['  ethanal ', 'acetaldehyde'],
    ['ethanoic  acid', 'acetic acid'],
    ['Methyl Ethanoate', 'methyl acetate'],
    ['ACETONE', 'propan-2-one'],
  ])('accepts %s with any capitals and spaces, with a note', (answer, pin) => {
    const result = checkStudentAnswer(answer, pin);
    expect(result.verdict).toBe(ANSWER_VERDICTS.correct);
    expect(result.note).toBeDefined();
    expect(interpretOmniboxText(answer)).toMatchObject({ typedNameIsCorrectIupacName: true, note: expect.any(Object) });
  });
});

describe('the PINs themselves', () => {
  it.each([...SYSTEMATIC_NAMES.map(([, pin]) => pin), 'propan-2-one', 'butan-2-one', 'ethanedial'])('%s is right with no note', (pin) => {
    expect(checkStudentAnswer(pin, pin)).toEqual({ verdict: ANSWER_VERDICTS.correct, hint: null });
    const read = interpretOmniboxText(pin);
    expect(read).toMatchObject({ kind: 'name', correctIupacName: pin, typedNameIsCorrectIupacName: true });
    expect(read.note).toBeUndefined();
  });
});

describe('a systematic name is still marked like any other name', () => {
  it.each([
    ['ethanoic acid', 'propanoic acid'],
    ['methanal', 'acetaldehyde'],
    ['ethanamide', 'formamide'],
    ['methyl ethanoate', 'ethyl acetate'],
    ['acetone', 'butan-2-one'],
  ])('%s is wrong for %s, a different molecule', (answer, pin) => {
    expect(checkStudentAnswer(answer, pin).verdict).toBe(ANSWER_VERDICTS.incorrect);
  });

  it('gives the usual hints when it is written wrongly', () => {
    expect(checkStudentAnswer('ethanoicacid', 'acetic acid').hint).toEqual(ANSWER_HINTS.punctuation);
    expect(checkStudentAnswer('2-chloroethanoic acid', 'chloroacetic acid').hint).toEqual(ANSWER_HINTS.leaveOutLocants);
    expect(checkStudentAnswer('bromochloroethanoic acid', 'bromo(chloro)acetic acid').hint).toEqual(ANSWER_HINTS.bracketsAfterFirstPrefix);
  });

  it('needs the locants of an amide, as the PIN does', () => {
    expect(interpretOmniboxText('chloroethanamide')).toMatchObject({ message: { key: 'readingNames.amideNeedsLocants' } });
    expect(interpretOmniboxText('chloroacetamide')).toMatchObject({ message: { key: 'readingNames.amideNeedsLocants' } });
  });
});
