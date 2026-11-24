/**
 * P-44.2.2.2.6.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior linear phane system has the lower superatom locant(s) for the senior amplificants
 * [criterion (d) in P-44.2.2.2.6].”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.6.4', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202cs.gif', pin: '1(4),7(2,5)-dipyridina-3,5(1,4),10(1)-tribenzenadecaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202cs.gif', pin: '1(4),8(2,5)-dipyridina-3,5(1,4),10(1)-tribenzenadecaphane' },
]);
