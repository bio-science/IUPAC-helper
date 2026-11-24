/**
 * P-102.5.6.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Esters with sulfuric acid
 * Esters of sugars with sulfuric acid are named by adding the term ‘sulfate’ after the name of the
 * sugar, with the appropriate locant. The prefixes ‘sulfo’ for –SO3H, and ‘sulfonato’ for SO3⁻, can be
 * used to denote O-derivatives.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102561k.gif', name: 'α-D-glucopyranose 2-sulfate' },
]);
