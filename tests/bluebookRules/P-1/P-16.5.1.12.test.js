/**
 * P-16.5.1.12
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Parentheses are used to enclose multiple dots and charges in radical ion structures.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.1.12', [
  { formula: '[C6H5-C6H5]⁽²•⁾⁽²⁻⁾', name: 'biphenyl diradical' },
]);
