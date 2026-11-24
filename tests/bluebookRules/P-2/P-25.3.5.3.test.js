/**
 * P-25.3.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A multiparent name is preferred to a fused ring system, when there is a choice.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250305c.gif', pin: 'benzo[1,2-b:4,5-c′]difuran', notNames: ['furo[3,4-f][1]benzofuran'] },
]);
