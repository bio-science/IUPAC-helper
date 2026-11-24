/**
 * P-44.2.2.2.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior bridged fused ring system has the bridged ring system with the greater number of rings
 * before bridging [criterion (a) in P-44.2.2.2.4].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.4.1', [
  { pin: '4,7-methanocyclopenta[a]indene' },
  { pin: '2H-1,4:5,8-dimethanobenzo[7]annulene' },
]);
