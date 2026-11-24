/**
 * P-63.8.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Partial salts of polyols and their chalcogen analogues are named substitutively on the basis of the
 * corresponding anion:”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.8.3', [
  { formula: 'HO-CH2-CH2-CH2-O⁻ Na⁺', pin: 'sodium 3-hydroxypropan-1-olate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630803a.gif', pin: 'sodium 2-sulfanylbenzene-1-thiolate' },
]);
