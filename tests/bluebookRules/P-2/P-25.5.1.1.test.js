/**
 * P-25.5.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If the corresponding hydrocarbon fused ring system can be named by fusion principles or has a
 * retained name, then heteroatoms are identified by skeletal replacement (‘a’) nomenclature using the
 * appropriate ‘a’ prefixes (see P-22.2.3). The numbering of the fused hydrocarbon system is not
 * altered by the ‘a’ prefixes.
 * When the fusion principles discussed in P-25.1 through P-25.3 do apply, no skeletal replacement
 * (‘a’) name is recommended. The procedure is valid only for cases described in P-25.5.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 285, P-25.5.1.1, example 1. [corrected 14 November 2018]
 *     For 1,2,3,4,5,6-hexaazacyclopenta[c,d]pentalene (PIN)
 *     read 1,2,3,4,5,6-hexaazacyclopenta[cd]pentalene (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.5.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250501a.gif', pin: '1,2,3,4,5,6-hexaazacyclopenta[cd]pentalene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250501b.gif', pin: '1,3a¹,4,9-tetraazaphenalene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250501c.gif', pin: '5H,12H-2,3,4a,7a,9,10,11a,14a-octaazadicyclopenta[ij:i′j′]benzo[1,2-f:4,5-f′]diazulene' },
]);
