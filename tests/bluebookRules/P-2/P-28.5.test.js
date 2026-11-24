/**
 * P-28.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “RING ASSEMBLES OF MORE THAN SIX IDENTICAL CYCLIC SYSTEMS
 * Preferred IUPAC names for ring assemblies of more than six identical cyclic systems are generated
 * using the principles of phane nomenclature (see P-26). Any of the methods discussed above (see
 * P-28.2.1, P-28.3.1, P-28.3.2), as appropriate, can be used in general IUPAC nomenclature.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 347, P-28.5, example 2. [modified 30 January 2019]
 *     For 1,8(2),2,3,4,5,6,7(2,5)-heptathiophenaoctaphane (PIN)
 *     read 1,8(2),2,3,4,5,6,7(2,5)-octathiophenaoctaphane (PIN)
 *     for 1²,2²:2⁵,3²:3⁵,4²:4⁵,5²:5⁵,6²:6⁵,7²,7⁵,8²-octithiophene
 *     read 1²,2²:2⁵,3²:3⁵,4²:4⁵,5²:5⁵,6²:6⁵,7²:7⁵,8²-octithiophene
 *   Page 347, P-28.5, example 3. [modified 30 March 2022]
 *     For 1¹H,2¹H,3¹H,4¹H,5¹H,6¹H,7¹H-1,7(2),2,3,4,5,6(2,5)heptapyrrolaheptaphane (PIN)
 *     read 1¹H,2¹H,3¹H,4¹H,5¹H,6¹H,7¹H-1,7(2),2,3,4,5,6(2,5)-heptapyrrolaheptaphane (PIN)
 *     for 1H,1′H,1′′H,1′′′H,1′′′ ′H,1′′′ ′′,1′′′ ′′′H-2,2′:5′,2′′:5′′,2′′′:5′′′,2′′′ ′:5′′′ ′,2′′′
 *     ′′:5′′′ ′′,2′′′ ′′′-septipyrrole
 *     read 1H,1′H,1′′H,1′′′H,1′′′ ′H,1′′′ ′′H,1′′′ ′′′H-2,2′:5′,2′′:5′′,2′′′:5′′′,2′′′ ′:5′′′ ′,2′′′
 *     ′′:5′′′ ′′,2′′′ ′′′-septipyrrole
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-28.5', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280500a.gif', pin: '1,7(1),2,3,4,5,6(1,4)-heptabenzenaheptaphane', otherNames: ['1¹,2¹:2⁴,3¹:3⁴,4¹:4⁴,5¹:5⁴,6¹:6⁴,7¹-septiphenyl', '1,1′:4′,1′′:4′′,1′′′:4′′′,1′′′ ′:4′′′ ′,1′′′ ′′:4′′′ ′′,1′′′ ′′′-septiphenyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280500b.gif', pin: '1,8(2),2,3,4,5,6,7(2,5)-octathiophenaoctaphane', otherNames: ['1²,2²:2⁵,3²:3⁵,4²:4⁵,5²:5⁵,6²:6⁵,7²:7⁵,8²-octithiophene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280500c.gif', pin: '1¹H,2¹H,3¹H,4¹H,5¹H,6¹H,7¹H-1,7(2),2,3,4,5,6(2,5)-heptapyrrolaheptaphane', otherNames: ['1¹H,2¹H,3¹H,4¹H,5¹H,6¹H,7¹H-1²,2²:2⁵,3²:3⁵,4²:4⁵,5²:5⁵,6²:6⁵,7²-septipyrrole'] },
]);
