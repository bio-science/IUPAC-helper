/**
 * P-65.1.7.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl groups from the carboxylic acids that have retained names used as preferred IUPAC names (see
 * P-65.1.1.1)”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.7.2.1', [
  { formula: 'CH3-CO–', preferredPrefix: 'acetyl' },
  { formula: 'HCO–', preferredPrefix: 'formyl' },
  { formula: 'C6H5-CO–', preferredPrefix: 'benzoyl' },
  { formula: '–CO-CO–', preferredPrefix: 'oxalyl' },
  { formula: 'HO-CO-CO–', preferredPrefix: 'oxalo', notNames: ['carboxyformyl', 'hydroxy(oxo)acetyl'] },
]);
