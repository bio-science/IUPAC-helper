/**
 * P-68.1.1.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyhedral polyboranes.
 * Nomenclature of polyhedral polyboranes constitute a rich and diversified system characterized by
 * specific prefixes. It has been described and illustrated in the Section IR-6.2.3 (ref. 12); …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.1.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113a.gif', name: 'arachno-tetraborane(10)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113b.gif', name: 'nido-pentaborane(9)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113c.gif', pin: '1,2-dicarba-closo-decaborane(10)' },
]);
