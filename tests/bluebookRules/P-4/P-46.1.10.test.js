/**
 * P-46.1.10
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal substituent chain has the lowest locant(s) for (an) atom(s) with nonstandard bonding
 * number(s) [criterion (j) in P-46.1]. If a further choice is needed, the principal substituent chain
 * has (an) atom(s) of the higher bonding number with the lowest locant.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.1.10', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460110a.gif', preferredPrefix: '5-({[2-(methyl-λ⁶-sulfanyl)ethyl]sulfanyl}methyl)-4-oxa-2λ⁴,7λ⁴,10-trithiaundecan-1-yl', notNames: ['5-({[(methylsulfanyl)ethyl]-λ⁴-sulfanyl}methyl)-4-oxa-2λ⁴,7,10λ⁶-trithiaundecan-1-yl'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460110b.gif', preferredPrefix: '5-({[(methyl-λ⁶-sulfanyl)methyl]-λ⁴-sulfanyl}methyl)-4-oxa-2λ⁴,7λ⁶,9λ⁴-trithiadecan-1-yl', notNames: ['5-({[(methyl-λ⁴-sulfanyl)methyl]-λ⁶-sulfanyl}methyl)-4-oxa-2λ⁴,7λ⁴,9λ⁶-trithiadecan-1-yl'] },
]);
