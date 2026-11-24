/**
 * P-13.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “By placing a multiplicative prefix ‘bi’, ‘ter’, ‘quater’, etc. (see P-14.2.3) before the name of
 * the corresponding parent hydride.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.5.1', [
  { pin: 'pyridine' },
  { pin: 'pyridine' },
  { pin: '2,2′-bipyridine', otherNames: ['2,2′-bipyridyl'] },
]);
