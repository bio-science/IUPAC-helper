/**
 * P-77.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preferred IUPAC names are binary names formed by citing the name of the cation followed by that of
 * the anion (see P-72.2.2.2.1).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1129, P-77.3.1, example. [corrected 10 October 2018]
 *     For H3-CO-O⁻
 *     read CH3-CO-O⁻
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-77.3.1', [
  { formula: 'CH3-CO-O⁻ Na⁺', pin: 'sodium acetate' },
]);
