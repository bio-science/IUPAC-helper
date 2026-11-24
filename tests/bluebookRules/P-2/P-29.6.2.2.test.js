/**
 * P-29.6.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefixes isopropyl, isopropylidene, and trityl are retained for use in general nomenclature but
 * no substitution of any kind is allowed.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 368, P-29.6.2.2, example 5. [corrected 11 November 2020]
 *     For (4-methylphenyl)diphenylmethyl (preferred prefix)
 *     read (4-methylphenyl)di(phenyl)methyl (preferred prefix)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.6.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602e.gif', preferredPrefix: '1,3-dibromo-2-(bromomethyl)propan-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602f.gif', preferredPrefix: '1-hydroxypropan-2-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602g.gif', preferredPrefix: 'propan-2-ylidene' },
  { formula: '(C6H5)3C–', preferredPrefix: 'triphenylmethyl' },
]);
