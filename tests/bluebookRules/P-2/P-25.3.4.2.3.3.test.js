/**
 * P-25.3.4.2.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If two or more groups of components differ only by virtue of the fusion locants within the group,
 * these locants are used to determine the order of citation of prefixes; lower locant sets are cited
 * earlier.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.4.2.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304u.gif', pin: '4H,16H,20H,26H-cyclopenta[4,5]oxepino[3,2-a]bis(cyclopenta[5,6]oxepino)[3′,2′-c:2′′,3′′-h]cyclopenta[6′′′,7′′′]oxepino[2′′′,3′′′-j]phenazine' },
]);
