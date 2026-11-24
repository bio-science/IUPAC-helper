/**
 * P-83.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of selectively labeled compounds
 * The name of a selectively labeled compound is formed in the same way as the name of a specifically
 * labeled compound, except that the multiplying subscripts following the atomic symbols are generally
 * omitted. Identical locants corresponding to the same element are not repeated. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-83.2.2', [
  { notNames: ['[²H4]methane'] },
  { notNames: ['[1,1-²H2]ethan-1-ol'] },
]);
