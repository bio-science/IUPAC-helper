/**
 * P-65.6.3.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When ‘E’ is an element belonging to Group 16, the pseudoester is named as a pseudoketone (see
 * P-68.4.2.4)”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.4.2', [
  { formula: 'CH3-CH2-CH2-CO-S-OO-CH3', notNames: ['S-methylperoxyl butanethioate'] },
]);
