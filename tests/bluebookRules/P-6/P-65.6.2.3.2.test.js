/**
 * P-65.6.2.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preferred IUPAC names of acid salts of organic derivatives of polybasic inorganic oxoacids
 * (including carbonic) are named by method (2).
 * Note: In the nomenclature of inorganic chemistry (IR-8.4, ref. 12), the term ‘hydrogen’ is written
 * directly in front of the name of the anion, without a space, to indicate that it is part of the …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.2.3.2', [
  { formula: 'HO-CO-O⁻ Na⁺', pin: 'sodium hydrogen carbonate' },
  { formula: 'CH3-P(O)(O⁻)2 K⁺ H⁺', pin: 'potassium hydrogen methylphosphonate' },
  { formula: 'P(O)(O⁻)³⁻ Na⁺ 2 H⁺', name: 'sodium dihydrogenphosphate' },
]);
