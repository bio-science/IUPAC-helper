/**
 * P-92.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Sequence Rule 4a
 * Chiral stereogenic units precede pseudoasymmetric stereogenic units and these precede nonstereogenic
 * units.
 * Note: The numbering of the principal chain is based on lowest locants for stereogenic centers; …
 * Explanation: The molecule is renumbered in preparation for the construction of digraphs. …
 * Explanation: Final simplified digraph showing that the four ligands around the stereogenic unit
 * ‘C-4’ are different and can be ranked: ‘OH > pseudoasymmetric stereogenic unit > nonstereogenic unit
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1194, P-92.5.1, Note, line 2. [corrected 10 April 2019]
 *     For ... the stereodescriptor set ‘2R,3S,6R’ in the principal chain ...
 *     read ... the stereodescriptor set ‘2R,4S,6R’ in the principal chain ...
 *   Page 1195, P-92.5.1 Example (cont‘d), line 2. [corrected 10 April 2019]
 *     For ...at ‘C-2’, ‘C-5’, ‘C-6’, ‘C-8’ and ‘C-10’,...
 *     read ...at ‘C-2’, ‘C-3’, ‘C-6’, ‘C-8’ and ‘C-10’,...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-92.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92510c.gif', name: 'simplified digraph' },
]);
