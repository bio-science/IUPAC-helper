/**
 * `npm run rules`: runs the Blue Book rule checks and saves their results (see
 * tests/bluebookRules/reporter/bluebookRulesReporter.js). The checks are a map of what the
 * app supports, not a pass-or-fail test, so this always ends with exit code 0.
 *
 * Any arguments are passed on to Vitest, so `npm run rules -- tests/bluebookRules/P-3` runs
 * only chapter P-3 (the summary then counts the other rules as having no file).
 */
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);
const vitest = join(dirname(require.resolve('vitest/package.json')), 'vitest.mjs');
const REPORTER = './tests/bluebookRules/reporter/bluebookRulesReporter.js';

const run = spawnSync(process.execPath, [vitest, 'run', '--project', 'bluebook-rules', `--reporter=${REPORTER}`, ...process.argv.slice(2)], {
  stdio: 'inherit',
});
if (run.error) console.error(`The rule checks couldn't be started: ${run.error.message}`);
process.exit(0);
