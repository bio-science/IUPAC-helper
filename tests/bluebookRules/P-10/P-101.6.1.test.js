/**
 * P-101.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Unsaturation in a compound whose parent structure is fully saturated or in the portion of a parent
 * structure that is otherwise fully saturated and whose name ends in ‘an’, ‘ane’, or ‘anine’ is
 * indicated by changing ‘an’ or ‘ane’ to ‘ene’ or ‘yne’ and ‘anine’ to ‘enine’ or ‘ynine’ and by
 * adding numerical multiplying prefixes as prescribed in P-31.1.1.2. Locants are placed immediately
 * before the part of the name to which they relate.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.6.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101610a.gif', name: 'androsta-5,7-diene' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101610b.gif', name: 'pregn-4-en-20-yne' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101610c.gif', name: 'con-5-enine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101610d.gif', name: '5β-furost-20(22)-ene' },
]);
