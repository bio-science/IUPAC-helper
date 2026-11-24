/**
 * P-16.2.4.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A long hyphen (an ‘em’ dash) is used to separate the names of components in adducts.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.2.4.5', [
  { pin: 'carbon monoxide—methylborane' },
]);
