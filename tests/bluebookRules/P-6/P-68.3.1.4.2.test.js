/**
 * P-68.3.1.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Diazoamino compounds
 * Compounds having the structure R-N=N-NR2 are known as ‘diazoamino compounds’ when the same
 * substituent group is located at each end of the chain. They are named substitutively, on the basis
 * of the parent hydride name ‘triazene’ if there is present no characteristic group to be cited as a
 * suffix. The prefix ‘diazoamino’ for the group –N=N-NH– is no longer recommended.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1016, P-68.3.1.4.2, line 4. [corrected 28 October 2016]
 *     For ... the group –N=NH-NH– is no longer recommended.
 *     read ... the group –N=N-NH– is no longer recommended.
 *   Page 1016, P-68.3.1.4.2, example 3. [corrected 28 October 2016]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68314g.gif', pin: '3-methyl-1,3-diphenyltriaz-1-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68314h.gif', pin: '1,3-diphenyltriaz-1-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68314i.gif', pin: '1,3-di(naphthalen-2-yl)triaz-1-ene' },
]);
