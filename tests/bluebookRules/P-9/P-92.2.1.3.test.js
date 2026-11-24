/**
 * P-92.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Saturated rings and ring systems
 * Duplicate atoms as described in P-92.1.4.3 are used in digraphs.
 * Explanation: In sphere I, the priority order established is ‘O > C-5 = C-2 > H’ in accordance with
 * Sequence Rule 1. …
 * Example 2
 * Explanation: In sphere I the priority order established is ‘O > C-1 = C-6 > H’ in accordance with
 * Sequence Rule 1. …
 * Explanation: In sphere I the priority order established is ‘O > C-1 = C-3 > H’ in accordance with
 * Sequence Rule 1. …
 * Explanation: In sphere I the priority order established is ‘Cl > C-4 = C-2 > H’ in accordance with
 * Sequence Rule 1. …
 * Explanation: In the procedure for specification of the configuration at ‘C-1’, in sphere I the
 * priority order is ‘C-2 = C-6 = C-7 > H’ in accordance with Sequence Rule 1. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1183, P-92.2.1.3, Example 1. [corrected 26 September 2018]
 *     Replace both structures with:
 *   Page 1185, P-92.2.1.3, example 3, explanation, line 4. [corrected 26 June 2019]
 *     For ... branch it is ‘C,H,H’, leading to...
 *     read ... branch it is ‘C,C,H’, leading to...
 *   Page 1186, P-92.2.1.3, Explanation, line 9. [corrected 2 January 2019]
 *     For ... leading to the overall priority of ‘C-2 > C-2 > C-7 >, H’
 *     read ... leading to the overall priority of ‘C-2 > C-6 > C-7 > H’
 *   Page 1186, P-92.2.1.3, Explanation, line 12. [corrected 2 January 2019]
 *     For ... resulting in the priority order ‘C-6 > C-3 > C-8 > H’
 *     read ... resulting in the priority order ‘C-1 > C-3 > C-8 > H’
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-92.2.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92213c.gif', name: 'complete digraph' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92213d.gif', name: 'simplified digraph' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92213f.gif', name: 'simplified digraph' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92213h.gif', name: 'simplified digraph' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92213j.gif', name: 'simplified digraph' },
]);
