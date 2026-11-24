/**
 * P-24.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Alphanumerical order, as described in Section P-14.5 and P-14.6, is used when necessary. When Roman
 * letters are inadequate to distinguish alphabetically between two ring components, criteria based on
 * italic fusion letters and numbers, heteroatom locants, and von Baeyer descriptor numbers are used,
 * as appropriate. …
 * Note: The double set of brackets in this name occurs because the spiro name requires them and
 * brackets are used to enclose locants belonging to ring component names (see P-16.5.2.2). …
 * Note: The double set of brackets in this name occurs because the spiro name requires them and
 * brackets are used to enclose locants belonging to ring component names (see P-16.5.2.2). …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 187, P-24.5.3, example 4 on this page. [modified 4 September 2019]
 *     For (3,1-benzoxazine before 2,3,-benzoxazine)
 *     read (3,1-benzoxazine before 2,3-benzoxazine)
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240503a.gif', pin: '1H,2′H-spiro[benzo[g]isoquinoline-8,9′-benzo[h]isoquinoline]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240503b.gif', pin: '2′H,5H-spiro[thieno[2,3-b]furan-4,3′-thieno[3,2-b]furan]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240503c.gif', pin: 'spiro[[1,2]benzodithiole-3,2′-[1,3]benzodithiole]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240503d.gif', pin: 'spiro[[3,1]benzoxazine-7,6′-[2,3]benzoxazine]' },
]);
