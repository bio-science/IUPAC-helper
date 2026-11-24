/**
 * P-107.4.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names are formed by using the retained name ‘sphinganine’ for the aliphatic amino alcohol having
 * the described absolute configuration. The retained name ‘sphinganine’ is preferred to the systematic
 * name (2S,3R)-2-aminooctadecane-1,3-diol.
 * The retained name sphinganine is used to generate the names of unsaturated and N-substituted
 * derivatives, as well as O-substituted derivatives. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-107.4.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P107431a.gif', name: 'sphinganine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P107431c.gif', name: 'icosasphinganine' },
]);
