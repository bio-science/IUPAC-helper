/**
 * P-44.2.2.2.6.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior linear phane system has the lower superatom locant(s) for all amplificants when compared
 * in order of citation in the name [criterion (f) in P-44.2.2.2.6].”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.6.6', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202cw.gif', pin: '1(4)-pyridina-7(2,5)-furana-9(2,5)-thiophena-3,5(1,4),11(1)-tribenzenaundecaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202cw.gif', pin: '1(4)-pyridina-9(2,5)-furana-7(2,5)-thiophena-3,5(1,4),11(1)-tribenzenaundecaphane' },
]);
