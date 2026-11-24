/**
 * P-26.2.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Spiro simplified skeletal structures”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.2.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260201d.gif', name: 'spiro[5.7]tridecaphane' },
]);
