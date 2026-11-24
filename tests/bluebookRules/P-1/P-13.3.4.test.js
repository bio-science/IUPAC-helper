/**
 * P-13.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “By adding substituent groups together, in an operation called ‘concatenation’”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.3.4', [
  { formula: 'CH3-CH2-CH2-CH2-CH2–', name: 'pentyl' },
  { formula: '–O–', name: 'oxy' },
  { formula: 'CH3-CH2-CH2-CH2-CH2O–', name: 'pentyloxy' },
  { formula: 'Cl–', name: 'chloro' },
  { formula: '–CO–', name: 'carbonyl' },
  { formula: 'Cl-CO–', name: 'chlorocarbonyl' },
  { formula: '–NH–', name: 'azanediyl' },
  { formula: '–CH2-CH2–', name: 'ethane-1,2-diyl' },
  { formula: '–NH–', name: 'azanediyl' },
  { formula: '–NH-CH2-CH2-NH–', name: 'ethane-1,2-diylbis(azanediyl)' },
]);
