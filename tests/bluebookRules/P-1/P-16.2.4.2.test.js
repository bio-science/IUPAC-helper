/**
 * P-16.2.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “No hyphen is placed after a numerical prefix cited in front of a compound substituent enclosed by
 * parentheses, even if that substituent begins with locants;”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.2.4.2', [
  { pin: 'N,1-bis(4-chlorophenyl)methanimine' },
]);
