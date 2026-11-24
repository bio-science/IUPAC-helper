/**
 * P-93.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Sulfates, sulfonates, and related compounds
 * Sulfates, sulfonates and related anions are treated in the same way as phosphate anions (see
 * P-93.2.4). Selenates, selenonates, tellurates, telluronates and related compounds are treated like
 * sulfates, sulfonates and related compounds. Sulfoxides are discussed in P-93.3.3.2.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1217, P-93.2.5, example 1 on this page. [modified 21 August 2019]
 *     For 1-methyl-4-{(R)-phenyl[(¹⁸O1)methanesulfonyl}benzene (PIN)
 *     read 1-methyl-4-[(R)-phenyl(¹⁸O1)methanesulfonyl]benzene (PIN)
 *     replace structure with:
 *   Page 1217, P-93.2.5, example 2 on this page. [modified 30 September 2020]
 *     For N,N,N-tributylbutanaminium (S)-[O-phenyl (¹⁷O,¹⁸O)sulfate] (PIN)
 *     read N,N,N-tributylbutan-1-aminium (S)-[O-phenyl (¹⁷O1,¹⁸O1)sulfate] (PIN)
 *     for tetrabutylammonium (S)-[O-phenyl (¹⁷O,¹⁸O)sulfate]
 *     read tetrabutylammonium (S)-[O-phenyl (¹⁷O1,¹⁸O1)sulfate]
 *     for tetrabutylazanium (S)-[O-phenyl (¹⁷O,¹⁸O)sulfate]
 *     read tetrabutylazanium (S)-[O-phenyl (¹⁷O1,¹⁸O1)sulfate];
 *     replace structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.2.5', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93250a.gif', pin: 'O-methyl (S)-(benzenesulfonothioate)' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93250b.gif', pin: '1-methyl-4-[(R)-phenyl(¹⁸O1)methanesulfonyl]benzene' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93250c.gif', pin: 'N,N,N-tributylbutan-1-aminium (S)-[O-phenyl (¹⁷O1,¹⁸O1)sulfate]', otherNames: ['tetrabutylammonium (S)-[O-phenyl (¹⁷O1,¹⁸O1)sulfate]', 'tetrabutylazanium (S)-[O-phenyl (¹⁷O1,¹⁸O1)sulfate]'] },
]);
