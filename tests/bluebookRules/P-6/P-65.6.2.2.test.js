/**
 * P-65.6.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cyclic salts are named as heterocycles”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650602a.gif', pin: '3,3′-spirobi[[2,4,3]benzodioxaplumbepine]-1,1′,5,5′-tetrone' },
]);
