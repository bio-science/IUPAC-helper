/**
 * P-93.5.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specification of stereogenic spiro atoms of the type ‘Xabcd’, where ‘a’ > ‘b’ > ‘c’ > ‘d’
 * The stereodescriptors ‘R’ and ‘S’ are used when the spiro atom ‘X’ is surrounded by four atoms
 * arranged as ‘a > b > c > d’. These stereodescriptors are preferred to ‘cis’ and ‘trans’ that can be
 * used to describe the relative configuration of rings in dispiro compounds. The configuration of any
 * chirality centers located on the spiro skeleton is described by stereodescriptors ‘R’ and ‘S’ by
 * using the usual method.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1260, P-93.5.3.1, example 4, simplified digraph. [corrected 26 June 2019]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93531b.gif', name: 'cis-1,8-dioxadispiro[4.1.4⁷.2⁵]tridecane' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93531f.gif', name: 'simplified digraph' },
]);
