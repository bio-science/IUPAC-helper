/**
 * P-32.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When the method of added indicated hydrogen (see P-58.2.2) is used and when a choice is possible,
 * low locants are assigned in accordance with the fixed numbering of the system, then to indicated
 * hydrogen, followed by free valence suffixes, ‘added indicated hydrogen’ atom, and finally to ‘hydro’
 * prefixes (see P-14.4).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-32.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320203a.gif', preferredPrefix: '1,3,4,5-tetrahydronaphthalen-4a(2H)-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320203b.gif', preferredPrefix: '3,4-dihydroquinolin-2(1H)-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320203c.gif', preferredPrefix: '5,6,7,8-tetrahydronaphthalen-2(4aH)-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320203d.gif', preferredPrefix: '3a,4-dihydro-1H-isoindol-2(3H)-yl-1-ylidene' },
]);
