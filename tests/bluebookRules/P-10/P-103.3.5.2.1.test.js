/**
 * P-103.3.5.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Extension at the ‘N-terminus’”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1412, P-103.3.5.2.1, example 3. [modified 26 June 2019]
 *     For [A21-glycine]insulinyl-B-arginine,arginine]insulin (human)
 *     read [A21-glycine]insulin-B30-yl-L-arginyl-L-arginine (human)
 *     replace structure with:
 *     move example to P-103.3.5.2.2
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.3.5.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103352a.gif', name: 'valylbradykinin' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103352b.gif', name: 'valylglycylbradykinin' },
]);
