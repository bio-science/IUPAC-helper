/**
 * P-46.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal substituent chain contains the greater number of (Z)-double bonds.
 * Note: The configuration at C-4 (method 2) or C-1 (method 1) cannot be given because the attached
 * substituent is unknown. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 551, P-46.3.1, example on this page. [modified 22 January 2020]
 *     Add (2) [(2Z,4R,5E)-4-methylhepta-2,5-dien-4-yl]siline (PIN)
 *     (1) {(1R,2Z)-1-[(1E)-prop-1-en-1-yl]-1-methylbut-2-en-1-yl}siline
 *     Replace the structures with:
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.3.1', [
  { preferredPrefix: '(2Z,5E)-4-methylhepta-2,5-dien-4-yl' },
  { pin: '[(2Z,4R,5E)-4-methylhepta-2,5-dien-4-yl]siline', otherNames: ['{(1R,2Z)-1-[(1E)-prop-1-en-1-yl]-1-methylbut-2-en-1-yl}siline'] },
]);
