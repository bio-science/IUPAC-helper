/**
 * P-66.1.1.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Alicyclic mono- and diamides are named substitutively by adding the suffix ‘amide’, to the
 * appropriate parent hydride name, with elision of the final letter ‘e’ before ‘a’. The multiplying
 * prefix ‘di’ is used to name diamides.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.1.1.1', [
  { formula: 'CH3-[CH2]4-CO-NH2', pin: 'hexanamide' },
  { formula: 'H2N-CO-CH2-CH2-CH2-CO-NH2', pin: 'pentanediamide' },
]);
