/**
 * P-101.6.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Rearrangement of double bonds may be indicated by a combination of ‘hydro’ and ‘dehydro’ prefixes.
 * The ‘dehydro’ prefix is cited before the ‘hydro’ prefix, in accordance with the alphanumerical
 * order.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.6.7', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101670a.gif', name: 'strychnidine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101670b.gif', name: '20,21-didehydro-21,22-dihydro-19,20-secostrychnidine' },
]);
