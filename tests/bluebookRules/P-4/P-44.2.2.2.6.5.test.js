/**
 * P-44.2.2.2.6.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior linear phane system has the lower superatom locant(s) for all amplificants as a set when
 * compared term by term in order of increasing seniority [criterion (e) in P-44.2.2.2.6].”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.6.5', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202cu.gif', pin: '1,11(1),3,5,7(1,4)-pentabenzenaundecaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202cu.gif', pin: '1,11(1),3,5,9(1,4)-pentabenzenaundecaphane' },
]);
