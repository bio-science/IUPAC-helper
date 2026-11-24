/**
 * P-103.3.5.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Extension at the ‘C-terminus’”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.3.5.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103352c.gif', name: 'bradykininylleucine' },
]);
