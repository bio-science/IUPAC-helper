/**
 * P-22.2.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If a further choice is needed between two or more of the same skeletal atom with different bonding
 * numbers, the lower locant is assigned in order of the decreasing value of the bonding number, i.e.,
 * λ⁶ is selected over λ⁴ (see also P-21.2.4).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.7.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220207l.gif', pin: '1λ⁴,3-dithiole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220207m.gif', pin: '1-oxa-4λ⁴,12-dithiacyclotetradecane' },
]);
