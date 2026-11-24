/**
 * P-25.3.4.2.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If two or more groups of components only differ by virtue of heteroatom locants, these locants are
 * used to determine the order; lower locant sets are cited earlier.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.4.2.3.4', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304v.gif', pin: '2H-[1,2]oxazolo[5,4-c][1,3]oxazolo[3,2-a]pyridine' },
]);
