/**
 * P-32.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Monocyclic substituent groups
 * Method (1) described in P-32.1.1 is used to name monocyclic substituent groups.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-32.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320102a.gif', preferredPrefix: 'cyclohex-1-en-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320102b.gif', preferredPrefix: 'cyclopent-3-ene-1,2-diyl' },
]);
