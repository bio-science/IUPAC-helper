/**
 * P-93.5.3.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Axial chirality of spiro compounds
 * The stereodescriptors ‘M’ and ‘P’ are used to describe axial chirality of spiro compounds. The
 * sterodescriptors ‘R’ and ‘S’ can also be used to describe the chirality centers that are present.
 * Sterodescriptors ‘R’ and ‘S’ are used in preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1265, P-93.5.3.5, example 1, second digraph. [modified 2 September 2020]
 *     Replace with:
 *   Page 1265, P-93.5.3.5, Example 2. [modified 10 April 2019]
 *     For (5s,11s)-1,12-dioxatrispiro[4.2.2.4¹¹.28..2⁵]nonadecane (PIN) (spiro atoms 5 and 11 are
 *     pseudoasymmetric centers and spiro atom 8 is nonstereogenic).
 *     read (5S,8R,11S)-1,12-dioxatrispiro[4.2.2.4¹¹.2⁸.2⁵]nonadecane (PIN)
 *     for (5M )-1,12-dioxatrispiro[4.2.2.4¹¹.28..2⁵]nonadecane
 *     read (5M)-1,12-dioxatrispiro[4.2.2.4¹¹.2⁸.2⁵]nonadecane
 *     [Delete space from name and dot after 8 in both names]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.3.5', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93535d.gif', name: 'simple digraphs' },
]);
