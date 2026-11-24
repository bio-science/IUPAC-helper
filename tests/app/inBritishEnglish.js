import britishEnglish from '../../src/languages/translations/en-GB.json';
import { createTranslator } from '../../src/languages/translate.js';

/** Puts a message from the chemistry code into words, as the page does in British English. */
export const inBritishEnglish = createTranslator('en-GB', britishEnglish, britishEnglish);
