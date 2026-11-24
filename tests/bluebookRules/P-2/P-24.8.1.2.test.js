/**
 * P-24.8.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is a choice, lower locants are assigned to heteroatoms with the higher bonding number, for
 * example, the lower number is assigned to a λ⁶ heteroatom rather than to a λ⁴ heteroatom.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.8.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240801d.gif', pin: '2λ⁶,4λ⁴-dithiaspiro[5.5]undecane' },
]);
