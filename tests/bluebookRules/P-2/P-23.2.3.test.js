/**
 * P-23.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Numbering bicyclic alicyclic hydrocarbons
 * The bicyclic ring system is numbered starting with one of the bridgeheads and proceeding first along
 * the longer segment of the main ring to the second bridgehead, then back to the first bridgehead
 * along the unnumbered segment of the main ring. Numbering is completed by numbering the main bridge
 * beginning with the atom next to the first bridgehead.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230201b.gif', pin: 'bicyclo[3.2.1]octane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230203a.gif', pin: 'bicyclo[4.4.2]dodecane' },
]);
