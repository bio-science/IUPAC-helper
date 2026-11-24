/**
 * P-66.1.6.1.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Carboxylic acid derivatives of urea
 * Two carboxylic acids are related to urea; have been known as ‘allophanic acid’ for H2N-CO-NH-COOH
 * and ‘hydantoic acid’ for H2N-CO-NH-CH2-COOH. These names are no longer recommended. Preferred IUPAC
 * names for these two acids and their derivatives are formed systematically.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.6.1.1.4', [
  { formula: 'H2N-CO-NH-COOH', pin: 'carbamoylcarbamic acid' },
  { formula: 'H2N-CO-NH-CO–', preferredPrefix: 'carbamoylcarbamoyl' },
  { formula: 'H2N-CO-NH-CH2-COOH', name: 'N-carbamoylglycine' },
]);
