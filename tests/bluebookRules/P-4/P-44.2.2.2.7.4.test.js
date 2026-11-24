/**
 * P-44.2.2.2.7.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring assembly is composed of the greater number of rings [criterion (d) in
 * P-44.2.2.2.7].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.7.4', [
  { pin: '2,2′-biquinoline' },
  { pin: '1²,2²:2⁵,3²-terpyridine', otherNames: ['2,2′:5′,2′′-terpyridine'] },
]);
