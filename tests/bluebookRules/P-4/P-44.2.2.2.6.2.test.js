/**
 * P-44.2.2.2.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior linear phane system has the most amplificants in their order of seniority as defined by
 * P-44.2.1.2 through P-44.2.1.8 [criterion (b) in P-44.2.2.2.6].”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 482, P-44.2.2.2.6.2, example (2), second structure. [corrected 22 May 2019]
 *     Replace the structure with:
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.6.2', [
  { pin: '1,7(4)-dipyridina-3,5(1,4)-dibenzenaheptaphane' },
  { pin: '1(4)-pyridina-7(2)-silina-3,5(1,4)-dibenzenaheptaphane' },
  { pin: '1(4)-cinnolina-7(4)-pyridina-3,5(1,4)-dibenzenaheptaphane' },
  { pin: '1(3)-quinolina-7(4)-pyridina-3,5(1,4)-dibenzenaheptaphane' },
  { pin: '1(4)-pyridina-7(2)-furana-3,5(1,4)-dibenzenaheptaphane' },
  { pin: '1(4)-pyridina-7(2)-thiophena-3,5(1,4)-dibenzenaheptaphane' },
]);
