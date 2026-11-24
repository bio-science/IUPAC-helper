/**
 * P-44.4.1.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a choice is needed between two chains or rings or ring systems having skeletal atoms with
 * nonstandard bonding numbers, the one having the lowest locant(s) for (an) atom(s) with nonstandard
 * bonding number(s) is chosen as principal chain or senior ring or ring system. If a further choice is
 * needed, the one with the higher bonding number with the lowest locant is chosen.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.4.1.3.2', [
  { pin: '1λ⁴,2,3-trithiane' },
  { pin: '1,2λ⁴,3-trithiane' },
  { pin: '1λ⁶,2λ⁴,3-trithiane' },
  { pin: '1λ⁴,2λ⁶,3-trithiane' },
]);
