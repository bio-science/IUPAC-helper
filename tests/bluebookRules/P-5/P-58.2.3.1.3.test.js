/**
 * P-58.2.3.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When the number of indicated hydrogens is less than the number of characteristic groups the
 * following rules are applied.
 * (1) at least one of the indicated hydrogen atoms is assigned to a nonfusion peripheral atom having
 * the lowest locants consistent with the mancude system of double bonds as established in P-58.2.1.2.
 * (2) other indicated hydrogen atoms are assigned to other positions that accommodate characteristic
 * groups or free valences.
 * (3) principal characteristic groups or free valences that cannot be accommodated in ways described
 * in (1) and (2) are accommodated by using ‘added indicated hydrogen atoms’ (see P-58.2.2).
 * (4) indicated hydrogen atoms that cannot be used to accommodate principal characteristic groups or
 * free valences has seniority over ‘added indicated hydrogen’ for lower locants.
 * Explanation: There is only one indicated hydrogen atom but there are two principal characteristic
 * groups to be accommodated; …
 * Explanation: The ring system requires only one indicated hydrogen atom but there are 5 ketonic
 * sites, the principal characteristic groups; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-58.2.3.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203l.gif', pin: '3,3a-dihydro-1H-indene-1,4(2H)-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203m.gif', pin: '1H-cyclopenta[a]naphthalene-1,2(3H)-dione', notNames: ['3H-cyclopenta[a]naphthalene-1,2-dione'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203n.gif', pin: '9,10,12,13,14,21,22,23,24,25,26,27,32,33,34,34a-hexadecahydro-3H-23,27-epoxypyrido[2,1-c][1,4]oxaazacyclohentriacontine-1,5,11,28,29(4H,6H,31H)-pentone' },
]);
