/**
 * P-59.2.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “After suffixes, if there is a choice, low locants are assigned to ‘ene’ and ‘yne’ endings, and then
 * to detachable prefixes, if applicable.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-59.2.3.1', [
  { pin: '7,7,7-trifluorohept-1-en-4-one' },
]);
