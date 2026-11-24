/**
 * P-44.2.2.2.7.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring assembly is composed of the greater number of heteroatoms of any kind [criterion
 * (f) in P-44.2.2.2.7].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.7.6', [
  { pin: '3,3′-bipyridazine' },
  { pin: '2,3′-bipyridine' },
]);
