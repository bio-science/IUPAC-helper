/**
 * P-74.2.1.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Sulfur ylides
 * Sulfur ylides have the general structure R2S⁺–C⁻R2 ↔ R2S=CR2.
 * This method is also applicable to the analogous selenium and tellurium compounds.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.1.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74211d.gif', pin: '3-(dimethylsulfaniumyl)pentan-3-ide', otherNames: ['3-(dimethylsulfoniumyl)pentan-3-ide', 'dimethyl(pentan-3-ylidene)-λ⁴-sulfane'] },
]);
