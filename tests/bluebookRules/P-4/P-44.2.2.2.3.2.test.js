/**
 * P-44.2.2.2.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior fused ring system has the greater number of rings in a horizontal row [criterion (b) in
 * P-44.2.2.2.3].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.3.2', [
  { pin: 'anthracene' },
  { pin: 'phenanthrene' },
  { pin: 'naphtho[1,2-g]quinoline' },
  { pin: 'naphtho[2,1-f]quinoline' },
]);
