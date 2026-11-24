/**
 * P-13.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “By an additive prefix”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1303a.gif', pin: 'naphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1303b.gif', pin: '1,2,3,4-tetrahydronaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1303c.gif', pin: '1aH-1(9)a-homo(C60-Ih)[5,6]fullerene' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1303d.gif', pin: '1,9-seco(C60-Ih)[5,6]fullerene' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1303e.gif', name: '5α-pregnane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1303f.gif', name: '4a-homo-5α-pregnane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1303g.gif', name: '2,3-seco-5α-pregnane' },
]);
