/**
 * `npm run rules:summary`: shows the results of the last `npm run rules`, so nobody has to
 * read the whole log.
 *
 *   npm run rules:summary                              the summary
 *   npm run rules:summary -- --rule P-31.1.4.2.4       every failed check of one rule
 *   npm run rules:summary -- --chapter P-6             the rules of a chapter with a problem
 *   npm run rules:summary -- --kind wrong              the rules of one kind, one line each:
 *                                                      wrong, not-the-pin, not-supported,
 *                                                      partly-supported, no-checks-yet, error
 *   npm run rules:summary -- --function name-out       the failed checks of one of the app's functions:
 *                                                      name-in, formula-in, name-out, answer-checker,
 *                                                      prefix-out, suffix-out
 *   npm run rules:summary -- --next 20                 the 20 rules the app doesn't support yet
 *                                                      with the most examples (what to build next)
 */
import {
  CHECKED_FUNCTIONS,
  SUMMARY_FILE,
  buildSummary,
  describeRuleOnOneLine,
  listEveryRuleResult,
  readRuleIndex,
  readSavedResults,
} from '../tests/bluebookRules/reporter/ruleResults.js';

const KINDS_BY_OPTION = {
  wrong: 'wrong',
  'not-the-pin': 'not the PIN',
  'not-supported': 'not supported',
  'partly-supported': 'partly supported',
  'no-checks-yet': 'no checks yet',
  error: 'error',
};

/** The options for --function: name-in for the function called "name in" in the saved results. */
const FUNCTION_OPTIONS = Object.fromEntries(CHECKED_FUNCTIONS.map((name) => [name.replace(/ /g, '-'), name]));

function printHelp() {
  console.log(
    [
      'npm run rules:summary                          the summary',
      'npm run rules:summary -- --rule P-31.1.4.2.4   every failed check of one rule',
      'npm run rules:summary -- --chapter P-6         the rules of a chapter with a problem',
      `npm run rules:summary -- --kind wrong          one kind: ${Object.keys(KINDS_BY_OPTION).join(', ')}`,
      `npm run rules:summary -- --function name-out   one function: ${Object.keys(FUNCTION_OPTIONS).join(', ')}`,
      'npm run rules:summary -- --next 20             the rules not supported yet with the most examples',
    ].join('\n'),
  );
}

function printRule(results, rule) {
  const result = results.find((each) => each.rule === rule);
  if (!result) {
    console.log(`There is no rule ${rule} in tests/bluebookRules/ruleIndex.json.`);
    return;
  }
  console.log(`=== ${result.rule} [${result.result}] ===`);
  console.log(`${result.checkCount} checks, ${result.failedChecks.length} failed, ${result.exampleCount} examples`);
  if (result.error) console.log(result.error);
  for (const failed of result.failedChecks) console.log(failed.sentence);
}

function main() {
  const options = process.argv.slice(2);
  if (options.includes('--help')) {
    printHelp();
    return;
  }
  const saved = readSavedResults();
  if (!saved) {
    console.log('There are no results yet. Run `npm run rules` first.');
    return;
  }
  const ruleIndex = readRuleIndex();
  const results = listEveryRuleResult(saved, ruleIndex);
  const valueOf = (option) => {
    const position = options.indexOf(option);
    return position === -1 ? null : (options[position + 1] ?? '');
  };

  if (valueOf('--rule') !== null) {
    printRule(results, valueOf('--rule'));
  } else if (valueOf('--chapter') !== null) {
    const chapter = valueOf('--chapter');
    const withProblems = results.filter((result) => result.chapter === chapter && !['supported', 'no file'].includes(result.result));
    console.log(`${chapter}: ${withProblems.length} rules with a problem or no checks yet`);
    for (const result of withProblems) console.log(`${describeRuleOnOneLine(result)}  [${result.result}]`);
  } else if (valueOf('--kind') !== null) {
    const kind = KINDS_BY_OPTION[valueOf('--kind')];
    if (!kind) {
      console.log(`--kind can be: ${Object.keys(KINDS_BY_OPTION).join(', ')}`);
      return;
    }
    const ofKind = kind === 'not the PIN' ? results.filter((result) => result.failedChecks.some((failed) => failed.kind === kind)) : results.filter((result) => result.result === kind);
    console.log(`${kind}: ${ofKind.length} rules`);
    const checkKind = kind === 'partly supported' ? 'not supported' : kind;
    for (const result of ofKind) console.log(describeRuleOnOneLine(result, checkKind));
  } else if (valueOf('--function') !== null) {
    const functionName = FUNCTION_OPTIONS[valueOf('--function')];
    if (!functionName) {
      console.log(`--function can be: ${Object.keys(FUNCTION_OPTIONS).join(', ')}`);
      return;
    }
    const failing = results.filter((result) => {
      const counts = result.functions?.[functionName];
      return counts && counts.passed < counts.total;
    });
    console.log(`${functionName}: ${failing.length} rules with a failed check`);
    for (const result of failing) {
      const { passed, total } = result.functions[functionName];
      console.log(`  ${result.rule.padEnd(18)} ${passed}/${total} pass  [${result.result}]`);
    }
  } else if (valueOf('--next') !== null) {
    const count = Number(valueOf('--next')) || 20;
    const notYet = results
      .filter((result) => result.result === 'not supported' || result.result === 'partly supported')
      .sort((first, second) => (second.exampleResults?.['not supported'] ?? 0) - (first.exampleResults?.['not supported'] ?? 0))
      .slice(0, count);
    console.log(`The ${notYet.length} rules with the most examples the app doesn't support yet:`);
    for (const result of notYet) {
      console.log(`  ${result.rule.padEnd(18)} ${String(result.exampleResults?.['not supported'] ?? 0).padStart(3)} of ${result.exampleCount} examples not supported  ${describeRuleOnOneLine(result, 'not supported').slice(38)}`);
    }
  } else {
    console.log(buildSummary(saved, ruleIndex).join('\n'));
    console.log(`\n(also saved in ${SUMMARY_FILE}; npm run rules:summary -- --help for more)`);
  }
}

main();
