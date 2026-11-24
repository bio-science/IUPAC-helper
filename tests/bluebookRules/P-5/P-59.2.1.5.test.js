/**
 * P-59.2.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If the principal group occurs in more than one cyclic system, the cyclic system chosen as parent
 * hydride for nomenclature is in accordance with the criteria for choosing a senior ring or ring
 * system.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-59.2.1.5', [
  { pin: '6-(4-carboxyphenyl)-9H-fluorene-2-carboxylic acid' },
]);
