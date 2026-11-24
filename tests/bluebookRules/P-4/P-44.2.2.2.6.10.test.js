/**
 * P-44.2.2.2.6.10
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior linear phane system has the greater number of heteroatoms introduced by skeletal
 * replacement (‘a’) nomenclature first cited in the following order: F > Cl > Br > I > O > S > Se > Te
 * > N > P > As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In > Tl [criterion (j) in P-44.2.2.2.6]”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.6.10', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202de.gif', pin: '2,10-dioxa-1,11(4)-dipyridina-3,5,9(1,4)-tribenzenaundecaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202de.gif', pin: '2-oxa-10-thia-1,11(4)-dipyridina-3,5,9(1,4)-tribenzenaundecaphane' },
]);
