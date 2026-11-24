/**
 * P-13.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “This type of replacement is called ‘functional replacement’. The affixes represent the group(s)
 * being introduced. Functional replacement nomenclature is described in P-15.5.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.2.2.1', [
  { formula: '(CH3)2P(O)-OCH3', pin: 'methyl dimethylphosphinate' },
  { formula: '(CH3)2P(=NH)-OCH3', pin: 'methyl P,P-dimethylphosphinimidate' },
  { formula: 'C6H5-P(O)(OH)2', pin: 'phenylphosphonic acid' },
  { formula: 'C6H5-P(≡N)-OH', pin: 'phenylphosphononitridic acid' },
]);
