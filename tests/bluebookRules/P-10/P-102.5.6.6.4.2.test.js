/**
 * P-102.5.6.6.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Glycosides of uronic acids are named by changing the ‘pyran’ component in the name of the acid to
 * ‘pyranoside’, with elision of the final letter ‘e’, to give ‘pyranosiduronic acid’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.6.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566q.gif', name: 'methyl β-D-glucopyranosiduronic acid' },
]);
