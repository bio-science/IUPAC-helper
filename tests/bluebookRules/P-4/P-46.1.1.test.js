/**
 * P-46.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal substituent chain has the greater number of heteroatoms [criterion (a) in P-46.1];
 * this criterion is used only in method (2) of P-46.0.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460101a.gif', preferredPrefix: '7-propyl-2,4,6,8-tetrasilanonan-1-yl', notNames: ['7-(methylsilyl)-2,4,6-trisiladecan-1-yl'] },
]);
