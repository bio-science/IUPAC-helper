/**
 * P-68.3.1.1.1.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Chalcogen analogues of hydroxylamine
 * Chalcogen analogues of hydroxylamine are denoted by the appropriate functional replacement prefix
 * ‘thio’, ‘seleno’, or ‘telluro’. Parentheses are sometimes required to avoid the possibility of
 * ambiguity. Substitution follows the principles given above for naming derivatives of hydroxylamine.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.1.1.6', [
  { formula: 'H2N-SH', preselectedName: 'thiohydroxylamine' },
  { formula: 'CH3-NH-SH', pin: 'N-sulfanylmethanamine', otherNames: ['N-methyl(thiohydroxylamine)'] },
  { formula: 'CH3-CO-NH-SH', pin: 'N-sulfanylacetamide' },
  { formula: 'H2N-S-CH3', pin: 'S-methyl(thiohydroxylamine)' },
]);
