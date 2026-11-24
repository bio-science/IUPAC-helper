/**
 * P-92.2.1.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Beyond spheres I and II
 * When choices remain after evaluating the second sphere, the exploration procedure is continued in
 * the same way further away from the stereogenic center.
 * Example 1
 * Explanation: The first level of the exploration, sphere I, leads to ‘O > C-3 = C-5 > H’; no decision
 * can be made between the two carbon atoms. …
 * Hierarchial digraphs should be constructed for each stereogenic unit; …
 * must be constructed for ‘C-5’ and ‘C-6’.
 * Example 2
 * Note: This alcohol is similar to that in Example 1 above with a modification on the principal chain
 * in which a chlorine atom has been replaced by a fluorine atom at position 1. …
 * Explanation: At ‘C-4’, ranking ‘O > C-3 = C-5 > H’ is first established. The two higher branches
 * ‘C-3,C-2,C-1’ and ‘C-5,C-6,C-7’ cannot be differentiated. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1179, P-92.2.1.1.3, Example 1. [modified 2 January 2019]
 *     For (2R,3S,4S,5R,6S)-3-(2-bromoethyl)-1-chloro-2,6,7-trifluoro-5-(2-iodoethyl)heptan-4-ol (PIN)
 *     read (2R,3S,4R,5R,6S)-3-(2-bromoethyl)-1-chloro-2,6,7-trifluoro-5-(2-iodoethyl)heptan-4-ol (PIN)
 *     Replace structure with:
 *     replace structure with:
 *   Page 1181, P-92.2.1.1.3, example 2. [corrected 10 April 2019]
 *     For (2R,3S,4S,5R,6S)-3-(bromoethyl)-1,2,6,7-tetrafluoro-6-(2-iodoethyl)heptan-4-ol (PIN)
 *     read (2R,3S,4S,5R,6S)-3-(bromoethyl)-1,2,6,7-tetrafluoro-5-(2-iodoethyl)heptan-4-ol (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-92.2.1.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92211o.gif', name: 'complete hierarchial digraph' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92211p.gif', name: 'simplified digraph' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92211v.gif', name: 'simplified digraph' },
]);
