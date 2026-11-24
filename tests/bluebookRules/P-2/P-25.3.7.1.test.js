/**
 * P-25.3.7.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Multiparent systems with one interparent component
 * Multiple occurrences of the parent component in a multiparent system are indicated by the use of a
 * multiplying prefix (‘di’, ‘tri’, etc., or ‘bis’, ‘tris’, etc.). To distinguish between the parent
 * components, the second parent component has primed letters, the third double primed, etc.; the sets
 * of locants are separated by a colon.
 * The use of enclosing parentheses following ‘bis’, ‘tris’, etc. indicating multiple occurrences of a
 * parent component in these recommendations is a change from the recommendations in the 1998 …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.7.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250307a.gif', pin: 'benzo[1,2-f:4,5-g′]diindole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250307b.gif', pin: 'benzo[1,2:4,5]di[7]annulene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250307c.gif', pin: '1H-benzo[1,2:3,4:5,6]tri[7]annulene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250307e.gif', pin: 'cyclopenta[1,2-b:5,1-b′]bis([1,4]oxathiine)' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250307f.gif', pin: 'phenanthro[4,5-bcd:1,2-c′]difuran' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250307g.gif', pin: 'cyclopenta[1,2-b:1,5-b′]bis([1,4]oxathiine)' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250307h.gif', pin: 'benzo[1,2-c:3,4-c′]bis([1,2,5]oxadiazole)' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250307i.gif', pin: 'furo[3,2-b:4,5-b′]difuran', notNames: ['difuro[3,2-b:2′,3′-d]furan (a multiplicative prefix name)'] },
]);
