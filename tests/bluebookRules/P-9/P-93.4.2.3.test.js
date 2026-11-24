/**
 * P-93.4.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cumulenes having an odd number of double bonds
 * Cumulenes having an odd number of double bonds are planar molecules, like double bonds. The
 * preferred stereodescriptors are ‘E’ and ‘Z’. Stereodescriptors ‘cis’ and ‘trans’ may be used in
 * general nomenclature.
 * The stereodescriptor ‘E’ or ‘Z’, describing the cumulene system, is preceded by a locant indicating
 * the starting point of the cumulated double bond system having consecutive increasing locants …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1239, P-93.4.2.3, example 2. [corrected 10 April 2019]
 *     For (2-trans,6-trans)-octa-2,3,4,6-tetraene
 *     read 2-trans,6-trans-octa-2,3,4,6-tetraene
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.4.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93423a.gif', name: 'cis-hexa-2,3,4-triene' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93423b.gif', name: '2-trans,6-trans-octa-2,3,4,6-tetraene' },
]);
