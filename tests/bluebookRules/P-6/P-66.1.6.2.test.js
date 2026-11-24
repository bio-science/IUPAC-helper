/**
 * P-66.1.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Amides derived from cyanic acid
 * The traditional name ‘cyanamide’ is retained for NC-NH2 and is the preferred IUPAC name.
 * Substitution is allowed on the –NH2 group. The systematic functional replacement name is
 * carbononitridic amide.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.6.2', [
  { formula: 'NC-N(CH2-CH3)2', pin: 'diethylcyanamide', otherNames: ['diethylcarbononitridic amide'] },
]);
