/**
 * P-107.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Phosphatidic acids have the following generic structure:
 * In general, the 3-sn-phosphatidic acids are simply called phosphatidic acids.
 * The name of the monovalent acyl group is ‘phosphatidyl’, a retained name.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-107.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P107310c.gif', name: 'phosphatidyl' },
]);
