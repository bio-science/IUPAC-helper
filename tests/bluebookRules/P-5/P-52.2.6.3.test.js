/**
 * P-52.2.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Seco(C60-Ih)[5,6]fullerenes and seco(C70-D5h(6))[5,6]fullerenes.
 * Example 1: C70H16
 * Explanation: The preferred IUPAC name for this fullerene fragment is a secofullerene name because it
 * has 70 carbon atoms and 28 rings.
 * Example 2: C60H16
 * Explanation: The preferred IUPAC name for this fullerene fragment is a secofullerene name because it
 * has 60 carbon atoms and 21 rings.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.6.3', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520206j.gif', pin: '1,2:5,6:11,12:20,21:29,30:40,41:49,50:59,60-octaseco(C70-D5h(6))[5,6]fullerene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520206k.gif', pin: '1,9:2,12:7,8:13,14:22,23:32,33:41,42:50,51:55,56-nonaseco(C60-Ih)[5,6]fullerene' },
]);
