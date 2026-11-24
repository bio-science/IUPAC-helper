/**
 * P-68.3.1.1.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution of hydroxylamine by characteristic groups normally expressed as suffixes
 * Hydroxylamine is a functional parent to which, exceptionally, suffixes expressing characteristic
 * groups, such as acids, amides, etc., can be attached to the oxygen atom. In names, the locant ‘O’ is
 * placed in front of the suffix.
 * Attachment of characteristic groups to the nitrogen atom generally leads to compounds of higher
 * function.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.1.1.4', [
  { formula: 'H2N-O-SO2-OH', preselectedName: 'hydroxylamine-O-sulfonic acid', notNames: ['azanyl hydrogen sulfate'] },
  { formula: 'H2N-O-COOH', pin: 'hydroxylamine-O-carboxylic acid', notNames: ['azanyl hydrogen carbonate'] },
  { formula: 'H2N-O-CO-NH2', pin: 'hydroxylamine-O-carboxamide', notNames: ['azanyl carbamate'] },
]);
