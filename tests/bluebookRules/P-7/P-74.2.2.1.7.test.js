/**
 * P-74.2.2.1.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Carbonyl ylides have the following delocalized general structure:
 * Method (2) in P-74.2.2.1 gives preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.2.1.7', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74221g.gif', pin: '2-[(propan-2-ylidene)oxidaniumyl]propan-2-ide', otherNames: ['2-[(propan-2-ylidene)oxoniumyl]propan-2-ide'] },
]);
