/**
 * P-74.2.2.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nitrile imides.
 * Method (1) in P-74.2.2.2.1, zwitterionic names, generates preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.2.2.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74222a.gif', pin: '2-ethylidyne-1-methylhydrazin-2-ium-1-ide', otherNames: ['acetonitrile methylimide'] },
]);
