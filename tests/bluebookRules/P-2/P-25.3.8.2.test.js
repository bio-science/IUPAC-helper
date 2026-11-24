/**
 * P-25.3.8.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Locants are also omitted for the fusion of a terminal monocyclic attached hydrocarbon component.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.8.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250308f.gif', pin: 'cyclopenta[4,5]pyrrolo[2,3-c]pyridine' },
]);
