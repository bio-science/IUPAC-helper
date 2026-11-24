/**
 * P-21.2.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a choice is needed between the same skeletal atom with two or more nonstandard bonding
 * numbers, low locants are assigned in order of the decreasing value of the bonding number, for
 * example λ⁶ is assigned a lower locant than λ⁴.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 137, P-21.2.4.2, example 2. [corrected 28 April 2023]
 *     For 2,5λ⁴,8,11-tetrathiadodecane
 *     read 2,5λ⁴,8λ⁶,11-tetrathiadodecane
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-21.2.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210204e.gif', preselectedName: '2λ⁶,5λ⁴-hexasulfane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210204f.gif', pin: '2,5λ⁶,8λ⁴,11-tetrathiadodecane' },
]);
