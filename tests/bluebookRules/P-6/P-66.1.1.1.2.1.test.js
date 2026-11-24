/**
 * P-66.1.1.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Only the following four retained names are preferred IUPAC names and can be substituted. The name
 * ‘oxamide’ is a contracted name from ‘oxalamide’ and substitution on the nitrogen atoms is allowed.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.1.2.1', [
  { formula: 'CH3-CO-NH2', pin: 'acetamide' },
  { formula: 'C6H5-CO-NH2', pin: 'benzamide' },
  { formula: 'H2N-CO-CO-NH2', pin: 'oxamide' },
  { formula: 'NC-NH2', name: 'cyanamide' },
]);
