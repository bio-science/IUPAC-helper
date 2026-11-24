/**
 * P-25.3.3.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is a choice between heteroatoms of different elements, the lower locant is assigned in
 * accordance with the order F > Cl > Br > I > O > S > Se > Te > N > P > As > Sb > Bi > Si > Ge > Sn >
 * Pb > B > Al > Ga > In > Tl;”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.3.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250303y.gif', pin: 'phosphinolizino[4′,5′,6′:3,4,5][1,4]azaphosphinino[2,1,6-de]quinolizine' },
]);
