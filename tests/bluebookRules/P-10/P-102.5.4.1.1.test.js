/**
 * P-102.5.4.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Trivial names
 * The following glycosamine names are retained.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.4.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102541a.gif', name: 'D-galactosamine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102541b.gif', name: 'D-glucosamine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102541c.gif', name: 'D-mannosamine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102541d.gif', name: 'D-fucosamine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102541e.gif', name: 'D-quinovosamine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102541f.gif', name: 'N-acetyl-D-galactosamine' },
]);
