/**
 * P-44.2.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring or ring system has at least one heteroatom (in the absence of nitrogen) that occurs
 * earlier in the following sequence: F > Cl > Br > I > O > S > Se > Te > P > As > Sb > Bi > Si > Ge >
 * Sn > Pb > B > Al > Ga > In > Tl [criterion (c) in P-44.2.1].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.1.4', [
  { pin: 'furan' },
  { pin: 'thiophene' },
  { pin: '3a,7a-ethano-1-benzofuran' },
  { pin: '1H,3H-3a,7a-ethano-2-benzothiophene' },
  { pin: '2-oxabicyclo[3.1.1]heptane' },
  { pin: '1-phosphabicyclo[3.1.1]heptane' },
]);
