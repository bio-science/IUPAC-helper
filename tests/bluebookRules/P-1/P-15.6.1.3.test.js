/**
 * P-15.6.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For all purposes in conjunctive nomenclature the side chain is considered to extend only from the
 * principal group to the cyclic component. Any other chain members, even those extending the side
 * chain terminally, are named as substituents, appropriate prefixes and locants being placed before
 * the name of the cyclic component.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.6.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506g.gif', pin: '3-(naphthalen-2-yl)butan-1-ol', otherNames: ['γ-methylnaphthalene-2-propanol', '3-(2-naphthyl)butan-1-ol'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506h.gif', pin: '1-phenylhexan-3-ol', otherNames: ['α-propylbenzenepropanol'] },
]);
