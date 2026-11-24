/**
 * P-22.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Homogeneous heteromonocyclic parent hydrides other than boron hydrides.
 * A saturated heteromonocycle consisting of identical heteroatoms can be named by adding the prefix
 * ‘cyclo’ to the name of the saturated unbranched chain that has the same number of identical atoms.
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 151, P-22.2.5, example 1. [modified 11 November 2020]
 *     Delete pentazolane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.5', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220205a.gif', name: 'cyclopentaazane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220205b.gif', name: 'cyclohexagermane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220205c.gif', name: 'cyclododecasilane' },
]);
