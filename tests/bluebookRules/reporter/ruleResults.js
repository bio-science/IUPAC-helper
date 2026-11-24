/**
 * The Blue Book rule results: where they are saved, and the summary made from them. Used by
 * the reporter that saves them (bluebookRulesReporter.js) and by `npm run rules:summary`
 * (scripts/showRuleResults.js).
 */
import { existsSync, readFileSync } from 'node:fs';

export const RESULTS_FOLDER = 'test-results';
export const RESULTS_FILE = `${RESULTS_FOLDER}/bluebook-rules.json`;
export const LOG_FILE = `${RESULTS_FOLDER}/bluebook-rules.log`;
export const SUMMARY_FILE = `${RESULTS_FOLDER}/bluebook-rules-summary.txt`;
export const RULE_INDEX_FILE = 'tests/bluebookRules/ruleIndex.json';

/**
 * What a rule's result can be:
 *   supported         every check passes (or the section is only a heading)
 *   partly supported  some checks pass, and the rest fail only because the app can't do it yet
 *   not supported     no check passes, as the app can't do any of it yet
 *   wrong             at least one check finds the app gives a wrong answer
 *   not the PIN       at least one check finds the app gives or accepts a name that isn't the PIN
 *   no checks yet     the rule's file has no checks yet
 *   no file           the rule is in the index but has no file, or its file didn't run
 *   error             the rule's file couldn't be run (a mistake in the file itself)
 */
export const RULE_RESULTS = ['supported', 'partly supported', 'not supported', 'wrong', 'not the PIN', 'no checks yet', 'no file', 'error'];

export const CHECKED_FUNCTIONS = ['name in', 'formula in', 'name out', 'answer checker', 'prefix in', 'prefix out', 'suffix out'];

/** The rule a result is for, as P-31.1.1.1, from its file's name. */
export function ruleNumberFromFile(file) {
  return file.split(/[\\/]/).pop().replace(/\.test\.js$/, '');
}

export function readRuleIndex() {
  return JSON.parse(readFileSync(RULE_INDEX_FILE, 'utf8')).rules;
}

export function readSavedResults() {
  if (!existsSync(RESULTS_FILE)) return null;
  return JSON.parse(readFileSync(RESULTS_FILE, 'utf8'));
}

/** Every rule in the index with its result, including those with no file or no result. */
export function listEveryRuleResult(savedResults, ruleIndex) {
  const resultByRule = new Map(savedResults.rules.map((result) => [result.rule, result]));
  return ruleIndex.map(
    (entry) =>
      resultByRule.get(entry.number) ?? {
        rule: entry.number,
        chapter: entry.chapter,
        result: 'no file',
        checkCount: 0,
        passedCount: 0,
        failedChecks: [],
        exampleCount: entry.exampleCount,
        exampleResults: {},
        functions: {},
      },
  );
}

function formatNumber(number) {
  return number.toLocaleString('en-GB');
}

/** The first failed check of the given kind, without its "[kind] P-…: " start, cut to fit on a line. */
function firstSentenceOfKind(result, kind) {
  const check = result.failedChecks.find((failed) => failed.kind === kind);
  if (!check) return '';
  const sentence = check.sentence.replace(/^\[[^\]]+\] [^:]+: /, '');
  return sentence.length > 160 ? `${sentence.slice(0, 157)}…` : sentence;
}

/** One line for a rule in a list: its number, how many checks failed, and the first one. */
export function describeRuleOnOneLine(result, kind = result.result === 'partly supported' ? 'not supported' : result.result) {
  const failedOfKind = result.failedChecks.filter((failed) => failed.kind === kind).length;
  const counts = result.checkCount > 0 ? `${failedOfKind} of ${result.checkCount} checks` : '';
  return `  ${result.rule.padEnd(18)} ${counts.padEnd(17)} ${firstSentenceOfKind(result, kind) || result.error || ''}`.trimEnd();
}

/** The summary of a run, as lines of text. */
export function buildSummary(savedResults, ruleIndex) {
  const results = listEveryRuleResult(savedResults, ruleIndex);
  const countOf = (result) => results.filter((each) => each.result === result).length;
  const lines = [];
  lines.push(
    `Blue Book rules: ${formatNumber(results.length)} | ` +
      RULE_RESULTS.map((result) => `${result} ${formatNumber(countOf(result))}`).join(' | '),
  );

  const exampleTotals = {};
  for (const result of results) {
    for (const [kind, count] of Object.entries(result.exampleResults ?? {})) exampleTotals[kind] = (exampleTotals[kind] ?? 0) + count;
  }
  const exampleCount = Object.values(exampleTotals).reduce((sum, count) => sum + count, 0);
  lines.push(
    `Examples: ${formatNumber(exampleCount)} | ` +
      ['supported', 'not supported', 'wrong', 'not the PIN'].map((kind) => `${kind} ${formatNumber(exampleTotals[kind] ?? 0)}`).join(' | '),
  );

  const functionTotals = {};
  for (const result of results) {
    for (const [name, { passed, total }] of Object.entries(result.functions ?? {})) {
      functionTotals[name] ??= { passed: 0, total: 0 };
      functionTotals[name].passed += passed;
      functionTotals[name].total += total;
    }
  }
  lines.push(
    'Checks passing, by function: ' +
      CHECKED_FUNCTIONS.map((name) => `${name} ${formatNumber(functionTotals[name]?.passed ?? 0)}/${formatNumber(functionTotals[name]?.total ?? 0)}`).join(' | '),
  );
  lines.push(`Run: ${savedResults.finishedAt}`);

  const wrong = results.filter((result) => result.result === 'wrong' || result.result === 'error');
  lines.push('', `Wrong (fix first): ${wrong.length}`);
  for (const result of wrong) lines.push(describeRuleOnOneLine(result, result.result === 'error' ? 'error' : 'wrong'));

  const notThePin = results.filter((result) => result.failedChecks.some((failed) => failed.kind === 'not the PIN'));
  lines.push('', `Not the PIN (A-level or general nomenclature names): ${notThePin.length}`);
  for (const result of notThePin) lines.push(describeRuleOnOneLine(result, 'not the PIN'));

  lines.push('', 'By chapter (rules supported / partly / not supported / wrong / not the PIN / no checks yet, of all rules):');
  const chapters = [...new Set(results.map((result) => result.chapter))];
  for (const chapter of chapters) {
    const inChapter = results.filter((result) => result.chapter === chapter);
    const count = (result) => inChapter.filter((each) => each.result === result).length;
    lines.push(
      `  ${chapter.padEnd(5)} ${['supported', 'partly supported', 'not supported', 'wrong', 'not the PIN', 'no checks yet'].map((result) => String(count(result)).padStart(4)).join(' ')}   of ${inChapter.length}`,
    );
  }
  return lines;
}
