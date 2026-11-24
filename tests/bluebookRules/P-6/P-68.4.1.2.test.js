/**
 * P-68.4.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Multiplicative nomenclature is used if conditions for its use are fulfilled. Central substituent
 * groups are derived from the general method for generating divalent substituent groups (see
 * P-29.3.2.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.4.1.2', [
  { formula: '–O-O-O–', preselectedPrefix: 'trioxidanediyl' },
  { formula: '–S-S-S–', preselectedPrefix: 'trisulfanediyl' },
  { formula: '–Se-Se-Se-Se–', preselectedPrefix: 'tetraselanediyl' },
  { formula: 'HS-S-S-CH2-S-S-SH', pin: '1,1′-methylenebis(trisulfane)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68412a.gif', pin: '4,4′-triselanediyldibenzoic acid', otherNames: ['4,4′-triselenodibenzoic acid'] },
]);
