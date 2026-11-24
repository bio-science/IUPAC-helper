/**
 * P-66.4.1.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When the carbon atom of the H2N-C(=NH)– group terminates a chain, the groups –NH2 and =NH are
 * designated by the prefixes ‘amino’ and ‘imino’, respectively.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.1.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66413c.gif', pin: 'methyl 4-(dimethylamino)-4-(ethylimino)butanoate', notNames: ['methyl 3-[C-(dimethylamino)-N-ethylcarbonimidoyl]propanoate', 'methyl 3-(N²-ethyl-N¹,N¹-dimethylamidino)propionate'] },
]);
