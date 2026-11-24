/**
 * P-81.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “ISOTOPICALLY UNMODIFIED COMPOUNDS
 * An isotopically unmodified compound has a macroscopic composition such that its constituent nuclides
 * are present in the proportions occurring in nature. Its formula and name are written in the
 * customary manner.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-81.4', [
  { formula: 'CH4', name: 'methane' },
  { formula: 'CH3-CH2-OH', name: 'ethanol' },
]);
