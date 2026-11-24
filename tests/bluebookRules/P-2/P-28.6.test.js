/**
 * P-28.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “BRANCHED RING ASSEMBLIES OF IDENTICAL CYCLIC SYSTEMS
 * Preferred IUPAC names are formed by substituting into the longest unbranched assembly. The names of
 * substituent groups are formed in accord with the methods described in P-29.3.5. If necessary, the
 * criteria for selecting the principal chain are applied, namely, the longest chain, the lowest
 * attachment locants in the order of citation, the maximum number of substituents, the lowest locants
 * for substituents considered together, then alphanumerical order.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-28.6', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280600a.gif', pin: '2⁵-phenyl-1¹,2¹:2³,3¹-terphenyl', otherNames: ['5′-phenyl-1,1′:3′,1′′-terphenyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280600b.gif', pin: '3⁵-([1,1′-biphenyl]-3-yl)-1¹,2¹:2³,3¹:3³,4¹:4³,5¹-quinquephenyl', otherNames: ['5′′-([1,1′-biphenyl]-3-yl)-1,1′:3′,1′′:3′′,1′′′:3′′′,1′′′ ′-quinquephenyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280600c.gif', pin: '2³,2⁴,2⁵,2⁶-tetraphenyl-1¹,2¹:2²,3¹-terphenyl', otherNames: ['3′,4′,5′,6′-tetraphenyl-1,1′:2′,1′′-terphenyl'], notNames: ['2²,2³,2⁵,2⁶-tetraphenyl-1¹,2¹:2⁴,3¹-terphenyl', '2²,2⁴,2⁵,2⁶-tetraphenyl-1¹,2¹:2³,3¹-terphenyl', '2′,3′,5′,6′-tetraphenyl-1,1′:4′,1′′-terphenyl', '2′,4′,5′,6′-tetraphenyl-1,1′:3′,1′′-terphenyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280600d.gif', pin: '3⁶-([1,1′-biphenyl]-4-yl)-4⁴-([1¹,2¹:2⁴,3¹-terphenyl]-1⁴-yl)-1,7(1),2,3,4,5(1,3),6(1,4)-heptabenzenaheptaphane', notNames: ['3²-([1,1′-biphenyl]-3-yl)-4³-([1¹,2¹:2⁴,3¹-terphenyl]-1³-yl)-1,7(1),2,3,4,5,6(1,4)-heptabenzenaheptaphane'] },
]);
