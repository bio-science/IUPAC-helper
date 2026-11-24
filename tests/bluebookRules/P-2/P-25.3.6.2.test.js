/**
 * P-25.3.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Additional components attached to a system with a multiplicative prefix.
 * Fusion of a higher-order attached component to a system named with a multiplicative prefix requires
 * each set of attached components to be specified separately.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250306h.gif', pin: 'furo[3,4-b]furo[3′,2′:4,5]furo[2,3-e]pyridine' },
]);
