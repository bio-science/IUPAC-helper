/**
 * P-101.7.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Organyl groups such as aryl groups and alkyl groups are introduced by substitutive nomenclature.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.7.1.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101711a.gif', name: '8α-ethyleudesmane' },
]);
