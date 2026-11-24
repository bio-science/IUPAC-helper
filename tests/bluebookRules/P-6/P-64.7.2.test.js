/**
 * P-64.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “There is no seniority order difference between ketones and pseudoketones. When necessary, the
 * maximum number of carbonyl groups or doubly bonded oxygen atoms, the seniority order between chains
 * and rings, and between rings and ring systems, are considered, as appropriate.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.7.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640702a.gif', pin: '1,2-bis(4-oxocyclohexyl)-1λ⁶,2λ⁶-disulfane-1,1,2,2-tetrone' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640702b.gif', pin: '4-(4-oxocyclohexyl)oxolan-2-one', notNames: ['4-(2-oxooxolan-4-yl)cyclohexanone'] },
]);
