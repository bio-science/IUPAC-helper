/**
 * P-64.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For use in general nomenclature, only the names acetone and 1,4-benzoquinone, together with
 * naphthoquinone and anthraquinone with locants, are retained with substitution on the corresponding
 * structures. The name ketene is retained, but only for general nomenclature with substitution
 * restricted to prefixes listed in P-15.1.8.2. The names acetophenone and benzophenone are retained
 * only for general nomenclature, but no substitution is allowed. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 723, P-64.2.1.2, lines 1/2. [corrected 11 March 2020]
 *     For...acetone, 1,4-benzoquinone, naphthoquinone, and anthraquinone are retained...
 *     read ...acetone and 1,4-benzoquinone are retained...
 *   Page 724, P-64.2.1.2, example 1 on this page. [corrected 11 March 2020]
 *     Add (not benzoquinone)
 *   Page 724, P-64.2.1.2, example 2 on this page. [corrected 11 March 2020]
 *     Add (not naphthoquinone)
 *   Page 724, P-64.2.1.2, example 3 on this page. [corrected 11 March 2020]
 *     Add (not anthraquinone)
 *   Page 724, P-64.2.1.2, example 5 on this page. [corrected 11 March 2020]
 *     Delete as it is a duplicate of example 1 on page 723.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.2.1.2', [
  { formula: 'H3C-CO-CH3', pin: 'propan-2-one', otherNames: ['acetone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640201d.gif', pin: 'ethenone', otherNames: ['ketene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640201e.gif', pin: '1-phenylethan-1-one', otherNames: ['acetophenone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640201f.gif', pin: 'cyclohexa-2,5-diene-1,4-dione', otherNames: ['1,4-benzoquinone'], notNames: ['benzoquinone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640201g.gif', pin: 'naphthalene-1,4-dione', otherNames: ['1,4-naphthoquinone'], notNames: ['naphthoquinone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640201h.gif', pin: 'anthracene-9,10-dione', otherNames: ['9,10-anthraquinone'], notNames: ['anthraquinone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640201i.gif', pin: 'diphenylmethanone', otherNames: ['benzophenone'], notNames: ['1,1′-carbonyldibenzene'] },
]);
