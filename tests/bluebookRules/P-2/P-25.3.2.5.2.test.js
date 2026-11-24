/**
 * P-25.3.2.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “An atom with a nonstandard bonding number is indicated by the ‘λ’ (lambda) convention (see
 * P-14.1.3) The nonstandard bonding number n is indicated as a superscript to the symbol λ, for
 * example λ⁵; this symbol follows the locant of the atom with the nonstandard bonding number in
 * accordance with the numbering of the fused system and is cited at the beginning of the name of the
 * fused ring system.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.2.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302ba.gif', pin: '5λ⁵-phosphinino[2,1-d]phosphinolizine' },
]);
