/**
 * P-107.4.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Ceramides
 * Ceramides are N-acylsphingoids.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-107.4.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P107432a.gif', name: 'N-[(2S,3R,4E)-1,3-dihydroxyoctadec-4-en-2-yl]hexadecanamide' },
]);
