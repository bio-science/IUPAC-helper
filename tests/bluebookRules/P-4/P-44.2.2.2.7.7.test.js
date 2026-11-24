/**
 * P-44.2.2.2.7.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring assembly is composed of the greater number of heteroatoms in the order: F > Cl > Br
 * > I > O > S > Se > Te > N > P > As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In > Tl
 * [criterion(g)in P-44.2.2.2.7].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.7.7', [
  { pin: '3,3′-bipyrano[3,2-e][1,4]dioxepine' },
  { pin: '2,2′-bi-3,1,5-benzoxadiarsepine' },
]);
