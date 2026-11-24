/**
 * P-34.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preselected substituent group names”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-34.2.4', [
  { formula: '–NH-OH', preselectedPrefix: 'hydroxyamino' },
  { formula: '>N-OH', preselectedPrefix: 'hydroxyazanediyl' },
  { formula: '–O-NH2', preselectedPrefix: 'aminooxy' },
]);
