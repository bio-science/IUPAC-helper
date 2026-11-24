/**
 * P-44.2.2.2.6.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior linear phane system has the lower set of attachment locants considered as a set when
 * compared term by term in order of increasing numerical value [criterion (g) in P-44.2.2.2.6].”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.6.7', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202cy.gif', pin: '1,7(1),3,5(1,3)-tetrabenzenaheptaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202cy.gif', pin: '1,7(1),3(1,3),5(1,4)-tetrabenzenaheptaphane' },
]);
