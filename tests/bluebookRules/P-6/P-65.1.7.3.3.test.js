/**
 * P-65.1.7.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Chalcogen analogues of acyl groups derived from acids having retained names that are used only in
 * general nomenclature are named using prefixes expressing functional replacement
 * Names of acyl groups derived from monocarboxylic acids are modified by prefixes expressing
 * functional replacement by =S, =Se, and =Te. Acyl group prefixes corresponding to dicarboxylic acids
 * are formed systematically, in accordance with Rule P- 65.1.7.4.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.7.3.3', [
  { formula: 'CH3-CH2-CS–', preferredPrefix: 'propanethioyl' },
  { formula: 'CH2=CH-CSe–', preferredPrefix: 'prop-2-eneselenoyl' },
  { formula: 'HS-CS-CS–', preferredPrefix: 'sulfanyl(sulfanylidene)ethanethioyl' },
]);
