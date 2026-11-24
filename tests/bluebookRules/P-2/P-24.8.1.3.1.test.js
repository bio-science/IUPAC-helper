/**
 * P-24.8.1.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Ring systems consisting of three monocyclic rings and one nonstandard spiro atom (e.g., a λ⁶ spiro
 * atom) are named by placing the prefix ‘spiro’ before the name corresponding to an alicyclic system
 * with the same total number of skeletal atoms in the spiro ring system. Heteroatoms are indicated by
 * ‘a’ prefixes and the nonstandard bonding number by the ‘λ’ symbol (see P-14.1). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.8.1.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240801e.gif', pin: '1,4,6,9,10,13-hexaoxa-5λ⁶-thiaspiro[4.4⁵.4⁵]tridecane' },
]);
