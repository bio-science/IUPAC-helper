/**
 * Next to the Practise button while practising: what the practice molecules can have in them.
 *
 *   [Intro to Carbon Chemistry v]  [v]
 *    ^ a ready-made choice  ^ opens the tickboxes, one per feature (src/chemistry/practiceFeatures.js)
 *
 * Picking "Intro to Carbon Chemistry" or "All supported" ticks that preset's features. Changing a
 * tickbox by hand makes the choice read "Custom". Features practice can't make yet are listed
 * greyed out at the bottom. Changes show from the next molecule, so the student can tick
 * several without the molecule changing under them.
 */
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../languages/LanguageProvider.jsx';
import { GUESS_MODE_SETTINGS } from '../chemistry/generateRandomGuessMolecule.js';
import {
  canChangePracticeFeature,
  countFeaturesNeeded,
  findFeatureToTickFirst,
  findPracticePreset,
  isPracticeFeatureInUse,
  PRACTICE_FEATURES,
  PRACTICE_PRESETS,
  togglePracticeFeature,
} from '../chemistry/practiceFeatures.js';

const CUSTOM = 'custom';

/** The gaps some feature names have, such as the chain lengths of "Long main chains". */
const FEATURE_TEXT_VALUES = {
  longChains: { from: GUESS_MODE_SETTINGS.longestMainChain + 1, to: GUESS_MODE_SETTINGS.longestMainChainWithLongChains },
};

function DownArrow({ isOpen }) {
  return (
    <svg className={`practise-options__arrow ${isOpen ? 'practise-options__arrow--open' : ''}`} viewBox="0 0 10 6" aria-hidden="true">
      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PractiseOptions({ tickedFeatureIds, onTickedFeaturesChange }) {
  const t = useTranslation();
  const [isListOpen, setIsListOpen] = useState(false);
  const optionsReference = useRef(null);
  const arrowButtonReference = useRef(null);
  const presetName = findPracticePreset(tickedFeatureIds) ?? CUSTOM;

  // While the tickboxes are open, clicking anywhere else or pressing Esc closes them.
  useEffect(() => {
    if (!isListOpen) return undefined;
    function handlePointerDown(pointerEvent) {
      if (!optionsReference.current?.contains(pointerEvent.target)) setIsListOpen(false);
    }
    function handleKeyDown(keyboardEvent) {
      if (keyboardEvent.key !== 'Escape') return;
      setIsListOpen(false);
      arrowButtonReference.current?.focus();
    }
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isListOpen]);

  function featureTitle(feature) {
    if (!feature.isSupported) return t('practise.options.notYetTitle');
    if (canChangePracticeFeature(tickedFeatureIds, feature.id)) return undefined;
    const featureToTickFirst = findFeatureToTickFirst(tickedFeatureIds, feature.id);
    if (featureToTickFirst) return t('practise.options.needsFeatureTitle', { feature: t(`practise.features.${featureToTickFirst}`) });
    return t('practise.options.lastKindTitle');
  }

  function renderFeature(feature) {
    return (
      <li
        key={feature.id}
        className={feature.needsFeature ? 'practise-options__feature--needs-another' : undefined}
        style={feature.needsFeature ? { '--features-needed': countFeaturesNeeded(feature.id) } : undefined}
      >
        <label className="practise-options__feature" title={featureTitle(feature)}>
          <input
            type="checkbox"
            checked={isPracticeFeatureInUse(tickedFeatureIds, feature.id)}
            disabled={!canChangePracticeFeature(tickedFeatureIds, feature.id)}
            onChange={() => onTickedFeaturesChange(togglePracticeFeature(tickedFeatureIds, feature.id))}
          />
          <span>{t(`practise.features.${feature.id}`, FEATURE_TEXT_VALUES[feature.id])}</span>
        </label>
      </li>
    );
  }

  return (
    <div className="practise-options" ref={optionsReference}>
      <select
        className="practise-options__preset"
        value={presetName}
        onChange={(changeEvent) => onTickedFeaturesChange(PRACTICE_PRESETS[changeEvent.target.value])}
        aria-label={t('practise.options.presetLabel')}
        title={t('practise.options.presetLabel')}
      >
        {Object.keys(PRACTICE_PRESETS).map((name) => (
          <option key={name} value={name}>
            {t(`practise.options.presets.${name}`)}
          </option>
        ))}
        {presetName === CUSTOM && (
          <option value={CUSTOM} disabled>
            {t('practise.options.presets.custom')}
          </option>
        )}
      </select>
      <button
        type="button"
        ref={arrowButtonReference}
        className="practise-options__arrow-button"
        onClick={() => setIsListOpen((isOpen) => !isOpen)}
        aria-expanded={isListOpen}
        aria-controls="practise-options-features"
        aria-label={t('practise.options.featuresButtonLabel')}
        title={t('practise.options.featuresButtonLabel')}
      >
        <DownArrow isOpen={isListOpen} />
      </button>

      {isListOpen && (
        <div className="practise-options__panel" id="practise-options-features" role="group" aria-label={t('practise.options.featuresListLabel')}>
          <p className="practise-options__heading">{t('practise.options.featuresListLabel')}</p>
          <ul className="practise-options__features">{PRACTICE_FEATURES.filter(({ isSupported }) => isSupported).map(renderFeature)}</ul>
          <p className="practise-options__heading">{t('practise.options.notYetHeading')}</p>
          <ul className="practise-options__features practise-options__features--not-yet">
            {PRACTICE_FEATURES.filter(({ isSupported }) => !isSupported).map(renderFeature)}
          </ul>
          <p className="practise-options__note">{t('practise.options.appliesFromNext')}</p>
        </div>
      )}
    </div>
  );
}
