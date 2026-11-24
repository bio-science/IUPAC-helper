/**
 * P-44.2.2.2.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior cyclic phane system has the lower superatom locant(s) for all amplificants, first as a
 * set compared term by term in order of increasing numerical value and then in order of their citation
 * in the name [criterion (c) in P-44.2.2.2.2].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.2.3', [
  { pin: '1,4(1,3)-dibenzenacyclononaphane' },
  { pin: '1,5(1,3)-dibenzenacyclononaphane' },
]);
