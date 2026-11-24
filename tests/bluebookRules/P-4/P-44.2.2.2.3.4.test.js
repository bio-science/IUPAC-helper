/**
 * P-44.2.2.2.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior fused ring system has the lower set of numbers in the fusion descriptor, in the order of
 * appearance in a name; locants omitted in names are taken into consideration in application of this
 * criterion [criterion (d) in P-44.2.2.2.3].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.3.4', [
  { pin: 'naphtho[1,2-f]quinoline' },
  { pin: 'naphtho[2,1-f]quinoline' },
]);
