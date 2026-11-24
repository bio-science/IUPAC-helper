/**
 * P-82.6.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Locants are not omitted when there is a possibility of isomers”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.6.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82614a.gif', pin: '1-(⁷⁹Br)bromo(2-¹³C)benzene' },
]);
