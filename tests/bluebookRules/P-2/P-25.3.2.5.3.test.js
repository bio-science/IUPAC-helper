/**
 * P-25.3.2.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Indicated hydrogen is cited at the beginning of the name preceded by the appropriate locants of the
 * fused ring system.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.2.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302bb.gif', pin: '6H-pyrazino[2,3-b]carbazole' },
]);
