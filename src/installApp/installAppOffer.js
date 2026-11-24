/**
 * Decides whether to offer to install the app on this device, and how.
 *
 * Installing adds IUPAC Helper to the device like an ordinary app, and it then works
 * offline (see offlineServiceWorker.js). Browsers differ in how they allow this:
 *
 *   Android (Chrome, Edge, Samsung Internet)  the page can open the browser's own install
 *                                              dialog, so it gets an "Install app" button.
 *   iPhone and iPad                            a page can't start the install, so the student
 *                                              is told once how to do it from the Share menu.
 *   Computers, or already installed           nothing is offered.
 */

export const INSTALL_OFFERS = {
  none: 'none',
  installButton: 'installButton',
  appleInstructions: 'appleInstructions',
};

/**
 * @param {object} device
 * @param {boolean} device.isRunningAsInstalledApp   opened from the installed app, not a browser tab
 * @param {boolean} device.hasTouchScreen            a phone or tablet rather than a computer
 * @param {boolean} device.isAppleMobileDevice       an iPhone, iPad or iPod
 * @param {boolean} device.browserCanOpenInstallDialog  the browser has offered its install dialog
 * @param {boolean} device.appleInstructionsAlreadySeen  the student has already closed the instructions once
 */
export function chooseInstallOffer({
  isRunningAsInstalledApp,
  hasTouchScreen,
  isAppleMobileDevice,
  browserCanOpenInstallDialog,
  appleInstructionsAlreadySeen,
}) {
  if (isRunningAsInstalledApp || !hasTouchScreen) return INSTALL_OFFERS.none;
  if (browserCanOpenInstallDialog) return INSTALL_OFFERS.installButton;
  if (isAppleMobileDevice && !appleInstructionsAlreadySeen) return INSTALL_OFFERS.appleInstructions;
  return INSTALL_OFFERS.none;
}

/** True when the page was opened from the installed app rather than in a browser tab. */
export function isRunningAsInstalledApp() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

/** True when the main way of pointing is a finger, as on phones and tablets (but not touchscreen laptops). */
export function hasTouchScreen() {
  return window.matchMedia('(pointer: coarse)').matches;
}

/** iPads describe themselves as Macs, so they are told apart by their touch screen. */
export function isAppleMobileDevice() {
  const { userAgent, maxTouchPoints } = window.navigator;
  return /iPhone|iPad|iPod/.test(userAgent) || (userAgent.includes('Macintosh') && maxTouchPoints > 1);
}

const APPLE_INSTRUCTIONS_SEEN_KEY = 'iupacHelper.appleInstallInstructionsSeen';

export function haveAppleInstructionsBeenSeen() {
  try {
    return window.localStorage.getItem(APPLE_INSTRUCTIONS_SEEN_KEY) === 'yes';
  } catch {
    return false; // Storage can be switched off, e.g. in some private browsing modes.
  }
}

export function rememberAppleInstructionsWereSeen() {
  try {
    window.localStorage.setItem(APPLE_INSTRUCTIONS_SEEN_KEY, 'yes');
  } catch {
    // Without storage the instructions may show again next time, which does no harm.
  }
}
