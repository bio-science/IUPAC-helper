/**
 * P-35.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Mixed substituent prefix names are formed by combining the substitutive and additive operations.”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-35.5.1', [
  { preferredPrefix: '{[(acetyloxy)amino]sulfinyl}oxy' },
]);
