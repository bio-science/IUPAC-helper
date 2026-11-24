/**
 * P-16.5.1.8
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Parentheses are used to clarify a modification made by functional replacement prefixes.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.1.8', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605o.gif', pin: '4-(ethanethioyl)benzoic acid', otherNames: ['4-(thioacetyl)benzoic acid'] },
]);
