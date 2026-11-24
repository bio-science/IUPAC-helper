/**
 * P-15.6.1.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When the side chain is linked to two different cyclic components, the senior ring or ring system is
 * selected in accord with the seniority order of rings and ring systems (see P-44.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.6.1.6', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506n.gif', pin: '2-cyclohexyl-2-(naphthalen-2-yl)ethan-1-ol', otherNames: ['β-cyclohexylnaphthalene-2-ethanol'] },
]);
