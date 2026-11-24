/**
 * P-24.2.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is a choice for numbering, lowest locants are assigned to the spiro atoms.
 * Explanation: In the correct name, the number set of the descriptor ‘3,0’ is lower than ‘3,1’ and/or
 * the spiro atom locant set ‘4,5,10’ is lower than ‘4,6,10’.
 * Explanation: In the correct name, the spiro locant set ‘3,6,9,14’ is lower than ‘3,6,9,16’ or
 * ‘3,6,11,14’”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 175, P-24.2.3.1, example 1 on this page. [corrected 4 September 2019]
 *     For tetraspiro[2.2.2⁶.2.2.2¹⁴.2¹¹.2³]icosane (PIN)
 *     read tetraspiro[2.2.2⁶.2.2.2¹⁴.2¹¹.2³]icosane
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.2.3.1', [
  { pin: 'trispiro[3.0.3⁵.1.3¹⁰.1⁴]tetradecane' },
  { pin: 'tetraspiro[2.2.2.2⁹.2.2¹⁴.2⁶.2³]icosane' },
]);
