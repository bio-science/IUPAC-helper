/**
 * P-52.2.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Ring assemblies, linear phane names, and other linear acyclic/cyclic compounds
 * Phane nomenclature is used to generate preferred IUPAC names for ring assemblies and linear
 * acyclic/cyclic compounds that include a minimum of seven nodes including at least four rings or ring
 * systems, two of which must be terminal, even though the compounds could also be named by
 * substitutive or multiplicative nomenclature.
 * A new numbering system is now recommended for preferred IUPAC names of ring assemblies with more
 * than two rings or ring systems; it consists of composite locants, for example, 1². …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 587, P-52.2.5.3, example 1, second compound. [modified 20 February 2019]
 *     For 3,5-bis([1,1′-biphenyl]-3-yl)pyridine (PIN, substitutive name)
 *     read 3,5-di([1,1′-biphenyl]-3-yl)pyridine (PIN, substitutive name)
 *   Page 587, P-52.2.5.3, example 2. [modified 20 February 2019]
 *     for (not diphenyl ether)
 *     read diphenyl ether (a functional class name)
 *   Page 588, P-52.2.5.3, example 3. [corrected 7 November 2018]
 *     For 3,3′-[furan-3,4-diylbis(sulfanediylethane-2,1-diylsulfanediyl]difuran
 *     read 3,3′-[furan-3,4-diylbis(sulfanediylethane-2,1-diylsulfanediyl)]difuran
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205n.gif', pin: '3,5-diphenylpyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205o.gif', pin: '3,5-di([1,1′-biphenyl]-3-yl)pyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205p.gif', pin: '4(3,5)-pyridina-1,7(1),2,3,5,6(1,3)-hexabenzenaheptaphane', otherNames: ['3,5-di([1¹,2¹:2³,3¹-terphenyl]-1³-yl)pyridine', '3,5-di([1,1′:3′,1′′-terphenyl]-3-yl)pyridine'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205q.gif', pin: '1,1′-oxydibenzene', otherNames: ['phenoxybenzene', 'diphenyl ether'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205r.gif', pin: '1,1′-[1,4-phenylenebis(oxy)]dibenzene', otherNames: ['1,4-diphenoxybenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205s.gif', pin: '2,4,6-trioxa-1,7(1),3,5(1,4)-tetrabenzenaheptaphane', otherNames: ['1,1′-oxybis(4-phenoxybenzene)', '1-phenoxy-4-(4-phenoxyphenoxy)benzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205t.gif', pin: '3,3′-[furan-3,4-diylbis(sulfanediylethane-2,1-diylsulfanediyl)]difuran', otherNames: ['3,4-bis{[2-(furan-3-ylsulfanyl)ethyl]sulfanyl}furan'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205u.gif', pin: '2,5,7,10,12,15-hexathia-1,16(3),6,11(3,4)-tetrafuranahexadecaphane', otherNames: ['3,3′-[ethane-1,2-diylbis(sulfanediyl)]bis(4-{[2-(furan-3-ylsulfanyl)ethyl]sulfanyl}furan)', '3-{[2-(furan-3-ylsulfanyl)ethyl]sulfanyl}-4-({2-[(4-{[2-(furan-3-ylsulfanyl)ethyl]sulfanyl}furan-3-yl)sulfany]ethyl}sulfanyl)furan'] },
]);
