/**
 * P-73.2.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A cation derived formally by the removal of the hydrogen atom of a hydroxy group (or chalcogen
 * analogue) of an acid or hydroxy characteristic group as a hydride ion is named as follows:
 * (1) additively, using the term ‘oxylium’ or ‘peroxylium’;
 * (2) by substituting the parent cations ‘oxidanylium’ or ‘dioxidanylium’ (preselected names) by the
 * appropriate substituent groups.
 * The names methoxylium, ethoxylium, propoxylium, butoxylium and phenoxylium are retained as preferred
 * IUPAC names, and aminoxylium as a preselected name.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1094, P-73.2.3.3, paragraph above examples, lines 1/2. [corrected 1 November 2023]
 *     For The names methoxylium, ethoxylium, propoxylium, butoxylium, phenoxylium, and aminoxylium are
 *     retained as preferred IUPAC names....
 *     read The names methoxylium, ethoxylium, propoxylium, butoxylium, and phenoxylium are retained as
 *     preferred IUPAC names, and aminoxylium as a preselected name....
 *   Page 1094, P-73.2.3.3, example 5. [corrected 12 June 2019]
 *     For dimethylaminoxylium (PIN)
 *     read N-methylmethanaminoxylium (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.2.3.3', [
  { formula: 'CH3-O⁺', pin: 'methoxylium', otherNames: ['methyloxidanylium'] },
  { formula: '(CH3)3C-O-O⁺', pin: 'tert-butylperoxylium', otherNames: ['tert-butyldioxidanylium'] },
  { formula: 'Cl-CH2-CO-O⁺', name: 'chloroacetoxylium' },
  { formula: '(CH3)2N-O⁺', pin: 'N-methylmethanaminoxylium' },
]);
