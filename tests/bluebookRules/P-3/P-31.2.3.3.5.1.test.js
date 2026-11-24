/**
 * P-31.2.3.3.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Ring assemblies composed of monocyclic components
 * (a) Ring assemblies composed of monocyclic mancude or saturated hydrocarbons. Low locants are
 * assigned to ‘hydro’ prefixes in accordance with the fixed numbering of each assembly. …
 * (b) Ring assemblies composed of heteromonocycles. Low locants are assigned to junctions between
 * rings, then to indicated hydrogen, if any, and finally to ‘hydro’ prefixes.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 398, P-31.2.3.3.5.1 (b), example 1. [Corrected 8 October 2025]
 *     For 1¹,1⁶,24,25,3²,3⁵-hexahydro-1²,23:26,3⁴-terpyridine (PIN)
 *     read 1¹,1⁶,2³,2⁴,3²,3⁵-hexahydro-1²,2⁵:2²,3⁴-terpyridine (PIN)
 *     for 1,2′′,4′,5′,5′′,6-hexahydro-2,3′:6′,4′′-terpyridine
 *     read 1,2′′,3′,4′,5′′,6-hexahydro-2,5′:2′,4′′-terpyridine
 *   Page 397, P-31.2.3.3.5.1, example 4. [modified 27 May 2020]
 *     For 1¹,1²,1³,1⁴,1⁵,1⁶,2¹,2²,2³, 2⁴,
 *     2⁵,2⁶,4¹,4²,4³,4⁴,4⁵,4⁶,5¹,5²,5³,5⁴,5⁵,5⁶-tetracosahydro-1¹,2¹,2⁴,
 *     3¹,3⁴,4¹,4⁴,5¹,5⁴,6¹-sexiphenyl (PIN)
 *     read
 *     1¹,1²,1³,1⁴,1⁵,1⁶,2¹,2²,2³,2⁴,2⁵,2⁶,4¹,4²,4³,4⁴,4⁵,4⁶,5¹,5²,5³,5⁴,5⁵,5⁶-tetracosahydro-1¹,2¹:2⁴,3¹:3⁴,4¹:4⁴,5¹:5⁴,6¹-sexiphenyl
 *     (PIN) [remove spaces from name]
 *     For {not 1-(1¹,2¹,3¹,4¹,5¹,6¹, 2¹,2²,2³, 2⁴,
 *     2⁵,2⁶-dodecahydro[1¹,1²:4²,1³-terphenyl]-4¹-yl)-4-[1,1′-bi(cyclohexan]-4-yl)benzene
 *     (substitutive name)}
 *     read {not
 *     1-(2¹,2²,2³,2⁴,2⁵,2⁶,3¹,3²,3³,3⁴,3⁵,3⁶-dodecahydro[1¹,2¹:2⁴,3¹-terphenyl]-1⁴-yl)-4-([1,1′-bi(cyclohexan)]-4-yl)benzene
 *     (substitutive name)} [remove spaces from names]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.2.3.3.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203ah.gif', pin: '2,3-dihydro-1,1′-biphenyl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203ai.gif', pin: 'cyclohexylbenzene', otherNames: ['1,2,3,4,5,6-hexahydro-1,1′-biphenyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203aj.gif', pin: '1²,1⁵,2²,2³-tetrahydro-1¹,2¹:2⁴,3¹-terphenyl', otherNames: ['2,2′,3′,5-tetrahydro-1,1′:4′,1′′-terphenyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203ak.gif', pin: '1¹,1²,1³,1⁴,1⁵,1⁶,2¹,2²,2³,2⁴,2⁵,2⁶,4¹,4²,4³,4⁴,4⁵,4⁶,5¹,5²,5³,5⁴,5⁵,5⁶-tetracosahydro-1¹,2¹:2⁴,3¹:3⁴,4¹:4⁴,5¹:5⁴,6¹-sexiphenyl', otherNames: ['4-[4-([1,1′-bi(cyclohexan)]-4-yl)phenyl]-4′-phenyl-1,1′-bi(cyclohexane)', '{not 1-(2¹,2²,2³,2⁴,2⁵,2⁶,3¹,3²,3³,3⁴,3⁵,3⁶-dodecahydro[1¹,2¹:2⁴,3¹-terphenyl]-1⁴-yl)-4-([1,1′-bi(cyclohexan)]-4-yl)benzene (substitutive name)}'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203al.gif', pin: '1(1),4(1,4)-dibenzena-2,3,5,6(1,4),7(1)-pentacyclohexanaheptaphane', otherNames: ['4-[4-(4′-phenyl[1,1′-bi(cyclohexan)]-4-yl)phenyl)-11,21:24,31-tercyclohexane', '4-[4-(4′-phenyl[1,1-bi(cyclohexan)]-4-yl)pheny]-1,1′:4′,1′′-tercyclohexane'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203am.gif', pin: '1¹,1⁶,2³,2⁴,3²,3⁵-hexahydro-1²,2⁵:2²,3⁴-terpyridine', otherNames: ['1,2′′,3′,4′,5′′,6-hexahydro-2,5′:2′,4′′-terpyridine'] },
]);
