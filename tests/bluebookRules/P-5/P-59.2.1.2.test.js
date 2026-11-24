/**
 * P-59.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If the principal group occurs only in a chain that carries a substituent, the compound is named as
 * an acyclic compound and cyclic component is expressed by a substituent prefix.
 * Explanation: The presence of a carboxylic acid group at the end of the chain determines the
 * direction of its numbering. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 633, P-59.2.1.2, Analysis, line 5. [corrected 26 September 2018]
 *     For CH3-CH2-CH=CH2CH2-COOH
 *     read CH3-CH2-CH=CH-CH2-COOH
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-59.2.1.2', [
  { pin: '3-chloro-5-cyclohexyl-6-hydroxy-5-methylhex-3-enoic acid' },
]);
