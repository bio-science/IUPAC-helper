/**
 * P-82.6.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a nuclide occupies a position that is not numbered, an italicized prefix or Greek letter may
 * be used to denote its position.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.6.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82631a.gif', name: 'DL-[methyl-(¹⁴C,²H3)]methionine' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82631b.gif', name: 'L-(carbamimidoyl-¹⁴C,N′-¹⁵N)arginine', notNames: ['L-(amidino-¹⁴C,N′-¹⁵N)arginine'] },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82631c.gif', name: 'L-(α-²H)phenylalanine' },
]);
