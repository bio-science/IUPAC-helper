/**
 * P-44.4.1.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a choice is needed between two chains or between two rings or ring systems having skeletal
 * atoms with nonstandard bonding numbers, the one having the maximum number of atoms with nonstandard
 * bonding numbers is chosen as principal chain or senior ring or ring system. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 497, P-44.4.1.3.1, example (1). [corrected 3 June 2020]
 *     For 1,3λ⁶-thioxolane (PIN)
 *     read 1,3λ⁶-oxathiolane (PIN)
 *     for 1,3λ⁴-thioxolane (PIN)
 *     read 1,3λ⁴-oxathiolane (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.4.1.3.1', [
  { pin: '1,3λ⁶-oxathiolane' },
  { pin: '1,3λ⁴-oxathiolane' },
  { pin: '1λ⁴,3λ⁵-thiaphospholane' },
  { pin: '1λ⁴,3-thiaphospholane' },
]);
