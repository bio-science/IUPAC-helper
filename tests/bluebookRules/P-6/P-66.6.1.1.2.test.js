/**
 * P-66.6.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The suffix ‘carbaldehyde’ is used when more than two –CHO groups are attached to an unbranched
 * alkane chain.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.6.1.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66611a.gif', pin: 'butane-1,2,4-tricarbaldehyde' },
]);
