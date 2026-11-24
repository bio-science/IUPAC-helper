/**
 * P-44.4.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring or ring system has the lowest locants for indicated hydrogen [criterion (d) in
 * P-44.4.1].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.4.1.4', [
  { pin: '2H-pyran' },
  { pin: '4H-pyran' },
  { pin: '7²H-1(4),3,5(2,5)-tripyridina-7(2)-pyranaheptaphane' },
  { pin: '7⁴H-1(4),3,5(2,5)-tripyridina-7(2)-pyranaheptaphane' },
]);
