/**
 * P-93.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The ‘relative configuration’ is the configuration of any stereogenic (asymmetric) unit with respect
 * to any other stereogenic unit contained within the same molecular entity. Relative configuration
 * denoting diastereoisomers may be denoted by using the prefix ‘rel’ which is cited at the front of
 * the name of one enantiomer where the configurational descriptors ‘R’, ‘S’, ‘M’, ‘P’, etc. have been
 * used. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.1.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93121a.gif', pin: 'rel-(1R,2S)-2-chlorocyclopentane-1-carboxylic acid', otherNames: ['trans-2-chlorocyclopentane-1-carboxylic acid'], notNames: ['rel-(1S,2R)-2-chlorocyclopentane-1-carboxylic acid', '(1S*,2R*)-2-chlorocyclopentane-1-carboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93121b.gif', pin: 'rel-(2R,3R)-3-bromobutan-2-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93121c.gif', pin: 'rel-(2R)-butan-2-ol' },
]);
