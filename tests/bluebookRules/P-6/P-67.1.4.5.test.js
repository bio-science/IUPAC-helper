/**
 * P-67.1.4.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups derived from halogen acids
 * Names of prefixes derived from halogen acids and their chalcogen analogues are used as compulsory
 * prefixes in substitutive nomenclature. They are listed in Table 5.1 and discussed in P-61.3.2.3.”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.4.5', [
  { formula: 'OCl–', preselectedPrefix: 'chlorosyl' },
  { formula: 'SCl–', preselectedPrefix: 'thiochlorosyl' },
  { preselectedPrefix: 'O2Cl– chloryl' },
  { formula: 'O3Cl–', preselectedPrefix: 'perchloryl' },
  { formula: 'C6H5-BrO', pin: 'bromosylbenzene' },
]);
