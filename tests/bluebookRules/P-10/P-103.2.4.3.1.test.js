/**
 * P-103.2.4.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The singly charged anions of aspartic and glutamic acids (strictly each has one positive charge and
 * two negative charges, but this nomenclature refers to net charge) and may be distinguished from the
 * doubly charged anions by placing the charge after the name or by stating the number of neutralizing
 * cations.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.2.4.3.1', [
  { formula: '⁻OOC-CH2-CH2-CH(NH2)-COO⁻ H⁺', name: 'glutamate(1–)' },
  { formula: '⁻OOC-CH2-CH2-CH(NH2)-COO⁻ Na⁺ H⁺', name: 'sodium glutamate' },
  { formula: '⁻OOC-CH2-CH2-CH(NH2)-COO⁻', name: 'glutamate(2–)' },
  { formula: '⁻OOC-CH2-CH2-CH(NH2)-COO⁻ 2Na⁺', name: 'disodium glutamate' },
]);
