/**
 * P-68.1.1.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Fused ring systems (see also P-25)”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.1.3.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113o.gif', pin: 'boranthrene' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113p.gif', pin: '2-phenyl-2H,4H-[1,3,2]dioxaborolo[4,5-d]imidazole' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113q.gif', pin: '5H-dibenzo[b,d]borole' },
]);
