/**
 * P-31.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The multiplying prefixes ‘di’, ‘tri’, etc., are placed before endings denoting unsaturation to
 * indicate the number of multiple bonds of each kind, as required, for example, ‘diene’ and ‘triyne’.
 * For euphonic reasons, when the endings ‘ene’ and ‘yne’ are preceded by a multiplying prefix and a
 * locant the letter ‘a’ is inserted. There is no elision of the final letter ‘a’ of a multiplying
 * prefix before ‘ene’ or ‘yne’, for example, ‘tetraene’ and ‘pentayne’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310101f.gif', pin: 'buta-1,3-diene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310101g.gif', pin: 'nona-1,3,5,7-tetraene' },
]);
