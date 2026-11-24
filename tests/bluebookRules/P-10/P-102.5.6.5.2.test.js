/**
 * P-102.5.6.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “meso-Forms
 * The prefix ‘meso’ may be included in the preferred names of erythritol, ribitol and galactitol. The
 * stereodescriptor ‘D’ or ‘L’ must be given when a derivative of a ‘meso’ form has become asymmetric
 * by substitution. It is also necessary to use the stereodescriptor ‘D’ or ‘L’ in the case where there
 * are more than four contiguous chirality centers.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1373, P-102.5.6.5.2, line 1. [corrected 18 May 2023]
 *     For The prefix ‘meso&#146 must be included in the preferred name of erythritol....
 *     read The prefix ‘meso&#146 may be included in the name of erythritol....
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102565e.gif', name: '5-O-methyl-D-galactitol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102565f.gif', name: 'meso-D-glycero-L-ido-heptitol' },
]);
