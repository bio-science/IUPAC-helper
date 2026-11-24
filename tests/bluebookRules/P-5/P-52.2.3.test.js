/**
 * P-52.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Unsaturated heteromonocyclic compounds with more than ten ring members.
 * Preferred IUPAC names for unsaturated monocyclic compounds with more than ten ring members derived
 * from cycloalkanes and modified by skeletal replacement (‘a’) nomenclature are formed by changing the
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520203a.gif', pin: '1-azacyclotrideca-2,4,6,8,10,12-hexaene', otherNames: ['1-azacyclotridecine [preferred IUPAC name', '1H-1-aza[13]annulene'] },
]);
