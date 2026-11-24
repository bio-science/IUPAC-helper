/**
 * P-64.2.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Ketones derived from mancude parent hydrides
 * Ketones derived from mancude parent hydrides having indicated hydrogen atoms are named by direct
 * substitution of a >CH2 group as indicated in P-64.2.2.2.1. When no indicated hydrogen is present,
 * the methodology of ‘added indicated hydrogen’ is applied (see P-14.7 and P-58.2.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.2.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202q.gif', pin: '4H-pyran-4-one', otherNames: ['pyran-4-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202r.gif', pin: '1H-inden-1-one', otherNames: ['inden-1-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202s.gif', pin: 'naphthalen-1(2H)-one', otherNames: ['1,2-dihydronaphthalen-1-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202t.gif', pin: 'pyrene-1,3,6,8(2H,7H)-tetrone', otherNames: ['1,2,3,6,7,8-hexahydropyrene-1,3,6,8-tetrone'] },
]);
