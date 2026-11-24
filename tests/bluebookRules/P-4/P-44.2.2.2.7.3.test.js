/**
 * P-44.2.2.2.7.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring assembly in the absence of nitrogen is composed of rings containing at least one
 * hetero atom first cited in the following sequence: F > Cl > Br > I > O > S > Se >Te > P > As > Sb >
 * Bi > Si > Ge > Sn > Pb > B > Al > Ga > In > Tl [criterion (c) in P-44.2.2.2.7].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.7.3', [
  { pin: '2H,2′H-2,2′-bipyran' },
  { pin: '2H,2′H-2,2′-bithiopyran' },
]);
