/**
 * P-29.3.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent prefixes derived from phane systems
 * Substituent groups derived from cyclophanes are formed by applying the principles described above.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.3.6', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290306a.gif', preferredPrefix: '1,3,5,7(2,6)-tetrapyridinacyclooctaphan-2-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290306b.gif', preferredPrefix: '1,3,5,7(2,6)-tetrapyridinacyclooctaphan-1⁴(1¹H)-ylidene' },
]);
