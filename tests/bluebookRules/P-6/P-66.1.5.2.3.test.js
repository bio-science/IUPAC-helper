/**
 * P-66.1.5.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Intramolecular amides of amino sulfinic acids.
 * Cyclic amides of amino sulfinic acids and their tautomers are named as heterocyclic compounds.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.5.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66152e.gif', pin: '1λ⁴,2-thiazinan-1-one', otherNames: ['1,2-thiazinane 1-oxide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66152f.gif', pin: '3,4,5,6-tetrahydro-1λ⁴,2-thiazin-1-ol' },
]);
