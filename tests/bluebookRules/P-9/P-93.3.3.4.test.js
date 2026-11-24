/**
 * P-93.3.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “See-saw systems
 * The configuration index of a see-saw system consists of the priority numbers indicating the two
 * atoms or groups separated by the largest angle (see IR-9.3.3.8, ref. 12).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.3.3.4', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93334b.gif', notNames: ['TBPY-4-dibromodiphenyl-λ⁴-tellurane (see P-93.3.3.5.1)'] },
]);
