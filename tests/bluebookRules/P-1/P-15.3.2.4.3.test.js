/**
 * P-15.3.2.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a choice is possible, unprimed locants are assigned to the identical parent structure having
 * the substituent cited first in alphanumerical order.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.2.4.3', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bo.gif', pin: '1-bromo-3-[(3-chlorophenyl)methyl]benzene', otherNames: ['3-bromo-3′-chloro-1,1′-methylenedibenzene'], notNames: ['1-[(3-bromophenyl)methyl]-3-chlorobenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bp.gif', pin: '2-(4-bromo-2-carboxyphenoxy)-5-fluorobenzoic acid', otherNames: ['5-bromo-5′-fluoro-2,2′-oxydibenzoic acid'], notNames: ['5-bromo-2-(2-carboxy-4-fluorophenoxy)benzoic acid'] },
]);
