/**
 * P-44.2.2.2.4.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior bridged fused ring system is the bridged ring system with the senior fused ring system
 * before bridging according to P-44.2.2.2.3 [criterion (d) in P-44.2.2.2.4].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.4.4', [
  { pin: '4,7-methanoazulene' },
  { pin: '1,4-methanonaphthalene' },
]);
