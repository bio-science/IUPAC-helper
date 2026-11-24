/**
 * P-52.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preferred IUPAC names for heteromonocyclic rings with no more than ten ring members are
 * Hantzsch-Widman names, including the locants ‘1,2’ and ‘1,3’. The retained names ‘oxazole’,
 * ‘isoxazole’, ‘thiazole’, and ‘isothiazole’ are allowed in general nomenclature.
 * Although the final ‘e’ in Hantzsch-Widman names is required in preferred IUPAC names; it is still
 * optional in general nomenclature. In the 1979 Rules (ref. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520202a.gif', pin: '1,2-oxazole', otherNames: ['isoxazole'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520202b.gif', pin: '1,3-thiazole', otherNames: ['thiazole'] },
]);
