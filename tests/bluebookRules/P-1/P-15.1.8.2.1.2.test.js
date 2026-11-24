/**
 * P-15.1.8.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior characteristic group or functional class name must be expressed in the name.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 64, P-15.1.8.2.1.2, example 2. [corrected 24 March 2021]
 *     For N-phenylnitrous amide (PIN)
 *     read phenylnitrous amide (PIN)
 *   Page 64, P-15.1.8.2.1.2, example 2.. [corrected 10 June 2021]
 *     For (not N-nitrosoaniline)
 *     read N-nitrosoaniline
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.1.8.2.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1501q.gif', pin: '2-hydroxybenzoic acid', notNames: ['2-carboxyphenol'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1501r.gif', pin: 'phenylnitrous amide', otherNames: ['N-nitrosoaniline'] },
]);
