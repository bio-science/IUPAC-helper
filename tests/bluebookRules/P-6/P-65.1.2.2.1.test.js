/**
 * P-65.1.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If an unbranched chain is linked to more than two carboxy groups, all carboxy groups are named from
 * the parent hydride by substitutive use of the suffix ‘carboxylic acid’, preceded by the appropriate
 * numerical prefix ‘tri’, ‘tetra’ etc. and appropriate locants.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.2.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102g.gif', pin: 'pentane-1,3,5-tricarboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102h.gif', pin: 'ethane-1,1,2,2-tetracarboxylic acid' },
]);
