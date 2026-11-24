/**
 * P-74.2.1.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Oxygen ylides
 * Oxygen ylides have the general structure R2O⁺–C⁻R2.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.1.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74211c.gif', pin: '3-(dimethyloxidaniumyl)pentan-3-ide', otherNames: ['3-(dimethyloxoniumyl)pentan-3-ide'] },
]);
