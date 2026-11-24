/**
 * P-75.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Radical ions on ionic suffix groups
 * When ions may be named by using modified suffixes (see P-73.1.2.1 and P-72.2.2.2.3), the suffixes
 * denoting radical centers are added to the name of the cationic or anionic parent hydride.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1125, P-75.3.1 example 2. [corrected 26 September 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-75.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75310a.gif', pin: 'benzenaminiumyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75310b.gif', pin: 'methanaminidyl' },
  { formula: 'CH3-CO-N•⁺', name: 'acetamidyliumyl(PIN)' },
  { formula: 'C6H5-C≡N•⁺', pin: 'benzonitriliumyl' },
]);
