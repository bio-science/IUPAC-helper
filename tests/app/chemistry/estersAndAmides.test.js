/**
 * Esters and amides: naming, reading typed names and formulae, and checking answers.
 *
 * The rules come from the IUPAC 2013 Recommendations (the Blue Book):
 *   P-65.6.3.2.1    esters are named by functional class nomenclature: the group on the O,
 *                   then the acid's name with "oic acid" changed to "oate", as a second word
 *                   (ethyl acetate, methyl cyclohexanecarboxylate)
 *   P-66.1.1.1.1.1  amides take the suffix "amide" in place of "oic acid" (hexanamide,
 *                   pentanediamide), and P-66.1.1.1.1.3 "carboxamide" on a ring
 *   P-66.1.1.3.1.1  a group on the nitrogen is a prefix with the locant N (N-methylprop-2-enamide,
 *                   2-hydroxy-N-methylpropanamide), written before numbers (N,4-dimethyl...)
 *   P-41            esters and amides are senior to aldehydes, ketones and alcohols
 *   P-65.1.1.1, P-65.6.3.2.1  the esters of formic, acetic and oxalic acid keep their names
 *                   in the PIN: methyl formate, ethyl acetate, methyl chloroacetate
 *   P-66.1.1.1.2    acetamide, formamide and oxamide are retained names and PINs; formamide
 *                   and oxamide only take groups on their N (N-methylformamide)
 *   P-16.5.1.3.2    an amide's N can have groups too, so its locants are always written:
 *                   2-chloroacetamide, not chloroacetamide
 * The systematic names (methyl ethanoate, ethanamide ...) are read too, and accepted with a note.
 */
import { describe, expect, it } from 'vitest';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { connectCarbonSkeletonFromDescription } from '../../../src/chemistry/buildCarbonSkeletonFromDescription.js';
import { countAtomsInMolecule } from '../../../src/chemistry/carbonSkeleton.js';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { formatMolecularFormula } from '../../../src/chemistry/molecularFormula.js';
import { ANSWER_VERDICTS, checkStudentAnswer } from '../../../src/chemistry/checkStudentAnswer.js';
import { readStructuralFormula } from '../../../src/chemistry/readStructuralFormula.js';

const ester = (locant, carbonCount, extra = {}) => ({ locant, isEster: true, linkedGroup: { carbonCount, ...extra } });
const amide = (locant, linkedGroup) => ({ locant, isAmide: true, ...(linkedGroup ? { linkedGroup } : {}) });
const acid = (locant) => ({ locant, isCarboxylicAcid: true });
const hydroxy = (locant) => ({ locant, isHydroxy: true });
const ketone = (locant) => ({ locant, isKetone: true });
const aldehyde = (locant) => ({ locant, isAldehyde: true });
const chloro = (locant) => ({ locant, halogen: 'Cl' });
const methyl = (locant) => ({ locant, substituentCarbonCount: 1 });

function skeletonOfDescription(mainChainCarbonCount, substituents, mainChainDoubleBondLocants = [], isRing = false) {
  const { carbonSkeleton, errorMessage } = connectCarbonSkeletonFromDescription({ mainChainCarbonCount, mainChainDoubleBondLocants, substituents, isRing });
  expect(errorMessage).toBeUndefined();
  return carbonSkeleton;
}

const nameOfDescription = (...description) => nameCarbonSkeleton(skeletonOfDescription(...description)).iupacName;

describe('naming esters', () => {
  it.each([
    [2, [ester(1, 1)], [], 'methyl acetate'],
    [1, [ester(1, 1)], [], 'methyl formate'],
    [2, [ester(1, 2)], [], 'ethyl acetate'],
    [3, [ester(1, 1)], [], 'methyl propanoate'],
    [1, [ester(1, 3)], [], 'propyl formate'],
    [4, [ester(1, 2)], [], 'ethyl butanoate'],
    [3, [ester(1, 1), methyl(2)], [], 'methyl 2-methylpropanoate'],
    [3, [ester(1, 2), hydroxy(2)], [], 'ethyl 2-hydroxypropanoate'],
    [4, [ester(1, 2), ketone(3)], [], 'ethyl 3-oxobutanoate'],
    [3, [ester(1, 1)], [2], 'methyl prop-2-enoate'],
    [2, [ester(1, 2, { doubleBondLocants: [1] })], [], 'ethenyl acetate'],
    [2, [ester(1, 6, { isRing: true })], [], 'cyclohexyl acetate'],
    [2, [ester(1, 1), chloro(2)], [], 'methyl chloroacetate'],
    [2, [ester(1, 1), chloro(2), chloro(2)], [], 'methyl dichloroacetate'],
  ])('a %i-carbon chain with %j and double bonds %j is %s', (carbonCount, substituents, doubleBonds, expectedName) => {
    expect(nameOfDescription(carbonCount, substituents, doubleBonds)).toBe(expectedName);
  });

  it('names an ester on a ring with carboxylate', () => {
    expect(nameOfDescription(6, [ester(1, 1)], [], true)).toBe('methyl cyclohexanecarboxylate');
  });

  it('gives the systematic name too, methyl ethanoate for methyl acetate', () => {
    const named = nameCarbonSkeleton(skeletonOfDescription(2, [ester(1, 1)]));
    expect(named).toMatchObject({ iupacName: 'methyl acetate', systematicName: 'methyl ethanoate' });
    expect(named.retainedName).toMatchObject({ retainedParent: 'acetate', systematicParent: 'ethanoate', blueBookRules: ['P-65.1.1.1', 'P-65.6.3.2.1'] });
  });

  it('works out the molecular formula of methyl acetate, C3H6O2', () => {
    expect(countAtomsInMolecule(skeletonOfDescription(2, [ester(1, 1)]))).toMatchObject({ carbonCount: 3, hydrogenCount: 6, oxygenCount: 2, nitrogenCount: 0 });
  });
});

describe('naming amides', () => {
  it.each([
    [2, [amide(1)], [], 'acetamide'],
    [1, [amide(1)], [], 'formamide'],
    [2, [amide(1), amide(2)], [], 'oxamide'],
    [2, [amide(1), chloro(2)], [], '2-chloroacetamide'],
    [2, [amide(1, { carbonCount: 1 }), chloro(2)], [], '2-chloro-N-methylacetamide'],
    [3, [amide(1), amide(3), methyl(2)], [], '2-methylpropanediamide'],
    [6, [amide(1)], [], 'hexanamide'],
    [5, [amide(1), amide(5)], [], 'pentanediamide'],
    [3, [amide(1)], [2], 'prop-2-enamide'],
    [3, [amide(1), hydroxy(2)], [], '2-hydroxypropanamide'],
    [4, [amide(1), aldehyde(4)], [], '4-oxobutanamide'],
    [2, [amide(1, { carbonCount: 1 })], [], 'N-methylacetamide'],
    [1, [amide(1, { carbonCount: 1 })], [], 'N-methylformamide'],
    [3, [amide(1, { carbonCount: 1 })], [2], 'N-methylprop-2-enamide'],
    [3, [amide(1, { carbonCount: 1 }), hydroxy(2)], [], '2-hydroxy-N-methylpropanamide'],
    [3, [amide(1, { carbonCount: 1 }), methyl(2)], [], 'N,2-dimethylpropanamide'],
    [3, [amide(1, { carbonCount: 2 }), methyl(2)], [], 'N-ethyl-2-methylpropanamide'],
    [2, [amide(1, { carbonCount: 3, doubleBondLocants: [2] })], [], 'N-(prop-2-en-1-yl)acetamide'],
  ])('a %i-carbon chain with %j and double bonds %j is %s', (carbonCount, substituents, doubleBonds, expectedName) => {
    expect(nameOfDescription(carbonCount, substituents, doubleBonds)).toBe(expectedName);
  });

  it('names an amide on a ring with carboxamide', () => {
    expect(nameOfDescription(6, [amide(1)], [], true)).toBe('cyclohexanecarboxamide');
    expect(nameOfDescription(6, [amide(1, { carbonCount: 1 })], [], true)).toBe('N-methylcyclohexanecarboxamide');
  });

  it('works out the molecular formulae of acetamide, C2H5NO, and N-methylacetamide, C3H7NO', () => {
    expect(countAtomsInMolecule(skeletonOfDescription(2, [amide(1)]))).toMatchObject({ carbonCount: 2, hydrogenCount: 5, oxygenCount: 1, nitrogenCount: 1 });
    expect(countAtomsInMolecule(skeletonOfDescription(2, [amide(1, { carbonCount: 1 })]))).toMatchObject({ carbonCount: 3, hydrogenCount: 7, oxygenCount: 1, nitrogenCount: 1 });
  });
});

describe('esters and amides that are not covered yet', () => {
  it.each([
    ['an ester and an acid', 4, [ester(1, 1), acid(4)]],
    ['an ester and an amide', 4, [ester(1, 1), amide(4)]],
    ['two ester links', 4, [ester(1, 1), ester(4, 1)]],
  ])('does not name %s', (_, carbonCount, substituents) => {
    expect(nameCarbonSkeleton(skeletonOfDescription(carbonCount, substituents)).isNameable).toBe(false);
  });

  it('names an O or NH2 with no C=O next to it as an ether or an amine (see aminesAndEthers.test.js)', () => {
    const ether = { carbonAtoms: [{ atomId: 1 }, { atomId: 2 }], carbonCarbonBonds: [{ firstAtomId: 1, secondAtomId: 2, linkAtom: 'O' }] };
    const amine = { carbonAtoms: [{ atomId: 1, groups: [{ symbol: 'NH2' }] }], carbonCarbonBonds: [] };
    expect(nameCarbonSkeleton(ether).iupacName).toBe('methoxymethane');
    expect(nameCarbonSkeleton(amine).iupacName).toBe('methanamine');
  });

  it('does not name an ester whose O group is branched, such as propan-2-yl acetate', () => {
    const skeleton = skeletonOfDescription(2, [ester(1, 2)]);
    // A methyl on the O's carbon makes propan-2-yl.
    skeleton.carbonAtoms.push({ atomId: 5 });
    skeleton.carbonCarbonBonds.push({ firstAtomId: 3, secondAtomId: 5 });
    expect(nameCarbonSkeleton(skeleton).isNameable).toBe(false);
  });
});

describe('reading ester and amide names', () => {
  it.each([
    ['methyl ethanoate', 'methyl acetate', 'C3H6O2'],
    ['ethyl propanoate', 'ethyl propanoate', 'C5H10O2'],
    ['methyl methanoate', 'methyl formate', 'C2H4O2'],
    ['methyl acetate', 'methyl acetate', 'C3H6O2'],
    ['ethyl formate', 'ethyl formate', 'C3H6O2'],
    ['ethyl 2-hydroxypropanoate', 'ethyl 2-hydroxypropanoate', 'C5H10O3'],
    ['prop-2-en-1-yl ethanoate', 'prop-2-en-1-yl acetate', 'C5H8O2'],
    ['cyclohexyl acetate', 'cyclohexyl acetate', 'C8H14O2'],
    ['methyl cyclohexanecarboxylate', 'methyl cyclohexanecarboxylate', 'C8H14O2'],
    ['methyl cyclohexylacetate', 'methyl cyclohexylacetate', 'C9H16O2'],
    ['ethanamide', 'acetamide', 'C2H5NO'],
    ['acetamide', 'acetamide', 'C2H5NO'],
    ['formamide', 'formamide', 'CH3NO'],
    ['methanamide', 'formamide', 'CH3NO'],
    ['oxamide', 'oxamide', 'C2H4N2O2'],
    ['ethanediamide', 'oxamide', 'C2H4N2O2'],
    ['butanediamide', 'butanediamide', 'C4H8N2O2'],
    ['cyclohexanecarboxamide', 'cyclohexanecarboxamide', 'C7H13NO'],
    ['N-methylethanamide', 'N-methylacetamide', 'C3H7NO'],
    ['n-methylethanamide', 'N-methylacetamide', 'C3H7NO'],
    ['N-methylacetamide', 'N-methylacetamide', 'C3H7NO'],
    ['N-methylmethanamide', 'N-methylformamide', 'C2H5NO'],
    ['2-chloroacetamide', '2-chloroacetamide', 'C2H4ClNO'],
    ['2-chloro-N-methylacetamide', '2-chloro-N-methylacetamide', 'C3H6ClNO'],
    ['2-hydroxy-N-methylpropanamide', '2-hydroxy-N-methylpropanamide', 'C4H9NO2'],
    ['N,2-dimethylpropanamide', 'N,2-dimethylpropanamide', 'C5H11NO'],
    ['N-(prop-2-en-1-yl)ethanamide', 'N-(prop-2-en-1-yl)acetamide', 'C5H9NO'],
    ['N-methylcyclohexanecarboxamide', 'N-methylcyclohexanecarboxamide', 'C8H15NO'],
  ])('reads "%s" as %s, %s', (typedName, expectedName, expectedFormula) => {
    const result = interpretOmniboxText(typedName);
    expect(result.kind, JSON.stringify(result.message)).toBe('name');
    expect(result.correctIupacName).toBe(expectedName);
    expect(formatMolecularFormula(countAtomsInMolecule(result.carbonSkeleton))).toBe(expectedFormula);
  });

  it('marks the IUPAC name, even typed with a small n, as correct', () => {
    expect(interpretOmniboxText('n-methylacetamide')).toMatchObject({ typedNameIsCorrectIupacName: true });
    expect(interpretOmniboxText('n-methylacetamide').note).toBeUndefined();
    expect(interpretOmniboxText('methyl acetate').note).toBeUndefined();
  });

  it('marks the systematic name as correct, with a note that it is not the PIN', () => {
    expect(interpretOmniboxText('n-methylethanamide')).toMatchObject({ typedNameIsCorrectIupacName: true, note: { key: 'otherNames.systematicNameAccepted' } });
    expect(interpretOmniboxText('methyl ethanoate')).toMatchObject({ typedNameIsCorrectIupacName: true, note: { key: 'otherNames.systematicNameAccepted' } });
  });

  it.each(['ethanoate', 'acetate', 'N,N-dimethylethanamide'])('explains why "%s" is not read', (typedName) => {
    expect(interpretOmniboxText(typedName).kind).toBe('notRecognised');
  });

  it.each([
    ['chloroacetamide', 'readingNames.amideNeedsLocants'],
    ['cyclopentylacetamide', 'readingNames.amideNeedsLocants'],
    ['methylacetamide', 'readingNames.amideNeedsLocants'],
  ])('asks for the locants of "%s", as an amide always has them (P-16.5.1.3.2)', (typedName, messageKey) => {
    expect(interpretOmniboxText(typedName)).toMatchObject({ kind: 'notRecognised', message: { key: messageKey } });
  });

  it('does not read oxamide on the end of carboxamide', () => {
    expect(interpretOmniboxText('cyclohexanecarboxamide').correctIupacName).toBe('cyclohexanecarboxamide');
  });
});

describe('checking answers for esters and amides', () => {
  it.each([
    ['methyl acetate', 'methyl acetate', ANSWER_VERDICTS.correct],
    ['Methyl Acetate', 'methyl acetate', ANSWER_VERDICTS.correct],
    ['methyl ethanoate', 'methyl acetate', ANSWER_VERDICTS.correct],
    ['n-methylacetamide', 'N-methylacetamide', ANSWER_VERDICTS.correct],
    ['n-methylethanamide', 'N-methylacetamide', ANSWER_VERDICTS.correct],
    ['2-chloroethanamide', '2-chloroacetamide', ANSWER_VERDICTS.correct],
    ['ethyl formate', 'methyl acetate', ANSWER_VERDICTS.incorrect],
    ['ethyl methanoate', 'methyl acetate', ANSWER_VERDICTS.incorrect],
    ['2-methyl-N-methylpropanamide', 'N,2-dimethylpropanamide', ANSWER_VERDICTS.incorrect],
  ])('"%s" for %s is %s', (answer, correctName, verdict) => {
    expect(checkStudentAnswer(answer, correctName).verdict).toBe(verdict);
  });
});

describe('reading structural formulae of esters and amides', () => {
  it.each([
    ['CH3COOCH3', 'methyl acetate'],
    ['CH3CO2CH3', 'methyl acetate'],
    ['CH3C(=O)OCH3', 'methyl acetate'],
    ['HCOOCH3', 'methyl formate'],
    ['CH3C(O)OCH2CH3', 'ethyl acetate'],
    ['CH3COOC2H5', 'ethyl acetate'],
    ['CH3COO(CH2)2CH3', 'propyl acetate'],
    ['CH3CONH2', 'acetamide'],
    ['H2NCOCH2CH3', 'propanamide'],
    ['CH3CONHCH3', 'N-methylacetamide'],
    ['CH3CH2CONHCH2CH3', 'N-ethylpropanamide'],
  ])('reads %s as %s', (formulaText, expectedName) => {
    const result = readStructuralFormula(formulaText);
    expect(result.errorMessage).toBeUndefined();
    expect(nameCarbonSkeleton(result.carbonSkeleton).iupacName).toBe(expectedName);
  });
});
