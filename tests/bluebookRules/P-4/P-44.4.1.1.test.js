/**
 * P-44.4.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring, ring system or principal chain has the greater number of multiple bonds; for the
 * purpose of this criterion, mancude rings or ring systems are considered as consisting of
 * noncumulative double bonds [criterion (a) in P-44.4.1].”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 494, P-44.4.1.1 (3), first structure. [corrected 26 September 2018]
 *     Replace the structure with:
 *   Page 494, P-44.4.1.1 (3), second structure. [corrected 26 September 2018]
 *     Replace the structure with:
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.4.1.1', [
  { pin: 'benzene' },
  { pin: 'cyclohexene' },
  { pin: 'cyclohexane' },
  { pin: 'pent-3-en-1-yne' },
  { pin: 'pent-2-ene' },
  { pin: '3,6,9,12-tetraoxatetradec-1-ene' },
  { pin: '3,6,9,12-tetraoxatetradecane' },
  { pin: '1,10(1),4,7(1,4)-tetrabenzenadecaphan-2-en-8-yne' },
  { pin: '1,10(1),4,7(1,4)-tetrabenzenadecaphan-2-ene' },
  { pin: '1,10(1),4,7(1,4)-tetrabenzenadecaphan-2-yne' },
]);
