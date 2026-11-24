/**
 * P-25.3.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is a choice, the shortest pathway in terms of the number of bonds from each heteroatom to
 * the periphery is determined. The lower number is given to the heteroatom whose shortest pathway
 * connects to the lowest numbered peripheral atom.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.3.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250303x.gif', pin: 'pyrazino[2,1,6-cd:3,4,5-c′d′]dipyrrolizine' },
]);
