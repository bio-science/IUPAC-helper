/**
 * P-24.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is still a choice of numbering, the numbers of the von Baeyer descriptors are considered
 * in the sequence of the order of their citation. The name is selected with lower numbers at the first
 * point of difference.
 * Explanation: In the correct name, the number set ‘2,2,2,2⁹,2⁶,3³’ is lower than ‘2,2,2,2⁹,3⁶,2³’.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.2.2.2', [
  { pin: 'trispiro[2.2.2.2⁹.2⁶.3³]hexadecane' },
]);
