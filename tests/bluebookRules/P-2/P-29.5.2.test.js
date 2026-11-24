/**
 * P-29.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Concatenated complex substituent groups
 * Concatenated substituent groups are complex substituent groups when they are composed of three or
 * more components. Substitution is allowed as long as the symmetry of the group is maintained.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.5.2', [
  { formula: '–O-CH2-S-CH2-O–', preferredPrefix: 'sulfanediylbis(methyleneoxy)' },
]);
