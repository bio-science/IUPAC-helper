/**
 * P-66.1.1.4.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Prefixes for the group H2N-CO-CO-NH– are ‘oxamoylamino’ (preferred prefix) or
 * ‘amino(oxo)acetamido’. The preferred prefix for the group H2N-CO-CO-N= is ‘oxamoylimino’.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 853, P-66.1.1.4.5.1, example. [corrected 13 March 2019]
 *     For 3-{amino(oxo)acetyl]imino}propanoic acid.
 *     read 3-{[amino(oxo)acetyl]imino}propanoic acid
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.4.5.1', [
  { formula: 'H2N-CO-CO-N=CH-CH2-COOH', pin: '3-(oxamoylimino)propanoic acid', otherNames: ['3-{[amino(oxo)acetyl]imino}propanoic acid.'] },
]);
