/**
 * P-93.5.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specification of spiro atoms of the type ‘Xabab’, where ‘a’ > ‘b’
 * The general methodology used to specify the central configuration of such systems is illustrated
 * below.
 * Explanation: In this example (see 2.5, ref. 34), the analysis to determine the order of ligands
 * amongst equivalent pairs ‘a’/‘a′’ and ‘b’/‘b′’, where ‘a’ > ‘b’, starts at the nitrogen atom
 * numbered …
 * Note: In this example, stereogenic and pseudoasymmetric centers are present. Application of Sequence
 * Rules 4 and 5 are necessary.
 * Explanation:
 * (a) configurations at ‘C-3’ and ‘C-7’ are determined by using Sequence Rule 4, like precedes unlike,
 * in accordance with the methodology described in P-92.5;
 * (b) configurations at ‘C-4’ and ‘C-10’ are determined by using Sequence Rule 5, ‘R0’ precedes ‘S0’,
 * in accordance with the methodology described in P-92.6.
 * (c) the numbering is chosen that gives a ‘cis’ attachment at the first point of difference; see
 * P-14.4 (j); thus ‘1r,5c,8c,11t’, not ‘1r,5t,8c,11c’;”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1261, P-93.5.3.2, Example 1, Explanation, line 4. [corrected 10 April 2019]
 *     For ... atom numbered 6; they are ranked ‘a’ and ‘b’, respectively. ...
 *     read ... atom numbered 6; they are ranked ‘a’ and ‘a′’, respectively. ...
 *   Page 1262, P-93.5.3.2, example 3. [corrected 24 October 2018]
 *     Replace structure with:
 *   Page 1263, P-93.5.3.2, Example 5. [modified 2 September 2020]
 *     For (3R,4s,7S,10s)-tetraoxatetraspiro[2.0.2⁴.0.2⁷.0.2¹⁰.0³]dodecane (PIN)
 *     read (3R,4r,7S,10s)-1,5,8,11-tetraoxatetraspiro[2.0.2⁴.0.2⁷.0.2¹⁰.0³]dodecane (PIN)
 *     replace structure with:
 *   Page 1263, P-93.5.3.2, Example 5, explanation, part (b) [formerly (c)]. [corrected 2 September
 *   2020]
 *     For ...using Ssequence Rule 5, ‘R’ precedes ‘S’, as determined in (b), in accordance ...
 *     read ...using Sequence Rule 5, ‘R0’ precedes ‘S0’, in accordance ...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93532c.gif', name: 'simplified digraph' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93532h.gif', name: '1r,5c,8c,11t-tetraoxatetraspiro[2.0.2⁴.0.2⁷.0.2¹⁰.0³]dodecane' },
]);
