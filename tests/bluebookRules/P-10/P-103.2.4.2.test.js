/**
 * P-103.2.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When it is desirable to mention or stress the ionic nature of an amino acid, cations or anions
 * derived from a monoamino monocarboxylic acid may be indicated as follows (in indicating an anion the
 * ending ‘ate’ replaces ‘ic acid’ or the final ‘e’ of the trivial name, or is added to the name
 * tryptophan):”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.2.4.2', [
  { formula: 'H2N-CH2-COO⁻', name: 'glycinate' },
  { formula: 'NH3⁺-CH2-COOH', name: 'glycinium' },
]);
