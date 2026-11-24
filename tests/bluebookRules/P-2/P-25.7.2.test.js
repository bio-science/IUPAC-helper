/**
 * P-25.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The δ-convention
 * The presence of contiguous formal double bonds at a skeletal atom in a cyclic parent hydride whose
 * name normally implies the maximum number of noncumulative double bonds is described by the symbol
 * δc, where ‘c’ is the number of double bonds directly attached to the identified atom (see ref. 24).
 * The δc symbol is cited immediately after an expressed locant for the skeletal atom in the name of
 * the compound and follows the λn symbol, if present.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.7.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250702a.gif', pin: '8δ²-benzo[9]annulene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250702b.gif', pin: '2λ⁴δ²,5λ⁴δ²-thieno[3,4-c]thiophene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250702c.gif', pin: '2λ⁴δ²-thieno[3,4-c]thiophene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250702d.gif', pin: '2λ⁵δ²-6,2-(epiethanylylidene)isophosphinoline' },
]);
