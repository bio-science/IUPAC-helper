/**
 * P-13.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Ring formation
 * The formation of a ring by means of a direct link between any two atoms of a parent structure with
 * loss of one hydrogen atom from each is indicated by the prefix ‘cyclo’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.5.3', [
  { pin: 'propane' },
  { pin: 'cyclopropane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1305n.gif', pin: '2H-2,9-cyclo-1-nor(C60-Ih)[5,6]fullerene' },
]);
