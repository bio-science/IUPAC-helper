/**
 * P-46.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal substituent chain has one or more atoms with nonstandard bonding numbers [criterion
 * (e) in P-46.1]. When a choice is needed between two substituent chains having skeletal atoms with
 * nonstandard bonding numbers, the one having the maximum number of atoms with nonstandard bonding
 * numbers is chosen as principal substituent chain. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.1.5', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460105a.gif', preferredPrefix: '5-{[(methoxymethyl)sulfanyl]methyl}-4,9-dioxa-2,7λ⁴-dithiadecan-1-yl', notNames: ['5-{[(methoxymethyl)-λ⁴-sulfanyl]methyl}-4,9-dioxa-2,7-dithiadecan-1-yl'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460105b.gif', preferredPrefix: '5-({[(methylsulfanyl)methyl]-λ⁶-sulfanyl}methyl)-4-oxa-2λ⁴,7λ⁴,9λ⁴-trithiadecan-1-yl', notNames: ['5-({[(methyl-λ⁴-sulfanyl)methyl]-λ⁴-sulfanyl}methyl)-4-oxa-2λ⁴,7λ⁶,9-trithiadecan-1-yl'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460105c.gif', preferredPrefix: '5-({[(methyl-λ⁶-sulfanyl)methyl]-λ⁴-sulfanyl}methyl)-4-oxa-2λ⁴,7λ⁶,9λ⁶-trithiadecan-1-yl', notNames: ['5-({[(methyl-λ⁶-sulfanyl)methyl]-λ⁶-sulfanyl }methyl)-4-oxa-2λ⁴,7λ⁴,9λ⁶-trithiadecan-1-yl'] },
]);
