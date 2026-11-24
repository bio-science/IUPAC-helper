/**
 * P-25.3.4.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Multiparent names
 * Multiple occurrences of the parent component in a multiparent system is indicated by the use of
 * multiplying prefixes, ‘di’, ‘tri’, etc, or ‘bis’, ‘tris’, etc. To distinguish between the parent
 * components, the second has primed locants, the third double primed, etc.
 * The use of enclosing parentheses following ‘di’, ‘tri’, etc., indicating multiple occurrences of a
 * parent component in these recommendations is a change from the recommendations in the 1998 …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.4.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304d.gif', pin: 'cyclopenta[1,2-b:1,5-b′]bis([1,4]oxathiine)' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304e.gif', pin: 'benzo[1,2-c:3,4-c′]bis([1,2,5]oxadiazole)' },
]);
