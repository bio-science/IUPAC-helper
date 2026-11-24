/**
 * P-25.3.8.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The numerical locants of peripheral fusion carbon atoms of a component are omitted with an ortho-
 * and ortho- and peri-fused system.
 * Both terminal fusion atom locants for ortho-fusion must be cited even if one is a fusion atom.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 262, P-25.3.8.4, example 3. [corrected 3 October 2018]
 *     For naphtho[1,8a]azirine (PIN)
 *     read naphtho[1,8a-b]azirine (PIN)
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.8.4', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250308h.gif', pin: 'naphtho[2,1,8-def]quinoline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250308i.gif', pin: 'quinolizino[4,5,6-bc]quinazoline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250308j.gif', pin: 'naphtho[1,8a-b]azirine' },
]);
