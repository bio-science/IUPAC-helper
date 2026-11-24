/**
 * P-25.7.1.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Indicated hydrogen with ortho-, and ortho and peri-fused systems
 * Indicated hydrogen is identified by the locant of the relevant position and cited at the front of
 * the names of the whole ring system, including replacement terms, if any.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.7.1.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250701j.gif', pin: '1H-pyrrolo[3,2-b]pyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250701k.gif', pin: '6H-1,7-dioxacyclopenta[cd]indene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250701l.gif', pin: '1H,3H-thieno[3,4-c]thiophene' },
]);
