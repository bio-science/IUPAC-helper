/**
 * P-46.1.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal substituent chain has the lowest locants for heteroatoms appearing first in the
 * order: O > S > Se > Te > N > P > As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In > Tl
 * [criterion(g) in P-46.1]; this criterion is used only in method (2) of P-46.0.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.1.7', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460107a.gif', preferredPrefix: '2-{[({[(butylsilyl)methyl]silyl}methoxy)methyl]sulfanyl}-3-oxa-5-thia-7,9-disilatridecan-1-yl', notNames: ['2-{[({[(butylsilyl)methyl]silyl}methyl)sulfanyl]methoxy}-5-oxa-3-thia-7,9-disilatridecan-1-yl'] },
]);
