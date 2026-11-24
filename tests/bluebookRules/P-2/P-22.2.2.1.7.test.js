/**
 * P-22.2.2.1.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Omission of locants
 * All locants are omitted for parent Hantzsch-Widman names if there is only one heteroatom or if there
 * is no ambiguity if locants are omitted.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.2.1.7', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220207i.gif', name: 'thiepine', notNames: ['1-thiepine', '1H-1,2,3,4-tetrazole'] },
]);
