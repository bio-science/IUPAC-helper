/**
 * P-84
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “COMPARATIVE EXAMPLES OF FORMULAS AND NAMES OF ISOTOPICALLY MODIFIED COMPOUNDS
 * Continued with P-9 Specification of Configuration and Conformation.
 * Return to:
 * IUPAC Chemical Nomenclature home page.
 * Blue Book home page.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1155, P-84, example 5. [corrected 3 April 2019]
 *     For [2-²H2;2]ethan-1-[¹⁸O0;]]ol
 *     read [2-²H2;2]ethan-1-[¹⁸O0;1]ol (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-84', [
  { pin: 'ethanol' },
]);
