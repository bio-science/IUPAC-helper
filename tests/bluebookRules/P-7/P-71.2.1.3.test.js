/**
 * P-71.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A radical created by the addition of a single hydrogen atom, H•, may be indicated by suffix
 * ‘hydryl’ when the position of the hydrogen atom must be specified:”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1053, P-71.2.1.3, example. [corrected 19 September 2018]
 *     For anthracene-9-eliumuide
 *     read anthracen-9-eliumuide
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.2.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71213a.gif', pin: 'anthracene-9-hydryl', otherNames: ['anthracen-9-iumelide', 'anthracen-9-eliumuide', '2,9-dihydroanthracen-2-yl'] },
]);
