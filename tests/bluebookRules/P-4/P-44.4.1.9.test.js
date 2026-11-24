/**
 * P-44.4.1.9
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring or ring system has the lowest locants for points of attachment (if a substituent
 * group) [criterion (i) in P-44.4.1].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.4.1.9', [
  { preferredPrefix: 'pyridin-2-yl' },
  { preferredPrefix: 'pyridin-3-yl' },
]);
