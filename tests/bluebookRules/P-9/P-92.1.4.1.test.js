/**
 * P-92.1.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyclic molecules
 * The digraphs corresponding to 6-chlorohexane-2,4-diol are illustrated.
 * The complete digraph describes all monodentate ligands; to ensure the tetraligancy of all atoms,
 * except H, ‘phantom atoms’ are shown. These atoms have the atomic number zero shown by the symbol
 * ‘0’. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1170, P-92.1.4.1, example. [modified 7 August 2019]
 *     For 6-chlorohexane-2,4-diol [PIN; represented by a Fischer projection formula [see Prelog and
 *     Helmchen, subsection 3.1, ref. 36 and see also P-102.3.1)]
 *     read 6-chlorohexane-2,4-diol (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-92.1.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92141a.gif', pin: '6-chlorohexane-2,4-diol' },
]);
