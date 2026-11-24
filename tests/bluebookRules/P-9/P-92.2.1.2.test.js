/**
 * P-92.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Double and triple bonds
 * Duplicate atom nodes as described in P-92.1.4.2 are used in digraphs.
 * Explanation: No decision can be reached in sphere I, in which ‘O > C-2 = C-4 > H’. …
 * Explanation: In sphere I, the priority is established as ‘O > C-1 = C-3 > H’ in accordance with
 * Sequence Rule 1. …
 * Explanation: In sphere I, the priority is established as ‘O > C-1 = C-3 > H’ in accordance with
 * Sequence Rule 1. …
 * Explanation: In sphere I priority order established is ‘O > C-1 = C-3 > H’ in accordance Sequence
 * Rule 1. In sphere II, ‘O,(O),H’ for the –CH=O group has priority over ‘O,H,H’ for the –CH2OH group;
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1183, P-92.2.1.2, Example 3. [corrected 19 September 2018]
 *     For (2R)-2-hydroxypent-3-enenitrile (PIN)
 *     read (2R)-2-hydroxybut-3-enenitrile (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-92.2.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92212b.gif', name: 'complete digraph' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92212c.gif', name: 'simplified digraph' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92212e.gif', name: 'simplified digraph' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92212g.gif', name: 'simplified digraph' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92212i.gif', name: 'simplified digraph' },
]);
