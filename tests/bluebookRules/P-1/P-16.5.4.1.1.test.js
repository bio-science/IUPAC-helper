/**
 * P-16.5.4.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In determining the nesting order in a name the parentheses of added indicated hydrogen are
 * ignored.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.4.1.1', [
  { pin: '1-(3,4-dihydroquinolin-1(2H)-yl)ethan-1-one' },
]);
