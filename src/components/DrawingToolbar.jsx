/**
 * The Displayed / Skeletal view switch, in the bar under the drawing.
 */
import { DISPLAY_MODES } from './displayModes.js';
import { useTranslation } from '../languages/LanguageProvider.jsx';

export default function DrawingToolbar({ displayMode, onDisplayModeChosen }) {
  const t = useTranslation();
  return (
    <div className="button-group" role="group" aria-label={t('view.label')}>
      <button
        type="button"
        className={displayMode === DISPLAY_MODES.displayed ? 'button--selected' : ''}
        onClick={() => onDisplayModeChosen(DISPLAY_MODES.displayed)}
        title={t('view.displayedTitle')}
      >
        {t('view.displayed')}
      </button>
      <button
        type="button"
        className={displayMode === DISPLAY_MODES.skeletal ? 'button--selected' : ''}
        onClick={() => onDisplayModeChosen(DISPLAY_MODES.skeletal)}
        title={t('view.skeletalTitle')}
      >
        {t('view.skeletal')}
      </button>
    </div>
  );
}
