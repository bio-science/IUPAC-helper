/**
 * P-32.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “RETAINED NAMES FOR SUBSTITUENT GROUPS DERIVED FROM PARTIALLY SATURATED POLYCYCLIC PARENT HYDRIDES
 * The prefixes in Table 3.2 are retained but are acceptable only for general nomenclature and may be
 * fully substituted; the preferred prefixes are formed systematically.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 406, P-32.4, Table 3.2, example 3. [corrected 9 April 2025]
 *     For 2,3-dihydro-1H-isoindole-2-yl
 *     read 1,3-dihydro-2H-isoindole-2-yl
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-32.4', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320400a.gif', preferredPrefix: '2,3-dihydro-1H-inden-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320400b.gif', preferredPrefix: '2,3-dihydro-1H-indol-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320400c.gif', preferredPrefix: '1,3-dihydro-2H-isoindol-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320400d.gif', name: 'chroman-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320400e.gif', name: 'isochroman-3-yl' },
]);
