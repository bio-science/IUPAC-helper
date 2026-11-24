/**
 * P-25.2.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of heteromonocyclic parent components with more than ten ring members used in fusion
 * nomenclature are discussed in this subsection; they are used only in fusion nomenclature (see also
 * P-22.2.4). The preferred IUPAC names for such rings are ‘polyene’ names (see P-22.2.4).
 * A heteromonocyclic parent component having more than ten members and the maximum number of
 * noncumulative double bonds (a mancude ring system) may be named by changing the ending ‘ane’ of the
 * …
 * For examples of fusion compounds including this type of heteromonocyclic parent component, see
 * P-25.2.2.4.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.2.2.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250202a.gif', pin: '1,8-dioxacyclooctadeca-2,4,6,9,11,13,15,17-octaene', otherNames: ['1,8-dioxacyclooctadecine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250202b.gif', pin: '1-oxa-4,8,11-triazacyclotetradeca-3,5,7,9,11,13-hexaene', otherNames: ['2H-1,4,8,11-oxatriazacyclotetradecine'] },
]);
