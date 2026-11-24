/**
 * Working out what the student typed into the omnibox (the search box above the diagram).
 *
 * The text can be:
 *   - a structural formula, e.g. "CH3CH(CH3)CH3" or "CH2=CHCH3" -> exactly that molecule
 *   - a molecular formula, e.g. "C5H12", "C4H8", "C3H7Cl", "C3H8O" or "C2H7N" -> every isomer
 *     with an open chain or one ring, to choose from
 *     (for a formula with oxygen, the alcohols, aldehydes, ketones, carboxylic acids, esters
 *     and ethers: each O is in an OH group, is the O of C=O in a CHO group or a ketone, or is
 *     between two carbons, and a COOH group is one of each on the same carbon; with nitrogen,
 *     the amines and amides: each N is in an NH2 group, or is an NH between two carbons)
 *   - a name, e.g. "2-methylbut-2-ene", "2-chloropropane", "propanal", "propan-2-one" or
 *     "ethanoic acid" -> that molecule
 *   - anything else (often a half-typed name)                   -> a gentle hint
 * A formula may be typed or pasted with subscript digits, as in C₂H₆O or CH₃CH₂OH.
 *
 * Every result has a "kind" saying which of these it is:
 *   { kind: 'empty' }
 *   { kind: 'notRecognised', message }       message is to be put into words by src/languages/translate.js
 *   { kind: 'structuralFormula', carbonSkeleton }
 *   { kind: 'name', carbonSkeleton, correctIupacName, typedNameIsCorrectIupacName, note? }
 *       correctIupacName: the preferred IUPAC name (PIN)
 *       note: for a name that is correct, but leaves out E or Z, or uses cis or trans, or is
 *       accepted but isn't the PIN, such as ethanoic acid for acetic acid or acetone for
 *       propan-2-one (see compareWithPreferredName in checkStudentAnswer.js)
 *   { kind: 'molecularFormula', formulaText, nameableIsomers, countOfIsomersNotYetSupported, message }
 */

import { countHalogenAtoms, formatMolecularFormula, hydrogenCountForAlkaneWithCarbons, looksLikeMolecularFormula, parseMolecularFormula } from './molecularFormula.js';
import { readStructuralFormula } from './readStructuralFormula.js';
import { MOST_CARBONS_IN_A_TYPED_MOLECULE } from './carbonSkeleton.js';
import {
  convertParsedNameToDescription,
  hasGroupsWithoutLocants,
  messageKeyForGroupsWithoutLocants,
  parseTypedName,
  replaceOtherAcceptedName,
  takeOutStereodescriptors,
} from './parseTypedName.js';
import { bringsItsOwnCarbonOnARing, countCarbonsInSubstituent, buildCarbonSkeletonFromDescription, canUseCisOrTrans } from './buildCarbonSkeletonFromDescription.js';
import { nameCarbonSkeleton } from './nameCarbonSkeleton.js';
import { compareWithPreferredName } from './checkStudentAnswer.js';
import { listIsomersOfFormula } from './listIsomers.js';
import { AMINO_GROUP, CARBONYL_OXYGEN } from './carbonSkeleton.js';
import { SMALLEST_RING_SIZE } from './alkaneNamingVocabulary.js';
import { message } from '../languages/translate.js';
import { writeSubscriptDigitsAsOrdinaryDigits } from './subscriptDigits.js';

/**
 * The number of isomers grows quickly, and they are all worked out as the student types,
 * so a molecular formula lists them only up to a few hundred isomers:
 *   alkanes      up to 12 carbons (C12H26 has 355 isomers)
 *   alkenes      up to 9 carbons (C9H18 has 399 with an open chain or one ring, counting E and Z
 *                apart)
 *   dienes ...   up to 8 carbons
 * Halogens, oxygen and nitrogen multiply the number of isomers again, so with them in the
 * formula the limit is lower (an oxygen or a nitrogen counts like a halogen atom):
 *   1 halogen atom      up to 8 carbons (C8H17Cl has 89 isomers, and so do the alcohols C8H17OH)
 *   2                   up to 7 carbons (C7H14Cl2 has 129)
 *   3                   up to 6 carbons (C6H11Cl3 has 109)
 *   4 or more           up to 4 carbons
 *   one carbon fewer for each C=C double bond (or C=O),
 * and a list that still comes to more than MOST_ISOMERS_TO_LIST isn't shown
 * (C4H2F2Cl2Br2I2 has over a thousand).
 * Bigger molecules can still be drawn from a name or a structural formula.
 */
const MOST_CARBONS_TO_LIST_ISOMERS_FOR = 12;
const MOST_CARBONS_TO_LIST_ALKENE_ISOMERS_FOR = 9;
const MOST_CARBONS_TO_LIST_ISOMERS_WITH_MORE_DOUBLE_BONDS_FOR = 8;
/** For 1, 2, 3, and 4 or more halogen atoms, with no double bonds. */
const MOST_CARBONS_TO_LIST_HALOGEN_ISOMERS_FOR = [8, 7, 6, 4];
const MOST_ISOMERS_TO_LIST = 500;

export function interpretOmniboxText(typedText) {
  const text = writeSubscriptDigitsAsOrdinaryDigits(typedText).trim();
  if (text === '') return { kind: 'empty' };

  const structuralFormula = readStructuralFormula(text);
  if (structuralFormula?.errorMessage) return { kind: 'notRecognised', message: structuralFormula.errorMessage };
  // One carbon written as a molecular formula would be, such as CH4, CH3Cl or CH3OH, is shown as
  // one, with its list of isomers (there is only one); written with dashes, as in Cl-CH2-OH, it
  // is shown as a structural formula.
  const isOneCarbonMolecularFormula = structuralFormula?.carbonSkeleton.carbonAtoms.length === 1 && looksLikeMolecularFormula(text);
  if (structuralFormula && !isOneCarbonMolecularFormula) return { kind: 'structuralFormula', carbonSkeleton: structuralFormula.carbonSkeleton };

  if (looksLikeMolecularFormula(text)) return interpretMolecularFormula(text);
  return interpretTypedName(text);
}

/** The largest molecule, by carbons, whose isomers are listed for this many double bonds and halogen atoms and OH groups. */
function mostCarbonsToListIsomersFor(doubleBondCount, groupCount) {
  if (groupCount > 0) return MOST_CARBONS_TO_LIST_HALOGEN_ISOMERS_FOR[Math.min(groupCount, 4) - 1] - doubleBondCount;
  if (doubleBondCount === 0) return MOST_CARBONS_TO_LIST_ISOMERS_FOR;
  if (doubleBondCount === 1) return MOST_CARBONS_TO_LIST_ALKENE_ISOMERS_FOR;
  return MOST_CARBONS_TO_LIST_ISOMERS_WITH_MORE_DOUBLE_BONDS_FOR;
}

/** The sentence above the list of isomers, saying what kind of molecule they are and what is left out. */
function describeIsomerList(formulaText, doubleBondCount, nameableIsomerCount, notCoveredCount, hasOxygenOrNitrogen) {
  const values = { formula: formulaText, count: nameableIsomerCount, notCoveredCount, doubleBondCount };
  const someNotCovered = notCoveredCount > 0;
  if (hasOxygenOrNitrogen) {
    return message(someNotCovered ? 'omnibox.formulaOxygenAndNitrogenIsomersSomeNotCovered' : 'omnibox.formulaOxygenAndNitrogenIsomers', values);
  }
  if (doubleBondCount === 0) {
    return message(someNotCovered ? 'omnibox.formulaIsomersSomeNotCovered' : 'omnibox.formulaIsomers', values);
  }
  if (doubleBondCount === 1) {
    return message(someNotCovered ? 'omnibox.formulaAlkeneIsomersSomeNotCovered' : 'omnibox.formulaAlkeneIsomers', values);
  }
  return message(someNotCovered ? 'omnibox.formulaPolyeneIsomersSomeNotCovered' : 'omnibox.formulaPolyeneIsomers', values);
}

function interpretMolecularFormula(text) {
  const formula = parseMolecularFormula(text);
  if (formula === null) {
    return { kind: 'notRecognised', message: message('omnibox.formulaElementThenNumber') };
  }

  // Each C=C double bond (or ring) has 2 fewer hydrogens than the alkane: CnH2n+2, CnH2n, CnH2n-2 ...
  // A halogen atom takes the place of a hydrogen, so it counts as one here. An OH group takes
  // the place of a hydrogen and brings its own, so an oxygen doesn't change the count: the
  // alcohols CnH2n+1OH are CnH2n+2O. A C=O, like a C=C, has 2 hydrogens fewer: the
  // aldehydes CnH2n+1CHO are Cn+1H2n+2O, like the alcohols with a C=C, and so are the ketones.
  // A COOH group is a C=O and an OH: the acids CnH2n+1COOH are Cn+1H2n+2O2. An O between two
  // carbons, as in an ether, doesn't change the count either: CH3OCH3 is C2H6O, like ethanol.
  // An NH2 group takes the place of a hydrogen and brings two, so each N adds one hydrogen:
  // the amines CnH2n+1NH2 are CnH2n+3N. So does an NH between two carbons: CH3NHCH3 is C2H7N.
  const { carbonCount, hydrogenCount, halogenCounts, oxygenCount, nitrogenCount } = formula;
  const halogenAtomCount = countHalogenAtoms(halogenCounts);
  const hasOxygenOrNitrogen = oxygenCount > 0 || nitrogenCount > 0;
  const mostHydrogens = hydrogenCountForAlkaneWithCarbons(carbonCount) + nitrogenCount;
  const missingHydrogens = mostHydrogens - hydrogenCount - halogenAtomCount;
  if (missingHydrogens < 0 || missingHydrogens % 2 !== 0) {
    const messageKey =
      nitrogenCount > 0
        ? 'omnibox.notAnAmineFormula'
        : oxygenCount > 0
          ? 'omnibox.notAnAlcoholFormula'
          : halogenAtomCount > 0
            ? 'omnibox.notAHaloalkaneFormula'
            : 'omnibox.notAnAlkaneFormula';
    return {
      kind: 'notRecognised',
      message: message(messageKey, {
        count: carbonCount,
        hydrogenCount: mostHydrogens,
        formula: formatMolecularFormula({ carbonCount, hydrogenCount: mostHydrogens, oxygenCount, nitrogenCount }),
      }),
    };
  }

  const formulaText = formatMolecularFormula(formula);
  const doubleBondCount = missingHydrogens / 2;
  // An open chain of n carbons has n - 1 bonds, so it can have at most n - 1 C=C double bonds,
  // and each carbon at most one C=O (one that is part of an aldehyde, a ketone or an acid).
  // A ring of n carbons has n bonds, and the ring itself takes away a pair of hydrogens too.
  const mostCarbonylGroups = Math.min(oxygenCount, carbonCount);
  const mostDoubleBondsAndRings = carbonCount >= SMALLEST_RING_SIZE ? carbonCount + 1 : Math.max(0, carbonCount - 1);
  if (doubleBondCount > mostDoubleBondsAndRings + mostCarbonylGroups) {
    return { kind: 'notRecognised', message: message('omnibox.tooFewHydrogensForOneRing', { formula: formulaText }) };
  }
  if (carbonCount > mostCarbonsToListIsomersFor(doubleBondCount, halogenAtomCount + oxygenCount + nitrogenCount)) {
    return { kind: 'notRecognised', message: message('omnibox.tooManyIsomersToList', { formula: formulaText }) };
  }

  const groupCounts = { ...halogenCounts, [CARBONYL_OXYGEN]: oxygenCount, [AMINO_GROUP]: nitrogenCount };
  const { nameableIsomers, countOfIsomersNotYetSupported } = listIsomersOfFormula(carbonCount, doubleBondCount, groupCounts);
  if (nameableIsomers.length > MOST_ISOMERS_TO_LIST) {
    return { kind: 'notRecognised', message: message('omnibox.tooManyIsomersToList', { formula: formulaText }) };
  }
  if (nameableIsomers.length === 0 && countOfIsomersNotYetSupported === 0) {
    const messageKey = hasOxygenOrNitrogen ? 'omnibox.noOxygenOrNitrogenCompoundIsomers' : 'omnibox.tooFewHydrogensForOneRing';
    return { kind: 'notRecognised', message: message(messageKey, { formula: formulaText }) };
  }
  return {
    kind: 'molecularFormula',
    formulaText,
    nameableIsomers,
    countOfIsomersNotYetSupported,
    message: describeIsomerList(formulaText, doubleBondCount, nameableIsomers.length, countOfIsomersNotYetSupported, hasOxygenOrNitrogen),
  };
}

function interpretTypedName(text) {
  const parsedName = parseTypedName(text);
  if (parsedName.errorMessage) return { kind: 'notRecognised', message: parsedName.errorMessage };

  const description = convertParsedNameToDescription(parsedName);
  // On a ring, a CHO or COOH group (or an ester or amide) has a carbon of its own.
  const carbonCount =
    description.mainChainCarbonCount +
    description.substituents.reduce(
      (total, substituent) =>
        total +
        countCarbonsInSubstituent(substituent) +
        (description.isRing && bringsItsOwnCarbonOnARing(substituent) ? 1 : 0),
      0,
    );
  if (carbonCount > MOST_CARBONS_IN_A_TYPED_MOLECULE) {
    return { kind: 'notRecognised', message: message('omnibox.tooManyCarbons', { maxCarbons: MOST_CARBONS_IN_A_TYPED_MOLECULE }) };
  }

  const buildResult = buildCarbonSkeletonFromDescription(description);
  if (buildResult.errorMessage) return { kind: 'notRecognised', message: buildResult.errorMessage };
  // cis and trans say which side the chain carries on, which is only clear when each carbon of the double bond has one H.
  const usesCisOrTrans = parsedName.stereoWrittenAs?.includes('cisOrTrans') ?? false;
  if (usesCisOrTrans && !canUseCisOrTrans(buildResult)) return { kind: 'notRecognised', message: message('readingNames.cisTransNeedsHydrogens') };

  const namingResult = nameCarbonSkeleton(buildResult.carbonSkeleton);
  // "chloropropane" could be 1- or 2-chloropropane, and "propanol" propan-1-ol or propan-2-ol, so they can't be drawn.
  // Nor can "methylacetamide", as an amide's N can have groups too: N-methylacetamide or 2-methylacetamide?
  const needsLocants = (parsedName.isAmideName && !parsedName.isRing) || (namingResult.isNameable && !namingResult.locantsLeftOut);
  if (hasGroupsWithoutLocants(parsedName) && needsLocants) {
    return { kind: 'notRecognised', message: message(messageKeyForGroupsWithoutLocants(parsedName)) };
  }
  const correctIupacName = namingResult.isNameable ? namingResult.iupacName : null;
  if (correctIupacName === null) return { kind: 'name', carbonSkeleton: buildResult.carbonSkeleton, correctIupacName, typedNameIsCorrectIupacName: false };

  // "ethanal" is as correct as "acetaldehyde" (P-66.6.1.2.1), and "ethanoic acid" as "acetic acid"
  // (P-65.1.1.1), with a note that they aren't the PIN. Capitals don't matter: "(2e)-n-methylbut-2-enamide" is fine.
  const comparison = compareWithPreferredName(text, correctIupacName);
  const typedName = replaceOtherAcceptedName(text.trim().toLowerCase()).toLowerCase();
  const correctName = replaceOtherAcceptedName(correctIupacName.toLowerCase()).toLowerCase();
  const typed = takeOutStereodescriptors(typedName);
  const correct = takeOutStereodescriptors(correctName);
  const typedHasStereo = typed.mainChainStereo.length + typed.linkedGroupStereo.length + typed.groupStereo.length > 0;
  const correctHasStereo = correct.text !== correctName;
  let note = comparison.note;
  // A name may leave out E and Z: it then doesn't say which of the two it is (P-93.5.1.4.1).
  if (!typedHasStereo && correctHasStereo && typed.text === correct.text) note = message('omnibox.nameLeavesOutEAndZ', { name: correctIupacName });
  // cis and trans name the same as Z and E when each carbon of every double bond has one H.
  const isOnlyCisOrTrans = usesCisOrTrans && parsedName.stereoWrittenAs.length === 1 && typed.text === correct.text;
  if (isOnlyCisOrTrans) note = message('omnibox.cisTransAccepted', { name: correctIupacName });
  return {
    kind: 'name',
    carbonSkeleton: buildResult.carbonSkeleton,
    correctIupacName,
    typedNameIsCorrectIupacName: typedName === correctName || note !== undefined,
    ...(note ? { note } : {}),
  };
}
