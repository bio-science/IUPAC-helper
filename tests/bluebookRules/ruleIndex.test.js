/**
 * Every numbered section of the Blue Book has a check file, and every check file is a
 * section in the index (tests/bluebookRules/ruleIndex.json).
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const RULES_FOLDER = 'tests/bluebookRules';
const { rules } = JSON.parse(readFileSync(join(RULES_FOLDER, 'ruleIndex.json'), 'utf8'));

const ruleFiles = readdirSync(RULES_FOLDER, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && /^P-\d+$/.test(entry.name))
  .flatMap((folder) => readdirSync(join(RULES_FOLDER, folder.name)).map((file) => `${RULES_FOLDER}/${folder.name}/${file}`));

describe('the Blue Book rule index', () => {
  it('has a file for every rule', () => {
    const missing = rules.filter((rule) => !existsSync(rule.file)).map((rule) => rule.number);
    expect(missing).toEqual([]);
  });

  it('has every file as a rule', () => {
    const inIndex = new Set(rules.map((rule) => rule.file));
    expect(ruleFiles.filter((file) => !inIndex.has(file))).toEqual([]);
  });

  it('has each rule once', () => {
    const numbers = rules.map((rule) => rule.number);
    expect(numbers.filter((number, position) => numbers.indexOf(number) !== position)).toEqual([]);
  });

  it('names each file after its rule and puts it in its chapter folder', () => {
    const misplaced = rules.filter((rule) => rule.file !== `${RULES_FOLDER}/${rule.chapter}/${rule.number}.test.js`).map((rule) => rule.number);
    expect(misplaced).toEqual([]);
  });
});
