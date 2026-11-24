/**
 * P-23.2.6.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Longer bridges are numbered before shorter bridges.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.2.6.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230206y.gif', pin: 'tetracyclo[7.4.3.2³,⁷.1³,⁷]nonadecane' },
]);
