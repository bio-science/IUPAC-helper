/**
 * P-46.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal chain has the greater number of multiple bonds regardless of type, then the greater
 * number of double bonds [criterion (d) in P-46.1]; this criterion is applicable to methods (1) and
 * (2) in P-46.0; both generate simple and compound substituent groups.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.1.4', [
  { preferredPrefix: 'hept-1-en-4-ylidene' },
]);
