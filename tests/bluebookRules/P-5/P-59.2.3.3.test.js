/**
 * P-59.2.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Mancude ketones, imines, and other characteristic groups as well as free valences, such as
 * ‘-ylidene’ are named by the ‘added indicated hydrogen’ method. If there is a choice, indicated
 * hydrogen atoms have priority for low locants, then suffixes, ‘added indicated hydrogen’ atoms, and
 * finally hydro prefixes, in that order.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 645, P-59.2.3.3, example 4 on this page, last line.[corrected 20 February 2019]
 *     For 3a,9b-dihydro-3H-cyclopenta[a]naphthalene-3,5(2H)-dione
 *     read 3a,9b-dihydro-1H-cyclopenta[a]naphthalene-3,5(2H,4H)-dione
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-59.2.3.3', [
  { pin: '5,6,7,8-tetrahydronaphthalen-2(4aH)-one' },
  { preferredPrefix: '3,4-dihydroquinolin-2(1H)-ylidene' },
  { pin: '3a,9b-dihydro-1H-cyclopenta[a]naphthalene-3,5(2H,4H)-dione' },
  { preferredPrefix: '1,3-dioxo-1,3-dihydro-2H-isoindol-2-yl' },
]);
