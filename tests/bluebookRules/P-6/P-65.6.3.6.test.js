/**
 * P-65.6.3.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acylals
 * Acylals are a class of compounds with the general structures R-CH(O-CO-R′)2, RR′C(OCOR′′)2, etc.
 * Specific compounds are named as esters.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.6', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ci.gif', pin: 'ethane-1,1-diyl dibutanoate' },
]);
