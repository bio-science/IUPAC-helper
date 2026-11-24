/**
 * Aldehydes: naming, reading typed names and formulae, listing isomers, checking answers,
 * and drawing the O of C=O.
 *
 * The rules come from the IUPAC 2013 Recommendations (the Blue Book):
 *   P-66.6.1.1.1  a CHO group at the end of a chain is shown by the suffix "al" (propanal),
 *                 two of them by "dial" (butanedial)
 *   P-14.3.4.1    the locants of -al are never written, as its carbon is always carbon 1
 *                 (and the last carbon for -dial); other locants still are (2-methylbutanedial)
 *   P-14.3.4.6    but none are when every group can only be on one carbon: methylpropanedial,
 *                 like diethyl ethyl(methyl)propanedioate in P-16.5.1.3.2
 *   P-14.3.4.4    the locant of a double bond is still written (prop-2-enal)
 *   P-41          an aldehyde is senior to an alcohol, so OH becomes the prefix hydroxy
 *   P-44.1.1      the main chain has the most CHO groups on it
 *   P-66.6.1.2.1  formaldehyde and acetaldehyde are retained names for methanal and ethanal,
 *                 and the preferred IUPAC names; acetaldehyde can be substituted
 *                 (chloroacetaldehyde). The systematic names are accepted with a note.
 *   P-34.1.1.2    glyoxal is kept only outside preferred names: the PIN is ethanedial
 */
import { describe, expect, it } from 'vitest';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { connectCarbonSkeletonFromDescription } from '../../../src/chemistry/buildCarbonSkeletonFromDescription.js';
import { readStructuralFormula } from '../../../src/chemistry/readStructuralFormula.js';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import {
  addCarbonAtom,
  addGroupToCarbon,
  CARBONYL_OXYGEN,
  countAtomsInMolecule,
  createEmptyCarbonSkeleton,
} from '../../../src/chemistry/carbonSkeleton.js';
import { ANSWER_HINTS, ANSWER_VERDICTS, checkStudentAnswer } from '../../../src/chemistry/checkStudentAnswer.js';
import { placeAtomsAroundCarbons } from '../../../src/geometry/placeAtomsAroundCarbons.js';
import { planGroupSwap } from '../../../src/geometry/planGroupSwap.js';

const aldehyde = (locant) => ({ locant, isAldehyde: true, substituentName: 'oxo', substituentCarbonCount: 0 });
const hydroxy = (locant) => ({ locant, isHydroxy: true, substituentName: 'hydroxy', substituentCarbonCount: 0 });
const chloro = (locant) => ({ locant, halogen: 'Cl', substituentName: 'chloro' });
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

describe('naming aldehydes', () => {
  it.each([
    [1, [aldehyde(1)], [], 'formaldehyde'],
    [2, [aldehyde(1)], [], 'acetaldehyde'],
    [3, [aldehyde(1)], [], 'propanal'],
    [2, [aldehyde(1), aldehyde(2)], [], 'ethanedial'],
    [4, [aldehyde(1), aldehyde(4)], [], 'butanedial'],
    [3, [aldehyde(1), methyl(2)], [], '2-methylpropanal'],
    [3, [aldehyde(1), aldehyde(3), methyl(2)], [], 'methylpropanedial'],
    [4, [aldehyde(1), hydroxy(3)], [], '3-hydroxybutanal'],
    [2, [aldehyde(1), chloro(2)], [], 'chloroacetaldehyde'],
    [3, [aldehyde(1), chloro(2)], [], '2-chloropropanal'],
    [3, [aldehyde(1)], [2], 'prop-2-enal'],
    [4, [aldehyde(1)], [2], 'but-2-enal'],
  ])('names a %i-carbon chain with %j as %s', (carbonCount, substituents, doubleBondLocants, expectedName) => {
    expect(nameOfDescription(carbonCount, substituents, doubleBondLocants)).toBe(expectedName);
  });

  it('numbers from the CHO end, even when that gives other groups higher locants', () => {
    expect(nameOfDescription(4, [aldehyde(4), chloro(2)])).toBe('3-chlorobutanal');
  });

  it('chooses the chain with the CHO group on it before the longest chain (P-44.1.1)', () => {
    // The pentane chain is longer, but the main chain must run through the CHO carbon.
    expect(nameOfStructuralFormula('CH3CH2CH(CHO)CH2CH3')).toBe('2-ethylbutanal');
  });

  it('counts the hydrogens and oxygens of an aldehyde', () => {
    expect(countAtomsInMolecule(skeletonOfDescription(3, [aldehyde(1)]))).toMatchObject({ carbonCount: 3, hydrogenCount: 6, oxygenCount: 1 });
  });

  it('does not yet name C=O compounds other than aldehydes, ketones and acids', () => {
    const reasonNotNameable = (formulaText) => nameCarbonSkeleton(readStructuralFormula(formulaText).carbonSkeleton).reasonNotNameable.key;
    expect(reasonNotNameable('CH3COCl')).toBe('naming.carbonylCompoundNotCovered');
  });
});

describe('reading typed aldehyde names', () => {
  it.each(['formaldehyde', 'acetaldehyde', 'propanal', 'butanedial', '2-methylpropanal', 'methylpropanedial', '3-hydroxybutanal', 'chloroacetaldehyde', 'prop-2-enal', 'ethanedial'])(
    'reads %s as the IUPAC name',
    (name) => {
      const result = interpretOmniboxText(name);
      expect(result).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
      expect(result.note).toBeUndefined();
    },
  );

  it.each([
    ['methanal', 'formaldehyde'],
    ['ethanal', 'acetaldehyde'],
    ['chloroethanal', 'chloroacetaldehyde'],
  ])('accepts the systematic name %s for the PIN %s, with a note (P-66.6.1.2.1)', (typedName, iupacName) => {
    const result = interpretOmniboxText(typedName);
    expect(result).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true, note: { key: 'otherNames.systematicNameAccepted' } });
    expect(nameCarbonSkeleton(result.carbonSkeleton).iupacName).toBe(iupacName);
  });

  it('accepts glyoxal, kept only outside preferred names, for ethanedial, with a note (P-34.1.1.2)', () => {
    const result = interpretOmniboxText('glyoxal');
    expect(result).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true, note: { key: 'otherNames.generalNameAccepted' } });
    expect(result.correctIupacName).toBe('ethanedial');
  });

  it.each([
    ['propan-1-al', 'propanal'],
    ['butane-1,4-dial', 'butanedial'],
    ['propenal', 'prop-2-enal'],
    ['2-methylpropanedial', 'methylpropanedial'],
  ])('draws %s, which is not the IUPAC name, as %s', (typedName, iupacName) => {
    const result = interpretOmniboxText(typedName);
    expect(result.kind).toBe('name');
    expect(result.typedNameIsCorrectIupacName).toBe(false);
    expect(nameCarbonSkeleton(result.carbonSkeleton).iupacName).toBe(iupacName);
  });

  it('explains a CHO group that is not at a chain end', () => {
    expect(interpretOmniboxText('butan-2-al').message.key).toBe('readingNames.aldehydeAtChainEnd');
  });

  it('explains too many CHO groups', () => {
    expect(interpretOmniboxText('methanedial').message.key).toBe('readingNames.tooManyAldehydeGroups');
  });

  it('asks for the word acid after the name of a carboxylic acid', () => {
    expect(interpretOmniboxText('ethanoic').message.key).toBe('readingNames.acidNeedsTheWordAcid');
  });
});

describe('reading aldehyde structural formulae', () => {
  it.each([
    ['CH3CHO', 'acetaldehyde'],
    ['CH3CH=O', 'acetaldehyde'],
    ['CH3CH(=O)', 'acetaldehyde'],
    ['CH3CH2CHO', 'propanal'],
    ['OHCCH2CHO', 'propanedial'],
    ['CH3CH(CH3)CHO', '2-methylpropanal'],
    ['CH2=CHCHO', 'prop-2-enal'],
    ['CH3CH(OH)CH2CHO', '3-hydroxybutanal'],
  ])('reads %s as %s', (formulaText, expectedName) => {
    expect(nameOfStructuralFormula(formulaText)).toBe(expectedName);
  });

  it('still reads OHC at the start as an OH group when it cannot be CHO', () => {
    expect(nameOfStructuralFormula('OHC(CH3)2CH3')).toBe('2-methylpropan-2-ol');
  });
});

describe('molecular formulae of aldehydes', () => {
  const namesOf = (formulaText) => interpretOmniboxText(formulaText).nameableIsomers.map((isomer) => isomer.iupacName).sort();

  it.each([
    ['CH2O', ['formaldehyde']],
    ['HCHO', ['formaldehyde']],
    ['C2H4O', ['acetaldehyde']],
    ['C3H6O', ['cyclopropanol', 'methoxyethene', 'prop-2-en-1-ol', 'propan-2-one', 'propanal']],
    ['C2H2O2', ['ethanedial']],
  ])('lists the alcohol, aldehyde, ketone and ether isomers of %s', (formulaText, expectedNames) => {
    expect(namesOf(formulaText)).toEqual(expectedNames);
  });

  it('lists the aldehydes, ketones, alcohols and ethers of C4H8O, leaving out the enols', () => {
    expect(namesOf('C4H8O')).toEqual([
      '(1E)-1-methoxyprop-1-ene',
      '(1Z)-1-methoxyprop-1-ene',
      '(2E)-but-2-en-1-ol',
      '(2Z)-but-2-en-1-ol',
      '1-methylcyclopropan-1-ol',
      '2-methoxyprop-1-ene',
      '2-methylcyclopropan-1-ol',
      '2-methylprop-2-en-1-ol',
      '2-methylpropanal',
      '3-methoxyprop-1-ene',
      'but-3-en-1-ol',
      'but-3-en-2-ol',
      'butan-2-one',
      'butanal',
      'cyclobutanol',
      'cyclopropylmethanol',
      'ethoxyethene',
      'methoxycyclopropane',
    ]);
  });

  it('can type back every isomer it lists', () => {
    for (const formulaText of ['C3H6O', 'C4H8O', 'C4H6O2']) {
      for (const { iupacName } of interpretOmniboxText(formulaText).nameableIsomers) {
        expect(interpretOmniboxText(iupacName), iupacName).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
      }
    }
  });
});

describe('checking aldehyde answers', () => {
  it.each([
    ['propanal', 'propanal'],
    ['acetaldehyde', 'acetaldehyde'],
    ['Formaldehyde', 'formaldehyde'],
    ['chloroacetaldehyde', 'chloroacetaldehyde'],
  ])('accepts %s for %s', (answer, correctName) => {
    expect(checkStudentAnswer(answer, correctName)).toEqual({ verdict: ANSWER_VERDICTS.correct, hint: null });
  });

  it.each([
    ['ethanal', 'acetaldehyde', 'otherNames.systematicNameAccepted'],
    ['methanal', 'formaldehyde', 'otherNames.systematicNameAccepted'],
    ['chloroethanal', 'chloroacetaldehyde', 'otherNames.systematicNameAccepted'],
    ['glyoxal', 'ethanedial', 'otherNames.generalNameAccepted'],
  ])('accepts %s for %s, with a note that it is not the PIN', (answer, correctName, noteKey) => {
    const result = checkStudentAnswer(answer, correctName);
    expect(result.verdict).toBe(ANSWER_VERDICTS.correct);
    expect(result.note).toEqual({ key: noteKey, values: { typedName: answer, name: correctName } });
  });

  it('says the locant of -al is left out', () => {
    expect(checkStudentAnswer('propan-1-al', 'propanal').hint).toBe(ANSWER_HINTS.aldehydeLocant);
  });

  it('says when the other locants should be left out too', () => {
    expect(checkStudentAnswer('2-chloroacetaldehyde', 'chloroacetaldehyde').hint).toBe(ANSWER_HINTS.leaveOutLocants);
    expect(checkStudentAnswer('2-chloroethanal', 'chloroacetaldehyde').hint).toBe(ANSWER_HINTS.leaveOutLocants);
  });

  it('asks for the locant of the double bond in prop-2-enal', () => {
    expect(checkStudentAnswer('propenal', 'prop-2-enal').hint).toBe(ANSWER_HINTS.doubleBondNeedsLocant);
  });
});

describe('drawing the O of C=O', () => {
  function drawnMethanal() {
    const { updatedSkeleton: skeleton, newAtomId } = addCarbonAtom(createEmptyCarbonSkeleton(), { positionX: 100, positionY: 100 });
    return { skeleton: addGroupToCarbon(skeleton, newAtomId, CARBONYL_OXYGEN, 0), carbonAtomId: newAtomId };
  }

  it('draws methanal trigonal, with its O and two H at 120 degrees', () => {
    const { skeleton } = drawnMethanal();
    const outerAtoms = placeAtomsAroundCarbons(skeleton);
    expect(outerAtoms.map((outerAtom) => outerAtom.symbol).sort()).toEqual(['H', 'H', CARBONYL_OXYGEN]);
    const angles = outerAtoms.map((outerAtom) => (Math.atan2(outerAtom.positionY - 100, outerAtom.positionX - 100) * 180) / Math.PI).sort((a, b) => a - b);
    expect(angles[1] - angles[0]).toBeCloseTo(120);
    expect(angles[2] - angles[1]).toBeCloseTo(120);
  });

  it('blocks =O on a carbon with only one hydrogen left, as in the CHO of ethanal', () => {
    const { skeleton: methanal, carbonAtomId } = drawnMethanal();
    const { updatedSkeleton: skeleton } = addCarbonAtom(methanal, { positionX: 210, positionY: 100, bondToAtomId: carbonAtomId });
    const hydrogen = placeAtomsAroundCarbons(skeleton).find((outerAtom) => outerAtom.symbol === 'H' && outerAtom.carbonAtomId === carbonAtomId);
    const swapPlan = planGroupSwap(skeleton, { x: hydrogen.positionX, y: hydrogen.positionY }, CARBONYL_OXYGEN);
    expect(swapPlan.action).toBe('blocked');
  });

  it('lets a hydrogen on methanal be swapped for a halogen', () => {
    const { skeleton } = drawnMethanal();
    const hydrogen = placeAtomsAroundCarbons(skeleton).find((outerAtom) => outerAtom.symbol === 'H');
    expect(planGroupSwap(skeleton, { x: hydrogen.positionX, y: hydrogen.positionY }, 'Cl').action).toBe('add');
  });
});
