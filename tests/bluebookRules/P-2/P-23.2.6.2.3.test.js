/**
 * P-23.2.6.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The number of dependent secondary bridges is to be kept to a minimum.
 * Explanation: There are no dependent bridges in the correct structure; there is dependent bridge in
 * the incorrect structure, between 6 and 13.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.2.6.2.3', [
  { pin: 'tetracyclo[5.3.2.1²,⁴.0³,⁶]tridecane' },
]);
