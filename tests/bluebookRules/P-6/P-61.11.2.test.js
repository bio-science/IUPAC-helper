/**
 * P-61.11.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Low locants are assigned to the prefix cited first in the name”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.11.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P611102a.gif', pin: '1,1,1-trichloro-5,5,5-trimethylpentasilane' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P611102b.gif', pin: '1-bromo-2-chloroethane' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P611102c.gif', pin: '1-azido-4-isocyanatobenzene', otherNames: ['4-isocyanatophenyl azide'] },
]);
