/**
 * P-44.2.2.2.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior fused ring system has the larger individual ring component at first point of difference
 * when their ring sizes are compared in order of decreasing size [criterion (a) in P-44.2.2.2.3].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.3.1', [
  { pin: 'azulene' },
  { pin: 'naphthalene' },
]);
