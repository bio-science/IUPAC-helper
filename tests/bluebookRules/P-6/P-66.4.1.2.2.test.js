/**
 * P-66.4.1.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Condensed guanidines.
 * The names biguanide, triguanide, etc., are no longer recommended. Condensed guanidines,
 * H2N-[C(=NH)-NH]n-H where n = 2, 3, or 4 are named systematically as the diamides of
 * imidodicarbonimidic acid, …
 * For polyguanides, where n = 5 and higher, skeletal replacement (‘a’) nomenclature leads to preferred
 * IUPAC names”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 885, P-66.4.1.2.2, structure 2. [corrected 24 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.1.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66412j.gif', pin: 'imidodicarbonimidic diamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66412k.gif', pin: 'diimidotricarbonimidic diamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66412l.gif', pin: 'N′¹-ethyl-N¹,N¹-diphenylimidodicarbonimidic diamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66412m.gif', pin: '3,5,7-triimino-2,4,6,8-tetraazanonane-1,9-diimidamide' },
]);
