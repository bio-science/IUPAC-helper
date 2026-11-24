/**
 * P-15.4.3.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Double and triple bonds are given locants in accordance with the fixed numbering of the
 * heterochain, and, if there is a choice, according to the general priorities for multiple bonds (see
 * P-31.1.2.2.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.4.3.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1504r.gif', pin: '2,4,6,8-tetrasiladec-9-ene' },
]);
