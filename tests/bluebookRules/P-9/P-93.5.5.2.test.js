/**
 * P-93.5.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specification of chirality centers”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1271, P-93.5.5.2, example. [corrected 12 September 2018]
 *     For
 *     (2s,4s,6s,8s)-2,4,6,8-tetranonyl-1,3,5,7(1,3)-tetrabenzenacycoctaphane-1⁴,1⁶,3⁴,3⁶,5⁴,5⁶,7⁴,7⁶-octol
 *     (PIN)
 *     read
 *     (2r,4r,6r,8r)-2,4,6,8-tetranonyl-1,3,5,7(1,3)-tetrabenzenacycoctaphane-1⁴,1⁶,3⁴,3⁶,5⁴,5⁶,7⁴,7⁶-octol
 *     (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93552a.gif', name: '2r,4c,6c,8c-tetranonyl-1,3,5,7(1,3)-tetrabenzenacyclooctaphane-1⁴,1⁶,3⁴,3⁶,5⁴,5⁶,7⁴,7⁶-octol' },
]);
