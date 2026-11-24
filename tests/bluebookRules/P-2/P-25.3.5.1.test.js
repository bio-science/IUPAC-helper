/**
 * P-25.3.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A benzoheterocycle as a parent component”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250305a.gif', pin: 'thieno[3,2-f][2,1]benzothiazole' },
]);
