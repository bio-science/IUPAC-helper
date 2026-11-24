/**
 * P-24.8.1.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is a choice for numbering, a small ring is numbered before a larger ring.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.8.1.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240801f.gif', pin: '3λ⁶-thiaspiro[2.4³.5³]dodecane' },
]);
