/**
 * P-44.2.2.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior spiro system consists of only saturated monocyclic rings [criterion (b) in P-44.2.2.2.1]
 * and has the lower locant(s) for spiro atom(s);”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.1.2', [
  { pin: '8,10-diazadispiro[3.1.5⁶.1⁴]dodecane' },
  { pin: '5,11-diazadispiro[3.2.3⁷.2⁴]dodecane' },
]);
