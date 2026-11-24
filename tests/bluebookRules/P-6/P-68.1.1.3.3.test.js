/**
 * P-68.1.1.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “von Baeyer and spiro compounds (see also P-23 and P-24)”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.1.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113m.gif', pin: '2,5,7,10,11,14-hexaoxa-1,6-diborabicyclo[4.4.4]tetradecane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113n.gif', pin: '2,4,8,10-tetraoxa-3,9-diboraspiro[5.5]undecane' },
]);
