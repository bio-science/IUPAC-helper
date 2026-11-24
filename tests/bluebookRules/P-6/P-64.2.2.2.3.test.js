/**
 * P-64.2.2.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Quinones
 * No retained quinone names are used as preferred IUPAC names. The name 1,4-benzoquinone, and those of
 * naphthoquinones and anthraquinones with locants, are retained for use in general nomenclature with
 * substitution. All other quinones are named systematically using substitutive nomenclature in
 * accordance with P-64.2.2.2.2. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 728, P-64.2.2.2.3, lines1/2. [corrected 11 March 2020]
 *     For ...The names 1,4-benzoquinone, naphthoquinone, and anthraquinone are retained for use...
 *     read...The name 1,4-benzoquinone is retained for use...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.2.2.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202u.gif', pin: 'cyclohexa-3,5-diene-1,2-dione', notNames: ['1,2-benzoquinone', 'o-benzoquinone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202v.gif', pin: '2-chlorocyclohexa-2,5-diene-1,4-dione', otherNames: ['2-chloro-1,4-benzoquinone'], notNames: ['2-chloro-p-benzoquinone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202w.gif', pin: 'naphthalene-1,2-dione', otherNames: ['1,2-naphthoquinone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202x.gif', pin: '2-chloro-3-(pyrrolidin-1-yl)naphthalene-1,4-dione', otherNames: ['2-chloro-3-(pyrrolidin-1-yl)-1,4-naphthoquinone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202y.gif', pin: 'anthracene-1,2-dione', otherNames: ['1,2-anthraquinone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202z.gif', pin: '2-methylanthracene-9,10-dione', otherNames: ['2-methyl-9,10-anthraquinone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202aa.gif', pin: 'quinoline-5,8-dione', notNames: ['quinoline-5,8-quinone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202ab.gif', pin: 'chrysene-6,12-dione', notNames: ['chrysene-6,12-quinone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202ac.gif', pin: 'acenaphthylene-1,2-dione', notNames: ['acenaphthoquinone'] },
]);
