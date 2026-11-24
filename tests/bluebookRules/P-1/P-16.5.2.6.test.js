/**
 * P-16.5.2.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Brackets are employed in formulae to indicate repetition of a group in a chain.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.2.6', [
  { formula: 'CH3-[CH2]68-CH3', pin: 'heptacontane' },
]);
