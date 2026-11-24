/**
 * P-103.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups with the free valence on a carbon atom
 * Substituent groups with the free valence on a carbon atom of an α-amino carboxylic acid are formed
 * according to the rules, principles and conventions of substitutive nomenclature as given in the
 * previous chapters of these recommendations.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.2.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103221a.gif', name: '1-[(2S)-2-amino-2-carboxyethyl]-4ξ-hydroxycyclohexane-1-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103221b.gif', name: 'N-[(2S)-1-hydroxy-3-(1H-imidazol-4-yl)propan-2-yl]acetamide' },
]);
