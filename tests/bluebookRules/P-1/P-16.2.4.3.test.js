/**
 * P-16.2.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hyphens separate the two parts of a fusion descriptor, i.e., numbers and italicized letters.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.2.4.3', [
  { pin: 'naphtho[1,2-a]azulene' },
]);
