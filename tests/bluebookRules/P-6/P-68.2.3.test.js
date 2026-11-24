/**
 * P-68.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Modification of the degree of hydrogenation
 * Double bonds are denoted by the ‘ene’ ending, as described in Section P-31.1, and saturation of
 * double bonds of mancude structures by ‘hydro’ prefixes as indicated in P-31.2.
 * In these recommendations, the prefixes ‘hydro’ and ‘dehydro’ are detachable, but are not included in
 * the category of alphabetized detachable prefixes (see P-14.4; …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 988, P-68.2.3, lines 1/2. [corrected 28 October 2016]
 *     For ...and saturation of mancude structures...
 *     read ...and saturation of double bonds of mancude structures...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.2.3', [
  { formula: 'H2Ge=GeH2', preselectedName: 'digermene' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68230a.gif', pin: '1,2,3,4-tetrahydrogermine' },
]);
