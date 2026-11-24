/**
 * The line under the drawing: what the app is and that names follow the IUPAC Recommendations.
 *
 * On a phone held upright it is cut down to one line so the drawing gets the room, and tapping
 * it shows the whole text (see app.css). Elsewhere the whole text always shows.
 */
import { useState } from 'react';
import { useTranslation } from '../languages/LanguageProvider.jsx';
import { useMediaQuery } from '../hooks/useMediaQuery.js';
import { PHONE_UPRIGHT } from './screenSizes.js';

export default function Footer() {
  const t = useTranslation();
  const isPhoneUpright = useMediaQuery(PHONE_UPRIGHT);
  const [isExpanded, setIsExpanded] = useState(false);
  if (!isPhoneUpright) return <footer className="footer">{t('footer')}</footer>;
  return (
    <footer className="footer">
      <button
        type="button"
        className={`footer__text ${isExpanded ? 'footer__text--expanded' : ''}`}
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {t('footer')}
      </button>
    </footer>
  );
}
