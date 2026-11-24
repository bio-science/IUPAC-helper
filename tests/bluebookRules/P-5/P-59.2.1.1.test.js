/**
 * P-59.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If the compound is purely acyclic, the principal chain is chosen as parent hydride by the method
 * described in P-44.
 * Explanation: The suffix ‘one’ receives the lowest possible locant, ‘2’, thus determining the
 * direction of numbering of the chain. Two hexane chains are possible; …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-59.2.1.1', [
  { pin: '3-chloro-6-hydroxy-5-methylhex-3-en-2-one' },
]);
