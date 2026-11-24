/**
 * P-25.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyacenes. A hydrocarbon parent component consisting of four or more ortho-fused benzene rings in
 * a straight linear arrangement is named by citing a numerical prefix (‘tetra’, ‘penta’, etc.)
 * denoting the number of rings followed by the ending ‘acene’ (derived from the retained name
 * anthracene) with elision of a letter ‘a’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.1.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250102a.gif', pin: 'tetracene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250102b.gif', pin: 'pentacene' },
]);
