/**
 * P-65.1.7.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Mixed acyl groups
 * Mixed acyl groups of the type –(C=X)-[CH2]x-(C=Y)– are named by substitution of alkanediyl
 * substituent groups.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.7.5', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107o.gif', preferredPrefix: '1-oxo-4-sulfanylidenebutane-1,4-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107p.gif', preferredPrefix: '1-imino-2-selanylideneethane-1,2-diyl' },
]);
