/**
 * P-14.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nonstandard bonding numbers
 * A nonstandard bonding number of a neutral skeletal atom of a parent hydride is indicated by the
 * symbol ‘λⁿ’, cited in conjunction with an appropriate locant. Note that the ‘n’ in the symbol ‘λⁿ’
 * is italicized but the numbers in a specific symbol, e.g., ‘λ⁴’, are not (for the use of italicized
 * ‘n’ in the symbol ‘λⁿ’, see the General rules for symbols in physical quantities, Section 1.3 in
 * ref. 14).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.1.3', [
  { formula: 'CH3-SH5', pin: 'methyl-λ⁶-sulfane' },
  { formula: '(C6H5)3PH2', pin: 'triphenyl-λ⁵-phosphane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1401b.gif', pin: '1λ⁴,3-thiazine' },
]);
