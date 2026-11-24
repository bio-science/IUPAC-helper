/**
 * P-25.4.1.9
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Dependent bridge. A bridge that connects one or more positions of a fused ring system to one or
 * more positions of a simple or composite independent bridge, and cannot be expressed as part of a
 * larger composite bridge.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.1.9', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250401h.gif', pin: '4,5,12-epimethanetriyl-2,9,7-epipropane[1,2,3]triylanthracene' },
]);
