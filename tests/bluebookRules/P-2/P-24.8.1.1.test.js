/**
 * P-24.8.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heteroatoms having nonstandard bonding numbers receive lowest locants in accordance with the
 * numbering of the corresponding spiro ring system.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.8.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240801a.gif', pin: '7λ⁵-phosphaspiro[3.5]nonane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240801b.gif', pin: '7λ⁵-phospha-2-silaspiro[3.5]nonane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240801c.gif', pin: '4λ⁴-thiaspiro[3.5]nonane' },
]);
