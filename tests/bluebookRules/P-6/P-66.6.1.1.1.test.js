/**
 * P-66.6.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Mono- and dialdehydes derived from alkanes are named substitutively using the suffix ‘al’ added to
 * the name of the parent hydride with elision of the final letter ‘e’ of the parent hydride before
 * ‘a’.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.6.1.1.1', [
  { formula: 'CH3-CH2-CH2-CH2-CHO', pin: 'pentanal' },
  { formula: 'OHC-CH2-CH2-CH2-CHO', pin: 'pentanedial' },
]);
