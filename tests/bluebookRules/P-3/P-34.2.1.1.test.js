/**
 * P-34.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl groups”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 418, P-34.2.1.1 example 2. [corrected 19 September 2018]
 *     For phenylcarbonyl
 *     read benzenecarbonyl
 *   Page 418, P-34.2.1.1 example 3. [corrected 6 February 2019]
 *     For aminocarbonimidoyl
 *     read C-aminocarbonimidoyl
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-34.2.1.1', [
  { formula: 'CH3-CO–', preferredPrefix: 'acetyl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340201a.gif', preferredPrefix: 'benzoyl' },
  { formula: 'H2N-C(=NH)–', preferredPrefix: 'carbamimidoyl' },
  { formula: 'H2N-CO–', preferredPrefix: 'carbamoyl' },
  { formula: '–CO–', preferredPrefix: 'carbonyl' },
  { formula: 'H2N-CO-CO–', preferredPrefix: 'oxamoyl' },
  { formula: 'H-CO–', preferredPrefix: 'formyl' },
  { formula: '–CO-CO–', preferredPrefix: 'oxalyl' },
]);
