/**
 * P-16.5.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Braces are used to enclose substituent prefixes in which brackets and parentheses have already been
 * used.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605s.gif', pin: '2-{2-[1-(2-aminoethoxy)ethoxy]ethoxy}propanenitrile' },
]);
