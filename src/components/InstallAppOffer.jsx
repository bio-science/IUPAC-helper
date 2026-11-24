/**
 * Offers to install the app on phones and tablets, so it works offline: an "Install app"
 * button in the top-right corner, or on iPhone and iPad (where a page can't start the
 * install) a one-time note saying how. Shows nothing on computers or inside the installed app.
 */
import { Fragment } from 'react';
import { useInstallAppOffer } from '../hooks/useInstallAppOffer.js';
import { INSTALL_OFFERS } from '../installApp/installAppOffer.js';
import { useTranslation } from '../languages/LanguageProvider.jsx';

/** The iPhone Share symbol: a box with an arrow pointing up out of it. */
function ShareSymbol({ label }) {
  return (
    <svg className="apple-install-note__share-symbol" viewBox="0 0 16 20" aria-label={label}>
      <path d="M5 7H2.5v11.5h11V7H11M8 1.5v11M4.5 5 8 1.5 11.5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function InstallAppOffer() {
  const t = useTranslation();
  const { installOffer, openInstallDialog, closeAppleInstructions } = useInstallAppOffer();

  if (installOffer === INSTALL_OFFERS.installButton) {
    return (
      <button type="button" className="install-app-button" onClick={openInstallDialog} title={t('installApp.buttonTitle')}>
        {t('installApp.button')}
      </button>
    );
  }

  if (installOffer === INSTALL_OFFERS.appleInstructions) {
    const instructions = t.intoParts('installApp.appleNote', {
      useOffline: <strong>{t('installApp.appleUseOffline')}</strong>,
      shareSymbol: <ShareSymbol label={t('installApp.appleShareSymbol')} />,
      addToHomeScreen: <strong>{t('installApp.appleAddToHomeScreen')}</strong>,
    });
    return (
      <aside className="apple-install-note" role="dialog" aria-label={t('installApp.appleNoteLabel')}>
        <p>
          {instructions.map((part, index) => (
            <Fragment key={index}>{part}</Fragment>
          ))}
        </p>
        <button type="button" className="button--primary" onClick={closeAppleInstructions}>
          {t('installApp.appleGotIt')}
        </button>
      </aside>
    );
  }

  return null;
}
