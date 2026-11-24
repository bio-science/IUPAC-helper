/**
 * P-13.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “By a suffix”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.4.1', [
  { formula: 'CH4', pin: 'methane' },
  { formula: 'H•', name: 'monohydrogen' },
  { formula: 'CH3•', name: 'methyl' },
  { formula: 'CH3-CH3', pin: 'ethane' },
  { formula: 'H⁺', name: 'hydron' },
  { formula: 'CH3-CH2–', name: 'ethanide' },
  { formula: 'CH3-CH2-CH2-CH3', pin: 'butane' },
  { formula: 'H–', name: 'hydride' },
  { formula: 'CH3-CH2-CH2-CH2⁺', name: 'butylium' },
]);
