/**
 * P-67.1.4.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups for general nomenclature
 * The prefix ‘hydro’ may be added by concatenation only for use in general nomenclature.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.4.1.2', [
  { formula: '>PH(O)', preselectedPrefix: 'phosphonoyl' },
  { formula: '>PH(S)', preselectedPrefix: 'phosphonothioyl' },
]);
