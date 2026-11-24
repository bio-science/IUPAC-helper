/**
 * P-65.1.8.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl groups derived from formic acid are formed as described in P-65.1.7.2 and compound prefixes
 * are formed in accordance with the structure of the substituent group. The hydrogen atom present in
 * the group formyl, –CHO, is substitutable under the same conditions as those described in P-65.1.8.2
 * for formic acid.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.8.3', [
  { formula: 'Cl-CO–', preferredPrefix: 'carbonochloridoyl', notNames: ['chloroformyl'] },
  { formula: 'Br-CS–', preferredPrefix: 'carbonobromidothioyl', notNames: ['bromo(thioformyl)'] },
  { formula: 'HCO-O–', preferredPrefix: 'formyloxy' },
  { formula: 'HCO-S–', preferredPrefix: 'formylsulfanyl' },
]);
