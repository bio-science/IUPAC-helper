/**
 * P-22.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heteromonocycles with eleven or more members with the maximum number of noncumulative double bonds.
 * Names of heteromonocyclic parent components with more than ten ring members are discussed in this
 * subsection. They are used to generate names of preferred IUPAC names of fused ring systems; …
 * A heteromonocyclic parent component having more than ten ring members and the maximum number of
 * noncumulative double bonds (mancude) is named by changing the ending ‘ane’ of the name corresponding
 * to …
 * For examples of fusion compounds including this type of heteromonocyclic component, see P-25.2.2.4,
 * P-25.3.6.1 and P-25.3.7.1.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220204a.gif', pin: '1,8-dioxacyclooctadecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220204b.gif', pin: '1,8-dioxacyclooctadeca-2,4,6,9,11,13,15,17-octaene', otherNames: ['1,8-dioxacyclooctadecine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220204c.gif', pin: '1-oxa-4,8,11-triazacyclotetradecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220204d.gif', pin: '1-oxa-4,8,11-triazacyclotetradeca-3,5,7,9,11,13-hexaene', otherNames: ['2H-1,4,8,11-oxatriazacyclotetradecine'] },
]);
