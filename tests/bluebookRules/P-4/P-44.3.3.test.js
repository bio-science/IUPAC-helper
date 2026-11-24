/**
 * P-44.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal chain contains the greater number of the most senior acyclic heteroatom in the order:
 * O > S > Se > Te > N > P > As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In >Tl [criterion (c) in
 * P-44.3].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.3.3', [
  { pin: '2,5,8,11-tetraoxatridecane' },
  { pin: '2,5,8-trioxa-11-thiatridecane' },
]);
