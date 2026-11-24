/**
 * P-75.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-75.2.2', [
  { formula: 'H2C•⁺', pin: 'methyliumyl' },
  { formula: 'H4Si•⁺', preselectedName: 'silaniumyl' },
  { formula: '[CH3-CH2]•²⁺', pin: 'ethaniumyliumyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75220a.gif', pin: 'ethan-1-ium-1-ylium-1-yl' },
  { pin: 'benzenelium', otherNames: ['benzeniumyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75220c.gif', pin: '4,5-bis(trifluoromethyl)-1,2,3-trithiolan-5-ylium-4-yl' },
]);
