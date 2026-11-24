/**
 * P-51.4.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The chain must be terminated by C or one of the following heteroatoms: P, As, Sb, Bi, Si, Ge, Sn,
 * Pb, B, Al, Ga, In, or Tl.
 * In these recommendations heterochains may be terminated by certain heteroatoms and not just by
 * carbon atoms. Previous recommendations required a heterochain to be terminated by carbon atoms.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.4.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510401n.gif', pin: '2-oxa-4-thia-1,5-disilapentane' },
]);
