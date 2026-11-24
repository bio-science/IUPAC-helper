/**
 * P-101.3.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Methylene groups inserted into a bond connector are identified by citing both locants of the
 * skeletal atoms terminating the bond connector enclosing the second (higher) number in parentheses,
 * followed by a letter ‘a’, ‘b’, etc. according to the number of methylene groups”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.3.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101322d.gif', name: 'pregnane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101322e.gif', name: '13(17)a-homo-5α-pregnane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101322f.gif', name: '13(17)a,13(17)b-dihomo-5α-pregnane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101322g.gif', name: '13(14)a,13(17)b-dihomo-5α-pregnane' },
]);
