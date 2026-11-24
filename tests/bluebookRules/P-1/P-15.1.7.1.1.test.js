/**
 * P-15.1.7.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The names of alkanes are either the retained names, methane, ethane, propane, and butane; or are
 * names formed systematically by adding the ending ‘ane’ to a basic multiplicative prefix, with
 * elision of the final letter ‘a’ of the multiplicative term (See Chapter P-2).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.1.7.1.1', [
  { pin: 'methane' },
  { pin: 'ethane' },
  { pin: 'propane' },
  { pin: 'butane' },
  { pin: 'pentane' },
  { pin: 'decane' },
]);
