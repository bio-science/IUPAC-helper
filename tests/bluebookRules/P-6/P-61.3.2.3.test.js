/**
 * P-61.3.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds containing the groups –XO, –XO2, or –XO3 (X = halogen) are expressed by the following
 * compulsory prefixes in substitutive nomenclature:
 * –XO chlorosyl (no longer chloroso), bromosyl, iodosyl, fluorosyl
 * –XO2 chloryl (no longer chloroxy), bromyl, iodyl, fluoryl
 * –XO3 perchloryl, perbromyl, periodyl, perfluoryl”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.3.2.3', [
  { formula: 'C6H5-ClO3', pin: 'perchlorylbenzene' },
  { formula: 'C6H5-IO', pin: 'iodosylbenzene' },
]);
