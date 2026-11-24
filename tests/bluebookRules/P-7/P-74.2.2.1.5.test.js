/**
 * P-74.2.2.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Carbonyl imides have the following delocalized general structure:
 * Method (2) in P-74.2.2.1 gives preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.2.1.5', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74221e.gif', pin: 'N-[(propan-2-ylidene)oxidaniumyl]methanaminide', otherNames: ['N-[(propan-2-ylidene)oxoniumyl]methanaminide', 'propan-2-one methylimide', 'N-methylpropan-2-one imide'] },
]);
