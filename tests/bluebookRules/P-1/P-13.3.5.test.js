/**
 * P-13.3.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “By adding molecular entities together
 * Chemical species AB in which two molecular entities A and B are combined directly with no loss of
 * atoms from either A or B can be named as adducts (see P-14.8) by citing the names of A and B linked
 * with an ‘em’ dash.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 17, P-13.3.5, example. [Corrected 8 October 2025]
 *     For carbon monoxide—methylborane (PIN)
 *     read carbon monoxide—methylborane (1/1) (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.3.5', [
  { formula: 'CO', pin: 'carbon monoxide' },
  { formula: 'CH3-BH2', pin: 'methylborane' },
  { formula: 'CO • BH2-CH3', pin: 'carbon monoxide—methylborane (1/1)' },
]);
