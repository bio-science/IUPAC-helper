/**
 * P-23.2.6.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The main ring must be divided as symmetrically as possible by the main bridge, which, as directed
 * in P-23.2.4, includes as many of the atoms not included in the main ring as possible.
 * Explanation: Two bridges of 4 and 3 atoms divide the main ring more symmetrically than two bridges
 * of 5 and 2 atoms.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.2.6.2.1', [
  { pin: 'tricyclo[4.3.1.1²,⁵]undecane' },
]);
