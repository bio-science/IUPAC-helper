/**
 * P-65.6.3.3.4.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyester names formed by using functional class nomenclature and phane nomenclature:”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.3.4.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ax.gif', pin: 'phenyl 3,6,9-trioxo-2,5,8-trioxa-1,10(1),4,7(1,3)-tetrabenzenadecaphane-1³-carboxylate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ay.gif', pin: 'dimethyl 2,7,9,14,16,21-hexaoxo-3,6,10,13,17,20-hexaoxa-1,22(1),8,15(1,3)-tetrabenzenadocosaphane-1³,22³-dicarboxylate' },
]);
