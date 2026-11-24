/**
 * P-25.4.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is more than one bridge of the same type (dependent or independent), seniority is given to
 * the bridge attached to the bridgehead with the higher locant at the first point of difference.
 * Examples”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250405b.gif', pin: '1,4-ethano-5,8-methanoanthracene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250405c.gif', pin: '6,14:7,14-dimethanobenzo[7,8]cycloundeca[1,2-b]pyridine' },
]);
