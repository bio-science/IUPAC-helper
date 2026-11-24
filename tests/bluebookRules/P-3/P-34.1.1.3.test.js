/**
 * P-34.1.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydroxycompounds”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-34.1.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340101b.gif', pin: 'phenol', otherNames: ['benzenol'] },
]);
