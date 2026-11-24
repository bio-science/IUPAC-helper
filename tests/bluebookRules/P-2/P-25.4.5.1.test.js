/**
 * P-25.4.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Independent bridges are numbered before dependent bridges.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 283, P-25.4.5.1, example. [corrected 10 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250405a.gif', pin: '13,16-epoxy-1,4:5,8-diepoxy-9,10-[1,2]benzenoanthracene' },
]);
