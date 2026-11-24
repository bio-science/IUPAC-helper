/**
 * P-16.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Italicized elements symbols, such as O, N, As, are locants indicating attachment of a substituent
 * to these heteroatoms”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.6.2', [
  { pin: 'N,N-diethylethanamine' },
  { pin: 'O-ethyl hexaneselenoate' },
]);
