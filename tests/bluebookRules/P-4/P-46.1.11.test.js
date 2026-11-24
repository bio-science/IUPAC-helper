/**
 * P-46.1.11
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal substituent chain has the greatest number of substituents of any kind [criterion (k)
 * in P-46.1]. This criterion is applicable to both methods (1) and (2) in P-46.0; both methods
 * generate compound and complex substituent groups, respectively.
 * When applicable, the principal substituent chain has the greatest number of substituent groups with
 * the highest bonding number. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.1.11', [
  { preferredPrefix: '1-hydroxypropan-2-yl' },
  { notNames: ['1-(hydroxymethyl)ethyl'] },
  { preferredPrefix: '6,7-dichloro-5-(2-chloropropyl)octan-2-yl' },
  { notNames: ['7-chloro-5-(1,2-dichloropropyl)octan- 2-yl'] },
  { preferredPrefix: '2-(λ⁵-phosphanyl)-6-phosphanylheptan-4-yl' },
  { preferredPrefix: '5-(λ⁵-phosphanyl)-2,3-bis(phosphanyl)heptan-4-yl' },
]);
