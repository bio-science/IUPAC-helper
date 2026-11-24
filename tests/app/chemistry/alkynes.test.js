/**
 * Alkynes: chains with C≡C triple bonds, alone or with C=C double bonds and other groups.
 *
 * The rules come from the IUPAC 2013 Recommendations (the Blue Book):
 *   P-31.1.1       "ane" becomes "yne" for a triple bond; "ene" comes before "yne", and its "e"
 *                  is dropped: pent-1-en-4-yne
 *   P-31.1.1.1     the multiple bonds together get the lowest locants: hept-6-ene-1,3-diyne
 *   P-31.1.1.2     then the double bonds, if both ways give the same set: pent-1-en-4-yne
 *   P-31.1.4.2.4   the locant is left out where there is only one place for the bond: propyne
 *   P-31.1.2.1     acetylene is the PIN for HC≡CH, and is not substituted: fluoroethyne
 *   P-14.3.4.4     but it is kept in prop-2-ynoic acid, where "propynoic acid" could be read
 *   P-44.4.1.1,
 *   P-44.4.1.2     the main chain has the most multiple bonds, then the most double bonds:
 *                  3-ethylpent-1-yne, not 3-ethynylpentane
 *   P-32.1.1       side chains with a triple bond: ethynyl, prop-2-yn-1-yl
 */
import { describe, expect, it } from 'vitest';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { listNamingSteps } from '../../../src/chemistry/listNamingSteps.js';
import { ANSWER_HINTS, ANSWER_VERDICTS, checkStudentAnswer } from '../../../src/chemistry/checkStudentAnswer.js';
import { readStructuralFormula } from '../../../src/chemistry/readStructuralFormula.js';
import { zigzagStraightChains } from '../../../src/geometry/zigzagStraightChains.js';
import { listTripleBondLines } from '../../../src/geometry/doubleBondLines.js';
import { inBritishEnglish } from '../inBritishEnglish.js';

const nameOfFormula = (formula) => nameCarbonSkeleton(readStructuralFormula(formula).carbonSkeleton).iupacName;

/** Reads a name, draws it, and names the drawing again. */
const roundTrip = (name) => nameCarbonSkeleton(interpretOmniboxText(name).carbonSkeleton).iupacName;

describe('naming alkynes from their formula', () => {
  it.each([
    ['HC≡CH', 'acetylene'],
    ['HC#CH', 'acetylene'],
    ['CH3C≡CH', 'propyne'],
    ['CH3C≡CCH3', 'but-2-yne'],
    ['CH3CH2C≡CH', 'but-1-yne'],
    ['CH2=CHCH2C≡CH', 'pent-1-en-4-yne'],
    ['CH3CH=CHC≡CH', 'pent-3-en-1-yne'],
    ['CH2=CHCH2CH2CH2C≡CH', 'hept-1-en-6-yne'],
    ['HC≡CC≡CH', 'buta-1,3-diyne'],
    ['CH2=CHCH2C≡CC≡CH', 'hept-6-ene-1,3-diyne'],
    ['FC≡CH', 'fluoroethyne'],
    ['HC≡CCH2OH', 'prop-2-yn-1-ol'],
    ['HC≡CCOOH', 'prop-2-ynoic acid'],
    ['HOOCC≡CCOOH', 'but-2-ynedioic acid'],
    ['CH3C≡CCOCH3', 'pent-3-yn-2-one'],
    ['CH3CH2CH(C≡CH)CH2CH3', '3-ethylpent-1-yne'],
  ])('%s is %s', (formula, name) => {
    expect(nameOfFormula(formula)).toBe(name);
  });
});

describe('reading alkyne names', () => {
  it.each([
    'propyne',
    'but-1-yne',
    'but-2-yne',
    'pent-1-en-4-yne',
    'pent-3-en-1-yne',
    'hexa-1,3-dien-5-yne',
    'hept-1-en-6-yne',
    'buta-1,3-diyne',
    'hept-6-ene-1,3-diyne',
    'cyclooctyne',
    'fluoroethyne',
    'but-3-yn-1-ol',
    'prop-2-ynoic acid',
    'pent-1-en-4-yn-3-one',
    '2-methylpent-1-en-4-yn-3-ol',
    '1-chloro-3-ethylpent-1-yne',
    '1-ethynylcyclohexan-1-ol',
    '3-[(prop-2-yn-1-yl)oxy]prop-1-yne',
    'prop-2-yn-1-yl acetate',
    'N-(prop-2-yn-1-yl)acetamide',
  ])('reads %s and names the drawing the same way', (name) => {
    expect(roundTrip(name)).toBe(name);
  });

  it.each([
    ['ethyne', 'acetylene'],
    ['propynoic acid', 'prop-2-ynoic acid'],
    ['3-ethynylpentane', '3-ethylpent-1-yne'],
    ['hept-1-ene-4,6-diyne', 'hept-6-ene-1,3-diyne'],
  ])('reads %s as the molecule named %s', (name, iupacName) => {
    expect(roundTrip(name)).toBe(iupacName);
  });

  it('asks for the locant where the triple bond could go in more than one place', () => {
    expect(interpretOmniboxText('butyne').message).toMatchObject({ key: 'readingNames.tripleBondNeedsLocant' });
  });

  it('says when a triple bond is not on the chain, or a carbon would have too many bonds', () => {
    expect(interpretOmniboxText('but-4-yne').message?.key).toBe('readingNames.tripleBondNotOnChain');
    expect(interpretOmniboxText('pent-1-en-1-yne').kind).not.toBe('name');
  });
});

describe('checking an answer with a triple bond', () => {
  it.each([
    ['propyne', 'propyne'],
    ['ethyne', 'acetylene'],
    ['pent-1-en-4-yne', 'pent-1-en-4-yne'],
    ['hept-6-ene-1,3-diyne', 'hept-6-ene-1,3-diyne'],
  ])('%s is right for %s', (answer, name) => {
    expect(checkStudentAnswer(answer, name).verdict).toBe(ANSWER_VERDICTS.correct);
  });

  it.each([
    ['propynoic acid', 'prop-2-ynoic acid', ANSWER_HINTS.tripleBondNeedsLocant],
    ['butyne', 'but-1-yne', ANSWER_HINTS.tripleBondNeedsLocant],
    ['prop-1-yne', 'propyne', ANSWER_HINTS.leaveOutMultipleBondLocant],
    ['prop-1-ene', 'propene', ANSWER_HINTS.leaveOutMultipleBondLocant],
    ['pent-4-en-1-yne', 'pent-1-en-4-yne', ANSWER_HINTS.notLowestLocants],
    ['hept-1-ene-4,6-diyne', 'hept-6-ene-1,3-diyne', ANSWER_HINTS.notLowestLocants],
    ['3-ethynylpentane', '3-ethylpent-1-yne', ANSWER_HINTS.notTheChainWithMostMultipleBonds],
    ['3-ethenylpentane', '3-ethylpent-1-ene', ANSWER_HINTS.notTheChainWithMostMultipleBonds],
  ])('%s is wrong for %s, with a hint', (answer, name, hint) => {
    expect(checkStudentAnswer(answer, name)).toMatchObject({ verdict: ANSWER_VERDICTS.incorrect, hint });
  });
});

describe('the naming steps of an alkyne', () => {
  const stepsOf = (name) => {
    const skeleton = interpretOmniboxText(name).carbonSkeleton;
    return listNamingSteps(skeleton, nameCarbonSkeleton(skeleton));
  };
  const stepText = (name, stepKind) => inBritishEnglish(stepsOf(name).find((step) => step.stepKind === stepKind).explanation);

  it.each([
    ['but-1-yne', /a C≡C triple bond, so "ane" becomes "yne"\. Its locant 1/],
    ['buta-1,3-diyne', /2 C≡C triple bonds, so "ane" becomes "diyne"/],
    ['propyne', /only one place it could be/],
    ['pent-1-en-4-yne', /"ene" before "yne"/],
  ])('explains the ending of %s', (name, text) => {
    expect(stepText(name, 'unsaturation')).toMatch(text);
  });

  it('explains why the chain with the triple bond is the main chain', () => {
    expect(stepsOf('3-ethylpent-1-yne').find((step) => step.stepKind === 'chainChoice')).toMatchObject({
      explanation: { key: 'namingSteps.chainChoice.mostMultipleBonds' },
      blueBookRules: ['P-44.4.1.1'],
    });
  });

  it('explains the numbering by multiple bonds, then by double bonds', () => {
    expect(stepsOf('hept-6-ene-1,3-diyne').find((step) => step.stepKind === 'numbering')).toMatchObject({
      explanation: { key: 'namingSteps.numbering.lowestMultipleBondLocants', values: { locants: '1,3,6' } },
    });
    expect(stepsOf('pent-1-en-4-yne').find((step) => step.stepKind === 'numbering')).toMatchObject({
      explanation: { key: 'namingSteps.numbering.doubleBondsBeforeTripleBonds', values: { locants: '1' } },
    });
  });

  it('explains a side chain with a triple bond', () => {
    expect(stepsOf('1-ethynylcyclohexan-1-ol').find((step) => step.stepKind === 'prefix')).toMatchObject({
      explanation: { key: 'namingSteps.prefix.alkynyl' },
      blueBookRules: ['P-32.1.1'],
    });
  });

  it('gives acetylene as a retained name', () => {
    expect(stepsOf('acetylene')[0]).toMatchObject({ stepKind: 'retainedName' });
  });
});

describe('drawing a triple bond', () => {
  it('draws three lines, the middle one joining the two carbons', () => {
    const skeleton = interpretOmniboxText('but-2-yne').carbonSkeleton;
    const [first, second] = [2, 3].map((atomId) => skeleton.carbonAtoms.find((carbon) => carbon.atomId === atomId));
    const lines = listTripleBondLines(skeleton, 2, 3);
    expect(lines).toHaveLength(3);
    expect(lines[1]).toEqual({ x1: first.positionX, y1: first.positionY, x2: second.positionX, y2: second.positionY });
  });

  it('keeps a triple-bonded carbon and its neighbours in a straight line in the skeletal formula', () => {
    const skeleton = zigzagStraightChains(interpretOmniboxText('hex-3-yne').carbonSkeleton);
    const yOf = (atomId) => skeleton.carbonAtoms.find((carbon) => carbon.atomId === atomId).positionY;
    expect(new Set([2, 3, 4, 5].map(yOf)).size).toBe(1);
    expect(yOf(1)).not.toBe(yOf(2));
    expect(yOf(6)).not.toBe(yOf(5));
  });
});
