/**
 * P-92.4.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Auxiliary stereodescriptors are used when direct assignment of configuration cannot be made to
 * double bonds. In the following example, the four-membered ring is opened to generate a digraph as
 * discussed in P-92.2.1.3, thus creating two branches each containing a double bond whose
 * configuration is ‘seqcis’ (Z) in one case and ‘seqtrans’ (E) in the other considering the ligands as
 * they appear in the digraph. …
 * Explanation: To specify double bonds, ligands of both double bond atoms should be ranked. This is
 * straightforward for the ligands of ‘C- 5’ and ‘C-7’. …
 * In names, the stereodescriptor ‘E’ is used to describe each double bond; …
 * Explanation: When comparing double bonds the first to be compared (starting from the core of the
 * digraph) are the ‘C-5’ double bond that is ‘seqcis’ and the ‘C-9’ double bond that is
 * nonstereogenic. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1192, P-92.4.2.2, Example 1. [corrected 2 September 2020]
 *     For 1,3-di[(1E)-ethylidene]cyclobutane
 *     read 1,3-di[(E)-ethylidene]cyclobutane
 *   Page 1193, P-92.4.2.2, Example 2. [modified 2 September 2020]
 *     For (2Z,5Z,7S,8Z,11Z)-9-[(2Z)-but-2-en-1-yl]-5-[(2E)-but-2-en-1-yl]trideca-2,5,8,11-tetraen-7-ol
 *     (PIN)
 *     read (2Z,5Z,7S,11Z)-5-[(2E)-but-2-en-1-yl]-9-[(2Z)-but-2-en-1-yl]trideca-2,5,8,11-tetraen-7-ol
 *     (PIN)
 *     replace structures with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-92.4.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92422a.gif', name: '1,3-di[(E)-ethylidene]cyclobutane' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92422b.gif', name: 'simplified digraph' },
]);
