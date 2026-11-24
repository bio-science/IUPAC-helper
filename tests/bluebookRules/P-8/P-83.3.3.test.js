/**
 * P-83.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names
 * The name of a nonselectively labeled compound is formed in the same way as the name of a selectively
 * labeled compound but contains neither locants nor subscripts in the nuclide descriptor.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-83.3.3', [
  { pin: 'chloro[²H]benzene' },
]);
