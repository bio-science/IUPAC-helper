/**
 * The reporter for the Blue Book rule checks (`npm run rules`). Instead of printing every
 * failure, it saves:
 *   test-results/bluebook-rules.json          every rule's result, for `npm run rules:summary`
 *   test-results/bluebook-rules.log           one block for each rule with a problem, listing
 *                                             each failed check
 *   test-results/bluebook-rules-summary.txt   the totals and the lists of wrong and not-the-PIN rules
 * and prints only the first lines of the summary and where the files are.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import {
  LOG_FILE,
  RESULTS_FILE,
  RESULTS_FOLDER,
  SUMMARY_FILE,
  buildSummary,
  listEveryRuleResult,
  readRuleIndex,
  ruleNumberFromFile,
} from './ruleResults.js';

/** Files in the rule suite that are not rules, such as the check that every rule has a file. */
const isRuleFile = (file) => /[\\/]P-\d+[\\/]P-[\d.]+\.test\.js$/.test(file);

function chapterFromFile(file) {
  return file.split(/[\\/]/).at(-2);
}

/** A rule's result, from its one test. */
function readRuleResult(testModule) {
  const file = testModule.moduleId;
  const rule = ruleNumberFromFile(file);
  const chapter = chapterFromFile(file);
  const tests = [...testModule.children.allTests()];
  const base = { rule, chapter, file: testModule.relativeModuleId ?? file, checkCount: 0, passedCount: 0, failedChecks: [], exampleCount: 0, exampleResults: {}, functions: {} };
  const moduleErrors = testModule.errors?.() ?? [];
  if (tests.length === 0) {
    return { ...base, result: 'error', error: moduleErrors[0]?.message ?? 'the file has no test' };
  }
  const testCase = tests[0];
  const state = testCase.result().state;
  if (state === 'skipped' || state === 'pending') return { ...base, result: 'no checks yet' };
  const meta = testCase.meta().bluebookRule;
  if (!meta) {
    const error = testCase.result().errors?.[0]?.message ?? 'the test gave no result';
    return { ...base, result: 'error', error };
  }
  const failedCount = meta.failedChecks.length;
  const passedCount = meta.checkCount - failedCount;
  let result = meta.result;
  if (result === 'heading only') result = 'supported';
  else if (result === 'not supported' && passedCount > 0) result = 'partly supported';
  return { ...base, ...meta, result, passedCount, isHeadingOnly: meta.result === 'heading only' };
}

function writeLog(results) {
  const lines = [];
  for (const result of results) {
    if (result.result === 'supported' || result.result === 'no checks yet' || result.result === 'no file') continue;
    lines.push(`=== ${result.rule} [${result.result}] ===`);
    if (result.error) lines.push(result.error);
    for (const failed of result.failedChecks) lines.push(failed.sentence);
    lines.push('');
  }
  writeFileSync(LOG_FILE, lines.join('\n'));
}

export default class BluebookRulesReporter {
  onTestRunEnd(testModules, unhandledErrors) {
    const ruleIndex = readRuleIndex();
    const positionInBook = new Map(ruleIndex.map((entry, position) => [entry.number, position]));
    const results = testModules
      .filter((testModule) => isRuleFile(testModule.moduleId))
      .map(readRuleResult)
      .sort((first, second) => (positionInBook.get(first.rule) ?? Infinity) - (positionInBook.get(second.rule) ?? Infinity));
    const otherFiles = testModules
      .filter((testModule) => !isRuleFile(testModule.moduleId))
      .map((testModule) => ({ file: testModule.relativeModuleId ?? testModule.moduleId, passed: testModule.ok() }));
    const saved = {
      finishedAt: new Date().toISOString(),
      rules: results,
      otherFiles,
      unhandledErrors: unhandledErrors.map((error) => error?.message ?? String(error)),
    };

    mkdirSync(RESULTS_FOLDER, { recursive: true });
    writeFileSync(RESULTS_FILE, JSON.stringify(saved, null, 1));
    writeLog(listEveryRuleResult(saved, ruleIndex));
    const summary = buildSummary(saved, ruleIndex);
    writeFileSync(SUMMARY_FILE, summary.join('\n') + '\n');

    console.log(summary.slice(0, 3).join('\n'));
    for (const { file, passed } of otherFiles) if (!passed) console.log(`Failed: ${file} (not a rule; see its output with npx vitest run --project bluebook-rules ${file})`);
    if (saved.unhandledErrors.length > 0) console.log(`Errors outside the checks: ${saved.unhandledErrors.length} (in ${RESULTS_FILE})`);
    console.log(`Summary: ${SUMMARY_FILE}\nLog: ${LOG_FILE}\nMore: npm run rules:summary -- --help`);
  }
}
