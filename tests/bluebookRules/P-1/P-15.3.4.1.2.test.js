/**
 * P-15.3.4.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Unsymmetrical substituent groups having terminal atoms with different types of free valencies:”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.4.1.2', [
  { notNames: ['(phenylmethylidene)cyclohexane'] },
  { pin: '4-(2-{[2-(4-hydroxycyclohexyl)ethylidene]amino}ethylidene)cyclohexan-1-ol', notNames: ['4-(2-{[2-(4-hydroxycyclohexylidene)ethyl]imino}ethyl)cyclohexan-1-ol'] },
]);
