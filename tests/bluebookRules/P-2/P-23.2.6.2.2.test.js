/**
 * P-23.2.6.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is a choice for independent secondary bridges, the first cited must be as long as
 * possible. Then, if relevant, the second must be as long as possible, etc.
 * Explanation: The five-atom independent bridge between positions 2 and 9 of the main ring is longer
 * than the four-atom independent bridge between positions 2 and 9.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.2.6.2.2', [
  { pin: 'tetracyclo[8.6.6.5²,⁹.1²³,²⁶]octacosane' },
]);
