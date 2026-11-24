/**
 * P-66.3.1.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydrazides derived from carbohydrate acids and α-amino acids are discussed in P-102.5.6.6.2.1 and
 * P-103.2.7, respectively.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.1.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66312i.gif', name: 'D-gluconohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66312j.gif', name: '2-aminoacetohydrazide' },
]);
