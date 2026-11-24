/**
 * P-64.2.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Alicyclic ketones
 * Ketones resulting from the substitution of >CH2 groups are named substitutively using the suffix
 * ‘one’ to designate the principal characteristic group.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.2.2.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202m.gif', pin: 'cyclopentanone' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202n.gif', pin: 'bicyclo[3.2.1]octan-2-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202o.gif', pin: 'spiro[4.5]decane-1,7-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202p.gif', pin: 'piperidin-4-one' },
]);
