/**
 * P-16.5.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Parentheses are placed around a prefix denoting simple hydrocarbyl substituents adjacent to the
 * term ‘amine’ in naming amines using ‘amine’ as the parent structure, when several different
 * substituent groups are present. This requirement is necessary to insure the specificity of this kind
 * of amine name and to distinguish them from older names. Other enclosing marks are used as needed.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.1.5', [
  { pin: 'N-(2-chloroethyl)propan-1-amine' },
  { pin: 'N-ethyl-N-propylbutan-1-amine', otherNames: ['butyl(ethyl)(propyl)amine (P-62.2.2.1)'] },
  { pin: 'N-ethyl-N-methylbutan-1-amine', otherNames: ['butyl(ethyl)(methyl)amine (P-62.2.2.1)'] },
]);
