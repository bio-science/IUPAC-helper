/**
 * P-72.8.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The suffix ‘uide’ is preferred to the suffix ‘ide’ with a parent hydride named by the
 * λ-convention.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.8.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72810a.gif', pin: 'methylsilanuide', otherNames: ['methyl-λ⁶-silanide'] },
  { formula: 'F6I⁻', preselectedName: 'hexafluoro-λ⁵-iodanuide', otherNames: ['hexafluoro-λ⁷-iodanide'] },
]);
