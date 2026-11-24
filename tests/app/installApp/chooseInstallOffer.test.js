import { describe, expect, it } from 'vitest';
import { chooseInstallOffer, INSTALL_OFFERS } from '../../../src/installApp/installAppOffer.js';

const androidPhoneInBrowser = {
  isRunningAsInstalledApp: false,
  hasTouchScreen: true,
  isAppleMobileDevice: false,
  browserCanOpenInstallDialog: true,
  appleInstructionsAlreadySeen: false,
};

const iPhoneInBrowser = { ...androidPhoneInBrowser, isAppleMobileDevice: true, browserCanOpenInstallDialog: false };

describe('chooseInstallOffer', () => {
  it('shows the Install app button on a phone whose browser can open its install dialog', () => {
    expect(chooseInstallOffer(androidPhoneInBrowser)).toBe(INSTALL_OFFERS.installButton);
  });

  it('waits for the browser to make its install dialog available', () => {
    expect(chooseInstallOffer({ ...androidPhoneInBrowser, browserCanOpenInstallDialog: false })).toBe(INSTALL_OFFERS.none);
  });

  it('offers nothing on a computer, even if the browser could install it', () => {
    expect(chooseInstallOffer({ ...androidPhoneInBrowser, hasTouchScreen: false })).toBe(INSTALL_OFFERS.none);
  });

  it('offers nothing inside the installed app', () => {
    expect(chooseInstallOffer({ ...androidPhoneInBrowser, isRunningAsInstalledApp: true })).toBe(INSTALL_OFFERS.none);
    expect(chooseInstallOffer({ ...iPhoneInBrowser, isRunningAsInstalledApp: true })).toBe(INSTALL_OFFERS.none);
  });

  it('tells iPhone and iPad users how to install, once', () => {
    expect(chooseInstallOffer(iPhoneInBrowser)).toBe(INSTALL_OFFERS.appleInstructions);
    expect(chooseInstallOffer({ ...iPhoneInBrowser, appleInstructionsAlreadySeen: true })).toBe(INSTALL_OFFERS.none);
  });
});
