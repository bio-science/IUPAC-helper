/**
 * P-102.5.1.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When sequences of chirality centers are separated by nonchiral centers, the nonchiral centers are
 * ignored, and the remaining set of chirality centers is assigned the appropriate configurational
 * prefix (for four centers or less) or prefixes (for more than four centers).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.1.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102511c.gif', name: '3,6-dideoxy-L-threo-L-talo-decose' },
]);
