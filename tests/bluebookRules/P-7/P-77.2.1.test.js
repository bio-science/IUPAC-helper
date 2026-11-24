/**
 * P-77.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preferred IUPAC names are binary names formed by citing the name of the cation followed by that of
 * the anion (see P-72.2.2.2.2).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1128, P-77.2.1, example 1. [corrected 21 November 2018]
 *     For sodium methanolate (PIN)
 *     read sodium methanolate
 *     for sodium methoxide
 *     read sodium methoxide (PIN)
 *     delete a retained name) and methanolate.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-77.2.1', [
  { formula: 'CH3-O⁻ Na⁺', pin: 'sodium methoxide', otherNames: ['sodium methanolate'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P77210a.gif', pin: 'sodium 4-methylbenzene-1-thiolate' },
]);
