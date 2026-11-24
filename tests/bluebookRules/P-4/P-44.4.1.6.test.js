/**
 * P-44.4.1.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring, ring system, or principal chain has lower locants for heteroatoms introduced by
 * skeletal replacement (‘a’) nomenclature in the order: F > Cl > Br > I > O > S > Se > Te > N > P > As
 * > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In > Tl [criterion (f) in P-44.4.1].”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 502, P-44.4.1.6 (5), second compound. [corrected 31 October 2018]
 *     For 2-oxa-5-selena-7-thia-1,8(1),3,6(1,4)-tetrabenzenaoctaphane (PIN)
 *     read 2-oxa-7-thia-5-selena-1,8(1),3,6(1,4)-tetrabenzenaoctaphane (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.4.1.6', [
  { pin: '1,7,9-trioxa-2-azaspiro[4.5]decane' },
  { pin: '2,7,9-trioxa-1-azaspiro[4.5]decane' },
  { pin: '4H,5H-pyrano[4,3-d][1,3,2]dioxathiine' },
  { pin: '4H,5H-pyrano[4,3-d][1,2,3]dioxathiine' },
  { pin: '2-thia-4,6-diazabicyclo[3.2.0]heptane' },
  { pin: '4-thia-2,6-diazabicyclo[3.2.0]heptane' },
  { pin: '2-oxa-5-thia-7-selena-1,8(1),3,6(1,4)-tetrabenzenaoctaphane' },
  { pin: '2-oxa-7-thia-5-selena-1,8(1),3,6(1,4)-tetrabenzenaoctaphane' },
]);
