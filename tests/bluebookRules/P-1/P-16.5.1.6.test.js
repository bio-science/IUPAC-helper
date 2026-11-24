/**
 * P-16.5.1.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Parentheses are used to isolate a second locant of a compound locant, around locants denoting ring
 * numbering in phane nomenclature, and to enclose fullerene identifiers.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.1.6', [
  { pin: 'bicyclo[8.5.1]hexadeca-1(15),10-diene' },
  { pin: '1(1,3),4(1,4)-dibenzenacycloheptaphane' },
]);
