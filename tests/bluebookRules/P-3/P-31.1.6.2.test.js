/**
 * P-31.1.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Phane structures with both double and triple bonds
 * Double and triple bonds in a phane structure are described by the method of P-31.1.4.3. Low locants
 * are allocated to double and triple bonds first when considered together as a set in ascending order
 * and, if a choice is still needed, to double bonds.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 388 , P-31.1.6.2, example 1 on this page. [corrected 4 September 2024]
 *     For 1,7(1,3)dibenzenacyclotridecaphan-2-en-5-yne (PIN)
 *     read (2E)-1,7(1,3)dibenzenacyclotridecaphan-2-en-5-yne (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310106f.gif', pin: '1(1,4)-cyclooctana-4(1,4)-benzenacyclohexaphane-1¹(1⁸),1²,1⁴,1⁶-tetraene' },
]);
