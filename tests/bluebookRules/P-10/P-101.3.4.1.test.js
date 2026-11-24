/**
 * P-101.3.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cleavage of a ring bond (saturated or unsaturated) with the addition of the appropriate number of
 * hydrogen atoms at each new terminal group thus created is indicated by the prefix ‘seco’ (not
 * italicized) and the locants of the cleaved bond. The original numbering is retained.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.3.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101341a.gif', name: 'hopane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101341b.gif', name: '2,3-secohopane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101341c.gif', name: 'curan' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101341d.gif', name: '3,4-secocuran' },
]);
