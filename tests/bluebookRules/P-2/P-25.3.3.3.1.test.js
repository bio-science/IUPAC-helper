/**
 * P-25.3.3.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Interior atoms are numbered by identifying the minimum number of bonds linking them to a peripheral
 * atom. The locant for the interior atom is that of the peripheral atom with a superscript number
 * corresponding to the number of bonds between the two atoms. The previous rule (Rule A-22.2 in ref.
 * 1), which is still used in CAS index nomenclature, recommended that interior atoms follow the
 * highest numbered peripheral atom adding Roman letters in sequence to the appropriate peripheral
 * number.
 * Note: This is a major change to the rules for interior numbering of carbon atoms recommended in the
 * 1998 publication on fusion nomenclature (see FR-5.5.2 in ref. 4).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.3.3.1', [
  { pin: 'pyrene' },
  { pin: '1H-phenalene' },
  { pin: '2H,6H-quinolizino[3,4,5,6,7-defg]acridine' },
]);
