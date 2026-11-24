/**
 * Retained names that are preferred IUPAC names (PINs).
 *
 * A few parents keep an older name, which IUPAC uses as the preferred IUPAC name in place of
 * the name the usual rules build from the chain and its suffix. The name built by the rules,
 * the systematic name, is still an accepted IUPAC name (in general nomenclature), but not the
 * preferred one:
 *
 *   formic acid    for methanoic acid     HCOOH          P-65.1.1.1, P-65.1.8
 *   acetic acid    for ethanoic acid      CH3-COOH       P-65.1.1.1
 *   oxalic acid    for ethanedioic acid   HOOC-COOH      P-65.1.1.1
 *   formate, acetate, oxalate for methanoate, ethanoate, ethanedioate (esters)   P-65.6.3.2.1
 *   formamide      for methanamide        HCO-NH2        P-66.1.1.1.2.2
 *   acetamide      for ethanamide         CH3-CO-NH2     P-66.1.1.1.2.1
 *   oxamide        for ethanediamide      H2N-CO-CO-NH2  P-66.1.1.1.2.1
 *   formaldehyde   for methanal           HCHO           P-66.6.1.2.1
 *   acetaldehyde   for ethanal            CH3-CHO        P-66.6.1.2.1
 *   acetylene      for ethyne             HC≡CH          P-31.1.2.1
 *
 * Acetic acid, acetate, acetamide and acetaldehyde can be substituted, and keep the prefixes and
 * locants the systematic name has: chloroacetic acid, bromo(chloro)acetic acid, methyl
 * dichloroacetate, 2-chloro-N-methylacetamide, hydroxyacetaldehyde. Formamide and oxamide can
 * only be substituted on their N (N-methylformamide), and formic acid, formaldehyde, oxalic
 * acid and acetylene not at all here. P-65.1.8 allows formic acid only a few prefixes on its
 * carbon, none of which this app draws; a substituted acetylene is named from ethyne, as in
 * fluoroethyne (P-31.1.2.1).
 *
 * Not swapped, as IUPAC keeps these only outside preferred names: acetone for propan-2-one
 * (P-64.2.1.2), glycine for aminoacetic acid (P-100: no PINs are given for amino acids), and
 * glyoxal for ethanedial (P-34.1.1.2). Acetone and glyoxal are read as typed names, with a
 * note that they are not the PIN (see parseTypedName.js and checkStudentAnswer.js); glycine
 * and the other amino acid names are not read yet.
 *
 * Benzoic acid, benzamide, benzaldehyde and oxamic acid are PINs too, but the app can't name
 * benzene rings, or a molecule that is an acid and an amide at once, yet.
 */

import { message } from '../languages/translate.js';
import { joinNameParts, namePart } from './nameParts.js';
import { listPrefixSubstituents } from './findSubstituentsOnChain.js';

/** The group of the name part that holds a retained parent's name (see nameParts.js). */
export const RETAINED_NAME_GROUP = 'retainedName';

/**
 * Each retained parent that is a PIN, with the systematic parent it stands for:
 *   systematicParent   the end of the systematic name: the stem, its ending and the suffix
 *   retainedParent     what IUPAC writes instead
 *   substitution       'carbon' when groups can be on its carbon (and its N, for an amide),
 *                      'nitrogen' when only on its N, 'none' when not at all
 *   example            a substituted name, for the explanation, or null
 *   isHydrocarbon      true for acetylene, which has no characteristic group
 *   blueBookRules      where the Blue Book says so
 */
export const RETAINED_PREFERRED_PARENTS = [
  { systematicParent: 'methanoic acid', retainedParent: 'formic acid', formula: 'HCOOH', substitution: 'none', example: null, blueBookRules: ['P-65.1.1.1', 'P-65.1.8'] },
  { systematicParent: 'ethanoic acid', retainedParent: 'acetic acid', formula: 'CH3-COOH', substitution: 'carbon', example: 'chloroacetic acid', blueBookRules: ['P-65.1.1.1'] },
  { systematicParent: 'ethanedioic acid', retainedParent: 'oxalic acid', formula: 'HOOC-COOH', substitution: 'none', example: null, blueBookRules: ['P-65.1.1.1'] },
  { systematicParent: 'methanoate', retainedParent: 'formate', formula: 'HCOO-R', substitution: 'none', example: null, blueBookRules: ['P-65.1.1.1', 'P-65.6.3.2.1'] },
  { systematicParent: 'ethanoate', retainedParent: 'acetate', formula: 'CH3-COO-R', substitution: 'carbon', example: 'methyl chloroacetate', blueBookRules: ['P-65.1.1.1', 'P-65.6.3.2.1'] },
  { systematicParent: 'ethanedioate', retainedParent: 'oxalate', formula: 'R-OOC-COO-R', substitution: 'none', example: null, blueBookRules: ['P-65.1.1.1', 'P-65.6.3.2.1'] },
  { systematicParent: 'methanamide', retainedParent: 'formamide', formula: 'HCO-NH2', substitution: 'nitrogen', example: 'N-methylformamide', blueBookRules: ['P-66.1.1.1.2.2'] },
  { systematicParent: 'ethanamide', retainedParent: 'acetamide', formula: 'CH3-CO-NH2', substitution: 'carbon', example: '2-chloro-N-methylacetamide', blueBookRules: ['P-66.1.1.1.2.1'] },
  { systematicParent: 'ethanediamide', retainedParent: 'oxamide', formula: 'H2N-CO-CO-NH2', substitution: 'nitrogen', example: null, blueBookRules: ['P-66.1.1.1.2.1'] },
  { systematicParent: 'methanal', retainedParent: 'formaldehyde', formula: 'HCHO', substitution: 'none', example: null, blueBookRules: ['P-66.6.1.2.1'] },
  { systematicParent: 'ethanal', retainedParent: 'acetaldehyde', formula: 'CH3-CHO', substitution: 'carbon', example: 'chloroacetaldehyde', blueBookRules: ['P-66.6.1.2.1'] },
  { systematicParent: 'ethyne', retainedParent: 'acetylene', formula: 'HC≡CH', substitution: 'none', example: null, blueBookRules: ['P-31.1.2.1'], isHydrocarbon: true },
];

/** The groups of the parts a systematic parent is written with (see nameParts.js). */
const PARENT_GROUPS = new Set(['parent', 'unsaturation', 'suffix']);

/**
 * The preferred IUPAC name of a named molecule, when it uses a retained parent.
 *
 *   named: a result of nameCarbonSkeleton, with its systematic name in nameParts
 *     (e.g. "chloroethanoic acid", or "2-chloro-N-methylethanamide").
 *   returns null when the PIN is the systematic name, or else
 *     {
 *       nameParts,          the PIN's parts: the systematic ones, with those of the parent
 *                           swapped for one part { kind: 'retainedName', group: 'retainedName' }
 *       retainedName: {
 *         retainedParent: 'acetic acid', systematicParent: 'ethanoic acid',
 *         systematicName: 'chloroethanoic acid', blueBookRules: ['P-65.1.1.1'],
 *         explanation: message, a sentence on why the PIN is not the systematic name
 *       }
 *     }
 */
export function findRetainedPreferredName(named) {
  if (!named.isNameable || named.isRing) return null;
  const { nameParts } = named;
  const parentStart = nameParts.findIndex(({ group }) => group === 'parent');
  if (parentStart < 0 || !nameParts.slice(parentStart).every(({ group }) => PARENT_GROUPS.has(group))) return null;
  const systematicParent = joinNameParts(nameParts.slice(parentStart));
  const entry = RETAINED_PREFERRED_PARENTS.find((candidate) => candidate.systematicParent === systematicParent);
  if (!entry || !canBeSubstitutedAsNamed(entry, named)) return null;

  const retainedPart = namePart(entry.retainedParent, 'retainedName', RETAINED_NAME_GROUP);
  return {
    nameParts: [...nameParts.slice(0, parentStart), retainedPart],
    retainedName: {
      retainedParent: entry.retainedParent,
      systematicParent: entry.systematicParent,
      systematicName: joinNameParts(nameParts),
      formula: entry.formula,
      blueBookRules: entry.blueBookRules,
      explanation: explainRetainedParent(entry, joinNameParts(nameParts)),
    },
  };
}

/** True when the groups on the molecule are ones the retained name may have. */
function canBeSubstitutedAsNamed(entry, named) {
  if (entry.substitution === 'carbon') return true;
  if (listPrefixSubstituents(named.substituents).length > 0) return false;
  return entry.substitution === 'nitrogen' || !named.nitrogenGroup;
}

/** Why the PIN uses the retained name, as a message: the same sentence whatever the parent, with what can be substituted. */
function explainRetainedParent(entry, systematicName) {
  const values = {
    retainedParent: entry.retainedParent,
    systematicParent: entry.systematicParent,
    systematicName,
    formula: entry.formula,
    rules: entry.blueBookRules.join(', '),
    example: entry.example ?? '',
  };
  const substitutionKey = { carbon: 'retainedNames.substitutedOnCarbon', nitrogen: 'retainedNames.substitutedOnNitrogen', none: 'retainedNames.notSubstituted' }[entry.substitution];
  const key = entry.isHydrocarbon ? 'retainedNames.explanationOfHydrocarbon' : 'retainedNames.explanation';
  return message(key, { ...values, substitution: message(substitutionKey, values) });
}

/**
 * The retained parents that are PINs, and the older names IUPAC keeps only in general
 * nomenclature, as typed-name endings and the systematic names they are read as. Used to read
 * a typed name and to mark an answer (see parseTypedName.js):
 *   { retained, systematic, mayFollowALetter, isPreferred }
 * mayFollowALetter: the name may run on from a prefix, as in "chloroacetic acid" and
 * "N-methylformamide". Not oxamide, as "carboxamide" ends the same way.
 * isPreferred: false for the names that are not PINs, so an answer using them is accepted
 * with a note.
 */
export const RETAINED_NAME_ENDINGS = [
  ...RETAINED_PREFERRED_PARENTS.map(({ retainedParent, systematicParent, substitution }) => ({
    retained: retainedParent,
    systematic: systematicParent,
    mayFollowALetter: substitution !== 'none' && retainedParent !== 'oxamide',
    isPreferred: true,
  })),
  { retained: 'glyoxal', systematic: 'ethanedial', mayFollowALetter: false, isPreferred: false },
];
