/**
 * P-26.4.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When two numberings for a simplified phane skeleton are still possible, the selected numbering is
 * that which gives the lower locant set when attachment locants of all amplificants, as they appear in
 * the name, are compared in the increasing order of their corresponding superatom locants.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 313, P-26.4.2.4, example 2. [corrected 19 September 2018]
 *     For [not 3(10,3)-phenanthrena-6(5,8,3,1)-naphthalena-8(1,3)-benzenaspiro[5.7]tridecane
 *     read [not 3(10,3)-phenanthrena-6(5,8,3,1)-naphthalena-8(1,3)-benzenaspiro[5.7]tridecaphane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.4.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260402n.gif', pin: '1(2,5),4,7(5,2)-tripyridinacyclononaphane', notNames: ['1(5,2),4,7(2,5)-tripyridinacyclononaphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260402o.gif', pin: '3(3,10)-phenanthrena-6(8,5,3,1)-naphthalena-8(1,3)-benzenaspiro[5.7]tridecaphane (I)', notNames: ['3(10,3)-phenanthrena-6(5,8,3,1)-naphthalena-8(1,3)-benzenaspiro[5.7]tridecaphane (II)'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260402q.gif', pin: '3,5(2,5),7(5,2)-tripyridina-1,9(1)-dibenzenanonaphane', notNames: ['3(2,5),5,7(5,2)-tripyridina-1,9(1)-dibenzenanonaphane'] },
]);
