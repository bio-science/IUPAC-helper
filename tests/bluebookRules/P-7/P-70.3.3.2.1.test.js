/**
 * P-70.3.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A cumulative suffix may be added to a functional suffix to form a defined compound suffix (see
 * P-71.3.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-70.3.3.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P70332a.gif', pin: 'methanaminyl', otherNames: ['methylazanyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P70332b.gif', pin: 'propan-1-iminyl', otherNames: ['propylideneazanyl'] },
]);
