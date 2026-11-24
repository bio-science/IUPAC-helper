/**
 * P-25.1.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyaphenes. A hydrocarbon parent component consisting of n ortho- fused benzene rings (n > 3)
 * forming two straight linear arrangements of (n + 1)/2 rings (if n is odd) or n/2 and (n/2) + 1 rings
 * (if n is even) with a common benzene ring and that make a formal angle of 120° with each other is
 * named by citing the numerical prefix (‘tetra’, ‘penta’, etc.) denoting the total number of benzene
 * rings followed by the ending ‘phene’ (derived from phenanthrene).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.1.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250102c.gif', pin: 'pentaphene (n = 5)' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250102d.gif', pin: 'hexaphene (n = 6)' },
]);
