/**
 * P-75.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1123, P-75.2.1, example 5. [corrected 26 September 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-75.2.1', [
  { formula: 'HN•⁻', preselectedName: 'azanidyl', otherNames: ['aminidyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75210a.gif', pin: 'ethan-2-id-1-yl' },
  { formula: '(CH3)3B•⁻', pin: 'trimethylboranuidyl', otherNames: ['trimethyl-1λ⁵-boranidyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75210b.gif', pin: '1λ⁴-thiiran-1-id-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75210c.gif', pin: '1,3-diphenylpropane-1,3-diid-2-yl' },
]);
