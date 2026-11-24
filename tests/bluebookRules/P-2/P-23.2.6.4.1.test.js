/**
 * P-23.2.6.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Lower locants are used for the atoms of the bridge linked to the higher numbered bridgehead.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.2.6.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230206w.gif', pin: 'tetracyclo[6.3.3.2³,⁶.1²,⁶]heptadecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230206x.gif', pin: 'tetracyclo[6.3.3.2²,⁶.1³,⁶]heptadecane' },
]);
