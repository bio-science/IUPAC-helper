/**
 * P-75.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Radical ions other than those named by using ionic suffix groups”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-75.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75320a.gif', pin: 'acetyl(methyl)oxidaniumyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75320b.gif', pin: 'propyloxidaniumyl' },
  { formula: 'CH3-CO-N•–', pin: 'acetylazanidyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75320c.gif', pin: '2-(benzenesulfonyl)hydrazin-1-id-1-yl', otherNames: ['2-(benzenesulfonyl)diazan-1-id-1-yl'] },
]);
