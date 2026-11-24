/**
 * P-92.1.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Double and triple bonds
 * Using the Sequence Rules depends on exploring along bonds. To avoid theoretical arguments about the
 * nature of bonds, some classical forms are used. Double and triple bonds are split into two or three
 * bonds respectively.
 * A >C=O group is treated as where (O) and (C) are duplicate representations of the atoms at the other
 * end of the double bond.
 * Similarly, a –C≡CH group is treated as where (C) is a duplicate representations of the atoms at the
 * other end of the triple bond and a –C≡N group is treated as where (C) and (N) are duplicate …
 * Only the doubly bonded atoms themselves are duplicated, and not the atoms or groups attached to
 * them; …
 * The simplified digraph corresponding to the ethylenic alcohol ‘but-3-en-2-ol (PIN)’ is as follows:
 * The digraph corresponding to ‘2-hydroxypropanal (PIN)’ is as follows:”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-92.1.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92142e.gif', name: 'simplified digraph showing duplicate atoms' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92142g.gif', name: 'simplified digraph showing duplicate atoms' },
]);
