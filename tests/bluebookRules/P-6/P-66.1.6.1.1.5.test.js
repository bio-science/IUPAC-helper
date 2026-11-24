/**
 * P-66.1.6.1.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Seniority order of urea among amides
 * Amides are ranked in the same way as the corresponding acids (see P-42). Thus, in substitutive
 * nomenclature, amides from carboxylic acids, including formamide, are senior to urea.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 863, P-66.1.6.1.1.5, example 2. [corrected 13 March 2019]
 *     For 1-[3-(formylamino)propyl]urea
 *     read N-[3-(formylamino)propyl]urea
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.6.1.1.5', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161k.gif', pin: 'N-[2-(carbamoylamino)ethyl]acetamide', otherNames: ['N-{2-[(aminocarbonyl)amino]ethyl}acetamide'] },
  { formula: 'H2N-CO-NH-CH2-CH2-CH2-NH-CHO', pin: 'N-[3-(carbamoylamino)propyl]formamide', notNames: ['N-(3-formamidopropyl)urea', 'N-[3-(formylamino)propyl]urea'] },
]);
