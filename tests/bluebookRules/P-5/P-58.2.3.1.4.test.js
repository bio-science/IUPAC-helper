/**
 * P-58.2.3.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When the indicated hydrogen atoms of a parent structure cannot be used to accommodate all of the
 * principal characteristic groups of the structure, the rules described in P-58.2.3.1.3 are applied
 * Explanation: The indicated hydrogen atoms cannot accommodate both ‘-one’ principal characteristic
 * group positions, (2H,6H-benzo[1,2-b:4,3-c′]dipyran is not a permissible structure) so the indicated
 * hydrogen atoms and the necessary ‘added indicated hydrogen’ atom are placed at the lowest locant
 * positions consistent with the arrangement of the double bonds in the compound.
 * Explanation: The indicated hydrogen atoms cannot accommodate both ‘-one’ principal characteristic
 * group positions; therefore one indicted hydrogen atom is assigned at the lowest locant position; …
 * Explanation: The indicated hydrogen atoms cannot accommodate either of the ‘one’ principal
 * characteristic group positions; …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 624, P-58.2.3.1.4, example 2. [corrected 14 November 2018]
 *     For (not 4,4a-dihydro 2H,4H-benzo[1,2-b:4,3-c′]dipyran-5,6(4aH,6aH)-dione)
 *     read (not 4,4a-dihydro-2H,4H-benzo[1,2-b:4,3-c′]dipyran-5,6(4aH,6aH)-dione)
 *   Page 625, P-58.2.3.1.4, example 1 on this page, Explanation, lines 2/3. [corrected 7 November
 *   2018]
 *     For ... positions; (6H,8H)-pyrido[3,2,1-ij]quinoline is not a permissible structure), so ...
 *     read ... positions; (6H,8H-pyrido[3,2,1-ij]quinoline is not a permissible structure), so ...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-58.2.3.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203o.gif', pin: '9,10-dihydro-2H,4H-benzo[1,2-b:4,3-c′]dipyran-2,6(8H)-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203p.gif', pin: '4,4a-dihydro-2H,5H-benzo[1,2-b:4,3-c′]dipyran-5,6(6aH)-dione', notNames: ['4,4a-dihydro-2H,4H-benzo[1,2-b:4,3-c′]dipyran-5,6(4aH,6aH)-dione'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203q.gif', pin: '1H,5H-pyrido[3,2,1-ij]quinoline-6,8-dione' },
]);
