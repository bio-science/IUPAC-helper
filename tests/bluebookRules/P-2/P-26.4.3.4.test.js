/**
 * P-26.4.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Indicated hydrogen, when present in amplificants, is placed before the phane parent hydride name
 * and preceded by the appropriate composite locant(s).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.4.3.4', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260403d.gif', pin: '1⁴H-1(3,5)-pyrana-4(1,3)-benzenacyclohexaphane' },
]);
