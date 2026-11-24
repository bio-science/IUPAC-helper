/**
 * P-23.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The λ-convention, characterized by the symbol λn, where ‘n’ is the bonding number of the
 * heteroatom, is used to identify heteroatoms with nonstandard bonding numbers (see P-14.1). The
 * symbol is placed before the appropriate ‘a’ prefix.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.6.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230601a.gif', pin: '3λ⁴-thiabicyclo[3.2.1]octane' },
]);
