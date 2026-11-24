/**
 * Holds the language the page is shown in, and lets any component use it:
 *
 *   const t = useTranslation();
 *   t('practise.start')                              -> "Practise"
 *   t('omnibox.tooManyCarbons', { maxCarbons: 20 })  -> "This tool draws molecules with up to 20 carbons for now."
 *   t(namingResult.reasonNotNameable)                -> a message from the chemistry code, in words
 *
 * See translate.js for how sentences are looked up.
 */
import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { createTranslator } from './translate.js';
import { AVAILABLE_LANGUAGES, BUILT_IN_TRANSLATION, loadTranslation, rememberChosenLanguage } from './loadTranslation.js';

const LanguageContext = createContext(null);

/** startingLanguage is { code, translation }, already downloaded before the page is first drawn. */
export function LanguageProvider({ startingLanguage, children }) {
  const [currentLanguage, setCurrentLanguage] = useState(startingLanguage);
  const [languageBeingDownloaded, setLanguageBeingDownloaded] = useState(null);
  const [languageThatFailedToDownload, setLanguageThatFailedToDownload] = useState(null);
  /** The language picked most recently, so a slow download can't replace a later choice. */
  const latestChoice = useRef(startingLanguage.code);

  const translate = useMemo(
    () => createTranslator(currentLanguage.code, currentLanguage.translation, BUILT_IN_TRANSLATION),
    [currentLanguage],
  );

  // Tell the browser (and screen readers) which language the page is in, and translate the tab's title.
  useEffect(() => {
    document.documentElement.lang = currentLanguage.code;
    document.title = translate('app.title');
  }, [currentLanguage, translate]);

  async function chooseLanguage(languageCode) {
    latestChoice.current = languageCode;
    setLanguageThatFailedToDownload(null);
    setLanguageBeingDownloaded(languageCode);
    try {
      const translation = await loadTranslation(languageCode);
      if (latestChoice.current !== languageCode) return;
      setCurrentLanguage({ code: languageCode, translation });
      rememberChosenLanguage(languageCode);
    } catch (error) {
      if (latestChoice.current !== languageCode) return;
      console.warn(error);
      setLanguageThatFailedToDownload(languageCode);
    } finally {
      if (latestChoice.current === languageCode) setLanguageBeingDownloaded(null);
    }
  }

  const language = {
    translate,
    languageCode: currentLanguage.code,
    translation: currentLanguage.translation,
    availableLanguages: AVAILABLE_LANGUAGES,
    chooseLanguage,
    languageBeingDownloaded,
    languageThatFailedToDownload,
    forgetDownloadProblem: () => setLanguageThatFailedToDownload(null),
  };
  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>;
}

/** Everything about the current language, for the language picker. */
export function useLanguage() {
  return useContext(LanguageContext);
}

/** The function that puts things into words in the current language. */
export function useTranslation() {
  return useContext(LanguageContext).translate;
}
