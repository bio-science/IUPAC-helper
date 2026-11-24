/**
 * P-44.2.2.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior spiro system has the greater number of spiro fusions [criterion (a) in P-44.2.2.2.1].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.1.1', [
  { pin: '6-azadispiro[4.2.4⁸.2⁵]tetradecane' },
  { pin: '2′H-spiro[cyclopentane-1,1′-isoquinoline]' },
]);
