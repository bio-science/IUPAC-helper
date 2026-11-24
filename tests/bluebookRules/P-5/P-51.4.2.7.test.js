/**
 * P-51.4.2.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The choice between two or more acceptable names may depend on the type of nomenclature used. This
 * is the case with unsaturated heteromonocyclic compounds for which three names are acceptable, as
 * discussed in P-52.2.3.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.4.2.7', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510402h.gif', pin: '1-azacyclotrideca-2,4,6,8,10,12-hexaene', otherNames: ['1-azacyclotridecine', '1H-1-aza[13]annulene'] },
]);
