/**
 * P-74.2.2.1.9
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nitrones have the following delocalized general structure:
 * Method (3) in P-74.2.2.1 gives preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.2.1.9', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74221k.gif', pin: 'N-methylpropan-2-imine N-oxide' },
]);
