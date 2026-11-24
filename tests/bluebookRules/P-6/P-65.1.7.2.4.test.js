/**
 * P-65.1.7.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl groups and substituent groups derived from oxalic acid”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.7.2.4', [
  { formula: 'OCH-CO–', name: 'oxoacetyl' },
  { formula: 'Cl-CO-CO–', preferredPrefix: 'chloro(oxo)acetyl' },
  { formula: 'HO-CO-CS–', preferredPrefix: 'carboxymethanethioyl' },
  { formula: 'HO-CS-CO–', preferredPrefix: 'hydroxy(sulfanylidene)acetyl', notNames: ['2-thiooxalo', '2-hydroxy-2-thiooxalyl'] },
  { formula: 'HO-CS-CS–', preferredPrefix: 'hydroxy(sulfanylidene)ethanethioyl', notNames: ['1,2-dithiooxalyl'] },
  { formula: 'HS-CS-CS–', preferredPrefix: 'sulfanyl(sulfanylidene)ethanethioyl' },
  { formula: 'HO-CO-CO-O–', preferredPrefix: 'oxalooxy' },
  { formula: 'HO-CO-CO-NH–', preferredPrefix: 'oxaloamino' },
  { formula: 'HO-CO-CO-S–', preferredPrefix: 'oxalosulfanyl' },
]);
