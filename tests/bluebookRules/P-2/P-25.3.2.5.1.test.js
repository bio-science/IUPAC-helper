/**
 * P-25.3.2.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A heteroatom common to two components must be indicated in the name of each component.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.2.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302az.gif', pin: 'imidazo[2,1-b][1,3]thiazole' },
]);
