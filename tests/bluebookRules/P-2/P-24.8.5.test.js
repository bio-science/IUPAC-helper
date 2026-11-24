/**
 * P-24.8.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Unbranched polyspiro ring systems with different ring components at least one of which is a
 * polycyclic ring with at least one nonstandard spiro atom
 * Unbranched polyspiro ring systems with different ring components at least one of which is a
 * polycyclic ring system with at least one nonstandard spiro atom are named using the method described
 * in P-24.6. The λ-symbol denoting a spiro junction is associated with the lowest locant and placed in
 * front of the name; it is preceded by indicated hydrogen(s), as needed.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.8.5', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240805a.gif', pin: '1′H,3′H-1λ⁴,1′′λ⁴-dispiro[thiane-1,2′-benzo[1,2-c:4,5-c′]dithiophene-6′,1′′-thiolane]' },
]);
