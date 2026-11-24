/**
 * P-25.4.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If two bridges are attached to the same bridgehead atoms, they are numbered in accordance with
 * their order of citation.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250405d.gif', pin: '6,13-ethano-6,13-methanodibenzo[b,g][1,6]diazecine' },
]);
