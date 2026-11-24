/**
 * Marking the student's typed answer when the name is hidden.
 *
 * Capital letters and spaces at the very start or end are ignored. Everything else must
 * match exactly, because the hyphens and commas are part of the IUPAC name (P-16.2). The
 * answer is marked against the preferred IUPAC name (PIN), but some other names are right
 * too, each with a note saying what the PIN is (see compareWithPreferredName):
 *   - the systematic name, where the PIN uses a retained name (see retainedNames.js):
 *     "ethanoic acid" for acetic acid, "chloroethanal" for chloroacetaldehyde, "methyl
 *     ethanoate" for methyl acetate (P-65.1.1.1, P-66.6.1.2.1, P-66.1.1.1.2)
 *   - acetone for propan-2-one and glyoxal for ethanedial, which IUPAC keeps only outside
 *     preferred names (P-64.2.1.2, P-34.1.1.2)
 *   - propanone and butanone, as A-level courses often write propan-2-one and butan-2-one
 *   - isopropyl and isopropylidene for propan-2-yl and propan-2-ylidene, which IUPAC keeps
 *     only outside preferred names (P-29.6.2.2): "3-isopropylhexane" for 3-(propan-2-yl)hexane.
 *     The iso is part of the name, so it is sorted under i (P-14.5.3): "4-isopropyl-3-methylheptane".
 * Runs of spaces count as one, so "acetic  acid" is right too. cis and trans are right in place
 * of Z and E when each carbon of the C=C has one H (P-93.4.2.1.1): "trans-but-2-ene" and
 * "2-trans-but-2-ene" for (2E)-but-2-ene, with a note that the IUPAC name uses E and Z.
 *
 * When the answer is wrong we try to give a hint about the most likely mistake:
 *   - right letters and numbers, wrong punctuation       ("2methylpropane")
 *   - the brackets IUPAC uses on methane left out         ("trichlorofluoromethane")
 *   - a letter wrongly kept or left out where parts of the name join (see SPELLING_RULES):
 *       the "e" of -ane and -ene, left out only before a vowel  ("oct-7-eneoic acid", "propan-1,2-diol", P-16.7.1 (a))
 *       the "a" of tetra, penta ..., left out before "a" or "o" ("butane-1,2,3,4-tetraol", P-16.7.1 (c))
 *       the "a" put in before -diene, -triene ...               ("but-1,3-diene", "buta-2-ene", P-31.1.1.2)
 *   - a mistake we can name exactly                      ("2,2-methylpropane" is missing "di")
 *   - a prefix IUPAC no longer recommends (P-29.6.3)     ("3-isobutylheptane" for 3-(2-methylpropyl)heptane,
 *                                                         also sec-butyl, isopentyl, tert-pentyl, neopentyl)
 *   - a name for the same molecule that isn't the IUPAC name, for example
 *       not the longest chain                            ("2-ethylbutane" for 3-methylpentane)
 *       identical side chains not grouped                ("2-methyl-3-methylpentane")
 *       side chains not in alphabetical order            ("2-methyl-3-ethylpentane")
 *       not the right numbering                          ("3-methylbutane" for 2-methylbutane)
 *       locants written where IUPAC leaves them out      ("1-chloroethane" for chloroethane)
 *       OH written as a prefix rather than -ol           ("2-hydroxypropane" for propan-2-ol)
 *       locants written for -al                          ("propan-1-al" for propanal)
 *       locants written for -oic acid                    ("propan-1-oic acid" for propanoic acid)
 *       the double bond's locant left out of an aldehyde ("propenal" for prop-2-enal)
 *       a ketone's O written as the prefix oxo rather than -one ("2-oxopropane" for propan-2-one)
 *   - locants left out where they are needed             ("dichloroethane", "propanol", "pentanone",
 *                                                         "dimethylcyclohexane")
 *   - the rest of the name right, but not its E and Z (see doubleBondConfiguration.js):
 *       E and Z left out                                 ("but-2-ene" for (2E)-but-2-ene)
 *       E and Z the wrong way round                      ("(2Z)-but-2-ene")
 *       the locant of E or Z left out                    ("(E)-but-2-ene", P-91.3)
 *       the brackets or hyphen left out                  ("2E-but-2-ene", "(2E)but-2-ene", P-16.5.1.7, P-16.2.4.4)
 *       E and Z not in order of their locants            ("(4E,2Z)-hexa-2,4-diene", P-91.3)
 *       the lower locant not given to Z                  ("(2E,4Z)-hexa-2,4-diene", P-14.4 (j))
 *       E or Z in the wrong part of the name             ("(2E)-methyl but-2-enoate")
 *       cis or trans where a carbon of the C=C has no H  ("cis-2-chlorobut-2-ene")
 *       E or Z on a C=C that has neither                 ("(1E)-but-1-ene")
 */

import {
  convertParsedNameToDescription,
  hasAldehydeLocantsWritten,
  hasCarboxylicAcidLocantsWritten,
  hasGroupsWithoutLocants,
  messageKeyForGroupsWithoutLocants,
  parseTypedName,
  readOtherAcceptedName,
  replaceOtherAcceptedName,
  takeOutStereodescriptors,
} from './parseTypedName.js';
import { buildCarbonSkeletonFromDescription, canUseCisOrTrans } from './buildCarbonSkeletonFromDescription.js';
import { nameCarbonSkeleton } from './nameCarbonSkeleton.js';
import { compareSubstituentNamesAlphanumerically } from './alkaneNamingVocabulary.js';
import { message } from '../languages/translate.js';

export const ANSWER_VERDICTS = {
  noAnswerYet: 'noAnswerYet',
  correct: 'correct',
  incorrect: 'incorrect',
};

/** The hints, as messages put into words by src/languages/translate.js. */
export const ANSWER_HINTS = {
  punctuation: message('answer.hintPunctuation'),
  notTheLongestChain: message('answer.hintNotTheLongestChain'),
  notTheChainWithMostMultipleBonds: message('answer.hintNotTheChainWithMostMultipleBonds'),
  identicalSideChainsNotGrouped: message('answer.hintGroupIdenticalSideChains'),
  notAlphabetical: message('answer.hintAlphabeticalOrder'),
  notLowestLocants: message('answer.hintLowestLocants'),
  bracketsAfterFirstPrefix: message('answer.hintBracketsAfterFirstPrefix'),
  finalEOfParent: message('answer.hintFinalEOfParent'),
  finalAOfMultiplyingPrefix: message('answer.hintFinalAOfMultiplyingPrefix'),
  aBeforeMultipliedEne: message('answer.hintABeforeMultipliedEne'),
  leaveOutLocants: message('answer.hintLeaveOutLocants'),
  leaveOutMultipleBondLocant: message('answer.hintLeaveOutMultipleBondLocant'),
  halogenNeedsLocant: message('readingNames.halogenNeedsLocant'),
  hydroxyNeedsLocant: message('readingNames.hydroxyNeedsLocant'),
  amineNeedsLocant: message('readingNames.amineNeedsLocant'),
  etherNeedsLocant: message('readingNames.etherNeedsLocant'),
  hydroxyAsSuffix: message('answer.hintHydroxyAsSuffix'),
  ketoneNeedsLocant: message('readingNames.ketoneNeedsLocant'),
  sideChainNeedsLocant: message('readingNames.sideChainNeedsLocant'),
  ringGroupNeedsLocant: message('readingNames.ringGroupNeedsLocant'),
  ketoneAsSuffix: message('answer.hintKetoneAsSuffix'),
  aldehydeLocant: message('answer.hintAldehydeLocant'),
  carboxylicAcidLocant: message('answer.hintCarboxylicAcidLocant'),
  doubleBondNeedsLocant: message('readingNames.doubleBondNeedsLocant'),
  tripleBondNeedsLocant: message('readingNames.tripleBondNeedsLocant'),
  stereoLeftOut: message('answer.hintStereoLeftOut'),
  stereoWrongWayRound: message('answer.hintStereoWrongWayRound'),
  stereoNeedsLocants: message('answer.hintStereoNeedsLocants'),
  stereoBrackets: message('answer.hintStereoBrackets'),
  stereoHyphen: message('answer.hintStereoHyphen'),
  stereoOrder: message('answer.hintStereoOrder'),
  lowerLocantToZ: message('answer.hintLowerLocantToZ'),
  stereoInWrongPart: message('answer.hintStereoInWrongPart'),
  cisTransNeedsHydrogens: message('readingNames.cisTransNeedsHydrogens'),
};

export function normaliseNameForComparison(nameText) {
  return nameText.trim().toLowerCase();
}

/** Keeps only letters and digits: "2,2-Dimethyl propane" -> "22dimethylpropane". */
function keepOnlyLettersAndDigits(nameText) {
  return nameText.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/**
 * A name in the form names are compared in: other accepted names read as the systematic name
 * (see readOtherAcceptedName), in small letters. "Acetic acid" and "ethanoic acid" are both
 * "ethanoic acid".
 */
function comparableName(nameText) {
  return replaceOtherAcceptedName(normaliseNameForComparison(nameText)).toLowerCase();
}

/** The note for each kind of other accepted name (see readOtherAcceptedName), when it isn't the PIN. */
const NOTE_KEYS_FOR_OTHER_NAMES = {
  systematic: 'otherNames.systematicNameAccepted',
  generalNomenclature: 'otherNames.generalNameAccepted',
  locantLeftOut: 'otherNames.locantLeftOutAccepted',
};

/**
 * Whether a typed name names the molecule whose preferred IUPAC name is preferredName, as the
 * PIN itself or as another name that is accepted for it.
 *   { isSameName: false }
 *   { isSameName: true }                 the PIN, give or take capitals and spaces
 *   { isSameName: true, note }           an accepted name that isn't the PIN, with a message
 *                                        saying what the PIN is:
 *   compareWithPreferredName('ethanoic acid', 'acetic acid') -> the systematic name
 *   compareWithPreferredName('acetone', 'propan-2-one')      -> kept only outside PINs
 *   compareWithPreferredName('propanone', 'propan-2-one')    -> the locant left out
 */
export function compareWithPreferredName(typedText, preferredName) {
  if (comparableName(typedText) !== comparableName(preferredName)) return { isSameName: false };
  const typed = readOtherAcceptedName(normaliseNameForComparison(typedText));
  // The PIN: a retained name that is part of it, or the very same name.
  const isPreferredName = typed.kind === 'retained' || (typed.kind === null && typed.name.toLowerCase() === preferredName.toLowerCase());
  if (isPreferredName) return { isSameName: true };
  const noteKey = NOTE_KEYS_FOR_OTHER_NAMES[typed.kind ?? 'systematic'];
  return { isSameName: true, note: message(noteKey, { typedName: typedText.trim(), name: preferredName }) };
}

/**
 * Returns { verdict, hint, note? } where hint is a message or null, and note a message for a
 * correct answer that uses cis or trans, or a name that is accepted but isn't the PIN (see
 * compareWithPreferredName).
 * correctIupacName is the PIN, or null when the current molecule can't be named.
 */
export function checkStudentAnswer(studentAnswerText, correctIupacName) {
  const studentAnswer = normaliseNameForComparison(studentAnswerText);
  if (studentAnswer === '' || correctIupacName === null) return { verdict: ANSWER_VERDICTS.noAnswerYet, hint: null };
  const comparison = compareWithPreferredName(studentAnswerText, correctIupacName);
  if (comparison.isSameName) return { verdict: ANSWER_VERDICTS.correct, hint: null, ...(comparison.note ? { note: comparison.note } : {}) };
  const olderPrefixCheck = checkOlderSideChainPrefixes(studentAnswerText, correctIupacName);
  if (olderPrefixCheck) return olderPrefixCheck;

  const stereoCheck = checkEAndZ(studentAnswer, correctIupacName);
  if (stereoCheck?.isCorrect) return { verdict: ANSWER_VERDICTS.correct, hint: null, note: message('omnibox.cisTransAccepted', { name: correctIupacName }) };
  if (stereoCheck) return { verdict: ANSWER_VERDICTS.incorrect, hint: stereoCheck.hint };

  return { verdict: ANSWER_VERDICTS.incorrect, hint: findHintForWrongAnswer(studentAnswer, correctIupacName) };
}

/** The E and Z of a name, as "main 2E,4Z", "linked 2E" and "group prop-1-en-1-yl 1E", to compare whatever order they are in. */
function describeWhereEachStereodescriptorIs({ mainChainStereo, linkedGroupStereo, groupStereo }) {
  const write = (descriptors) =>
    descriptors
      .map(({ locant, descriptor }) => `${locant ?? ''}${descriptor}`)
      .sort()
      .join(',');
  return [
    ...(mainChainStereo.length > 0 ? [`main ${write(mainChainStereo)}`] : []),
    ...(linkedGroupStereo.length > 0 ? [`linked ${write(linkedGroupStereo)}`] : []),
    ...groupStereo.map(({ groupText, descriptors }) => `group ${groupText} ${write(descriptors)}`),
  ].sort();
}

/** True when each part of a name lists its E and Z in order of their locants. */
function listsStereodescriptorsInOrder({ mainChainStereo, linkedGroupStereo, groupStereo }) {
  return [mainChainStereo, linkedGroupStereo, ...groupStereo.map(({ descriptors }) => descriptors)].every((descriptors) =>
    descriptors.every(({ locant }, index) => index === 0 || locant > descriptors[index - 1].locant),
  );
}

/** Every E and Z of a name, wherever it is, sorted: ["2E", "4Z"]. */
function listEveryStereodescriptor({ mainChainStereo, linkedGroupStereo, groupStereo }) {
  return [...mainChainStereo, ...linkedGroupStereo, ...groupStereo.flatMap(({ descriptors }) => descriptors)]
    .map(({ locant, descriptor }) => `${locant ?? ''}${descriptor}`)
    .sort();
}

/**
 * For an answer that is right but for its E and Z: { isCorrect: true } when it uses cis and trans
 * where they can be used, or else { hint }. Returns null when the rest of the name is wrong too,
 * so that the other hints can be tried.
 */
function checkEAndZ(studentAnswer, correctIupacName) {
  const typed = takeOutStereodescriptors(comparableName(studentAnswer));
  const correct = takeOutStereodescriptors(comparableName(correctIupacName));
  if (typed.text !== correct.text) return null;

  const typedStereo = listEveryStereodescriptor(typed);
  const correctStereo = listEveryStereodescriptor(correct);
  if (typedStereo.length === 0) return correctStereo.length > 0 ? { hint: ANSWER_HINTS.stereoLeftOut } : null;
  // An E or Z on a C=C with neither, or with a locant that has no C=C: building the answer explains it.
  if (correctStereo.length === 0) return null;

  // Builds the molecule the answer describes: { built, isThisMolecule }, or null if it can't be built.
  const buildAnswer = () => {
    const parsedStudentAnswer = parseTypedName(studentAnswer);
    if (parsedStudentAnswer.errorMessage) return null;
    const built = buildCarbonSkeletonFromDescription(convertParsedNameToDescription(parsedStudentAnswer));
    if (built.errorMessage) return null;
    const namingResult = nameCarbonSkeleton(built.carbonSkeleton);
    return { built, isThisMolecule: namingResult.isNameable && comparableName(namingResult.iupacName) === comparableName(correctIupacName) };
  };

  if (typed.writtenAs.includes('cisOrTrans')) {
    const answer = buildAnswer();
    if (answer === null) return null;
    if (!canUseCisOrTrans(answer.built)) return { hint: ANSWER_HINTS.cisTransNeedsHydrogens };
    return answer.isThisMolecule ? { isCorrect: true } : { hint: ANSWER_HINTS.stereoWrongWayRound };
  }

  const correctLocantsGiven = correctStereo.every((item) => /^\d/.test(item));
  if (correctLocantsGiven && typedStereo.some((item) => !/^\d/.test(item))) return { hint: ANSWER_HINTS.stereoNeedsLocants };
  if (typed.writtenAs.includes('withoutBrackets')) return { hint: ANSWER_HINTS.stereoBrackets };
  if (typed.writtenAs.includes('withoutHyphen')) return { hint: ANSWER_HINTS.stereoHyphen };
  if (typedStereo.join() !== correctStereo.join()) {
    const withoutLetters = (items) => items.map((item) => item.slice(0, -1)).join();
    if (withoutLetters(typedStereo) !== withoutLetters(correctStereo)) return null;
    // (2E,4Z)-hexa-2,4-diene is (2Z,4E)-hexa-2,4-diene numbered from the other end.
    return buildAnswer()?.isThisMolecule ? { hint: ANSWER_HINTS.lowerLocantToZ } : { hint: ANSWER_HINTS.stereoWrongWayRound };
  }
  const whereTyped = describeWhereEachStereodescriptorIs(typed).join(' ');
  if (whereTyped !== describeWhereEachStereodescriptorIs(correct).join(' ')) return { hint: ANSWER_HINTS.stereoInWrongPart };
  return listsStereodescriptorsInOrder(typed) ? null : { hint: ANSWER_HINTS.stereoOrder };
}

/**
 * The letters IUPAC leaves out of a name, or puts in, where parts of it join. Each rule writes a
 * name without that letter, whether it was there or not, so two names that differ only in it
 * read the same.
 */
const SPELLING_RULES = [
  // P-16.7.1 (a): the final "e" of -ane, -ene and -yne goes before a vowel, and stays before a
  // consonant: oct-7-enoic acid, propan-2-ol, but-3-en-2-one, prop-2-en-1-yl, propane-1,2-diol.
  { hintName: 'finalEOfParent', leaveOut: (name) => name.replace(/(an|en|yn)e(?=(?:-[\d,]+-)?[a-z])/g, '$1') },
  // P-16.7.1 (c): the final "a" of tetra, penta ... goes before a suffix beginning with "a" or "o":
  // butane-1,2,3,4-tetrol, hexane-1,2,5,6-tetramine (but octa-1,3,5,7-tetraene).
  { hintName: 'finalAOfMultiplyingPrefix', leaveOut: (name) => name.replace(/a(?=(?:ol|one|al|amine|amide|oic acid|oate)\b)/g, '') },
  // P-31.1.1.2: an "a" goes after the stem before the locants of -diene, -triene ...: buta-1,3-diene,
  // hexa-1,3,5-triene, buta-1,3-dien-1-yl, but but-2-ene.
  {
    hintName: 'aBeforeMultipliedEne',
    leaveOut: (name) => name.replace(/a(?=-\d+(?:,\d+)*-(?:di|tri|tetra|penta|hexa|hepta|octa|nona|deca)?(?:en|yn))/g, ''),
  },
];

/**
 * The hint for an answer that is the name with a letter wrongly kept or left out (see
 * SPELLING_RULES), or null. Punctuation is ignored here; it has its own hint once the letters are
 * right. With more than one such mistake, the hint is for the first rule in SPELLING_RULES.
 */
function findSpellingHint(comparableAnswer, comparableCorrectName) {
  const leaveOutLetters = (name, rules) => keepOnlyLettersAndDigits(rules.reduce((text, rule) => rule.leaveOut(text), name));
  const readsTheSame = (rules) => leaveOutLetters(comparableAnswer, rules) === leaveOutLetters(comparableCorrectName, rules);
  if (!readsTheSame(SPELLING_RULES)) return null;
  const ruleNeeded = SPELLING_RULES.find((rule) => !readsTheSame(SPELLING_RULES.filter((other) => other !== rule)));
  return ruleNeeded ? ANSWER_HINTS[ruleNeeded.hintName] : null;
}

/**
 * Marks an answer that uses an older side-chain prefix (see OLDER_SIDE_CHAIN_PREFIXES in
 * alkaneNamingVocabulary.js), if it names this molecule. With isopropyl or isopropylidene, it is
 * right, with a note giving the PIN (P-29.6.2.2), as long as the prefixes are in alphabetical
 * order with isopropyl sorted under i, and the locants are the lowest (the same set as the
 * PIN's). Not checked: where two numberings give the same locants, which way the general name
 * should go (P-31.1.4.3.4 gives the lower locant to the prefix written first, and isopropyl
 * can come first where propan-2-yl doesn't). With a prefix IUPAC no longer recommends, it is
 * wrong, with a hint giving the preferred prefix (P-29.6.3).
 * Returns { verdict, hint, note? }, or null if the answer uses none of them or names another molecule.
 */
function checkOlderSideChainPrefixes(studentAnswerText, correctIupacName) {
  const parsed = parseTypedName(normaliseNameForComparison(studentAnswerText));
  if (parsed.errorMessage) return null;
  const olderPrefixes = parsed.substituentGroups.flatMap((group) => group.olderPrefixes ?? []);
  if (olderPrefixes.length === 0) return null;
  const built = buildCarbonSkeletonFromDescription(convertParsedNameToDescription(parsed));
  if (built.errorMessage) return null;
  const named = nameCarbonSkeleton(built.carbonSkeleton);
  if (!named.isNameable || named.iupacName !== correctIupacName) return null;
  const parsedCorrectName = parseTypedName(correctIupacName);
  if (!parsedCorrectName.errorMessage && parsed.parentChainCarbonCount !== parsedCorrectName.parentChainCarbonCount) {
    return { verdict: ANSWER_VERDICTS.incorrect, hint: ANSWER_HINTS.notTheLongestChain };
  }

  const notRecommended = olderPrefixes.find(({ kind }) => kind === 'notRecommended');
  if (notRecommended) {
    const { prefix, preferredPrefix } = notRecommended;
    return { verdict: ANSWER_VERDICTS.incorrect, hint: message('answer.hintPrefixNotRecommended', { prefix, preferredPrefix }) };
  }
  // The groups written as prefixes, in the order written: not those named by the ending, such as the "ol" of hydroxy.
  const prefixGroups = parsed.substituentGroups.filter(({ writtenAs, substituentName }) => writtenAs.includes(substituentName));
  const isInAlphabeticalOrder = prefixGroups.every(
    (group, index) => index === 0 || compareSubstituentNamesAlphanumerically(prefixGroups[index - 1].substituentName, group.substituentName) <= 0,
  );
  if (!isInAlphabeticalOrder) return { verdict: ANSWER_VERDICTS.incorrect, hint: ANSWER_HINTS.notAlphabetical };
  const sortedLocants = (parsedName) =>
    parsedName.substituentGroups
      .flatMap(({ locants }) => locants ?? [])
      .concat(parsedName.mainChainDoubleBondLocants, parsedName.mainChainTripleBondLocants ?? [])
      .sort((first, second) => first - second)
      .join(',');
  if (!parsedCorrectName.errorMessage && sortedLocants(parsed) !== sortedLocants(parsedCorrectName)) {
    return { verdict: ANSWER_VERDICTS.incorrect, hint: ANSWER_HINTS.notLowestLocants };
  }
  const { prefix, preferredPrefix } = olderPrefixes[0];
  const note = message('otherNames.generalPrefixAccepted', { typedName: studentAnswerText.trim(), prefix, preferredPrefix, name: correctIupacName });
  return { verdict: ANSWER_VERDICTS.correct, hint: null, note };
}

function findHintForWrongAnswer(studentAnswer, correctIupacName) {
  const comparableAnswer = comparableName(studentAnswer);
  const comparableCorrectName = comparableName(correctIupacName);
  // Compared as typed too, as "aceticacid" isn't read as a retained name: it lacks the space.
  const differsOnlyInPunctuation =
    keepOnlyLettersAndDigits(comparableAnswer) === keepOnlyLettersAndDigits(comparableCorrectName) ||
    keepOnlyLettersAndDigits(studentAnswer) === keepOnlyLettersAndDigits(correctIupacName);
  if (differsOnlyInPunctuation) {
    // trichloro(fluoro)methane, bromo(chloro)acetic acid: a simple prefix after the first in brackets (P-16.5.1.3).
    const hasPrefixesInBrackets = /^[a-z]+\([a-z]+\)/.test(comparableCorrectName);
    return hasPrefixesInBrackets && !studentAnswer.includes('(') ? ANSWER_HINTS.bracketsAfterFirstPrefix : ANSWER_HINTS.punctuation;
  }
  const spellingHint = findSpellingHint(comparableAnswer, comparableCorrectName);
  if (spellingHint) return spellingHint;

  const parsedStudentAnswer = parseTypedName(studentAnswer);
  if (parsedStudentAnswer.errorMessage) {
    return parsedStudentAnswer.isSpecificNamingMistake ? parsedStudentAnswer.errorMessage : null;
  }
  const parsedCorrectName = parseTypedName(correctIupacName);
  if (parsedCorrectName.errorMessage) return null;
  if (hasGroupsWithoutLocants(parsedStudentAnswer) && !hasGroupsWithoutLocants(parsedCorrectName)) {
    const hintName = messageKeyForGroupsWithoutLocants(parsedStudentAnswer).replace('readingNames.', '');
    return ANSWER_HINTS[hintName];
  }

  const builtFromStudentAnswer = buildCarbonSkeletonFromDescription(convertParsedNameToDescription(parsedStudentAnswer));
  if (builtFromStudentAnswer.errorMessage) return builtFromStudentAnswer.errorMessage;

  const namingResult = nameCarbonSkeleton(builtFromStudentAnswer.carbonSkeleton);
  const studentAnswerDescribesThisMolecule = namingResult.isNameable && namingResult.iupacName === correctIupacName;
  if (!studentAnswerDescribesThisMolecule) return null;

  return explainWhyNameForSameMoleculeIsNotTheIupacName(parsedStudentAnswer, parsedCorrectName);
}

function explainWhyNameForSameMoleculeIsNotTheIupacName(parsedStudentAnswer, parsedCorrectName) {
  // Fewer groups without locants than the IUPAC name: "dicyclohexylmethan-1-one".
  const countGroupsWithoutLocants = (parsedName) => parsedName.substituentGroups.filter((group) => group.locants === null).length;
  if (countGroupsWithoutLocants(parsedCorrectName) > countGroupsWithoutLocants(parsedStudentAnswer)) {
    return ANSWER_HINTS.leaveOutLocants;
  }

  // "prop-1-ene" or "prop-1-yne" for propene or propyne: the bond could only go in one place (P-31.1.4.2.4).
  const leavesOutMultipleBondLocant = (parsedName) => Boolean(parsedName.doubleBondLocantLeftOut || parsedName.tripleBondLocantLeftOut);
  if (leavesOutMultipleBondLocant(parsedCorrectName) && !leavesOutMultipleBondLocant(parsedStudentAnswer)) return ANSWER_HINTS.leaveOutMultipleBondLocant;

  if (hasAldehydeLocantsWritten(parsedStudentAnswer)) return ANSWER_HINTS.aldehydeLocant;
  if (hasCarboxylicAcidLocantsWritten(parsedStudentAnswer)) return ANSWER_HINTS.carboxylicAcidLocant;

  // "propenal" for prop-2-enal: the locant of the double bond is written in an aldehyde or an acid.
  if (parsedStudentAnswer.doubleBondLocantLeftOut && !parsedCorrectName.doubleBondLocantLeftOut) return ANSWER_HINTS.doubleBondNeedsLocant;
  // "propynoic acid" for prop-2-ynoic acid, in the same way (P-14.3.4.4).
  if (parsedStudentAnswer.tripleBondLocantLeftOut && !parsedCorrectName.tripleBondLocantLeftOut) return ANSWER_HINTS.tripleBondNeedsLocant;

  // With a CHO group, -al is the suffix and OH the prefix hydroxy, so this only applies to alcohols.
  const writesHydroxyAs = (parsedName, ending) => parsedName.substituentGroups.some((group) => group.isHydroxy && group.writtenAs.endsWith('ol') === (ending === 'suffix'));
  if (writesHydroxyAs(parsedCorrectName, 'suffix') && writesHydroxyAs(parsedStudentAnswer, 'prefix')) return ANSWER_HINTS.hydroxyAsSuffix;

  // The same for a ketone: oxo is only the prefix when there is a CHO or COOH group.
  const writesKetoneAs = (parsedName, ending) =>
    parsedName.substituentGroups.some((group) => group.isKetone && group.writtenAs.endsWith('one') === (ending === 'suffix'));
  if (writesKetoneAs(parsedCorrectName, 'suffix') && writesKetoneAs(parsedStudentAnswer, 'prefix')) return ANSWER_HINTS.ketoneAsSuffix;

  if (parsedStudentAnswer.parentChainCarbonCount !== parsedCorrectName.parentChainCarbonCount) {
    return ANSWER_HINTS.notTheLongestChain;
  }
  // As long as each other, the main chain has the most multiple bonds, then the most double bonds
  // (P-44.4.1.1, P-44.4.1.2): 3-ethylpent-1-yne, not 3-ethynylpentane.
  const countBonds = (parsedName) => [
    parsedName.mainChainDoubleBondLocants.length + (parsedName.mainChainTripleBondLocants?.length ?? 0),
    parsedName.mainChainDoubleBondLocants.length,
  ];
  const [studentBonds, correctBonds] = [parsedStudentAnswer, parsedCorrectName].map(countBonds);
  if (studentBonds[0] < correctBonds[0] || (studentBonds[0] === correctBonds[0] && studentBonds[1] < correctBonds[1])) {
    return ANSWER_HINTS.notTheChainWithMostMultipleBonds;
  }

  const studentSubstituentNames = parsedStudentAnswer.substituentGroups.map((group) => group.substituentName);
  if (new Set(studentSubstituentNames).size !== studentSubstituentNames.length) {
    return ANSWER_HINTS.identicalSideChainsNotGrouped;
  }

  // The same side chains and double bonds in the same places, just written in a different order.
  const describeEverySideChainAndDoubleBond = (parsedName) =>
    [
      ...convertParsedNameToDescription(parsedName).substituents.map(({ locant, substituentName }) => `${locant}-${substituentName}`),
      ...parsedName.mainChainDoubleBondLocants.map((locant) => `${locant}-ene`),
      ...(parsedName.mainChainTripleBondLocants ?? []).map((locant) => `${locant}-yne`),
    ]
      .sort()
      .join(' ');
  if (describeEverySideChainAndDoubleBond(parsedStudentAnswer) === describeEverySideChainAndDoubleBond(parsedCorrectName)) {
    return ANSWER_HINTS.notAlphabetical;
  }

  return ANSWER_HINTS.notLowestLocants;
}
