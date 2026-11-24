/**
 * P-103.2.4.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The singly charged cations of arginine, histidine, and lysine (strictly each has two positive
 * charges and one negative charge, but this nomenclature refers to net charge) may be distinguished
 * from the doubly charged cations by placing the charge after the name, by the phrase ‘monocation’, or
 * by stating the number of neutralizing anions. The location of the charge may be specified by a
 * superscripted ‘N’ locant placed before the ‘ium’ ending.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1405, P-103.2.4.3.2, line 1. [corrected 26 June 2019]
 *     For The singly charged cations of asparagine, glutamine, and lysine...
 *     read The singly charged cations of arginine, histidine, and lysine...
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.2.4.3.2', [
  { formula: 'NH2-[CH2]4-CH(NH3⁺)-COOH', name: 'lysinium(1+)' },
  { formula: 'NH2-[CH2]4-CH(NH3⁺)-COOH Cl⁻', name: 'lysinium(1+) chloride' },
  { formula: 'NH3⁺-[CH2]4-CH(NH3⁺)-COOH', name: 'lysinium(2+)' },
]);
