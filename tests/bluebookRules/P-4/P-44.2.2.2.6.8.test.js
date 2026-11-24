/**
 * P-44.2.2.2.6.8
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior linear phane system has the lower set of attachment locants when compared term by term
 * in their order of citation in the name [criterion (h) in P-44.2.2.2.6].”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 486, P-44.2.2.2.6.8, example. [corrected 13 February 2019]
 *     Replace the example with:
 *     1(4)-pyridina-3(1,3),5(1,4),7(1)-tribenzenaheptaphane (PIN)
 *     is senior to
 *     1(4)-pyridina-3(1,4),5(1,3),7(1)-tribenzenaheptaphane (PIN)
 *     [the locant set ‘4,1,3,1,4,1’ for the amplificant locants in order of their citation in the name
 *     is lower than ‘4,1,4,1,3,1’]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.6.8', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202da.gif', pin: '1(4)-pyridina-3(1,3),5(1,4),7(1)-tribenzenaheptaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202da.gif', pin: '1(4)-pyridina-3(1,4),5(1,3),7(1)-tribenzenaheptaphane' },
]);
