/**
 * P-26.4.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When two amplificants can be given the lower of two superatom locants, the lower locant is assigned
 * to the superatom representing the amplificant with the lower set of attachment locants. When
 * necessary, this procedure is applied to other amplificants in accordance with their order of
 * seniority until two or more identical amplificants have different attachment locants (see last
 * example).
 * Note: The use of brackets in the name of the third amplificant is a change from PHI-3.2 of ref. 5.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 309, P-26.4.2.2, example 1. [corrected 27 May 2020]
 *     For {not 1,9(2,4)-diquinolina-3(5,3),7(2,4)-dipyridina-5(3,5)- [1,2]oxazolacyclotetradecaphane;
 *     read {not 1(2,4),9(4,2)-diquinolina-3(5,3),7(2,4)-dipyridina-5(3,5)-
 *     [1,2]oxazolacyclotetradecaphane;
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.4.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260402d.gif', pin: '1(4,2),9(2,4)-diquinolina-3(4,2),7(3,5)-dipyridina-5(3,5)-[1,2]oxazolacyclotetradecaphane', otherNames: ['{not 1(2,4),9(4,2)-diquinolina-3(5,3),7(2,4)-dipyridina-5(3,5)-[1,2]oxazolacyclotetradecaphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260402e.gif', pin: '1(1,3),4(1,4)-dibenzenacycloheptaphane', notNames: ['1(1,4),4(1,3)-dibenzenacycloheptaphane', '1(1,3),4(4,1)-dibenzenacycloheptaphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260402f.gif', pin: '4(5,2),12(3,5)-dipyridina-1,8(1,3,5)-dibenzenabicyclo[6.6.0]tetradecaphane', notNames: ['4(3,5),12(2,5)-dipyridina-1,8(1,3,5)dibenzenabicyclo[6.6.0]tetradecaphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260402g.gif', pin: '1(4,2), 4(5,2),7(2,6)-tripyridinacyclononaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260402h.gif', pin: '3(2,5),5(2,6)-dipyridina-1,7(1)-dibenzenaheptaphane', notNames: ['3(6,2),5(5,2)-dipyridina-1,7(1)-dibenzenaheptaphane'] },
]);
