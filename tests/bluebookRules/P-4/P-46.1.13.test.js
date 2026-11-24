/**
 * P-46.1.13
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal substituent chain has the lowest locants for the substituent(s) cited earlier in
 * alphanumerical order [criterion (m) in P-46.1]; this criterion is applicable to both methods (1) and
 * (2) in P-46.0; both methods generate compound and complex substituent groups.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 549, P-46.1.13, example 1 right. [corrected 3 January 2020]
 *     For [not 1-(bromoethyl)-2-chloropropyl;
 *     read [not 1-(1-bromoethyl)-2-chloropropyl;
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.1.13', [
  { preferredPrefix: '2-bromo-4-chloropentan-3-yl' },
  { notNames: ['4-bromo-2-chloropentan-3-yl'] },
  { notNames: ['1-(1-bromoethyl)-2-chloropropyl'] },
  { preferredPrefix: '5-ethyl-7-methylnonan-3-yl' },
]);
