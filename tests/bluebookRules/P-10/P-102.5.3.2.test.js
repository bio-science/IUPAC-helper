/**
 * P-102.5.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Trivial names.
 * The following names are retained: fucose, quinovose and rhamnose. The corresponding structures are
 * shown in the pyranose form.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102532a.gif', name: 'α-L-fucopyranose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102532b.gif', name: 'β-D-quinovopyranose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102532c.gif', name: 'L-rhamnopyranose' },
]);
