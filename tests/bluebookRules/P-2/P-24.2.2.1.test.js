/**
 * P-24.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is a choice of numbers for the spiro descriptor, the smaller numbers are selected because
 * low locants must be allocated to spiro atoms.
 * Explanation: In the correct name, the number set ‘4,1’ is lower than ‘4,2’ and/or the spiro atom
 * locant set 5,7 is smaller than 5,8.
 * Explanation: In the correct name, the number set ‘5,1’ is lower than ‘5,2’ and/or the spiro atom
 * locant set 6,8 is smaller than 6,9.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.2.2.1', [
  { pin: 'dispiro[4.1.4⁷.2⁵]tridecane' },
  { pin: 'dispiro[5.1.8⁸.2⁶]octadecane' },
]);
