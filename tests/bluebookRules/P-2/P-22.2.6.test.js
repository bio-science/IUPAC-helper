/**
 * P-22.2.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heteromonocyclic parent hydrides composed of repeating units [(ab)n cyclic hydrides].
 * Names may be constructed by citing successively the prefix ‘cyclo’, a multiplying affix (‘di’,
 * ‘tri’, ‘tetra’, etc.) indicating the number of each element in the ring, the skeletal replacement
 * (‘a’) …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 152, P-22.2.6, example 2. [corrected 28 October 2016]
 *     For 3,5,2,4,6-triphosphatriborinane
 *     read 1,3,5,2,4,6-triphosphatriborinane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.6', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220206a.gif', name: 'cyclotetragermoxane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220206b.gif', name: 'cyclotriboraphosphane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220206c.gif', name: 'cycloheptasiloxane' },
]);
