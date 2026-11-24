/**
 * P-102.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The stereodescriptors ‘D’ and ‘L’
 * The simplest aldose is glyceraldehyde. It contains one center of chirality and occurs therefore in
 * two enantiomeric forms, called D-glyceraldehyde and L-glyceraldehyde; these are represented by the
 * Fischer projection formulas given below. It is known that these projections correspond to the
 * absolute configurations. The configurational stereodescriptors ‘D’ and ‘L’ must be written in small
 * capital letters and linked by a hyphen to the name of the sugar. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102320a.gif', name: 'D-glyceraldehyde' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102320b.gif', name: 'L-glyceraldehyde' },
]);
