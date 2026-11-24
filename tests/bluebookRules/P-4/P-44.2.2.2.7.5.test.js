/**
 * P-44.2.2.2.7.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring assembly is composed of the greater number of atoms [criterion (e) in
 * P-44.2.2.2.7.]”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.7.5', [
  { pin: '1H,1′H-2,2′-biazepine' },
  { pin: '2,4′-bipyridine' },
]);
