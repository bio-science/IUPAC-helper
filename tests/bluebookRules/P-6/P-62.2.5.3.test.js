/**
 * P-62.2.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For parent structures with multiple nitrogen atoms, such as di- or tricarboximidamides (see
 * P-66.4), and cyclophanamines, even more complicated locant structures are required, such as primed
 * letter locants with superscript numbers or with superscripted superscript numbers.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.2.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620205h.gif', pin: '2,2′-methylenebis[N1²-methyl-1,4(1,4)dibenzenacyclohexaphane-1²,1³-diamine]' },
]);
