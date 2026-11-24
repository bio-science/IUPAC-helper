/**
 * P-26.4.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a single amplificant is unsymmetrical, the lower locant of the phane parent skeleton must be
 * adjacent to the lower attachment locant of the amplificant.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.4.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260402c.gif', pin: '3,10-octanofluoranthene', otherNames: ['1(3,10)-fluoranthenacyclononaphane (I)'], notNames: ['1(10,3)-fluoranthenacyclononaphane (II)'] },
]);
