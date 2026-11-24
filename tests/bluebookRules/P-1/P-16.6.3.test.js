/**
 * P-16.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The italic element symbol H denotes indicated or added hydrogen.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.6.3', [
  { pin: '1H-azepine' },
  { pin: 'quinolin-2(1H)-one' },
]);
