/**
 * P-44.2.2.2.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior linear phane system has the maximum number of skeletal nodes [criterion (c) in
 * P-44.2.2.2.6]”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.6.3', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202cq.gif', pin: '1,10(1),3,5,7(1,4)-pentabenzenadecaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202cq.gif', pin: '1,9(1),3,5,7(1,4)-pentabenzenanonaphane' },
]);
