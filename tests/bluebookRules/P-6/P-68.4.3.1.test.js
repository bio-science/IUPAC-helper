/**
 * P-68.4.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Sulfanes, selanes, and tellanes
 * Sulfanes, selanes, and tellanes that have a nonstandard bonding number are named on the basis of
 * parent hydrides such as λ⁴-sulfane, λ⁶-sulfane, and λ⁴-selane, according to the λ-convention.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.4.3.1', [
  { formula: 'CH2=S(CH3)2', pin: 'dimethyl(methylidene)-λ⁴-sulfane' },
  { formula: '(CH3-O)4S', pin: 'tetramethoxy-λ⁴-sulfane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68431a.gif', pin: 'λ⁴-thiane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68431b.gif', pin: '1H-1λ⁴,3λ⁴-dithiepine' },
]);
