/**
 * P-102.3.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The Mills depiction
 * In this depiction, the main hemiacetal ring is drawn in the plane of the paper. Hashed wedges denote
 * substituents below this plane, and solid wedges those above.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.3.6', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102360a.gif', name: 'α-D-glucopyranose' },
]);
