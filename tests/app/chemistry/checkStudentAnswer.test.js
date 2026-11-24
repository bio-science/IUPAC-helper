import { describe, expect, it } from 'vitest';
import { ANSWER_HINTS, ANSWER_VERDICTS, checkStudentAnswer } from '../../../src/chemistry/checkStudentAnswer.js';
import { inBritishEnglish } from '../inBritishEnglish.js';

describe('checkStudentAnswer', () => {
  it('waits for an answer', () => {
    expect(checkStudentAnswer('   ', '2-methylpropane').verdict).toBe(ANSWER_VERDICTS.noAnswerYet);
  });

  it('accepts the correct name, ignoring capitals and outer spaces', () => {
    expect(checkStudentAnswer(' 2-Methylpropane ', '2-methylpropane').verdict).toBe(ANSWER_VERDICTS.correct);
  });

  it('marks a missing hyphen wrong, with a punctuation hint', () => {
    const result = checkStudentAnswer('2methylpropane', '2-methylpropane');
    expect(result.verdict).toBe(ANSWER_VERDICTS.incorrect);
    expect(result.hint).toBe(ANSWER_HINTS.punctuation);
  });

  it('marks a space inside the name wrong, with a punctuation hint', () => {
    expect(checkStudentAnswer('2-methyl propane', '2-methylpropane').hint).toBe(ANSWER_HINTS.punctuation);
  });

  it('explains a missing multiplying prefix', () => {
    expect(inBritishEnglish(checkStudentAnswer('2,2-methylpropane', '2,2-dimethylpropane').hint)).toMatch(/2,2-dimethyl/);
  });

  it('explains when the longest chain was not used', () => {
    expect(checkStudentAnswer('2-ethylbutane', '3-methylpentane').hint).toBe(ANSWER_HINTS.notTheLongestChain);
  });

  it('explains when identical side chains are not grouped', () => {
    expect(checkStudentAnswer('2-methyl-3-methylpentane', '2,3-dimethylpentane').hint).toBe(
      ANSWER_HINTS.identicalSideChainsNotGrouped,
    );
  });

  it('explains when side chains are not in alphabetical order', () => {
    expect(checkStudentAnswer('2-methyl-3-ethylpentane', '3-ethyl-2-methylpentane').hint).toBe(ANSWER_HINTS.notAlphabetical);
  });

  it('explains when the chain is numbered from the wrong end', () => {
    expect(checkStudentAnswer('3-methylbutane', '2-methylbutane').hint).toBe(ANSWER_HINTS.notLowestLocants);
  });

  it('explains the "e" of -ane and -ene kept before a vowel, or left out before a consonant (P-16.7.1 (a))', () => {
    for (const [answer, correctName] of [
      ['6-methyloct-7-eneoic acid', '6-methyloct-7-enoic acid'],
      ['propaneal', 'propanal'],
      ['prop-2-eneal', 'prop-2-enal'],
      ['propane-2-ol', 'propan-2-ol'],
      ['but-3-ene-2-one', 'but-3-en-2-one'],
      ['pent-4-ene-1-amine', 'pent-4-en-1-amine'],
      ['3-(prop-2-ene-1-yl)hexane', '3-(prop-2-en-1-yl)hexane'],
      ['ethaneamide', 'acetamide'],
      ['methyl ethaneoate', 'methyl acetate'],
      ['(2E)-but-2-eneoic acid', '(2E)-but-2-enoic acid'],
      ['propan-1,2-diol', 'propane-1,2-diol'],
      ['butandioic acid', 'butanedioic acid'],
      ['cyclohexancarboxylic acid', 'cyclohexanecarboxylic acid'],
    ]) {
      expect(checkStudentAnswer(answer, correctName).hint, answer).toBe(ANSWER_HINTS.finalEOfParent);
    }
  });

  it('explains the "a" of tetra, penta ... kept before "a" or "o" (P-16.7.1 (c))', () => {
    expect(checkStudentAnswer('butane-1,2,3,4-tetraol', 'butane-1,2,3,4-tetrol').hint).toBe(ANSWER_HINTS.finalAOfMultiplyingPrefix);
    expect(checkStudentAnswer('hexane-2,3,4,5-tetraone', 'hexane-2,3,4,5-tetrone').hint).toBe(ANSWER_HINTS.finalAOfMultiplyingPrefix);
  });

  it('explains the "a" before -diene, -triene ... left out, or put in without di, tri ... (P-31.1.1.2)', () => {
    expect(checkStudentAnswer('but-1,3-diene', 'buta-1,3-diene').hint).toBe(ANSWER_HINTS.aBeforeMultipliedEne);
    expect(checkStudentAnswer('buta-2-ene', 'but-2-ene').hint).toBe(ANSWER_HINTS.aBeforeMultipliedEne);
  });

  it('gives the spelling hint before the punctuation one', () => {
    expect(checkStudentAnswer('6-methyloct7eneoic acid', '6-methyloct-7-enoic acid').hint).toBe(ANSWER_HINTS.finalEOfParent);
  });

  it('has every spelling hint in British English', () => {
    for (const hintName of ['finalEOfParent', 'finalAOfMultiplyingPrefix', 'aBeforeMultipliedEne']) {
      expect(inBritishEnglish(ANSWER_HINTS[hintName]), hintName).toMatch(/^Nearly! /);
    }
  });

  it('gives no hint for a name of a different molecule', () => {
    const result = checkStudentAnswer('hexane', '2-methylpentane');
    expect(result.verdict).toBe(ANSWER_VERDICTS.incorrect);
    expect(result.hint).toBeNull();
  });
});

describe('checkStudentAnswer with E and Z', () => {
  const hintFor = (answer, correctName) => checkStudentAnswer(answer, correctName).hint;

  it('accepts E and Z in capitals or not', () => {
    expect(checkStudentAnswer('(2E)-but-2-ene', '(2E)-but-2-ene').verdict).toBe(ANSWER_VERDICTS.correct);
    expect(checkStudentAnswer('(2e)-but-2-ene', '(2E)-but-2-ene').verdict).toBe(ANSWER_VERDICTS.correct);
    expect(checkStudentAnswer('methyl (2z)-but-2-enoate', 'methyl (2Z)-but-2-enoate').verdict).toBe(ANSWER_VERDICTS.correct);
  });

  it('accepts cis and trans, with a note, when each carbon of the C=C has one H (P-93.4.2.1.1)', () => {
    for (const answer of ['trans-but-2-ene', '2-trans-but-2-ene']) {
      expect(checkStudentAnswer(answer, '(2E)-but-2-ene')).toMatchObject({ verdict: ANSWER_VERDICTS.correct, note: { key: 'omnibox.cisTransAccepted' } });
    }
    expect(checkStudentAnswer('2-cis,4-trans-hexa-2,4-diene', '(2Z,4E)-hexa-2,4-diene').verdict).toBe(ANSWER_VERDICTS.correct);
    expect(hintFor('cis-but-2-ene', '(2E)-but-2-ene')).toBe(ANSWER_HINTS.stereoWrongWayRound);
  });

  it('explains that cis and trans cannot be used when a carbon of the C=C has no H', () => {
    expect(hintFor('cis-2-chlorobut-2-ene', '(2E)-2-chlorobut-2-ene')).toBe(ANSWER_HINTS.cisTransNeedsHydrogens);
  });

  it('hints at the E or Z left out, or the wrong way round', () => {
    expect(hintFor('but-2-ene', '(2E)-but-2-ene')).toBe(ANSWER_HINTS.stereoLeftOut);
    expect(hintFor('methyl but-2-enoate', 'methyl (2E)-but-2-enoate')).toBe(ANSWER_HINTS.stereoLeftOut);
    expect(hintFor('(2Z)-but-2-ene', '(2E)-but-2-ene')).toBe(ANSWER_HINTS.stereoWrongWayRound);
    expect(hintFor('(2Z)-2-chlorobut-2-ene', '(2E)-2-chlorobut-2-ene')).toBe(ANSWER_HINTS.stereoWrongWayRound);
    expect(hintFor('(2E)-N-[(1Z)-prop-1-en-1-yl]but-2-enamide', '(2E)-N-[(1E)-prop-1-en-1-yl]but-2-enamide')).toBe(ANSWER_HINTS.stereoWrongWayRound);
  });

  it('hints at how E and Z are written: locants, brackets, hyphen and order (P-91.3, P-16.5.1.7)', () => {
    expect(hintFor('(E)-but-2-ene', '(2E)-but-2-ene')).toBe(ANSWER_HINTS.stereoNeedsLocants);
    expect(hintFor('2E-but-2-ene', '(2E)-but-2-ene')).toBe(ANSWER_HINTS.stereoBrackets);
    expect(hintFor('(2E)but-2-ene', '(2E)-but-2-ene')).toBe(ANSWER_HINTS.stereoHyphen);
    expect(hintFor('(4E,2Z)-hexa-2,4-diene', '(2Z,4E)-hexa-2,4-diene')).toBe(ANSWER_HINTS.stereoOrder);
  });

  it('hints that the lower locant goes to Z (P-14.4 (j))', () => {
    expect(hintFor('(2E,4Z)-hexa-2,4-diene', '(2Z,4E)-hexa-2,4-diene')).toBe(ANSWER_HINTS.lowerLocantToZ);
    expect(hintFor('(2E,4E)-hexa-2,4-diene', '(2Z,4E)-hexa-2,4-diene')).toBe(ANSWER_HINTS.stereoWrongWayRound);
  });

  it('hints that E and Z go at the front of the part of the name they belong to', () => {
    expect(hintFor('(2E)-methyl but-2-enoate', 'methyl (2E)-but-2-enoate')).toBe(ANSWER_HINTS.stereoInWrongPart);
    expect(hintFor('(1E,2E)-N-(prop-1-en-1-yl)but-2-enamide', '(2E)-N-[(1E)-prop-1-en-1-yl]but-2-enamide')).toBe(ANSWER_HINTS.stereoInWrongPart);
  });

  it('explains an E or Z on a C=C that has neither, or a locant with no C=C', () => {
    expect(hintFor('(1E)-but-1-ene', 'but-1-ene')).toMatchObject({ key: 'readingNames.doubleBondHasNoEOrZ' });
    expect(hintFor('(3E)-but-2-ene', '(2E)-but-2-ene')).toMatchObject({ key: 'readingNames.stereoLocantHasNoDoubleBond' });
  });

  it('gives the other hints when more than E and Z is wrong', () => {
    expect(hintFor('(2E)-3-chlorobut-2-ene', '(2E)-2-chlorobut-2-ene')).toBe(ANSWER_HINTS.notLowestLocants);
  });

  it('has every E and Z hint in British English', () => {
    for (const hintName of ['stereoLeftOut', 'stereoWrongWayRound', 'stereoNeedsLocants', 'stereoBrackets', 'stereoHyphen', 'stereoOrder', 'stereoInWrongPart', 'lowerLocantToZ']) {
      expect(inBritishEnglish(ANSWER_HINTS[hintName]), hintName).toMatch(/^Nearly! /);
    }
  });
});
