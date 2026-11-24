/**
 * P-74.2.2.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Imidoyl carbenes
 * Compounds having the structure RC(=NH)-C²•–R are imidoyl carbenes. Imidoyl is a shortened, but
 * imprecise, term for carboximidoyl, RC(=NH)–. These carbenes may be named by two methods:
 * (1) by using the longest carbon chain, according to the principles of substitutive nomenclature for
 * radicals, low locants being assigned to the radical to be cited as suffix;
 * (2) substitutively on the basis of the appropriate carbene as the parent structure.
 * Method (1) leads to preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.2.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74223b.gif', pin: '3-(methylimino)butan-2-ylidene' },
]);
