/**
 * P-26.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Monocyclic simplified skeletal structures”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.2.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260201b.gif', name: 'cycloheptaphane' },
]);
