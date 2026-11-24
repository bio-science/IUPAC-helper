/**
 * P-66.4.1.3.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In the presence of a characteristic group cited as a suffix, the group R-C(=NH)NH– or
 * R-S(O)(=NH)NH– and their selenium and tellurium analogues are named in two ways.
 * (1) substitutively, by using a prefix formed by changing the final letter ‘e’ in the complete name
 * of the amide to ‘o’, thus changing the suffixes ‘imidamide’ and ‘carboximidamide’ into ‘imidamido’ …
 * (2) substitutively, by using ‘acylamino’ prefixes formed by substituting the name of the acyl group
 * to the substituent ‘amino’
 * Method (1) generates preferred IUPAC prefixes.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.1.3.5', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66413f.gif', pin: '4-ethanimidamidobenzoic acid', otherNames: ['4-(acetimidoylamino)benzoic acid', '4-acetimidamidobenzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66413g.gif', pin: '2-(ethanesulfonodiimidamido)benzoic acid', otherNames: ['2-(ethanesulfonodiimidoylamino)benzoic acid'] },
]);
