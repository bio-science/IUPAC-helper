/**
 * P-93.3.4.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The atoms in the plane perpendicular to the reference axis are viewed from the side with the atom
 * or group of highest priority (lowest priority number) on the reference axis. If the direction from
 * the atom in this plane with highest priority (lowest priority number) to the atom with the next
 * higher priority is clockwise the chirality symbol is ‘C’, if anticlockwise ‘A’. The term
 * ‘anticlockwise’ is also called ‘counterclockwise’. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1228, P-93.3.4.2.1, Example 1, Explanation, the right-hand structure. [corrected 10 October
 *   2018]
 *     Replace structure with:
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.3.4.2.1', [
  { notNames: ['(TBPY-4-11′-A)-3,3,3′,3′-tetramethyl-3H,3′H-1λ⁴,1′-spirobi[[2,1]benzoxathiole]'] },
]);
