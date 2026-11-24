/**
 * P-44.2.2.2.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior cyclic phane system has the lower set of attachment locants considered as a set when
 * compared term by term in order of increasing numerical value [criterion (e) in P-44.2.2.2.2].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.2.5', [
  { pin: '1,6(1,3)-dibenzenacyclodecaphane' },
  { pin: '1(1,3),6(1,4)-dibenzenacyclodecaphane' },
]);
