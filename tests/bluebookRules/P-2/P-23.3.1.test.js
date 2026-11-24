/**
 * P-23.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The only general method to name heterogeneous heterocyclic von Baeyer systems is skeletal
 * replacement (‘a’) nomenclature. The replacement (‘a’) prefixes denoting the heteroatoms are placed
 * in front of the name of the corresponding hydrocarbon named according to P-23.2, cited in the order:
 * F > Cl > Br > I > O > S > Se > Te > N > P > As > Sb > Bi >Si > Ge > Sn > Pb > B > Al > Ga > In > Tl.
 * Numbering is determined first by the fixed numbering of the hydrocarbon system.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230301a.gif', pin: '3-oxabicyclo[3.2.1]octane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230301b.gif', pin: '2-selenabicyclo[2.2.1]heptane' },
]);
