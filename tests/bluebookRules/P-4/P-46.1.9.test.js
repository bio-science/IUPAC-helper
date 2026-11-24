/**
 * P-46.1.9
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal substituent chain has the lowest locant(s) for multiple bonds, regardless of type,
 * then the lowest locant(s) for double bonds [criterion (i) in P-46.1]. This criterion is applicable
 * to both methods (1) and (2) in P-46.0; both methods generate simple and compound substituent
 * groups.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.1.9', [
  { preferredPrefix: 'hepta-1,5-dien-4-yl' },
  { preferredPrefix: '5-(prop-2-en-1-yl)octa-1,6-dien-3-yl' },
]);
