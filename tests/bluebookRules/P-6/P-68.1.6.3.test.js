/**
 * P-68.1.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Intramolecular adducts
 * An intramolecular adduct between a group acting as a Lewis base and another group acting as a Lewis
 * acid in the same molecule is denoted by atomic symbol pairs in the order donor-acceptor as described
 * in Rule P-68.1.6.2, but enclosed in parentheses and cited in front of an appropriate portion of the
 * name of the compound. A symbol denoting the proportions of the components is not required.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 983, P-68.1.6.3 (formerly P-68.1.6.1.2), example 3 on this page.. [modified 12 May 2021]
 *     For (N³—B)[1H-benzimidazol-2-yl)phenyl]boronic acid
 *     read (N³—B)[2-(1H-benzimidazol-2-yl)phenyl]boronic acid
 *     add (N³—B)[2-(1H-1,3-benzimidazol-2-yl)phenyl]boronic acid
 *     for [2-(1H-benzimidazol-2-yl-κN³)benzenido-κC¹]dihydroxidoboron
 *     read [2-(1H-benzimidazol-2-yl-κN³)benzen-1-ido-κC¹]dihydroxidoboron
 *     add [2-(1H-1,3-benzimidazol-2-yl-κN³)benzen-1-ido-κC¹]dihydroxidoboron
 *   Page 983, P-68.1.6.3 (formerly P-68.1.6.1.2), example 1 on this page. [corrected 28 October 2016]
 *     For [3,3′,3′′-nitrilo-κN-tris(propane-1-yl-κC¹)]boron
 *     read [3,3′,3′′-nitrilo-κN-tris(propan-1-yl-κC¹)]boron
 *   Page 983, P-68.1.6.3 (formerly P-68.1.6.1.2), example 2 on this page. [corrected 28 October 2016]
 *     For [2(O—B)]-N-[(difluoroboranyl)oxy]-N-nitrosomethanamine
 *     read (O—B)-N-[(difluoroboranyl)oxy]-N-nitrosomethanamine
 *     for difluorido(N-nitroso-κO-N-oxido-kO-methanamine)boron
 *     read difluorido(N-nitroso-κO-N-oxido-κO-methanamine)boron
 *   Page 984, P-68.1.6.3 (was P-68.1.6.1.2), example 2 on this page (example 8 of this section).
 *   [modified 9 April 2025]
 *     For
 *     (μ-{2,2′-[ethane-1,2-diylbis(azanylylidene-1κN:2κN′-methanylylidene)bis(4,6-di-tert-butylphenolato-1κO:2κO′)bis[di(ethanido-1κ²C¹,2κ²C¹)gallium]
 *     read
 *     (μ-{2,2′-[ethane-1,2-diylbis(azanylylidene-1κN¹:2κN²-methanylylidene)bis(4,6-di-tert-butylphenolato-1κO:2κO′)]})bis[di(ethanido-1κ²C¹,2κ²C¹)gallium]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.6.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68161j.gif', name: 'dichlorido(2-nitro-κO-phenolato-κO)boron' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68161l.gif', name: 'difluorido(N-nitroso-κO-N-oxido-κO-methanamine)boron' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68161m.gif', name: '{not (N³—B)-2-[(dihydroxyboranyl)phenyl]benzimidazole}' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68161n.gif', name: 'bis(4-oxo-κO-pent-2-en-2-olato-κO)boron(1+) chloride' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68161o.gif', name: '2,4-di-tert-butyl-6-[({2-[({(N—Ga)-3,5-di-tert-butyl-2-[(diethylgallanyl)-oxy]phenyl}methylidene)amino]ethyl}imino)methyl]phenol' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68161p.gif', name: 'N¹,N²-bis({3,5-di-tert-butyl-2-[(diethylgallanyl)oxy]phenyl}methylidene)-2(N—Ga)-ethane-1,2-diamine' },
]);
