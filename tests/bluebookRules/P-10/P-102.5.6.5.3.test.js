/**
 * P-102.5.6.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Choice of parent structure for substituted alditols
 * The parent structure must have:
 * (a) the lowest locants for substituent prefixes in accordance with criterion (e) in Rule P-102.4;
 * (b) the lowest locant for the first cited substituent in alphanumerical order, in accordance with
 * criterion (f) in Rule P-102.4.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102565g.gif', name: '2,3,5-tri-O-methyl-D-mannitol', notNames: ['2,4,5-tri-O-methyl-D-mannitol'] },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102565h.gif', name: '2-O-butyl-5-O-methyl-D-mannitol', notNames: ['5-O-butyl-2-O-methyl-D-mannitol'] },
]);
