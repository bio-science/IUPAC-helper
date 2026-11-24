import { useEffect, useState } from 'react';
import {
  chooseInstallOffer,
  hasTouchScreen,
  haveAppleInstructionsBeenSeen,
  isAppleMobileDevice,
  isRunningAsInstalledApp,
  rememberAppleInstructionsWereSeen,
} from '../installApp/installAppOffer.js';

/**
 * Which install offer to show (see src/installApp/installAppOffer.js), kept up to date as the
 * browser makes its install dialog available, and the actions for the offer's buttons.
 */
export function useInstallAppOffer() {
  /** The browser's install dialog, waiting to be opened. Each one can only be opened once. */
  const [waitingInstallDialog, setWaitingInstallDialog] = useState(null);
  const [isInstalled, setIsInstalled] = useState(isRunningAsInstalledApp);
  const [appleInstructionsAlreadySeen, setAppleInstructionsAlreadySeen] = useState(haveAppleInstructionsBeenSeen);

  useEffect(() => {
    function handleInstallDialogAvailable(event) {
      event.preventDefault(); // Keep it for the Install app button, instead of the browser's own banner.
      setWaitingInstallDialog(event);
    }
    function handleAppInstalled() {
      setIsInstalled(true);
      setWaitingInstallDialog(null);
    }
    window.addEventListener('beforeinstallprompt', handleInstallDialogAvailable);
    window.addEventListener('appinstalled', handleAppInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleInstallDialogAvailable);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const installOffer = chooseInstallOffer({
    isRunningAsInstalledApp: isInstalled,
    hasTouchScreen: hasTouchScreen(),
    isAppleMobileDevice: isAppleMobileDevice(),
    browserCanOpenInstallDialog: waitingInstallDialog !== null,
    appleInstructionsAlreadySeen,
  });

  function openInstallDialog() {
    waitingInstallDialog?.prompt();
    setWaitingInstallDialog(null);
  }

  function closeAppleInstructions() {
    rememberAppleInstructionsWereSeen();
    setAppleInstructionsAlreadySeen(true);
  }

  return { installOffer, openInstallDialog, closeAppleInstructions };
}
