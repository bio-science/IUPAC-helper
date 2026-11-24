/**
 * P-62.3.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “All imines are named substitutively using the suffix ‘imine’; the presence of several ‘imine’
 * characteristic groups is denoted by the numerical multiplying prefixes ‘di’, ‘tri’, etc. When there
 * is a choice for numbering, the methodology described in P-62.2.4 for amines is recommended to
 * generate preferred IUPAC names”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 683, P-62.3.1.1, example 5 on this page. [modified 27 February 2019]
 *     For N,N′-dimethylnaphthalene-1,4-diimine (PIN; see also P-58.2.2.3)
 *     read N,N′-dimethylnaphthalene-1,4-diimine (see also P-58.2.2.3)
 *     Add N¹,N⁴-dimethylnaphthalene-1,4-diimine (PIN; see also P-16.9.2)
 *     for [not N,N′-naphthalene-1,4-lidenebis(methanamine)]
 *     read [not N,N′-(naphthalene-1,4-diylidene)bis(methanamine)]
 *     for [not N,N′naphthalene-1,4-diylidenebis(methylamine)]
 *     read [not N,N′-(naphthalene-1,4-diylidene)bis(methylamine)]
 *     for dimethyl(napththalene-1,4-diylidene)bis(amine)]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.3.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620301a.gif', pin: 'hexan-1-imine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620301b.gif', pin: 'N-methylethanimine', notNames: ['N-ethylidenemethanamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620301c.gif', pin: 'N,1-bis(4-chlorophenyl)methanimine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620301d.gif', pin: '4-{[(4-chlorophenyl)methylidene]amino}aniline' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620301e.gif', pin: 'thiolan-2-imine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620301f.gif', pin: 'naphthalen-2(1H)-imine', otherNames: ['1,2-dihydronaphthalen-2-imine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620301g.gif', pin: 'N¹,N⁴-dimethylnaphthalene-1,4-diimine', otherNames: ['N,N′-dimethylnaphthalene-1,4-diimine', 'N,N′-dimethyl-1,4-dihydronaphthalene-1,4-diimine'], notNames: ['N,N′-dimethyl-1,4-naphthoquinone diimine', 'N,N′-(naphthalene-1,4-diylidene)bis(methanamine)', 'N,N′-(naphthalene-1,4-diylidene)bis(methylamine)', 'dimethyl(naphthalene-1,4-diylidene)bis(amine)'] },
]);
