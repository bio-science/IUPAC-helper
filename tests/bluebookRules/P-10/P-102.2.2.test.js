/**
 * P-102.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Numbering parent structures
 * The carbon atoms of a monosaccharide are numbered consecutively in such a
 * way that:
 * (1) a (potential) aldehyde group receives the locant 1 (even if a more senior characteristic group
 * is present);
 * (2) the most senior of other characteristic groups expressed in the suffix receives the lowest
 * possible locant, i.e carboxylic acid (derivatives) > (potential) ketonic carbonyl groups.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102220a.gif', name: 'D-glucose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102220b.gif', name: 'D-fructose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102220c.gif', name: 'D-glucuronic acid' },
]);
