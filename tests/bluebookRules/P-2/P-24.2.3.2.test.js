/**
 * P-24.2.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is still a choice of numbering, the numbers of the von Baeyer descriptor are considered in
 * their order of citation. The correct name has the lower numbers at first point of difference.
 * Explanation: In the correct name, the PIN, the number sequence of the descriptor
 * ‘2,0,2,1,1,2,0,2,1,2’ is lower than the number sequence ‘2,0,2,1,1,2,0,2,2,1’ for the incorrect
 * name; …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.2.3.2', [
  { pin: 'pentaspiro[2.0.2⁴.1.1.2¹⁰.0.2¹³.1⁸.2³]octadecane' },
]);
