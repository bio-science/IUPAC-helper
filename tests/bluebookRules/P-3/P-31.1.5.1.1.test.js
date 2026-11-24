/**
 * P-31.1.5.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Low locants are assigned to double bonds in accordance with the fixed numbering of the spiro
 * compound.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.5.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310105a.gif', pin: 'spiro[4.5]dec-6-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310105b.gif', pin: 'spiro[5.5]undeca-1,8-diene' },
]);
