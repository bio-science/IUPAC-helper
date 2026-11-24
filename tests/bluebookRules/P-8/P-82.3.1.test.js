/**
 * P-82.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When isotopes of different elements are present as nuclides in an isotopically substituted
 * compound, their symbols are arranged in alphabetical order if they are at the same place in the
 * name.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.3.1', [
  { formula: 'CH3¹⁸O²H', pin: 'methan(²H,¹⁸O)ol' },
]);
