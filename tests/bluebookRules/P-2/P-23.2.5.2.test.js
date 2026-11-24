/**
 * P-23.2.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Numbering the secondary bridge
 * After the main ring and main bridge have been numbered, the independent secondary bridge is numbered
 * continuing from the higher numbered bridgehead of the main ring.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.2.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230205b.gif', pin: 'tricyclo[9.3.3.1¹,¹¹]octadecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230205c.gif', pin: 'tricyclo[4.2.2.2²,⁵]dodecane' },
]);
