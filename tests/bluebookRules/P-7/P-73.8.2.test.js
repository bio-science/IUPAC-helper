/**
 * P-73.8.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The suffix ‘ium’ is preferred to the suffix ‘ylium’ added to a parent hydride that has been
 * modified by the λ-convention; the suffix ‘ium’ is also preferred over ‘ylium’ when the λ-convention
 * must be used to denote both cationic centers.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.8.2', [
  { formula: '⁺PH4', preselectedName: 'phosphanium', otherNames: ['phosphonium', 'λ⁵-phosphanylium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73820a.gif', pin: '1λ⁴,3λ⁴-dithiocane-1,3-diium', otherNames: ['1λ⁶,3λ⁶-dithiocane-1,3-bis(ylium)'], notNames: ['1λ⁶,3λ⁴-dithiocan-3-ium-1-ylium'] },
]);
