/**
 * P-102.6.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When the free valence is formed at carbon ‘1’ by subtraction of a hydrogen atom, the substituent
 * group is named as a glycosyl group but the presence of the hydroxy group is denoted by substitution
 * at carbon ‘1’. In this case, the stereodescriptor ‘α’ or ‘β’ refers to the free valence, not to the
 * –OH group.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.6.1.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102611b.gif', name: '1-hydroxy-α-D-galactopyranosyl' },
]);
