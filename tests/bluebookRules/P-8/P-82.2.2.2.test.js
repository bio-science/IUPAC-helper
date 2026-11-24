/**
 * P-82.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When two characteristic groups are isotopically modified in different ways so that they cannot be
 * combined using multiplicative terms such as ‘di-’, ‘bis-’, etc., the isotopically modified
 * characteristic group with the greater number of modifications is chosen as the principal
 * characteristic group to be cited as a suffix; the other characteristic is then cited as a prefix. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82222a.gif', pin: 'cyclohexane-1,1-di[(¹⁴C)carboxylic acid]' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82222b.gif', pin: '1-carboxycyclohexane-1-(¹³C,²H)carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82222c.gif', pin: '1-(²H)carboxycyclohexane-1-(¹³C)carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82222d.gif', pin: '1-(¹³C)carboxycyclohexane-1-(¹⁴C)carboxylic acid' },
]);
