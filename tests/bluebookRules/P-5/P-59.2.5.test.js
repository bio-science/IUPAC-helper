/**
 * P-59.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Treatment of detachable prefixes
 * If there is a choice, low locants are assigned to detachable prefixes considered together, and, if
 * there is a further choice, in alphanumerical order.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-59.2.5', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P590205a.gif', pin: '1,1,2,5-tetramethylcyclopentane', notNames: ['1,2,2,3-tetramethylcyclopentane'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P590205b.gif', pin: '1-bromo-3-chloroazulen-6-ol' },
]);
