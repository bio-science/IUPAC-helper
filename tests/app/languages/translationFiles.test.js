/**
 * Checks every translation the page offers against the British English one, so a new or
 * changed language can't quietly miss a sentence or a gap such as {count}. The ones in
 * src/languages/awaitingReview are not checked: they are not part of the app, and are not
 * kept up to date as the English changes.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const TRANSLATIONS_FOLDER = 'src/languages/translations';
const FLAGS_FOLDER = 'node_modules/flag-icons/flags/4x3';
const PLURAL_FORMS = ['zero', 'one', 'two', 'few', 'many', 'other'];

const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'));
const listLanguagesIn = (folder) =>
  existsSync(folder)
    ? readdirSync(folder)
        .filter((fileName) => fileName.endsWith('.json'))
        .map((fileName) => ({ code: fileName.replace(/\.json$/, ''), path: join(folder, fileName) }))
    : [];
const languagesShown = listLanguagesIn(TRANSLATIONS_FOLDER);
const britishEnglish = readJson(join(TRANSLATIONS_FOLDER, 'en-GB.json'));

const isPluralForms = (value) => typeof value === 'object' && Object.keys(value).every((key) => PLURAL_FORMS.includes(key));

/** Every sentence's key, e.g. "omnibox.placeholder", with its text (a string, or its plural forms). */
function listSentences(group, keyBefore = '') {
  return Object.entries(group).flatMap(([name, value]) => {
    const key = keyBefore ? `${keyBefore}.${name}` : name;
    return typeof value === 'string' || isPluralForms(value) ? [[key, value]] : listSentences(value, key);
  });
}

/** The gaps in a sentence, such as {count}, in every plural form together. */
function gapsIn(sentence) {
  const texts = typeof sentence === 'string' ? [sentence] : Object.values(sentence);
  return [...new Set(texts.flatMap((text) => [...text.matchAll(/\{(\w+)\}/g)].map((match) => match[1])))].sort();
}

const englishSentences = new Map(listSentences(britishEnglish.text));

describe.each(languagesShown)('the $code translation', ({ path }) => {
  const translation = readJson(path);
  const sentences = new Map(listSentences(translation.text));

  it('says what the language calls itself, and has a flag', () => {
    expect(translation.language.nativeName).toBeTruthy();
    expect(existsSync(join(FLAGS_FOLDER, `${translation.language.flag}.svg`))).toBe(true);
  });

  it('names every language the page offers', () => {
    expect(Object.keys(translation.languageNames ?? {})).toEqual(expect.arrayContaining(languagesShown.map(({ code }) => code)));
  });

  it('has every sentence, and nothing extra', () => {
    expect([...sentences.keys()].sort()).toEqual([...englishSentences.keys()].sort());
  });

  it('has the same gaps as the English in every sentence', () => {
    for (const [key, englishSentence] of englishSentences) {
      if (!sentences.has(key)) continue;
      expect(gapsIn(sentences.get(key)), key).toEqual(gapsIn(englishSentence));
    }
  });

  it('gives every plural sentence an "other" form', () => {
    for (const [key, sentence] of sentences) {
      if (typeof sentence !== 'string') expect(sentence.other, key).toBeTruthy();
    }
  });
});

describe('the code', () => {
  /** Every key the code asks for: t('...'), t.intoParts('...') and message('...'). */
  function listKeysUsedIn(folder) {
    return readdirSync(folder, { recursive: true })
      .filter((file) => /\.jsx?$/.test(file))
      .flatMap((file) => [...readFileSync(join(folder, file), 'utf8').matchAll(/\b(?:t|t\.intoParts|message)\('([\w.]+)'/g)])
      .map((match) => match[1]);
  }

  it('only asks for sentences that are in the English translation', () => {
    const missing = listKeysUsedIn('src').filter((key) => !englishSentences.has(key));
    expect(missing).toEqual([]);
  });
});
