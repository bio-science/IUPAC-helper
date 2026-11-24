/**
 * P-66.3.1.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For retained names for carboxylic acids used only in general nomenclature (see P-65.1.1.2.1),
 * hydrazide formation is governed by the above rule, P-66.3.1.2.1; but substitution is not allowed,
 * including substitution on the nitrogen atom(s) of the hydrazide characteristic group. Systematic
 * names are preferred IUPAC names (see P-66.3.1.1).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.1.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66312h.gif', pin: 'butanehydrazide', otherNames: ['butyrohydrazide'] },
]);
