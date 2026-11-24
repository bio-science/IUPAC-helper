/**
 * P-46.1.12
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal chain has the lowest locants for substituents [criterion (l) in P-46.1]. This
 * criterion is applicable to both methods (1) and (2) of P-46.0; both methods generate compound and
 * complex substituent groups.
 * When applicable, the principal substituent chain has the greatest number of substituent groups with
 * (an) atom(s) of the highest bonding number. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 549, P-46.1.12, left example on this page. [corrected 3 January 2020]
 *     Replace the structure with:
 *   Page 549, P-46.1.12, right example on this page. [corrected 3 January 2020]
 *     Replace the structure with:
 *     >
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.1.12', [
  { preferredPrefix: '1,4-dihydroxypentan-3-yl' },
  { notNames: ['3-hydroxy-1-(1-hydroxyethyl)propyl'] },
  { preferredPrefix: '1-bromo-4-methylpentan-3-yl' },
  { preferredPrefix: '4-hydroxy-3-(2-hydroxyethyl)pentan-2-yl' },
  { preferredPrefix: '2,5-bis(λ⁵-phosphanyl)-3,6-bis(phosphanyl)heptan-4-yl' },
  { notNames: ['3,6-bis(λ⁵-phosphanyl)-2,5-bis(phospanyl)heptan-4-yl'] },
]);
