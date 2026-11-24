/**
 * P-68.4.3.8
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Sulfur triimides, E(=NH)3, and chalcogen analogues where E = S, Se or Te
 * Compounds with the general structure, S(=NH)3, belong to a general class called ‘sulfur triimides’.
 * Preferred IUPAC names are formed substitutively on the basis of the parent hydride λ⁶-sulfane.
 * Functional class names are based on the class name ‘sulfur triimide’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.4.3.8', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68438a.gif', pin: 'dimethyl(phenyl)-λ⁶-sulfanetriimine', otherNames: ['dimethyl(phenyl)sulfur triimide'] },
]);
