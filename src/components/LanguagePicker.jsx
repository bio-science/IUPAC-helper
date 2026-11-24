/**
 * The language picker in the top-right corner: the current language's flag and a down arrow.
 * Clicking it opens a list of every language, one per row:
 *
 *   [flag]  Welsh  |  Cymraeg
 *           ^ in the current language   ^ in its own language
 *
 * The list is drawn here rather than with the browser's own drop-down, so it can show flags
 * and look the same everywhere. It works with the keyboard too: the arrow keys move through
 * the list, Enter or Space picks, and Esc closes it.
 *
 * With only one language there is nothing to pick, so the picker isn't shown at all. It
 * appears by itself once a second file is added to src/languages/translations.
 */
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../languages/LanguageProvider.jsx';
import { nameLanguageIn } from '../languages/translate.js';

function DownArrow({ isOpen }) {
  return (
    <svg className={`language-picker__arrow ${isOpen ? 'language-picker__arrow--open' : ''}`} viewBox="0 0 10 6" aria-hidden="true">
      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Flag({ language }) {
  return <img className="language-picker__flag" src={language.flagAddress} alt="" width="24" height="18" />;
}

export default function LanguagePicker() {
  const {
    translate: t,
    languageCode,
    translation,
    availableLanguages,
    chooseLanguage,
    languageBeingDownloaded,
    languageThatFailedToDownload,
    forgetDownloadProblem,
  } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const pickerReference = useRef(null);
  const buttonReference = useRef(null);
  const listReference = useRef(null);

  const currentLanguage = availableLanguages.find(({ code }) => code === languageCode);
  const nameInCurrentLanguage = (language) => nameLanguageIn(translation, language.code, languageCode, language.nativeName);
  const optionId = (language) => `language-option-${language.code}`;

  function openList() {
    forgetDownloadProblem();
    setHighlightedIndex(Math.max(0, availableLanguages.indexOf(currentLanguage)));
    setIsOpen(true);
  }

  function closeList({ returnFocusToButton }) {
    setIsOpen(false);
    if (returnFocusToButton) buttonReference.current?.focus();
  }

  function pickLanguage(language) {
    closeList({ returnFocusToButton: true });
    if (language.code !== languageCode) chooseLanguage(language.code);
  }

  // While the list is open, it takes the keyboard, and clicking anywhere else closes it.
  useEffect(() => {
    if (!isOpen) return undefined;
    listReference.current?.focus();
    function handlePointerDown(pointerEvent) {
      if (!pickerReference.current?.contains(pointerEvent.target)) closeList({ returnFocusToButton: false });
    }
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isOpen]);

  // Keep the highlighted row in sight when the list is long enough to scroll.
  useEffect(() => {
    if (!isOpen) return;
    document.getElementById(optionId(availableLanguages[highlightedIndex]))?.scrollIntoView({ block: 'nearest' });
  }, [isOpen, highlightedIndex, availableLanguages]);

  function handleButtonKeyDown(keyboardEvent) {
    if (keyboardEvent.key === 'ArrowDown' || keyboardEvent.key === 'ArrowUp') {
      keyboardEvent.preventDefault();
      openList();
    }
  }

  function handleListKeyDown(keyboardEvent) {
    const lastIndex = availableLanguages.length - 1;
    const moveHighlightTo = (index) => {
      keyboardEvent.preventDefault();
      setHighlightedIndex(Math.min(lastIndex, Math.max(0, index)));
    };
    switch (keyboardEvent.key) {
      case 'ArrowDown':
        return moveHighlightTo(highlightedIndex + 1);
      case 'ArrowUp':
        return moveHighlightTo(highlightedIndex - 1);
      case 'Home':
        return moveHighlightTo(0);
      case 'End':
        return moveHighlightTo(lastIndex);
      case 'Enter':
      case ' ':
        keyboardEvent.preventDefault();
        return pickLanguage(availableLanguages[highlightedIndex]);
      case 'Escape':
        keyboardEvent.preventDefault();
        keyboardEvent.stopPropagation();
        return closeList({ returnFocusToButton: true });
      case 'Tab':
        return closeList({ returnFocusToButton: false });
      default:
        return undefined;
    }
  }

  if (availableLanguages.length < 2) return null;

  return (
    <div className="language-picker" ref={pickerReference}>
      <button
        type="button"
        ref={buttonReference}
        className="language-picker__button"
        onClick={() => (isOpen ? closeList({ returnFocusToButton: false }) : openList())}
        onKeyDown={handleButtonKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t('languagePicker.buttonLabel', { language: nameInCurrentLanguage(currentLanguage) })}
        title={t('languagePicker.listLabel')}
        aria-busy={languageBeingDownloaded !== null}
      >
        <Flag language={currentLanguage} />
        <DownArrow isOpen={isOpen} />
      </button>

      {isOpen && (
        <ul
          className="language-picker__list"
          ref={listReference}
          role="listbox"
          tabIndex={-1}
          aria-label={t('languagePicker.listLabel')}
          aria-activedescendant={optionId(availableLanguages[highlightedIndex])}
          onKeyDown={handleListKeyDown}
        >
          {availableLanguages.map((language, index) => (
            <li
              key={language.code}
              id={optionId(language)}
              role="option"
              aria-selected={language.code === languageCode}
              className={`language-picker__option ${index === highlightedIndex ? 'language-picker__option--highlighted' : ''}`}
              onClick={() => pickLanguage(language)}
              onPointerMove={() => setHighlightedIndex(index)}
            >
              <Flag language={language} />
              <span>{nameInCurrentLanguage(language)}</span>
              <span className="language-picker__divider" aria-hidden="true" />
              <span className="language-picker__native-name" lang={language.code}>
                {language.nativeName}
              </span>
            </li>
          ))}
        </ul>
      )}

      {!isOpen && languageThatFailedToDownload && (
        <p className="language-picker__problem" role="alert">
          {t('languagePicker.couldNotLoad')}
        </p>
      )}
    </div>
  );
}
