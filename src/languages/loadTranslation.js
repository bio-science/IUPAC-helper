/**
 * Getting a language's translation onto the page, and remembering which language was chosen.
 *
 * British English is built into the page, so there is always something to show. Every other
 * language is its own small script, downloaded only when it is chosen (see
 * buildPlugins/languageFiles.js), or saved in advance when the app is installed.
 */
import { LANGUAGES, RECEIVE_TRANSLATION_FUNCTION } from 'virtual:language-files';
import britishEnglish from './translations/en-GB.json';
import { matchBrowserLanguage } from './translate.js';

export const BUILT_IN_LANGUAGE_CODE = 'en-GB';
export const BUILT_IN_TRANSLATION = britishEnglish;

/** Every language, sorted by its name for itself so the list is in the same order whichever is chosen. */
export const AVAILABLE_LANGUAGES = [...LANGUAGES].sort((first, second) => first.nativeName.localeCompare(second.nativeName, 'en'));

const CHOSEN_LANGUAGE_KEY = 'iupacHelper.language';

/** The translations downloaded so far, by language code. */
const translationsReceived = new Map([[BUILT_IN_LANGUAGE_CODE, britishEnglish]]);
/** The downloads still going, by language code, so a language is never downloaded twice at once. */
const downloadsInProgress = new Map();

// Each language script calls this with its translation as soon as it has loaded.
window[RECEIVE_TRANSLATION_FUNCTION] = (languageCode, translation) => {
  translationsReceived.set(languageCode, translation);
};

/** Resolves with the language's translation, or fails if it can't be downloaded (for example, offline). */
export function loadTranslation(languageCode) {
  if (translationsReceived.has(languageCode)) return Promise.resolve(translationsReceived.get(languageCode));
  if (downloadsInProgress.has(languageCode)) return downloadsInProgress.get(languageCode);

  const language = AVAILABLE_LANGUAGES.find(({ code }) => code === languageCode);
  if (!language) return Promise.reject(new Error(`There is no language "${languageCode}".`));

  const download = new Promise((resolveDownload, rejectDownload) => {
    const script = document.createElement('script');
    script.src = language.scriptAddress;
    script.onload = () => {
      script.remove();
      const translation = translationsReceived.get(languageCode);
      if (translation) resolveDownload(translation);
      else rejectDownload(new Error(`${language.scriptAddress} did not contain a translation.`));
    };
    script.onerror = () => {
      script.remove();
      rejectDownload(new Error(`${language.scriptAddress} could not be downloaded.`));
    };
    document.head.append(script);
  }).finally(() => downloadsInProgress.delete(languageCode));

  downloadsInProgress.set(languageCode, download);
  return download;
}

/** The language chosen last time, or the closest match to the browser's language, or British English. */
export function chooseStartingLanguageCode() {
  const availableCodes = AVAILABLE_LANGUAGES.map(({ code }) => code);
  const chosenLastTime = readChosenLanguage();
  if (availableCodes.includes(chosenLastTime)) return chosenLastTime;
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language ?? ''];
  return matchBrowserLanguage(browserLanguages, availableCodes) ?? BUILT_IN_LANGUAGE_CODE;
}

function readChosenLanguage() {
  try {
    return window.localStorage.getItem(CHOSEN_LANGUAGE_KEY);
  } catch {
    return null; // Storage can be switched off, e.g. in some private browsing modes.
  }
}

export function rememberChosenLanguage(languageCode) {
  try {
    window.localStorage.setItem(CHOSEN_LANGUAGE_KEY, languageCode);
  } catch {
    // Without storage the browser's language is used again next time, which does no harm.
  }
}
