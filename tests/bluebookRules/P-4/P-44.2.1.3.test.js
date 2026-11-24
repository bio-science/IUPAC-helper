/**
 * P-44.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring or ring system has at least one nitrogen ring atom [criterion (b) in P-44.2.1]”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.1.3', [
  { pin: '1H-pyrrole' },
  { pin: '2H-1-benzopyran', otherNames: ['2H-chromene'] },
  { pin: '1H-pyrrole' },
  { pin: '2H-siline' },
]);
