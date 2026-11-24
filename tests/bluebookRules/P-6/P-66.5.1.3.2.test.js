/**
 * P-66.5.1.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cyanides corresponding to the sulfur, selenium, and tellurium acids Cyanides formally formed by
 * replacing the –OH group of sulfonic acids, sulfinic acids, and similar Se and Te acids are named by
 * functional class nomenclature.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.5.1.3.2', [
  { formula: 'CH3-SO2-CN', pin: 'methanesulfonyl cyanide' },
  { formula: 'C6H5-SeO-CN', pin: 'benzeneseleninyl cyanide' },
]);
