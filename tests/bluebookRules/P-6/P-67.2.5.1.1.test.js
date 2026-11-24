/**
 * P-67.2.5.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Neutral salts of di- and polynuclear noncarbon oxoacids are named by citing the cation(s) followed
 * by the name of the anion(s) as (a) separate word(s). Names of anions are formed by changing the ‘ic
 * acid’ ending to ‘ate’ and the ‘ous acid’ to ‘ite’. Different cations are cited in alphabetical
 * order.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.2.5.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67251a.gif', pin: 'disodium N-methyl-1,2-diimidodithionite' },
  { formula: '4 Na⁺ (⁻O)2P(=O)-O-P(=O)(O⁻)2', name: 'tetrasodium diphosphate' },
]);
