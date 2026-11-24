/**
 * P-65.1.8.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution of the hydrogen atom of formic acid is permitted when substituent groups are other
 * than those cited in P-65.1.8.1.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.8.2', [
  { formula: 'O2N-COOH', pin: 'nitroformic acid' },
]);
