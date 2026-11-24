/**
 * P-102.5.6.5.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Aminoalditols
 * Alditols derived from galactosamine and glucosamine are aminoalditols. They have retained names,
 * galactosaminitol and glucosaminitol, respectively.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.5.4', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102565i.gif', name: 'D-glucosaminitol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102565j.gif', name: 'D-galactosaminitol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102565k.gif', name: '2-deoxy-2-(N-methylacetamido)-D-glucitol 1,3,4,5,6-pentaacetate' },
]);
