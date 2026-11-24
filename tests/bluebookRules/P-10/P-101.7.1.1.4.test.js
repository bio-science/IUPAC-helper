/**
 * P-101.7.1.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principles, rules, and conventions of substitutive nomenclature are used when a characteristic
 * group cited as a suffix is present on an alkyl substituent group added to a fundamental parent
 * structure.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.7.1.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101711e.gif', notNames: ['(21-nor-5α-pregnan-17α-yl)methanol'] },
]);
