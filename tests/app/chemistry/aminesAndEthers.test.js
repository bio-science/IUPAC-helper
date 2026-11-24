/**
 * Amines and ethers: naming, reading typed names and formulae.
 *
 * The rules come from the IUPAC 2013 Recommendations (the Blue Book):
 *   P-62.2.1.2  primary amines take the suffix "amine": methanamine, propan-2-amine,
 *               2-methylpropan-1-amine, ethane-1,2-diamine, cyclohexanamine
 *   P-62.2.2    secondary amines are named from a primary amine, with the other group as a
 *               prefix with the locant N: N-methylethanamine, N-butylcyclopropanamine
 *   P-62.2.3    the prefix amino, and methylamino and the like, when something more senior is
 *               the suffix: 2-aminopropanoic acid, 2-(methylamino)ethan-1-ol
 *   P-63.2.2    ethers: the group R-O- is a prefix, methoxy, ethoxy, propoxy, butoxy, or
 *               (pentyloxy) and the like: methoxyethane, 1,2-dimethoxyethane
 *   P-41        the suffix -amine is the most junior: alcohols, ketones, aldehydes, amides,
 *               esters and acids are all senior to it; an ether's O has no suffix at all
 */
import { describe, expect, it } from 'vitest';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { connectCarbonSkeletonFromDescription } from '../../../src/chemistry/buildCarbonSkeletonFromDescription.js';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { readStructuralFormula } from '../../../src/chemistry/readStructuralFormula.js';

const amine = (locant, linkedGroup) => ({ locant, isAmine: true, ...(linkedGroup ? { linkedGroup } : {}) });
const ether = (locant, carbonCount, extra = {}) => ({ locant, isEther: true, linkedGroup: { carbonCount, ...extra } });
const ester = (locant, carbonCount) => ({ locant, isEster: true, linkedGroup: { carbonCount } });
const amide = (locant) => ({ locant, isAmide: true });
const acid = (locant) => ({ locant, isCarboxylicAcid: true });
const hydroxy = (locant) => ({ locant, isHydroxy: true });
const ketone = (locant) => ({ locant, isKetone: true });
const chloro = (locant) => ({ locant, halogen: 'Cl' });
const methyl = (locant) => ({ locant, substituentCarbonCount: 1 });

function skeletonOfDescription(mainChainCarbonCount, substituents, mainChainDoubleBondLocants = [], isRing = false) {
  const { carbonSkeleton, errorMessage } = connectCarbonSkeletonFromDescription({ mainChainCarbonCount, mainChainDoubleBondLocants, substituents, isRing });
  expect(errorMessage).toBeUndefined();
  return carbonSkeleton;
}

const nameOf = (...description) => nameCarbonSkeleton(skeletonOfDescription(...description));

describe('naming primary amines', () => {
  it.each([
    [1, [amine(1)], [], false, 'methanamine'],
    [2, [amine(1)], [], false, 'ethanamine'],
    [3, [amine(1)], [], false, 'propan-1-amine'],
    [3, [amine(2)], [], false, 'propan-2-amine'],
    [3, [amine(1), methyl(2)], [], false, '2-methylpropan-1-amine'],
    [2, [amine(1), amine(2)], [], false, 'ethane-1,2-diamine'],
    [6, [amine(1)], [], true, 'cyclohexanamine'],
    [6, [amine(1), methyl(2)], [], true, '2-methylcyclohexan-1-amine'],
    [2, [amine(1), chloro(2)], [], false, '2-chloroethan-1-amine'],
    [3, [amine(1)], [2], false, 'prop-2-en-1-amine'],
  ])('a %i-carbon chain with %j is %s', (carbonCount, substituents, doubleBonds, isRing, expectedName) => {
    expect(nameOf(carbonCount, substituents, doubleBonds, isRing).iupacName).toBe(expectedName);
  });

  it.each([
    [2, [amine(2), hydroxy(1)], '2-aminoethan-1-ol'],
    [3, [acid(1), amine(2)], '2-aminopropanoic acid'],
    [3, [amide(1), amine(2)], '2-aminopropanamide'],
    [4, [ketone(2), amine(4)], '4-aminobutan-2-one'],
    [2, [ester(1, 1), amine(2)], 'methyl aminoacetate'],
  ])('with a more senior group, NH2 is the prefix amino: a %i-carbon chain with %j is %s', (carbonCount, substituents, expectedName) => {
    expect(nameOf(carbonCount, substituents).iupacName).toBe(expectedName);
  });
});

describe('naming secondary amines', () => {
  it.each([
    [1, [amine(1, { carbonCount: 1 })], [], false, 'N-methylmethanamine'],
    [2, [amine(1, { carbonCount: 1 })], [], false, 'N-methylethanamine'],
    [1, [amine(1, { carbonCount: 2 })], [], false, 'N-methylethanamine'],
    [2, [amine(1, { carbonCount: 2 })], [], false, 'N-ethylethanamine'],
    [3, [amine(2, { carbonCount: 1 })], [], false, 'N-methylpropan-2-amine'],
    [3, [amine(1, { carbonCount: 1 })], [], false, 'N-methylpropan-1-amine'],
    [3, [amine(1, { carbonCount: 1 }), methyl(2)], [], false, 'N,2-dimethylpropan-1-amine'],
    [3, [amine(1, { carbonCount: 4 })], [], true, 'N-butylcyclopropanamine'],
    [4, [amine(1, { carbonCount: 2, doubleBondLocants: [1] })], [], false, 'N-ethenylbutan-1-amine'],
    [3, [amine(1, { carbonCount: 1 }), chloro(3)], [], false, '3-chloro-N-methylpropan-1-amine'],
  ])('a %i-carbon chain with %j is %s', (carbonCount, substituents, doubleBonds, isRing, expectedName) => {
    expect(nameOf(carbonCount, substituents, doubleBonds, isRing).iupacName).toBe(expectedName);
  });

  it('names -NH-R as a prefix such as methylamino when something more senior is the suffix', () => {
    expect(nameOf(2, [hydroxy(1), amine(2, { carbonCount: 1 })]).iupacName).toBe('2-(methylamino)ethan-1-ol');
    expect(nameOf(3, [acid(1), amine(2, { carbonCount: 1 })]).iupacName).toBe('2-(methylamino)propanoic acid');
    expect(nameOf(3, [hydroxy(2), amine(1, { carbonCount: 1 }), amine(3, { carbonCount: 1 })]).iupacName).toBe('1,3-bis(methylamino)propan-2-ol');
  });

  it('does not yet name a polyamine with a group on one N, which would need the locants N1, N2 ...', () => {
    const named = nameOf(2, [amine(1), amine(2, { carbonCount: 1 })]);
    expect(named.isNameable).toBe(false);
    expect(named.reasonNotNameable.key).toBe('naming.nitrogenGroupOnPolyamineNotCovered');
  });
});

describe('naming ethers', () => {
  it.each([
    [1, [ether(1, 1)], [], 'methoxymethane'],
    [2, [ether(1, 1)], [], 'methoxyethane'],
    [1, [ether(1, 2)], [], 'methoxyethane'],
    [3, [ether(1, 1)], [], '1-methoxypropane'],
    [3, [ether(2, 2)], [], '2-ethoxypropane'],
    [2, [ether(1, 2)], [], 'ethoxyethane'],
    [2, [ether(1, 2), chloro(2)], [], '1-chloro-2-ethoxyethane'],
    [2, [ether(1, 1), ether(2, 1)], [], '1,2-dimethoxyethane'],
    [2, [ether(1, 1)], [1], 'methoxyethene'],
    [6, [ether(1, 5)], [], '1-(pentyloxy)hexane'],
    [5, [ether(1, 3, { doubleBondLocants: [2] })], [], '1-[(prop-2-en-1-yl)oxy]pentane'],
    [3, [ether(1, 3, { doubleBondLocants: [2] })], [], '3-propoxyprop-1-ene'],
    [3, [ether(1, 1), ether(2, 1), ether(3, 1)], [], '1,2,3-trimethoxypropane'],
  ])('a %i-carbon chain with %j is %s', (carbonCount, substituents, doubleBonds, expectedName) => {
    expect(nameOf(carbonCount, substituents, doubleBonds).iupacName).toBe(expectedName);
  });

  it('puts the ring first as the parent: methoxycyclohexane', () => {
    expect(nameOf(6, [ether(1, 1)], [], true).iupacName).toBe('methoxycyclohexane');
    expect(nameOf(1, [ether(1, 6, { isRing: true })]).iupacName).toBe('methoxycyclohexane');
  });

  it('names ethers with a more senior group as the suffix', () => {
    expect(nameOf(2, [hydroxy(1), ether(2, 1)]).iupacName).toBe('2-methoxyethan-1-ol');
    expect(nameOf(2, [amine(1), ether(2, 1)]).iupacName).toBe('2-methoxyethan-1-amine');
    expect(nameOf(2, [ester(1, 1), ether(2, 1)]).iupacName).toBe('methyl methoxyacetate');
    expect(nameOf(3, [acid(1), ether(3, 2)]).iupacName).toBe('3-ethoxypropanoic acid');
  });

  it('explains what is not covered yet', () => {
    // ClCH2-O-CH2CH3 is (chloromethoxy)ethane, as ethane is the longer chain, but a prefix
    // with something on it is not covered yet.
    const groupWithSomethingOnIt = nameOf(1, [ether(1, 2), chloro(1)]);
    expect(groupWithSomethingOnIt.isNameable).toBe(false);
    expect(groupWithSomethingOnIt.reasonNotNameable.key).toBe('naming.etherOrAmineGroupNotCovered');
  });
});

describe('reading typed amine and ether names', () => {
  it.each([
    'methanamine',
    'ethanamine',
    'propan-2-amine',
    'ethane-1,2-diamine',
    'cyclohexanamine',
    'N-methylethanamine',
    'N,2-dimethylpropan-1-amine',
    '3-chloro-N-methylpropan-1-amine',
    'N-methylcyclohexanamine',
    '2-aminoethan-1-ol',
    '2-aminopropanoic acid',
    '2-(methylamino)ethan-1-ol',
    '1,3-bis(methylamino)propan-2-ol',
    '2-amino-N-methylpropanamide',
    'methoxyethane',
    'ethoxyethane',
    '1-methoxypropane',
    '2-ethoxypropane',
    '1,2-dimethoxyethane',
    '1-(pentyloxy)hexane',
    '1-[(prop-2-en-1-yl)oxy]pentane',
    'methoxycyclohexane',
    '2-methoxyethan-1-ol',
    '2-methoxyethan-1-amine',
    'methyl methoxyacetate',
  ])('reads %s, and finds it is the IUPAC name', (name) => {
    const interpretation = interpretOmniboxText(name);
    expect(interpretation.kind).toBe('name');
    expect(interpretation.correctIupacName).toBe(name);
    expect(interpretation.typedNameIsCorrectIupacName).toBe(true);
  });

  it.each([
    ['methylamine', 'methanamine'],
    ['ethylamine', 'ethanamine'],
    ['propylamine', 'propan-1-amine'],
    ['cyclohexylamine', 'cyclohexanamine'],
    ['dimethylamine', 'N-methylmethanamine'],
    ['ethylmethylamine', 'N-methylethanamine'],
    ['dimethyl ether', 'methoxymethane'],
    ['diethyl ether', 'ethoxyethane'],
    ['ethyl methyl ether', 'methoxyethane'],
    ['2-methylaminoethan-1-ol', '2-(methylamino)ethan-1-ol'],
    ['1-pentyloxyhexane', '1-(pentyloxy)hexane'],
    ['(cyclohexyloxy)methane', 'methoxycyclohexane'],
  ])('reads %s, an older or not quite right name, as %s', (typedName, iupacName) => {
    const interpretation = interpretOmniboxText(typedName);
    expect(interpretation.correctIupacName).toBe(iupacName);
    expect(interpretation.typedNameIsCorrectIupacName).toBe(false);
  });

  it.each([
    ['propanamine', 'readingNames.amineNeedsLocant'],
    ['methoxypropane', 'readingNames.etherNeedsLocant'],
    ['N,N-dimethylethanamine', 'readingNames.tertiaryAmineNotCovered'],
    ['2-(dimethylamino)ethan-1-ol', 'readingNames.tertiaryAmineNotCovered'],
    ['trimethylamine', 'readingNames.tertiaryAmineNotCovered'],
    ['N-methylethane-1,2-diamine', 'naming.nitrogenGroupOnPolyamineNotCovered'],
  ])('explains what is wrong with, or not covered in, %s', (typedName, messageKey) => {
    expect(interpretOmniboxText(typedName).message.key).toBe(messageKey);
  });
});

describe('reading structural formulae of amines and ethers', () => {
  it.each([
    ['CH3CH2NH2', 'ethanamine'],
    ['CH3CH(NH2)CH3', 'propan-2-amine'],
    ['H2NCH2CH2NH2', 'ethane-1,2-diamine'],
    ['CH3NHCH3', 'N-methylmethanamine'],
    ['CH3CH2NHCH3', 'N-methylethanamine'],
    ['CH3CH2NHCH2CH3', 'N-ethylethanamine'],
    ['HOCH2CH2NH2', '2-aminoethan-1-ol'],
    ['CH3CH(NH2)COOH', '2-aminopropanoic acid'],
    ['CH3OCH3', 'methoxymethane'],
    ['CH3OCH2CH3', 'methoxyethane'],
    ['CH3CH2OCH2CH3', 'ethoxyethane'],
    ['C2H5OC2H5', 'ethoxyethane'],
    ['CH3-O-CH3', 'methoxymethane'],
    ['CH3O(CH2)2CH3', '1-methoxypropane'],
    ['(CH3)2CHOCH3', '2-methoxypropane'],
    ['CH3OCH2CH2OCH3', '1,2-dimethoxyethane'],
    ['CH3OCH2CH2OH', '2-methoxyethan-1-ol'],
    ['CH2=CHCH2OCH3', '3-methoxyprop-1-ene'],
    ['CH3OCH2COOH', 'methoxyacetic acid'],
  ])('reads %s as %s', (formulaText, expectedName) => {
    const result = readStructuralFormula(formulaText);
    expect(result.errorMessage).toBeUndefined();
    expect(nameCarbonSkeleton(result.carbonSkeleton).iupacName).toBe(expectedName);
  });

  it('still reads an O after a carbon with room for a C=O as the C=O', () => {
    expect(nameCarbonSkeleton(readStructuralFormula('CH3COCH3').carbonSkeleton).iupacName).toBe('propan-2-one');
    expect(nameCarbonSkeleton(readStructuralFormula('CH3CH2CHO').carbonSkeleton).iupacName).toBe('propanal');
    expect(nameCarbonSkeleton(readStructuralFormula('CH3COOCH3').carbonSkeleton).iupacName).toBe('methyl acetate');
  });
});

describe('molecular formulae with nitrogen, and ethers', () => {
  const namesOf = (formulaText) => interpretOmniboxText(formulaText).nameableIsomers.map((isomer) => isomer.iupacName).sort();

  // Each N adds one hydrogen to the alkane's count: the amines CnH2n+1NH2 are CnH2n+3N, and so
  // are the secondary amines, R-NH-R'. Tertiary amines (an N joined to three carbons) aren't covered.
  it.each([
    ['CH5N', ['methanamine']],
    ['CH3NH2', ['methanamine']],
    ['C2H7N', ['N-methylmethanamine', 'ethanamine']],
    ['C3H9N', ['N-methylethanamine', 'propan-1-amine', 'propan-2-amine']],
    ['C2H8N2', ['ethane-1,2-diamine']],
    ['C2H7NO', ['2-aminoethan-1-ol']],
    ['C2H5NO', ['N-methylformamide', 'acetamide', 'aminoacetaldehyde']],
    ['C2H6O', ['ethanol', 'methoxymethane']],
  ])('lists the isomers of %s', (formulaText, expectedNames) => {
    expect(namesOf(formulaText)).toEqual(expectedNames);
  });

  it('lists the primary and secondary amines of C4H11N', () => {
    expect(namesOf('C4H11N')).toEqual([
      '2-methylpropan-1-amine',
      '2-methylpropan-2-amine',
      'N-ethylethanamine',
      'N-methylpropan-1-amine',
      'N-methylpropan-2-amine',
      'butan-1-amine',
      'butan-2-amine',
    ]);
  });

  it('leaves out unstable isomers: an OH or NH2 on the same carbon as an ether O, an N, or a second OH or NH2, or an NH2 on a C=C carbon', () => {
    // CH3OCH2OH, CH3CH(OH)NH2, CH2=CHNH2 and NH2CH2OCH3 all fall apart or change into another isomer.
    expect(namesOf('C2H6O2')).toEqual(['ethane-1,2-diol']);
    expect(interpretOmniboxText('C2H5N').message.key).toBe('omnibox.noOxygenOrNitrogenCompoundIsomers');
    expect(namesOf('C2H7NO')).not.toContain('methoxymethanamine');
  });

  it('explains a formula with N that has too many hydrogens', () => {
    expect(interpretOmniboxText('C2H9N').message.key).toBe('omnibox.notAnAmineFormula');
    expect(interpretOmniboxText('C2H6N').message.key).toBe('omnibox.notAnAmineFormula');
  });

  it('can type back every isomer it lists', () => {
    for (const formulaText of ['C4H11N', 'C3H7NO', 'C4H10O', 'C3H6O2', 'C4H8O', 'C3H9NO']) {
      for (const { iupacName } of interpretOmniboxText(formulaText).nameableIsomers) {
        expect(interpretOmniboxText(iupacName), iupacName).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
      }
    }
  });
});
