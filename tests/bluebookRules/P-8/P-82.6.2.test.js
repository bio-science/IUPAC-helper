/**
 * P-82.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Letter and/or numeral locants
 * When locants are needed for defining the structure of the parent structure or of a unit of structure
 * as defined by its appropriate enclosing marks, then all locants must be cited for the parent
 * structure or that structural unit. Specific positions of nuclides must be indicated in the isotopic
 * descriptor by appropriate locants, letters, and/or numerals, preceding the nuclide symbol(s). In
 * preferred names, all locants are placed before the nuclide that is multiplied.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82620b.gif', name: 'D-(2-O,1-²H2)glyceraldehyde' },
]);
