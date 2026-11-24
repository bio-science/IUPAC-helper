/**
 * P-26.5.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Lowest locants are assigned to heteroatoms considered in the order of their seniority: O > S > Se >
 * Te > N > P > As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In > Tl (see P-15.4), first with
 * regard to the set for primary locants for heteroatoms, i.e., the locants of the simplified skeleton
 * (the locants without including any superscript numbers), and then, if these locants are identical,
 * to the set of the complete heteroatom locants, which includes the primary locants and the
 * superscript …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 321, P-26.5.4.2, example on this page. [corrected 30 March 2022]
 *     For Step 2:
 *     1⁴,2,4,5¹⁴,6,12-hexaoxa-1¹⁴,5⁴-dithia-3(2,5)-furana-1,5(1,5)dicyclotetradecanacyclododecaphane
 *     (I) (PIN)
 *     read Step 2:
 *     1⁴,2,4,5¹⁴,6,12-hexaoxa-1¹⁴,5⁴-dithia-3(2,5)-furana-1,5(1,5)-dicyclotetradecanacyclododecaphane
 *     (I) (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.5.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260504e.gif', notNames: ['6-thia-2-aza-1,4(1,4)-dibenzenacyclohexaphane'] },
  { notNames: ['1¹⁴,2,4,5⁴,6,12-hexaoxa-1⁴,5¹⁴-dithia-3(2,5)-furana-1,5(1,5)-dicyclotetradecanacyclododecaphane (II)'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260504h.gif', pin: '2-oxa-6-thia-4-selena-1,7(4)-dipyridina-3,5(1,4)-dibenzenaheptaphane', notNames: ['6-oxa-2-thia-4-selena-1,7(4)-dipyridina-3,5(1,4)-dibenzenaheptaphane'] },
]);
