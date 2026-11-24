import { describe, expect, it } from 'vitest';
import { createTranslator, matchBrowserLanguage, message, nameLanguageIn } from '../../../src/languages/translate.js';

const english = {
  languageNames: { cy: 'Welsh' },
  text: {
    greeting: 'Hello',
    isomers: { one: '{count} isomer', other: '{count} isomers' },
    named: 'Its name is {name}.',
    onlyInEnglish: 'Only in English',
  },
};
const german = {
  text: {
    greeting: 'Hallo',
    isomers: { one: '{count} Isomer', other: '{count} Isomere' },
    named: 'Sein Name ist {name}.',
  },
};

describe('createTranslator', () => {
  const t = createTranslator('de', german, english);

  it('looks up a sentence in the chosen language', () => {
    expect(t('greeting')).toBe('Hallo');
  });

  it('fills in the gaps', () => {
    expect(t('named', { name: 'Butan' })).toBe('Sein Name ist Butan.');
  });

  it('chooses the plural form from {count}', () => {
    expect(t('isomers', { count: 1 })).toBe('1 Isomer');
    expect(t('isomers', { count: 3 })).toBe('3 Isomere');
  });

  it('puts a message from the chemistry code into words', () => {
    expect(t(message('named', { name: 'Propan' }))).toBe('Sein Name ist Propan.');
  });

  it('falls back to English for anything not yet translated', () => {
    expect(t('onlyInEnglish')).toBe('Only in English');
  });

  it('shows the key itself if no language has the sentence', () => {
    expect(t('missing.sentence')).toBe('missing.sentence');
  });

  it('gives pieces, so a gap can hold something that is not text', () => {
    const picture = { aPicture: true };
    expect(t.intoParts('named', { name: picture })).toEqual(['Sein Name ist ', picture, '.']);
  });

  it('puts a message in a gap into words first', () => {
    expect(t('named', { name: message('onlyInEnglish') })).toBe('Sein Name ist Only in English.');
  });

  it('uses the "other" form when a language has no form for that number', () => {
    const japanese = { text: { isomers: { other: '異性体 {count} 個' } } };
    expect(createTranslator('ja', japanese, english)('isomers', { count: 1 })).toBe('異性体 1 個');
  });
});

describe('nameLanguageIn', () => {
  it('uses the translation\'s own name for a language', () => {
    expect(nameLanguageIn(english, 'cy', 'en-GB', 'Cymraeg')).toBe('Welsh');
  });

  it('falls back to the browser, then to the language\'s own name', () => {
    const name = nameLanguageIn({}, 'de', 'en', 'Deutsch');
    expect(['German', 'Deutsch']).toContain(name);
  });
});

describe('matchBrowserLanguage', () => {
  const available = ['cy', 'de', 'en-GB', 'es', 'ja', 'zh-CN'];

  it('matches a language exactly', () => {
    expect(matchBrowserLanguage(['de'], available)).toBe('de');
    expect(matchBrowserLanguage(['zh-CN'], available)).toBe('zh-CN');
  });

  it('matches the main language when the country differs', () => {
    expect(matchBrowserLanguage(['en-US'], available)).toBe('en-GB');
    expect(matchBrowserLanguage(['es-MX'], available)).toBe('es');
    expect(matchBrowserLanguage(['de-AT'], available)).toBe('de');
  });

  it('prefers the browser\'s first choice, even when only its main language matches', () => {
    expect(matchBrowserLanguage(['en-US', 'de'], available)).toBe('en-GB');
  });

  it('moves on to the browser\'s next choice when the first is not available', () => {
    expect(matchBrowserLanguage(['fr-FR', 'fr', 'cy-GB'], available)).toBe('cy');
  });

  it('ignores capital letters', () => {
    expect(matchBrowserLanguage(['EN-gb'], available)).toBe('en-GB');
  });

  it('finds nothing when no language matches', () => {
    expect(matchBrowserLanguage(['fr', 'it'], available)).toBeNull();
  });
});
