/**
 * P-44.4.1.8
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring, ring system, or principal chain has the lower locants for characteristic groups
 * cited as a suffix [criterion (h) in P-44.4.1].”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 503, P-44.4.1.8, example 1. [corrected 25 August 2016]
 *     For 2H-pyran-2-one (PIN)
 *     read pyridin-2(1H)-one (PIN)
 *     for 4H-pyran-4-one (PIN)
 *     read pyridin-4(1H)-one (PIN) [examples changed as with pyran seniority is decided by P-44.4.1.4]
 *     replace the structures with:
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.4.1.8', [
  { pin: 'pyridin-2(1H)-one' },
  { pin: 'pyridin-4(1H)-one' },
  { pin: 'octane-1,7-diol' },
  { pin: 'octane-1,8-diol' },
  { pin: '2,4,6,8-tetrasiladecane-1,9-diol' },
  { pin: '2,4,6,8-tetrasiladecane-1,10-diol' },
  { pin: '2,4-dioxa-1,7(1),3,5(1,4)-tetrabenzenaheptaphane-1⁴,7²-diol' },
  { pin: '2,4-dioxa-1,7(1),3,5(1,4)-tetrabenzenaheptaphane-1⁴,7⁴-diol' },
]);
