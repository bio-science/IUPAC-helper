/**
 * P-103.2.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Esters
 * Esters of amino acids, R-CO-OR′, are formed by the general method using the ‘ate’ ending obtained by
 * replacing the ‘ic acid’ ending or the final letter ‘e’ of the retained name (or adding the ending
 * ‘ate’ to the name tryptophan) and the name of the substituent group R′.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.2.6', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103260a.gif', name: 'methyl L-alaninate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103260b.gif', name: '1-methyl L-aspartate' },
]);
