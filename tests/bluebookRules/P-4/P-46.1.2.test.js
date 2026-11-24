/**
 * P-46.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal substituent chain has the greater number of skeletal atoms, i.e., the longest chain
 * [criterion (b) in P-46.1]. This criterion is applicable to both methods (1) and (2) of P-46.0; both
 * methods generate simple and compound substituent groups.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.1.2', [
  { preferredPrefix: 'pentan-2-ylidene' },
  { preferredPrefix: 'but-1-en-2-yl' },
  { preferredPrefix: '4-methylhexan-2-yl' },
]);
