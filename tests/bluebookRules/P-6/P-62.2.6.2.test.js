/**
 * P-62.2.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Modification of the degree of saturation/unsaturation of primary amines
 * Criteria (d), (e) and (f) described in the general methodology (P-62.2.6.1) are used.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 682, P-62.2.6.2, example 4 on this page. [modified 27 February 2019]
 *     For 2,4a-dihydronaphthalene-2,4a-diamine
 *     read 2,4a-dihydronaphthalene-2,4a-bis(azane)
 *     for 2,4a-dihydronaphthalen-4a-amine
 *     read 2,4a-dihydronaphthalene-2,4a-diamine
 *     add naphthalene-2,4a(2H)-bis(azane)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.2.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620206a.gif', pin: 'prop-2-en-1-amine', otherNames: ['allylamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620206b.gif', pin: '1,2,3,4-tetrahydronaphthalen-1-amine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620206c.gif', pin: '5,6,7,8-tetrahydronaphthalen-2-amine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620206d.gif', pin: 'naphthalen-4a(2H)-amine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620206e.gif', pin: 'naphthalene-2,4a(2H)-diamine', otherNames: ['2,4a-dihydronaphthalene-2,4a-bis(azane)', '2,4a-dihydronaphthalene-2,4a-diamine', 'naphthalene-2,4a(2H)-bis(azane)'] },
]);
