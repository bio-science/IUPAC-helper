/**
 * P-44.2.1.8
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring or ring system has the greater number of heteroatoms that occur earlier in the
 * following sequence: F > Cl > Br > I > O > S > Se > Te > N > P > As > Sb > Bi > Si > Ge > Sn > Pb > B
 * > Al > Ga > In > Tl [criterion (g) in P-44.2.1].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.1.8', [
  { pin: 'pyrano[3,2-e][1,4]dioxepine' },
  { pin: '3,1,5-benzoxadiphosphepine' },
  { pin: '2,6,8-trioxa-7-stannaspiro[3.5]nonane' },
  { pin: '2-oxa-6,7,8-trithiaspiro[3.5]nonane' },
  { pin: 'spiro[[3,1]benzoxazine-4,1′-cyclopentane]' },
  { pin: '4′H-spiro[cyclohexane-1,2′-cyclopenta[d][1,3]thiazine]' },
]);
