/**
 * P-65.7.6.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When all anhydride linkages are identical, as in –CO-S-CO–, names are formed using class names such
 * as ‘thioanhydride’ preceded by the multiplicative prefixes ‘bis-’, ‘tris-’, etc.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.6.4.1', [
  { formula: 'CH3-CO-S-CO-CH2-CH2-CO-S-CO-CH3', pin: 'diacetic butanedioic bis(thioanhydride)' },
  { formula: 'CH3-CO-S-SO2-CH2-SO2-S-CO-CH3', pin: 'diacetic methanedisulfonic bis(thioanhydride)' },
]);
