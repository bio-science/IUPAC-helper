/**
 * P-66.4.2.3.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a group having priority for citation as a principal characteristic group is present, a
 * hydrazide group of the type R-C(=NH)-NHNH– or R-S(=NH)2-NHNH– (or the analogous selenium and
 * tellurium group) is named:
 * (1) by expressing the corresponding hydrazide as a prefix by replacing the final letter ‘e’ in the
 * name of the hydrazide by the letter ‘o’:
 * (2) as an acylhydrazinyl prefix; the hydrazinyl group is numbered by using the numerical locants 1
 * and 2.
 * Method (1) generates preferred prefixes.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 895, P-66.4.2.3.6, example 2. [corrected 10 October 2018]
 *     For methyl ethanimidohydrazidoacetate (PIN)
 *     read methyl (ethanimidohydrazido)acetate (PIN)
 *     for methyl (2-ethanimidoylhydrazin-1-yl)acetate
 *     read methyl [2-(ethanimidoyl)hydrazin-1-yl]acetate
 *     replace the structure with:
 *     CH3-C(=NH)-NH-NH-CH2-CO-O-CH3
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.2.3.6', [
  { formula: 'HN=CH-NH-NH-CH2-CH2-COOH', pin: '3-(methanimidohydrazido)propanoic acid', otherNames: ['3-(2-methanimidoylhydrazin-1-yl)propanoic acid'] },
  { formula: 'CH3-C(=NH)-NH-NH-CH2-CO-O-CH3', pin: 'methyl (ethanimidohydrazido)acetate', otherNames: ['methyl [2-(ethanimidoyl)hydrazin-1-yl]acetate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66423h.gif', pin: '4-(benzenecarboximidohydrazido)benzoic acid', otherNames: ['4-[2-(benzenecarboximidoyl)hydrazin-1-yl]benzoic acid'] },
]);
