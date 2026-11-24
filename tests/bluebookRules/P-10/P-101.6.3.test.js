/**
 * P-101.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefix ‘all’ is used in front of stereodescriptors to indicate that all configurations are
 * identical. This prefix is used only in the nomenclature of natural products, for example,
 * ‘all-trans’ to denote the fact that in retinal all double bonds are ‘trans’.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1329, P-101.6.3, example. [corrected 7 November 2018]
 *     For (all-trans)-retinal
 *     read all-trans-retinal
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.6.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101630a.gif', name: 'all-trans-retinal' },
]);
