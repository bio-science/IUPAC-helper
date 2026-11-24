/**
 * P-52.2.4.4.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If the corresponding hydrocarbon fused ring system can be named by fusion principles or has a
 * retained name, then heteroatoms are identified by skeletal replacement (‘a’) nomenclature using the
 * appropriate ‘a’ prefixes (see P-22.2.3). The numbering of the fused hydrocarbon system is not
 * altered by the ‘a’ prefixes.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.4.4.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204j.gif', pin: '1,2,3,4,5,6-hexaazacyclopenta[cd]pentalene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204k.gif', pin: '1,3a¹,4,9-tetraazaphenalene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204l.gif', pin: '5H,12H-2,3,4a,7a,9,10,11a,14a-octaazadicyclopenta[ij:i′j′]benzo[1,2-f:4,5-f′]diazulene' },
]);
