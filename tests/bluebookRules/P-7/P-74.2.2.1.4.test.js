/**
 * P-74.2.2.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Azoxy compounds have the general structure R-N=N⁺(O⁻)-R (see also P-68.3.1.3.3.1). Method (3) in
 * P-74.2.2.1 gives preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.2.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74221d.gif', pin: 'diphenyldiazene oxide', otherNames: ['azoxybenzene', '1,2-diphenyl-1λ⁵-diazen-1-one'] },
]);
