/**
 * P-103.1.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Use of CIP stereodescriptors
 * Stereodescriptors ‘R’ and ‘S’ are used for designating the configuration at centers other than the
 * ‘α-C’ atom, while preserving stereodescriptors ‘D’ and ‘L’ for the ‘α-C’ atom to maintain
 * homogeneity of stereodescriptors in peptides (see P-103.3.4). The use of stereodescriptors is
 * exemplified here by the hydroxy prolines; for these compounds it is also acceptable to use the
 * stereodescriptors cis and trans in the specialized nomenclature of amino acids and in general
 * nomenclature.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.1.3.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103132c.gif', name: 'cis-3-hydroxy-L-proline' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103132d.gif', name: 'trans-3-hydroxy-L-proline' },
]);
