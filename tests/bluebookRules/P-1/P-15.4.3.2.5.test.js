/**
 * P-15.4.3.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heteroatoms with nonstandard valences
 * (a) A nonstandard bonding number of a neutral skeletal heteroatom in a parent hydride is indicated
 * by the symbol λn, where ‘n’ is the bonding number following the appropriate locant (see P-14.1.3).
 * (b) When there is a choice, low locants are assigned to heteroatoms having a higher bonding number.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.4.3.2.5', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1504s.gif', pin: '2,5,8-trioxa-11λ⁴-thiadodecane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1504t.gif', pin: '2λ⁴,5,8,11-tetrathiadodecane' },
]);
