/**
 * P-13.4.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefix ‘dehydro’”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.4.3.1', [
  { pin: 'oxepane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1304c.gif', name: '2,3-didehydrooxepane' },
]);
