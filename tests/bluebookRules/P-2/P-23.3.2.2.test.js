/**
 * P-23.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is still a choice, low locants are assigned in accord with the decreasing seniority order
 * of heteroatoms O > S > Se > Te > N > P > As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In > Tl.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.3.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230302c.gif', pin: '2-oxa-4-thiabicyclo[3.2.1]octane' },
]);
