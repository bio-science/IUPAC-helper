/**
 * P-27.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Fullerenes and modified fullerenes ortho fused to organic rings or ring systems
 * Fullerenes or modified fullerenes that share an adjacent pair of atoms with an organic ring or ring
 * system are named by adapting the principles of fusion nomenclature described in Section P-25. As in
 * normal organic fused ring systems, the pair of atoms shared by the fullerene or modified fullerene
 * and the organic ring or ring system is regarded as part of both components. However, unlike normal
 * fused systems, each component retains its own bonding pattern and numbering. …
 * Organic ring systems, including monocyclic rings and all polycyclic ring systems except spiro ring
 * systems, are always cited as prefixes to the name of the fullerene or modified fullerene which is …
 * The methodology used to name fused derivatives of fullerenes is also used for naming fused
 * fundamental structures in the nomenclature of natural products (see P-101.5). …
 * When two or more of the same nonfullerene components are fused to a fullerene, primes are assigned
 * according to the increasing value of the lower fullerene fusion locant. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 335, P-27.6.1, example 1 on this page. [modified 8 May 2019]
 *     For 3′H,3′′H,3′′′H-tricyclopropa[7,22:33,34:46,47](C70-Ih)[5,6]fullerene (PIN)
 *     read 3′H,3′′H,3′′′H-tricyclopropa[7,22:33,34:46,47](C70-D5h(6))[5,6]fullerene (PIN)
 *     for 7,22:33,34:46,47-tris(methylene)(C70-Ih)[5,6]fullerene (see P-27.6.2)
 *     read 7,22:33,34:46,47-tris(methylene)(C70-D5h(6))[5,6]fullerene (see P-27.6.2)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-27.6.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270601a.gif', pin: '3′H-cyclopropa[1,9](C60-Ih)[5,6]fullerene', otherNames: ['1,9-methano(C60-Ih)[5,6]fullerene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270601b.gif', name: '1,9-(oxymethyleneoxy)(C60-Ih)[5,6]fullerene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270601c.gif', pin: '3′H-cyclopenta[7,8]-1,2,3,4,5,6,9,12,15,18-decanor(C60-Ih)[5,6]fullerene', otherNames: ['7,8-(prop-1-en-1,3-diyl)-1,2,3,4,5,6,9,12,15,18-decanor(C60-Ih)[5,6]fullerene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270601d.gif', pin: '3′H,3′′H,3′′′H-tricyclopropa[7,22:33,34:46,47](C70-D5h(6))[5,6]fullerene', otherNames: ['7,22:33,34:46,47-tris(methylene)(C70-D5h(6))[5,6]fullerene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270601e.gif', pin: 'tris(oxireno)[2′,3′:1,9;2′′,3′′:2,12;2′′′,3′′′:7,8](C60-Ih)[5,6]fullerene', otherNames: ['1,9:2,12:7,8-tris(oxy)(C60-Ih)[5,6]fullerene'] },
]);
