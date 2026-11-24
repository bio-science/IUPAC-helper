/**
 * P-26.4.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The seniority of a composite locant is determined first on the basis of its primary locants, i.e.,
 * the locants of the phane parent skeleton, and, if these locants are identical, on the basis of the
 * complete composite locant itself, i.e., the primary locant and its superscripts.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 315, P-26.4.3.3, example 2 on this page. [corrected 13 February 2019]
 *     For [not 1⁴,1⁶,45,46-tetrachloro-1,4(1,3)-dibenzenacyclohexaphane; the...
 *     read [not 1⁴,1⁶,4⁴,4⁵-tetrachloro-1,4(1,3)-dibenzenacyclohexaphane; the...
 *     for ...‘1⁴,1⁵,4⁴,4⁶ ’, is lower than ‘1⁴,1⁶,45,46 ’ (see P-26.4.3.3)]
 *     read ...‘1⁴,1⁵,4⁴,4⁶ ’, is lower than ‘1⁴,1⁶,4⁴,4⁵ ’]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.4.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260403a.gif', pin: '1⁴,1⁵,1⁶,3,3,4²,4³-heptachloro-1(1,3),4(1,4)-dibenzenacycloheptaphane', notNames: ['1⁴,⁵,⁶,3,3,4²,³-heptachloro-1(1,3),4(1,4)-dibenzenacycloheptaphane', '1²,1³,2,2,4⁴,4⁵,4⁶-heptachloro-1(1,4),4(1,3)-dibenzenacycloheptaphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260403b.gif', pin: '1⁴,1⁵,1⁶,4⁴,4⁶-pentachloro-1,4(1,3)-dibenzenacyclohexaphane', notNames: ['1⁴,1⁶,4⁴,4⁵,4⁶-pentachloro-1,4(1,3)-dibenzenacyclohexaphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260403c.gif', pin: '1⁴,1⁵,4⁴,4⁶-tetrachloro-1,4(1,3)-dibenzenacyclohexaphane', notNames: ['1⁴,1⁶,4⁴,4⁵-tetrachloro-1,4(1,3)-dibenzenacyclohexaphane'] },
]);
