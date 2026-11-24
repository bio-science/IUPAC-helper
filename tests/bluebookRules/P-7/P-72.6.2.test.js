/**
 * P-72.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Prefixes for anionic chalcogens
 * These prefixes are derived from the names oxide, sulfide, selenide, and telluride by changing the
 * final letter ‘e’, to ‘o’.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.6.2', [
  { formula: '–O⁻', preselectedPrefix: 'oxido' },
  { formula: '–S⁻', preselectedPrefix: 'sulfido' },
]);
