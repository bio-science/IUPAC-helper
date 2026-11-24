/**
 * P-44.2.2.2.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior linear phane system has the senior amplificant, as defined by P-44.2.1.2. through
 * P-44.2.1.8 [criterion (a) in P-44.2.2.2.6]”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 480, P-44.2.2.2.6.1 (1), first structure. [corrected 31 October 2018]
 *     For 1(4)-pyridina-7(1),3,5(1,4)-tribenzenaheptaphane (PIN)
 *     read 1(4)-pyridina-3,5(1,4),7(1)-tribenzenaheptaphane (PIN)
 *   Page 480, P-44.2.2.2.6.1 (1), second structure. [corrected 31 October 2018]
 *     For 1(4)-silina-7(1),3,5(1,4)-tribenzenaheptaphane (PIN)
 *     read 1(4)-silina-3,5(1,4),7(1)-tribenzenaheptaphane (PIN)
 *   Page 481, P-44.2.2.2.6.1 (4), second structure. [corrected 24 October 2018]
 *     Replace the structure with:
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.6.1', [
  { pin: '1(4)-pyridina-3,5(1,4),7(1)-tribenzenaheptaphane' },
  { pin: '1(4)-silina-3,5(1,4),7(1)-tribenzenaheptaphane' },
  { pin: '1(2)-furana-3,5(1,4),7(1)-tribenzenaheptaphane' },
  { pin: '1(2)-thiophena-3,5(1,4),7(1)-tribenzenaheptaphane' },
  { pin: '1(2)-quinolina-7(4)-pyridina-3,5(1,4)-dibenzenaheptaphane' },
  { pin: '1,7(4)-dipyridina-3,5(1,4)-dibenzenaheptaphane' },
  { pin: '1¹H-1(2)-azepina-7(4)-pyridina-3,5(1,4)-dibenzenaheptaphane' },
  { pin: '1(2),7(4)-dipyridina-3,5(1,4)-dibenzenaheptaphane' },
]);
