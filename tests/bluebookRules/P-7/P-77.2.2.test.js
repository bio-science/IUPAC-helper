/**
 * P-77.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature is used to derive IUPAC preferred names for monosalts of polyhydroxy
 * compounds.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-77.2.2', [
  { formula: 'HO-CH2-CH2-O⁻ K⁺', pin: 'potassium 2-hydroxyethan-1-olate' },
]);
