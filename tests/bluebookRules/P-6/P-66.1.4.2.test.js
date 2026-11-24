/**
 * P-66.1.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names for chalcogen analogues of secondary and tertiary amides
 * Names are formed by the addition of appropriate prefixes to names described in P-65.1.7.2.3”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.4.2', [
  { formula: 'CH3-CS-NH-CS-CH3', pin: 'N-(ethanethioyl)ethanethioamide', otherNames: ['N-(thioacetyl)thioacetamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66142a.gif', pin: 'N-cyclohexyl-N-(ethanethioyl)ethanethioamide', otherNames: ['N-cyclohexyl-N-(thioacetyl)thioacetamide'] },
  { formula: 'CH3-CH2-CS-NH-CO-CH3', pin: 'N-(propanethioyl)acetamide' },
]);
