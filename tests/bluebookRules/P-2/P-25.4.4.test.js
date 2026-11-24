/**
 * P-25.4.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Numbering of bridge atoms
 * Bridge atoms are numbered continuing from the highest locant of the fused ring system. If there is
 * more than one bridge atom (excluding hydrogen) the numbering starts at the end of the chain or ring
 * atom connected to the bridgehead of the fused ring system having the highest locant. With composite
 * bridges, each component is completely numbered before the next component. Fusion atoms in fused ring
 * bridges are numbered in accordance with P-25.3.3.1.1.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.4', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250404a.gif', pin: '1,4-ethanonaphthalene' },
]);
