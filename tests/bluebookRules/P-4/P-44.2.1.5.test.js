/**
 * P-44.2.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring or ring system has the greater number of rings [criterion (d) in P-44.2.1].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.1.5', [
  { pin: 'isoquinoline' },
  { pin: '1H-pyrrole' },
]);
