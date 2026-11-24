/**
 * P-25.1.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyphenylenes. A hydrocarbon parent component consisting of a monocyclic hydrocarbon with an even
 * number of carbon atoms and benzene rings ortho-fused to alternate sides is named by citing a
 * numerical prefix (‘tri’, ‘tetra’, etc.) denoting the number of benzene rings followed by the term
 * ‘phenylene’. The traditional name biphenylene is retained.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.1.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250102g.gif', pin: 'biphenylene', notNames: ['diphenylene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250102h.gif', pin: 'triphenylene' },
]);
