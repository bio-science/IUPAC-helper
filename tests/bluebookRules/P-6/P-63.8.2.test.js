/**
 * P-63.8.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cyclic salts are named as heterocycles”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.8.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630802a.gif', pin: '2,2′-spirobi[[1,3,2]benzodioxagermole]' },
]);
