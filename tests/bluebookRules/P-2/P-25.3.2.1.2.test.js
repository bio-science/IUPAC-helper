/**
 * P-25.3.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heteromonocycles
 * The retained names given in Table 2.2, except for ‘isothiazole’, ‘isoxazole’, ‘thiazole’, and
 * ‘oxazole’, and Hantzsch-Widman names for unsaturated heteromonocycles (see P-22.2.2) are used as
 * parent components in fusion nomenclature. The names ‘isothiazole’, ‘isoxazole’, ‘thiazole’, and
 * ‘oxazole’, although permitted in general nomenclature, are not recommended for the names of
 * components in preferred IUPAC fusion names. …
 * Heteromonocycles having more than ten members and the maximum number of noncumulative double bonds
 * whose names are denoted by the ‘ine’ ending described in P-25.2.2.1.2 are used as parent components
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.2.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302c.gif', pin: '1,8-dioxacyclooctadeca-2,4,6,9,11,13,15,17-octaene', otherNames: ['1,8-dioxacyclooctadecine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302d.gif', pin: '1-oxa-4,8,11-triazacyclotetradeca-3,5,7,9,11,13-hexaene', otherNames: ['2H-1,4,8,11-oxatriazacyclotetradecine'] },
]);
