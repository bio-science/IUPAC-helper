/**
 * Looking up the words for the page in the chosen language.
 *
 * Each language has one file in src/languages/translations, and a language picker appears
 * on the page by itself once there is more than one. Its "text" holds every sentence the page shows, grouped by where
 * it appears, so "omnibox.placeholder" is the placeholder in the omnibox:
 *
 *   "omnibox": { "placeholder": "Type an alkane name ..." }
 *
 * Sentences can have gaps for numbers and names, written in braces: "Isomer {number}". A gap
 * can also be filled with another message, which is put into words first.
 * A sentence that changes with a number ("1 isomer", "2 isomers") is written once for each
 * plural form the language has (one, two, few, many, other: see
 * https://cldr.unicode.org/index/cldr-spec/plural-rules), and the form is chosen by {count}.
 *
 * Anything missing from a language is shown in British English instead.
 */

/**
 * Something to show the student, before it is put into words. The chemistry code returns
 * these instead of sentences, so they can be shown in whichever language is chosen:
 *   message('naming.chainTooLong', { chainLength: 11, maxCarbons: 10 })
 */
export function message(key, values = {}) {
  return { key, values };
}

/** True for something made by message(), rather than a number, a name or a picture. */
function isMessage(value) {
  return value !== null && typeof value === 'object' && typeof value.key === 'string' && typeof value.values === 'object' && !('$$typeof' in value);
}

function findTextInTranslation(translation, key) {
  return key.split('.').reduce((group, name) => group?.[name], translation?.text);
}

/**
 * Returns translate(key, values) or translate(message), which gives the sentence as a string.
 * translate.intoParts(key, values) gives it as a list of pieces instead, so that a gap can be
 * filled with something that isn't text, such as a bold word or a picture.
 */
export function createTranslator(languageCode, translation, fallbackTranslation) {
  const pluralRules = new Intl.PluralRules(languageCode);

  function findSentence(keyOrMessage, values) {
    const key = typeof keyOrMessage === 'string' ? keyOrMessage : keyOrMessage.key;
    const allValues = typeof keyOrMessage === 'string' ? values : { ...keyOrMessage.values, ...values };
    const text = findTextInTranslation(translation, key) ?? findTextInTranslation(fallbackTranslation, key) ?? key;
    const sentence = typeof text === 'string' ? text : (text[pluralRules.select(allValues.count ?? 0)] ?? text.other);
    return { sentence, allValues };
  }

  function intoParts(keyOrMessage, values = {}) {
    const { sentence, allValues } = findSentence(keyOrMessage, values);
    // Splitting on a bracketed pattern keeps the gap names, at every odd position.
    return sentence
      .split(/\{(\w+)\}/)
      .map((part, index) => {
        if (index % 2 === 0) return part;
        const value = allValues[part];
        return isMessage(value) ? translate(value) : (value ?? `{${part}}`);
      })
      .filter((part) => part !== '');
  }

  function translate(keyOrMessage, values = {}) {
    return intoParts(keyOrMessage, values).join('');
  }
  translate.intoParts = intoParts;
  return translate;
}

/**
 * The name of a language, written in another (the one the page is shown in). Taken from the
 * translation's "languageNames" if it has it, otherwise from the browser, otherwise the
 * language's own name for itself.
 */
export function nameLanguageIn(translation, languageCodeToName, pageLanguageCode, nativeName) {
  const fromTranslation = translation?.languageNames?.[languageCodeToName];
  if (fromTranslation) return fromTranslation;
  try {
    return new Intl.DisplayNames([pageLanguageCode], { type: 'language' }).of(languageCodeToName) ?? nativeName;
  } catch {
    return nativeName;
  }
}

/**
 * The best language for someone whose browser asks for browserLanguageCodes (most wanted
 * first, e.g. ['en-US', 'en', 'de']). Each one is tried in turn, first exactly, then by its
 * main language, so 'en-US' is given British English. Returns null if none is available.
 */
export function matchBrowserLanguage(browserLanguageCodes, availableLanguageCodes) {
  const mainLanguage = (code) => code.toLowerCase().split('-')[0];
  for (const browserCode of browserLanguageCodes) {
    const exactMatch = availableLanguageCodes.find((code) => code.toLowerCase() === browserCode.toLowerCase());
    if (exactMatch) return exactMatch;
    const sameMainLanguage = availableLanguageCodes.find((code) => mainLanguage(code) === mainLanguage(browserCode));
    if (sameMainLanguage) return sameMainLanguage;
  }
  return null;
}
