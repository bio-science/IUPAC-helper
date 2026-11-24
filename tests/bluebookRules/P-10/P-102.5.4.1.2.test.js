/**
 * P-102.5.4.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Systematic carbohydrate names
 * Systematic carbohydrate names are formed, in two steps: in a first step a deoxy sugar is created by
 * deoxygenation at the carbon atom where the amino group is to be introduced by substitution in a
 * second step. Names of substituted amines are formed by using the name of the substituted amino group
 * as a prefix.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.4.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102541g.gif', name: '3,4,6-trideoxy-3-(dimethylamino)-D-xylo-hexose' },
]);
