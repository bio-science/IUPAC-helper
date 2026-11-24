/**
 * P-63.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Only one name is retained, phenol, for C6H5-OH, both as a preferred name and for general
 * nomenclature. The structure is substitutable at any position. Locants 2, 3, and 4 are recommended,
 * not o, m, and p.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.1.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630101a.gif', pin: 'phenol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630101b.gif', pin: '2-bromophenol', notNames: ['o-bromophenol'] },
]);
