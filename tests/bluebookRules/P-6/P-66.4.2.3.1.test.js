/**
 * P-66.4.2.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Prefixes for the group –C(=NH)-NHNH2 are ‘hydrazinecarboximidoyl’ (preferred prefix) derived from
 * hydrazinecarboximidic acid, and ‘carbonohydrazidimidoyl’, derived from carbonohydrazidimidic acid.
 * When this group is located at the end of a carbon chain, the prefixes ‘imino’ and ‘hydrazinyl’ are
 * used in preferred IUPAC names in order to avoid fragmenting the parent chain.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.2.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66423a.gif', pin: '3-hydrazinyl-3-iminopropanoic acid', otherNames: ['carbonohydrazidimidoylacetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66423b.gif', pin: '3-(hydrazinecarboximidoyl)benzoic acid', otherNames: ['3-carbonohydrazidimidoylbenzoic acid', '3-[hydrazinyl(imino)methyl]benzoic acid', '3-(C-hydrazinylcarbonimidoyl)benzoic acid'] },
]);
