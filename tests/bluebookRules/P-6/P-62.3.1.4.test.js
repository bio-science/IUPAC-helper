/**
 * P-62.3.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Carbodiimides
 * The hypothetical compound HN=C=NH is named systematically ‘methanediimine’. Its derivatives are
 * named as substitution products thereof. These names are preferred to those based on the retained
 * name ‘carbodiimide’, which now should be used only as a class name.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.3.1.4', [
  { formula: 'C6H11-N=C=N-C6H11', pin: 'dicyclohexylmethanediimine' },
]);
