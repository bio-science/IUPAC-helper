/**
 * P-73.5.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cationic compounds with cationic centers both in the parent hydride part of the structure and on a
 * characteristic group expressed as a cationic suffix are named by citing both cationic centers. The
 * cationic center in the parent hydride is cited first followed by the cationic suffix.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.5.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73531a.gif', pin: 'N,N,N,1-tetramethylquinolin-1-ium-3-aminium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73531b.gif', pin: '5λ⁵-quinolizin-5-ylium-2-carboximidamidium' },
]);
