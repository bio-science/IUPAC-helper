/**
 * P-73.8.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The suffix ‘-ylium’ is preferred to the suffix ‘-ium’ added to a parent
 * hydride that has been modified by the λ-convention.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.8.1', [
  { formula: 'H2N⁺', preselectedName: 'azanylium', otherNames: ['λ¹-azanium', 'aminylium', 'nitrenium'] },
]);
