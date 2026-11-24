/**
 * P-26.4.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When, because of symmetry, these rules leave a choice, an amplificant is numbered in such a way
 * that the lower attachment locant is adjacent to the lower locant of the phane parent skeleton.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.4.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260401e.gif', pin: '1(2,7)-naphthalena-4(1,4)-benzenacycloheptaphane', notNames: ['1(2,7)-naphthalena-4(4,1)-benzenacycloheptaphane', '1(7,2)-naphthalena-4(4,1)-benzenacycloheptaphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260401f.gif', pin: '1,4(1,4)-dibenzenacyclohexaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260401g.gif', pin: '1,4(1,3)-dibenzenacyclohexaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260401h.gif', pin: '1,3,5,7(1,3)-tetrabenzenacyclooctaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260401i.gif', pin: '3(2,5)-furana-1,7(1),5(1,4)-tribenzenaheptaphane', notNames: ['3(5,2)-furana-1,7(1),5(1,4)-tribenzenaheptaphane'] },
]);
