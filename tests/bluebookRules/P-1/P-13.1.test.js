/**
 * P-13.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “THE SUBSTITUTIVE OPERATION
 * The substitutive operation involves the exchange of one or more hydrogen atoms for another atom or
 * group of atoms. This process is expressed by a suffix or a prefix denoting the atom or group being
 * introduced.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.1', [
  { formula: 'CH3-CH3', pin: 'ethane' },
  { formula: 'CH3-CH2-SH', pin: 'ethanethiol' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1301a.gif', pin: 'benzene' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1301b.gif', pin: 'bromobenzene' },
]);
