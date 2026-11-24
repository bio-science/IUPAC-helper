/**
 * P-105.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “RETAINED NAMES OF NUCLEOSIDES
 * The following names are retained.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-105.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P105100a.gif', name: 'adenosine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P105100b.gif', name: 'guanosine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P105100c.gif', name: 'inosine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P105100d.gif', name: 'xanthosine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P105100e.gif', name: 'cytidine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P105100f.gif', name: 'thymidine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P105100g.gif', name: 'uridine' },
]);
