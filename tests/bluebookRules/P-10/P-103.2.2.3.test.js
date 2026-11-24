/**
 * P-103.2.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups with the free valence on an oxygen or sulfur atom formed by subtraction of a
 * hydrogen atom from an oxygen or sulfur atom may also be named by changing the final letter ‘e’, when
 * appropriate, of the name of the α-amino acid to ‘x-yl’, x being the locant of the atom from which
 * the hydrogen atom has been subtracted, for example cystein-S-yl, threonin-O-yl.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.2.2.3', [
  { formula: '–S-CH2-CH(NH2)-COOH', name: 'cystein-S-yl' },
]);
