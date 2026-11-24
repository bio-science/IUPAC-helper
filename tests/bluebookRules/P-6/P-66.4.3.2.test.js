/**
 * P-66.4.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydrazidines derived from sulfonic and sulfinic acids, and similar selenium and tellurium acids,
 * are named in accordance with the same principles.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66432a.gif', pin: 'benzenesulfinohydrazonohydrazide' },
]);
