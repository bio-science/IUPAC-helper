/**
 * P-46.1.8
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal substituent chain has the lowest locants for free valences of any kind in the order
 * ‘yl’ > ‘ylidene’ > ‘ylidyne’ [criterion (h) in P-46.1].”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.1.8', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460108a.gif', preferredPrefix: '5-{[(methylsilyl)ylomethyl]silyl}-2,4,6,8,10-pentasilatetradecan-13-yl-1-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460108b.gif', preferredPrefix: '5-{[(diylomethylsilyl)methyl]silyl}-2,4,6,8,10-pentasilatetradecane-1,13-diyl' },
]);
