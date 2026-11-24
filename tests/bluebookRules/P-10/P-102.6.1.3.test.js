/**
 * P-102.6.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “N-Glycosyl compounds (glycosylamines)
 * N-Glycosyl derivatives are named as glycosylamines.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.6.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102613a.gif', name: 'α-D-fructopyranosylamine' },
]);
