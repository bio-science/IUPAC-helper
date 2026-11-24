/**
 * P-64.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Ketones are defined classically as compounds in which a carbonyl group is bonded to two carbon
 * atoms: R2CO (neither R may be H) (see ref. 23).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640101a.gif', pin: 'butan-2-one' },
]);
