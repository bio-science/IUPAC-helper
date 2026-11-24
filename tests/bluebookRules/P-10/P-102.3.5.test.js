/**
 * P-102.3.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Conformation of monosaccharides
 * Pyranoses assume conformations that are not planar. For example β-D-glucopyranose assumes a chair
 * conformation with characteristic substituent groups in equatorial conformations (hydrogen atoms
 * attached to the ring are not shown):”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.3.5', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102350a.gif', name: 'β-D-glucopyranose' },
]);
