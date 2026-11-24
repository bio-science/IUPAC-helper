/**
 * P-32.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For heteromonocyclic parent hydrides, when there is a choice heteroatoms have the lower possible
 * locants, then indicated hydrogen atoms, followed by free valence suffixes and finally ‘hydro’
 * prefixes.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 403, P-32.2.1, example 1. [corrected 19 September 2018]
 *     For 1-azadodeca-1,5,7,9,11-pentaen-6-yl (preferred prefix)
 *     read 1-azacyclododeca-1,5,7,9,11-pentaen-6-yl (preferred prefix)
 *   Page 403, P-32.2.1, example 2. [corrected 19 September 2018]
 *     For 12,13-dihydro-1-aza[13]annulen-4-yl
 *     read 12,13-dihydro-1H-1-aza[13]annulen-4-yl
 *     for 1-azatrideca-2,4,6,8,10-pentaen-4-yl (preferred prefix)
 *     read 1-azacyclotrideca-2,4,6,8,10-pentaen-4-yl (preferred prefix)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-32.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320201a.gif', preferredPrefix: '1-azacyclododeca-1,5,7,9,11-pentaen-6-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320201b.gif', preferredPrefix: '1-azacyclotrideca-2,4,6,8,10-pentaen-4-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320201c.gif', name: '3,4-dihydro-2H-pyran-3-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320201d.gif', preferredPrefix: 'oxan-3-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320201e.gif', preferredPrefix: '2,3-dihydropyrazine-1,4-diyl' },
]);
