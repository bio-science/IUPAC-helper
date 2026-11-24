/**
 * P-65.7.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Diacyl derivatives of multiatomic chalcogen chains are named by skeletal replacement (‘a’)
 * nomenclature when the conditions for its use are fulfilled (see P-15.4 and P-51.3.1).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650705c.gif', pin: '3-oxa-6-thia-5-selena-4-telluraoctane-2,7-dione' },
]);
