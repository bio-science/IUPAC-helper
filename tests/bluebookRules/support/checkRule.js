/**
 * The checks behind every Blue Book rule file.
 *
 * Each rule file (tests/bluebookRules/P-3/P-31.1.1.1.test.js) is one test. It runs every check
 * for that rule, on every example the Blue Book gives for it, and fails if any check fails.
 * The failure lists each check that failed, one sentence each, starting with what kind of
 * result it is:
 *   [wrong]          the app gives a different name or molecule, accepts a name the Blue Book
 *                    says is not used, or crashes;
 *   [not the PIN]    the app gives or accepts a name that IUPAC allows only in general
 *                    nomenclature (or that A-level courses use) where the preferred IUPAC
 *                    name (PIN) should be used;
 *   [not supported]  the app can't do it yet, such as a compound class it can't read or draw.
 *
 * The Blue Book is the source of truth. Every expected name and formula in a rule file comes
 * from the Blue Book and its list of corrections, never
 * from what the app does. When a check fails, the app is wrong, not the check: change an
 * expected value only when it doesn't match the Blue Book, and say which text it now matches.
 *
 * The checks only call the library functions in src/chemistry, as any other project using
 * them would, never the page's components.
 */
import { it } from 'vitest';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { readStructuralFormula } from '../../../src/chemistry/readStructuralFormula.js';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { ANSWER_VERDICTS, checkStudentAnswer } from '../../../src/chemistry/checkStudentAnswer.js';
import { canonicalFingerprintOfSkeleton } from '../../../src/chemistry/canonicalFingerprint.js';
import { takeOutStereodescriptors } from '../../../src/chemistry/parseTypedName.js';
import { addGroupToCarbon, carbonHasRoomForGroup, countRings } from '../../../src/chemistry/carbonSkeleton.js';
import { nameSubstituentGroup, readSubstituentGroupFormula, readSubstituentPrefix } from '../../../src/chemistry/substituentGroups.js';
import { describeCharacteristicGroup, readCharacteristicGroupSuffix, suffixForCharacteristicGroup } from '../../../src/chemistry/characteristicGroupSuffixes.js';
import britishEnglish from '../../../src/languages/translations/en-GB.json';
import { createTranslator } from '../../../src/languages/translate.js';

export const RESULT_KINDS = { wrong: 'wrong', notThePin: 'not the PIN', notSupported: 'not supported' };

/** Worst first: a rule with any wrong check is wrong, and so on. */
const KINDS_WORST_FIRST = [RESULT_KINDS.wrong, RESULT_KINDS.notThePin, RESULT_KINDS.notSupported];

/** The longest a rule's checks may take, in milliseconds (some names are long). */
const RULE_TIMEOUT = 60_000;

const inEnglish = createTranslator('en-GB', britishEnglish, britishEnglish);

/** A message from the app (a { key, values } object) in English, for a check's sentence. */
function appMessageInEnglish(appMessage) {
  if (!appMessage) return '';
  try {
    return inEnglish(appMessage.key, appMessage.values);
  } catch {
    return appMessage.key;
  }
}

/** True when a name has stereodescriptors such as (2E), (Z), (R), cis or trans. */
function hasStereodescriptors(name) {
  return /(^|[\s(\[,-])(\d*[EZRS]|\d*[EZ],|cis|trans|rel|rac|[rs])[,)\]-]/.test(name);
}

function withoutStereodescriptors(name) {
  return takeOutStereodescriptors(name.toLowerCase()).text;
}

/**
 * Runs one of the app's functions, so a crash becomes a [wrong] check rather than stopping
 * the rule's other checks.
 */
function callApp(results, description, callFunction) {
  try {
    return { value: callFunction() };
  } catch (error) {
    results.fail(RESULT_KINDS.wrong, `${description}: the app crashed (${error?.message ?? error})`);
    return { crashed: true };
  }
}

/** Collects the checks of one rule: how many ran, which failed and how, and which functions were tried. */
function createResults(rule) {
  const failed = [];
  const functions = {};
  let checkCount = 0;
  return {
    failed,
    functions,
    get checkCount() {
      return checkCount;
    },
    /** One check, of one of the app's functions ("name in", "name out", ...). */
    check(functionName, passed, kind, sentence) {
      checkCount += 1;
      functions[functionName] ??= { passed: 0, total: 0 };
      functions[functionName].total += 1;
      if (passed) functions[functionName].passed += 1;
      else failed.push({ kind, sentence: `[${kind}] ${rule}: ${sentence}` });
      return passed;
    },
    fail(kind, sentence) {
      checkCount += 1;
      failed.push({ kind, sentence: `[${kind}] ${rule}: ${sentence}` });
    },
  };
}

/** Reads a name with the app, as if it were typed into the box above the drawing. */
function readName(results, name) {
  const { value: reading, crashed } = callApp(results, `reading "${name}"`, () => interpretOmniboxText(name));
  if (crashed) return null;
  if (reading?.kind === 'name') return reading;
  return { notRead: true, reason: appMessageInEnglish(reading?.message) };
}

function readFormula(results, formula) {
  const { value: reading, crashed } = callApp(results, `reading the formula ${formula}`, () => readStructuralFormula(formula));
  if (crashed) return null;
  if (reading?.carbonSkeleton) return reading;
  return { notRead: true, reason: appMessageInEnglish(reading?.errorMessage) };
}

/**
 * The app's fingerprint of a molecule, to tell whether two readings give the same molecule.
 * It is made for molecules with one ring at most (see canonicalFingerprint.js), so for more
 * rings there is none, and the comparison is left out.
 */
function fingerprintOf(results, description, skeleton) {
  if (countRings(skeleton) > 1) return null;
  const { value, crashed } = callApp(results, description, () => canonicalFingerprintOfSkeleton(skeleton));
  return crashed ? null : value;
}

function nameFor(results, description, skeleton) {
  const { value, crashed } = callApp(results, description, () => nameCarbonSkeleton(skeleton));
  return crashed ? null : value;
}

/** What the Blue Book calls the example, for the check sentences: "acetic acid" or "the example drawn as P6gif/...". */
function describeExample(example) {
  return example.formula ? `${example.formula}` : example.drawing ? `the molecule drawn as ${example.drawing}` : 'the example';
}

/**
 * The checks for an example that is a compound with a preferred IUPAC name (or a preselected
 * name, for a compound without carbon).
 */
function checkCompoundExample(results, example) {
  const preferredName = example.pin ?? example.preselectedName;
  const kindOfName = example.pin ? 'PIN' : 'preselected name';
  const otherNames = [...(example.otherNames ?? []), ...(example.generalNames ?? [])];
  const notNames = example.notNames ?? [];

  // Name in: typing the name gives a molecule.
  const nameReading = readName(results, preferredName);
  const nameSkeleton = nameReading && !nameReading.notRead ? nameReading.carbonSkeleton : null;
  if (nameReading) {
    results.check('name in', nameSkeleton !== null, RESULT_KINDS.notSupported, `the app can't read the ${kindOfName} "${preferredName}"${nameReading.reason ? ` (it says: ${nameReading.reason})` : ''}`);
  }

  // Formula in: the formula the Blue Book writes gives the same molecule as the name.
  let formulaSkeleton = null;
  if (example.formula) {
    const formulaReading = readFormula(results, example.formula);
    formulaSkeleton = formulaReading && !formulaReading.notRead ? formulaReading.carbonSkeleton : null;
    if (formulaReading) {
      results.check('formula in', formulaSkeleton !== null, RESULT_KINDS.notSupported, `the app can't read the formula ${example.formula}${formulaReading.reason ? ` (it says: ${formulaReading.reason})` : ''}`);
    }
    if (formulaSkeleton && nameSkeleton) {
      const fromFormula = fingerprintOf(results, `comparing ${example.formula} with "${preferredName}"`, formulaSkeleton);
      const fromName = fingerprintOf(results, `comparing ${example.formula} with "${preferredName}"`, nameSkeleton);
      if (fromFormula !== null && fromName !== null) {
        results.check('name in', fromFormula === fromName, RESULT_KINDS.wrong, `reading "${preferredName}" gives a different molecule from the formula ${example.formula}`);
      }
    }
  }

  // Name out: the app's name for the molecule is the preferred name. The formula is used when
  // the app can read it, as it doesn't depend on the app reading the name right; the name when
  // it has E or Z (a formula doesn't show which way round a C=C is).
  const useName = nameSkeleton && (hasStereodescriptors(preferredName) || !formulaSkeleton);
  const skeleton = useName ? nameSkeleton : formulaSkeleton;
  if (!skeleton) {
    results.fail(RESULT_KINDS.notSupported, `the app can't name ${describeExample(example)} (${kindOfName} "${preferredName}"), as it can't read ${example.formula ? 'the name or the formula' : 'the name'}`);
  } else {
    const naming = nameFor(results, `naming ${describeExample(example)}`, skeleton);
    const appName = naming?.isNameable ? naming.iupacName : null;
    if (naming && appName === null) {
      results.fail(RESULT_KINDS.notSupported, `the app can't name ${describeExample(example)} (${kindOfName} "${preferredName}")${naming.reasonNotNameable ? `: it says: ${appMessageInEnglish(naming.reasonNotNameable)}` : ''}`);
    } else if (appName !== null) {
      const namesItRight = checkAppNameAgainstBlueBook(results, { appName, preferredName, kindOfName, otherNames, notNames, example });
      // The answer checker marks answers against the app's own name, so it is only checked
      // once that name is right (otherwise its failures would repeat the one above).
      if (namesItRight) checkAnswerChecker(results, { appName, preferredName, kindOfName, otherNames, notNames });
    }
  }

  // Other names: the app reads them as the same molecule, when it can read them at all.
  const referenceSkeleton = formulaSkeleton ?? nameSkeleton;
  const referenceFingerprint = referenceSkeleton ? fingerprintOf(results, `reading "${preferredName}"`, referenceSkeleton) : null;
  for (const otherName of otherNames) {
    if (referenceFingerprint === null) break;
    const reading = readName(results, otherName);
    if (!reading || reading.notRead) continue;
    const fingerprint = fingerprintOf(results, `reading "${otherName}"`, reading.carbonSkeleton);
    if (fingerprint === null) continue;
    results.check('name in', fingerprint === referenceFingerprint, RESULT_KINDS.wrong, `the app reads "${otherName}" as a different molecule from "${preferredName}"`);
  }
}

/** Name out: the app's own name for the example is exactly the Blue Book's preferred name. Returns whether it is. */
function checkAppNameAgainstBlueBook(results, { appName, preferredName, kindOfName, otherNames, notNames, example }) {
  if (appName === preferredName) return results.check('name out', true);
  const sameIgnoringCase = (first, second) => first.toLowerCase() === second.toLowerCase();
  if (notNames.some((notName) => sameIgnoringCase(notName, appName))) {
    results.check('name out', false, RESULT_KINDS.wrong, `the Blue Book's ${kindOfName} is "${preferredName}" and says not "${appName}", but the app names ${describeExample(example)} "${appName}"`);
  } else if (otherNames.some((otherName) => sameIgnoringCase(otherName, appName))) {
    results.check('name out', false, RESULT_KINDS.notThePin, `the Blue Book's ${kindOfName} is "${preferredName}", but the app names ${describeExample(example)} "${appName}", a name the Blue Book gives only as an alternative`);
  } else if (!hasStereodescriptors(preferredName) && hasStereodescriptors(appName) && withoutStereodescriptors(appName) === preferredName.toLowerCase()) {
    results.check('name out', false, RESULT_KINDS.notSupported, `the Blue Book's ${kindOfName} "${preferredName}" doesn't say which way round its C=C bonds are, but the app can only show each C=C as E or Z, so it names it "${appName}"`);
  } else {
    results.check('name out', false, RESULT_KINDS.wrong, `for ${describeExample(example)} the Blue Book's ${kindOfName} is "${preferredName}", but the app names it "${appName}"`);
  }
}

/**
 * Marking answers: the answer checker accepts the preferred name, never accepts a name the
 * Blue Book says is not used, and doesn't accept another name as if it were the preferred one.
 */
function checkAnswerChecker(results, { appName, preferredName, kindOfName, otherNames, notNames }) {
  const mark = (answer) => callApp(results, `marking the answer "${answer}"`, () => checkStudentAnswer(answer, appName)).value ?? null;

  const markingPreferred = mark(preferredName);
  if (markingPreferred) {
    results.check('answer checker', markingPreferred.verdict === ANSWER_VERDICTS.correct, RESULT_KINDS.wrong, `the answer checker marks the ${kindOfName} "${preferredName}" as wrong`);
  }
  for (const notName of notNames) {
    const marking = mark(notName);
    if (!marking) continue;
    results.check('answer checker', marking.verdict !== ANSWER_VERDICTS.correct, RESULT_KINDS.wrong, `the answer checker accepts "${notName}", which the Blue Book says is not to be used (the ${kindOfName} is "${preferredName}")`);
  }
  for (const otherName of otherNames) {
    const marking = mark(otherName);
    if (!marking) continue;
    const acceptedAsPreferred = marking.verdict === ANSWER_VERDICTS.correct && !marking.note;
    results.check('answer checker', !acceptedAsPreferred, RESULT_KINDS.notThePin, `the answer checker accepts "${otherName}" as the right answer without saying the ${kindOfName} is "${preferredName}"`);
  }
}

/**
 * The fingerprint of a substituent group, with its stand-ins (see substituentGroups.js) marked
 * by filling them up with iodine, so a group isn't mistaken for another that makes the same
 * molecule when joined somewhere else.
 */
function fingerprintOfGroup(results, description, group) {
  let skeleton = group.carbonSkeleton;
  for (const atomId of group.standInAtomIds) {
    while (carbonHasRoomForGroup(skeleton, atomId, 'I')) skeleton = addGroupToCarbon(skeleton, atomId, 'I');
  }
  return fingerprintOf(results, description, skeleton);
}

function readGroupFormula(results, formula) {
  const { value: reading, crashed } = callApp(results, `reading the group formula ${formula}`, () => readSubstituentGroupFormula(formula));
  if (crashed) return null;
  return reading.group ? reading : { notRead: true, reason: appMessageInEnglish(reading.errorMessage) };
}

function readPrefix(results, prefix) {
  const { value: reading, crashed } = callApp(results, `reading the prefix "${prefix}"`, () => readSubstituentPrefix(prefix));
  if (crashed) return null;
  return reading.group ? reading : { notRead: true, reason: appMessageInEnglish(reading.errorMessage) };
}

/** True for a formula written with a free valence at one end, as the Blue Book writes a substituent group: CH3-CH2–, =O. */
const isGroupFormula = (formula) => /^\s*[–—−=≡>]|[–—−=≡<•]\s*$/.test(formula);

/**
 * An example of a substituent group's prefix, such as "2-methylpropoxy (preferred prefix)":
 * the app reads the prefix, and the group's formula as the same group, and names the group
 * with the Blue Book's prefix.
 */
function checkPrefixExample(results, example) {
  const preferredPrefix = example.preferredPrefix ?? example.preselectedPrefix;
  const kindOfPrefix = example.preferredPrefix ? 'preferred prefix' : 'preselected prefix';
  const notNames = example.notNames ?? [];

  // Prefix in: the prefix gives a group.
  const prefixReading = readPrefix(results, preferredPrefix);
  const prefixGroup = prefixReading && !prefixReading.notRead ? prefixReading.group : null;
  if (prefixReading) {
    results.check('prefix in', prefixGroup !== null, RESULT_KINDS.notSupported, `the app can't read the ${kindOfPrefix} "${preferredPrefix}"${prefixReading.reason ? ` (it says: ${prefixReading.reason})` : ''}`);
  }

  // Formula in: the group's formula gives the same group as the prefix.
  let formulaGroup = null;
  if (example.formula) {
    const formulaReading = readGroupFormula(results, example.formula);
    formulaGroup = formulaReading && !formulaReading.notRead ? formulaReading.group : null;
    if (formulaReading) {
      results.check('formula in', formulaGroup !== null, RESULT_KINDS.notSupported, `the app can't read the group formula ${example.formula}${formulaReading.reason ? ` (it says: ${formulaReading.reason})` : ''}`);
    }
    if (formulaGroup && prefixGroup) {
      const fromFormula = fingerprintOfGroup(results, `comparing ${example.formula} with "${preferredPrefix}"`, formulaGroup);
      const fromPrefix = fingerprintOfGroup(results, `comparing ${example.formula} with "${preferredPrefix}"`, prefixGroup);
      if (fromFormula !== null && fromPrefix !== null) {
        results.check('prefix in', fromFormula === fromPrefix, RESULT_KINDS.wrong, `reading the prefix "${preferredPrefix}" gives a different group from the formula ${example.formula}`);
      }
    }
  }

  // Prefix out: the app's prefix for the group (from the formula when it can read it) is the Blue Book's.
  const group = formulaGroup ?? prefixGroup;
  if (!group) {
    results.fail(RESULT_KINDS.notSupported, `the app can't name ${describeExample(example)} (${kindOfPrefix} "${preferredPrefix}"), as it can't read ${example.formula ? 'the prefix or the formula' : 'the prefix'}`);
    return;
  }
  const { value: naming, crashed } = callApp(results, `naming ${describeExample(example)}`, () => nameSubstituentGroup(group));
  if (crashed) return;
  if (!naming.isNameable) {
    results.check('prefix out', false, RESULT_KINDS.notSupported, `the app can't name ${describeExample(example)} (${kindOfPrefix} "${preferredPrefix}"): it says: ${appMessageInEnglish(naming.reasonNotNameable)}`);
  } else if (naming.prefix === preferredPrefix) {
    results.check('prefix out', true);
  } else if (notNames.includes(naming.prefix)) {
    results.check('prefix out', false, RESULT_KINDS.wrong, `the Blue Book's ${kindOfPrefix} is "${preferredPrefix}" and says not "${naming.prefix}", but the app gives "${naming.prefix}"`);
  } else {
    results.check('prefix out', false, RESULT_KINDS.wrong, `for ${describeExample(example)} the Blue Book's ${kindOfPrefix} is "${preferredPrefix}", but the app gives "${naming.prefix}"`);
  }
}

/**
 * An example of a suffix or ending on its own, such as "-sulfonimidamide (preselected suffix)":
 * the app gives the same suffix for the group its formula shows, or, with no formula, reads the
 * suffix and gives it back.
 */
function checkSuffixExample(results, example) {
  const suffix = example.suffix.replace(/^-/, '');
  if (example.formula) {
    const formulaReading = readGroupFormula(results, example.formula);
    if (!formulaReading) return;
    const group = formulaReading.notRead ? null : formulaReading.group;
    const described = group ? describeCharacteristicGroup(group) : null;
    if (!described) {
      results.check('suffix out', false, RESULT_KINDS.notSupported, `the app can't give a suffix for ${example.formula} yet ("${suffix}")`);
      return;
    }
    const appSuffixes =
      described.carbonIsInParent === null
        ? [suffixForCharacteristicGroup(described.groupKind)]
        : [suffixForCharacteristicGroup(described.groupKind, { carbonIsInParent: false }), suffixForCharacteristicGroup(described.groupKind, { carbonIsInParent: true })];
    results.check('suffix out', appSuffixes.includes(suffix), RESULT_KINDS.wrong, `for ${example.formula} the Blue Book's suffix is "${suffix}", but the app gives "${appSuffixes.join('" or "')}"`);
    return;
  }
  const { value: reading, crashed } = callApp(results, `reading the suffix "${suffix}"`, () => readCharacteristicGroupSuffix(suffix));
  if (crashed) return;
  if (!reading) {
    results.check('suffix out', false, RESULT_KINDS.notSupported, `the app can't give the suffix "${suffix}" yet`);
    return;
  }
  const written = suffixForCharacteristicGroup(reading.groupKind, reading);
  results.check('suffix out', written === suffix, RESULT_KINDS.wrong, `the app reads the suffix "${suffix}" but writes it as "${written}"`);
}

/**
 * A prefix given only by name, without a label, with its group's formula, such as isopropoxy for
 * (CH3)2CH-O–: the app reads it as the group the formula shows. Its name isn't checked, as it
 * isn't said to be the preferred prefix.
 */
function checkNamedGroupExample(results, example) {
  const prefixReading = readPrefix(results, example.name);
  if (!prefixReading) return;
  const readsIt = results.check('prefix in', !prefixReading.notRead, RESULT_KINDS.notSupported, `the app can't read the prefix "${example.name}"${prefixReading.reason ? ` (it says: ${prefixReading.reason})` : ''}`);
  const formulaReading = readGroupFormula(results, example.formula);
  if (!formulaReading) return;
  results.check('formula in', !formulaReading.notRead, RESULT_KINDS.notSupported, `the app can't read the group formula ${example.formula}${formulaReading.reason ? ` (it says: ${formulaReading.reason})` : ''}`);
  if (!readsIt || formulaReading.notRead) return;
  const fromPrefix = fingerprintOfGroup(results, `comparing "${example.name}" with ${example.formula}`, prefixReading.group);
  const fromFormula = fingerprintOfGroup(results, `comparing "${example.name}" with ${example.formula}`, formulaReading.group);
  if (fromPrefix !== null && fromFormula !== null) {
    results.check('prefix in', fromPrefix === fromFormula, RESULT_KINDS.wrong, `reading the prefix "${example.name}" gives a different group from the formula ${example.formula}`);
  }
}

/**
 * An example given only by name, without a label: the app should read it, and as the
 * molecule the Blue Book writes, if it writes one. Its name isn't checked, as the name given
 * isn't said to be the preferred one.
 */
function checkNamedExample(results, example) {
  const reading = readName(results, example.name);
  if (!reading) return;
  const readsIt = results.check('name in', !reading.notRead, RESULT_KINDS.notSupported, `the app can't read "${example.name}"${reading.reason ? ` (it says: ${reading.reason})` : ''}`);
  if (!example.formula) return;
  const formulaReading = readFormula(results, example.formula);
  if (!formulaReading) return;
  results.check('formula in', !formulaReading.notRead, RESULT_KINDS.notSupported, `the app can't read the formula ${example.formula}${formulaReading.reason ? ` (it says: ${formulaReading.reason})` : ''}`);
  if (!readsIt || formulaReading.notRead) return;
  const fromName = fingerprintOf(results, `comparing "${example.name}" with ${example.formula}`, reading.carbonSkeleton);
  const fromFormula = fingerprintOf(results, `comparing "${example.name}" with ${example.formula}`, formulaReading.carbonSkeleton);
  if (fromName !== null && fromFormula !== null) {
    results.check('name in', fromName === fromFormula, RESULT_KINDS.wrong, `reading "${example.name}" gives a different molecule from the formula ${example.formula}`);
  }
}

/**
 * Only "not" names, with no preferred name in the same example: the answer checker can't
 * know what molecule they are meant for, so the check is that the app never reads them as
 * a name it accepts as its own.
 */
function checkNotNamesOnly(results, example) {
  for (const notName of example.notNames) {
    const reading = readName(results, notName);
    if (!reading || reading.notRead) continue;
    results.check('name in', reading.typedNameIsCorrectIupacName !== true, RESULT_KINDS.wrong, `the app takes "${notName}" as the right name for a molecule, but the Blue Book says it is not to be used`);
  }
}

function checkExample(results, example) {
  if (example.pin || example.preselectedName) checkCompoundExample(results, example);
  else if (example.preferredPrefix || example.preselectedPrefix) checkPrefixExample(results, example);
  else if (example.suffix) checkSuffixExample(results, example);
  else if (example.name && example.formula && isGroupFormula(example.formula)) checkNamedGroupExample(results, example);
  else if (example.name) checkNamedExample(results, example);
  else if (example.notNames?.length) checkNotNamesOnly(results, example);
}

/** The worst kind among the failed checks. */
function worstKind(failed) {
  return KINDS_WORST_FIRST.find((kind) => failed.some((check) => check.kind === kind)) ?? null;
}

/**
 * A rule with examples: one test for the rule, failing if any check of any example fails.
 * `handWrittenChecks(results)` may add checks of the rule's wording that no example covers;
 * each calls results.check(functionName, passed, kind, sentence).
 */
export function checkRule(rule, examples, handWrittenChecks = null) {
  it(
    rule,
    ({ task }) => {
      const results = createResults(rule);
      // How each example came out: the worst kind of its failed checks, or supported.
      const exampleResults = {};
      for (const example of examples) {
        const failedBefore = results.failed.length;
        checkExample(results, example);
        const exampleKind = worstKind(results.failed.slice(failedBefore)) ?? 'supported';
        exampleResults[exampleKind] = (exampleResults[exampleKind] ?? 0) + 1;
      }
      if (handWrittenChecks) handWrittenChecks(results);
      const kind = worstKind(results.failed);
      task.meta.bluebookRule = {
        rule,
        result: kind ?? 'supported',
        checkCount: results.checkCount,
        failedChecks: results.failed.map(({ kind: checkKind, sentence }) => ({ kind: checkKind, sentence })),
        exampleCount: examples.length,
        exampleResults,
        functions: results.functions,
      };
      if (kind !== null) {
        const summary = `[${kind}] ${rule}: ${results.failed.length} of ${results.checkCount} checks failed`;
        throw new Error([summary, ...results.failed.map(({ sentence }) => sentence)].join('\n'));
      }
    },
    RULE_TIMEOUT,
  );
}

/** A section that is only a heading or a list of what follows: nothing to check, so it counts as supported. */
export function ruleIsHeadingOnly(rule) {
  it(rule, ({ task }) => {
    task.meta.bluebookRule = { rule, result: 'heading only', checkCount: 0, failedChecks: [], exampleCount: 0, exampleResults: {}, functions: {} };
  });
}

/** A rule with wording but no examples, and no checks written for it yet. */
export function noChecksYet(rule) {
  it.todo(`${rule}: no checks written yet`);
}
