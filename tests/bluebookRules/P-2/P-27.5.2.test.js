/**
 * P-27.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When ‘homo’, ‘nor’, ‘seco’, or ‘cyclo’ prefixes co-occur with skeletal replacement terms, such as
 * ‘oxa’ or ‘aza’, the replacement prefixes are cited in names in order of their seniority before
 * structure-modifying prefixes. Structure-modifying prefixes are assigned low locants over replacement
 * prefixes.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-27.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270502a.gif', pin: '1aH-1a-aza-1(9)a-homo(C60-Ih)[5,6]fullerene' },
]);
