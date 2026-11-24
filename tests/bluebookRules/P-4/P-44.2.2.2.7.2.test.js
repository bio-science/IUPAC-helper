/**
 * P-44.2.2.2.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring assembly is composed of rings containing nitrogen [criterion (b) in P-44.2.2.2.7].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.7.2', [
  { pin: '2,2′-bipyridine' },
  { pin: '2H,2′H-2,2′-bipyran' },
]);
