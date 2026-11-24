/**
 * Starts the service worker that keeps a copy of the app on the device, so it works
 * offline (see offlineServiceWorker.js).
 *
 * In a browser tab, only the language in use is saved. Once the app is installed, every
 * language is saved, so any of them can be chosen offline.
 *
 * Only in the built site served from a web address: the dev server changes files all the
 * time, and browsers don't allow service workers for pages opened straight from disk.
 */
import { isRunningAsInstalledApp } from './installAppOffer.js';

function askServiceWorkerToSaveEveryLanguage() {
  navigator.serviceWorker.ready.then((registration) => registration.active?.postMessage('saveEveryLanguage'));
}

export function registerOfflineServiceWorker() {
  const canWorkOffline = import.meta.env.PROD && 'serviceWorker' in navigator && window.location.protocol.startsWith('http');
  if (!canWorkOffline) return;

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .then(() => {
        if (isRunningAsInstalledApp()) askServiceWorkerToSaveEveryLanguage();
      })
      .catch((error) => {
        console.warn('The app could not be saved for offline use.', error);
      });
  });
  window.addEventListener('appinstalled', askServiceWorkerToSaveEveryLanguage);
}
