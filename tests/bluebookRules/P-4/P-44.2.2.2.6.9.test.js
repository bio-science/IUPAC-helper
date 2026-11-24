/**
 * P-44.2.2.2.6.9
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior linear phane system has the greater number of heteroatoms introduced by skeletal
 * replacement (‘a’) nomenclature without regard to kind [criterion (i) in P-44.2.2.2.6].”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.6.9', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202dc.gif', pin: '6-oxa-2-thia-1(4)-pyridina-3,5(1,4),7(1)-tribenzenaheptaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202dc.gif', pin: '2-thia-1(4)-pyridina-3,5(1,4),7(1)-tribenzenaheptaphane' },
]);
