/**
 * P-66.5.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When it is necessary to cite the group –C≡NO as a substituent prefix, method (2), above is
 * applied.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.5.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66542a.gif', pin: '4-(methoxycarbonyl)benzonitrile oxide', notNames: ['methyl 4-[(oxo-λ⁵-azanylidyne)methyl]benzoate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66542b.gif', pin: 'sodium 4-[(oxo-λ⁵-azanylidyne)methyl]benzoate' },
]);
