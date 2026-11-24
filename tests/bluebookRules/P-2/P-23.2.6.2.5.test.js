/**
 * P-23.2.6.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The superscript locants shall be as low as possible when considered in the sequence of their order
 * of citation in the name.
 * Explanation: The locant sequence ‘2,6,8,12’ is lower than ‘8,12,2,6’; see P-14.3.5.
 * Explanation: The locant sequence ‘2,4,3,7,6,8’ is lower than ‘2,8,3,7,4,6’; see P-14.3.5”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 162, P-23.2.6.2.5, example 1, right structure. [corrected 30 January 2019]
 *     Replace structure with:
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.2.6.2.5', [
  { pin: 'tetracyclo[5.5.2.2²,⁶.1⁸,¹²]heptadecane' },
  { pin: 'pentacyclo[3.3.0.0²,⁴.0³,⁷.0⁶,⁸]octane' },
]);
