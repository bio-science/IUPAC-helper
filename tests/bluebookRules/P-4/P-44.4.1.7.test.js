/**
 * P-44.4.1.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior fused ring system has the lower locant(s) for carbon atoms at fusion sites [criterion
 * (g) in P-44.4.1].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.4.1.7', [
  { pin: 'aceanthrylene' },
  { pin: 'acephenanthrylene' },
  { pin: 'fluoranthene' },
  { pin: 'chrysene' },
  { pin: 'triphenylene' },
]);
