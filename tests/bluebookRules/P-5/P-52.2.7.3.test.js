/**
 * P-52.2.7.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preferred IUPAC names for assemblies containing seven and more rings or ring systems.
 * Phane names are preferred IUPAC names rather than ring assembly names when seven or more rings or
 * ring systems are present.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 596, P-52.2.7.3, example on this page. [corrected 19 September 2018]
 *     For 1,8(2),2,3,4,5,6,7(2,5)-heptathiophenaoctaphane (PIN)
 *     read 1,8(2),2,3,4,5,6,7(2,5)-octathiophenaoctaphane (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.7.3', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520207h.gif', pin: '1,7(1),2,3,4,5,6(1,4)-heptabenzenaheptaphane', otherNames: ['1¹,2¹:2⁴,3¹:3⁴,4¹:4⁴,5¹:5⁴,6¹:6⁴,7¹-septiphenyl', '1,1′:4′,1′′:4′′,1′′′:4′′′,1′′′ ′:4′′′ ′,1′′′ ′′:4′′′ ′′,1′′′ ′′′-septiphenyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520207i.gif', pin: '1,8(2),2,3,4,5,6,7(2,5)-octathiophenaoctaphane', otherNames: ['1²,2²:2⁵,3²:3⁵,4²:4⁵,5²:5⁵,6²:6⁵,7²,7⁵,8²-octithiophene'] },
]);
