/**
 * P-46.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal substituent chain has the greater number of heteroatoms in the order: O > S > Se > Te
 * > N > P > As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In > Tl [criterion (c) in P-46.1].”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460103a.gif', preselectedPrefix: '1-(silylsulfanyl)disiloxanyl', notNames: ['1-(silyloxy)disilathianyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460103b.gif', preferredPrefix: '5-{[(ethylsilyl)methyl]silyl}-2,6-dioxa-4,9-disiladecan-1-yl', notNames: ['5-[2-(methylsilyl)ethoxy]-2-oxa-4,6,8-trisiladecan-1-yl'] },
]);
