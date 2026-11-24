/**
 * P-64.5.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyclic pseudoketones are named in the same way; traditionally they have been named using acyl
 * groups.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.5.2.2', [
  { formula: 'H2P-CO-CH2-CH2-CH3', pin: '1-phosphanylbutan-1-one', otherNames: ['butanoylphosphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640502f.gif', pin: '4-oxo-4-silylbutanoic acid', otherNames: ['3-(silanecarbonyl)propanoic acid', '3-(silylcarbonyl)propanoic acid'] },
]);
