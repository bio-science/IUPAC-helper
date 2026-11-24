/**
 * P-26.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The locants in an attachment locant set are arranged so that of any two locants the one cited first
 * is adjacent to the lower locant of the phane parent skeleton.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 304, P-26.3.2.2, example. [corrected 8 May 2019]
 *     For [not 1(1,3)-benzena-4(1,4)-benzenacycloheptaphane; see second example of P-26.4.2.2]
 *     read [not 1(1,4),4(1,3)-dibenzenacycloheptaphane; see second example of P-26.4.2.2]
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.3.2.2', [
  { pin: '1(1,3),4(1,4)-dibenzenacycloheptaphane', notNames: ['1(1,4),4(1,3)-dibenzenacycloheptaphane'] },
]);
