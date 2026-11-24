/**
 * P-102.5.6.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution at a terminal carbon atom
 * Substitution at a terminal carbon atom of a carbohydrate chain creates a new chirality center; the
 * configuration is indicated by the ‘R/S’ system. Preferred names are formed substitutively.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102563h.gif', name: '1-phenyl-D-glucose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102563i.gif', name: '1-C-phenyl-β-D-glucopyranose' },
]);
