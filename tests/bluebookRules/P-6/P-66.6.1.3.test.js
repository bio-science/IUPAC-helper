/**
 * P-66.6.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In the presence of a characteristic group having priority to be cited as a suffix or when present
 * on a side chain, a –CHO group is expressed by the preferred prefix ‘oxo’ if located at an end of a
 * carbon chain, or, otherwise, by the preferred prefix ‘formyl’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.6.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66613a.gif', pin: '4-oxobutanoic acid', otherNames: ['3-formylpropanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66613b.gif', pin: '4-formylcyclohexane-1-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66613c.gif', pin: '2-(7-oxoheptyl)cyclopentane-1-carbaldehyde', otherNames: ['7-(2-formylcyclopentyl)heptanal'] },
]);
