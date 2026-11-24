/**
 * P-31.1.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Low locants are allocated first in accordance with the fixed numbering of the ring system. Low
 * locants are allocated for double bonds when the atoms of each bond have consecutive locants.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310104a.gif', pin: 'bicyclo[3.2.1]oct-2-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310104b.gif', pin: 'bicyclo[2.2.2]octa-2,5-diene' },
]);
