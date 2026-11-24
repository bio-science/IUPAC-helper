/**
 * P-27.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Fullerenes
 * Fullerenes are compounds composed solely of an even number of carbon atoms, which form a cage-like
 * fused-ring polycyclic system with twelve five-membered rings and the rest six-membered rings (see
 * ref. 10). The archetypal example is [60]fullerene, where the atoms and bonds delineate a truncated
 * icosahedron. The term has been broadened to include any closed cage structure consisting entirely of
 * three-coordinate carbon atoms.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-27.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270101a.gif', pin: 'C60-Ih)[5,6]fullerene' },
]);
