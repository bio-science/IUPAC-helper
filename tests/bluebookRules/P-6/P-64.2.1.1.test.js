/**
 * P-64.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The name ‘chalcone’ is the only retained name as a preferred IUPAC name and is limited to ring
 * substitution only by characteristic groups lower than ‘ketone’. Chalcone refers only to the trans-
 * or (E)- stereoisomer.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.2.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640201a.gif', pin: 'chalcone' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640201b.gif', pin: '2′,4′-dihydroxy-3,3′-dimethoxychalcone' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640201c.gif', pin: '4-[(1E)-3-(2,4-dihydroxyphenyl)-3-oxoprop-1-en-1-yl]benzamide', notNames: ['2′,4′-dihydroxychalcone-4-carboxamide'] },
]);
