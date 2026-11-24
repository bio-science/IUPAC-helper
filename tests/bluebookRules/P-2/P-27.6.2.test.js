/**
 * P-27.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Bridged fullerenes
 * Bridges between nonadjacent atoms of a fullerene or modified fullerene are named and numbered
 * according to established principles and rules for bridged fused ring systems (see P-25.4). Numbering
 * of bridging atoms begins with the number following the highest number of the fullerene and starts
 * with the atom adjacent to the fullerene atom with the higher locant number. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 337, P-27.6.2 example 1 on this page. [corrected 9 January 2019]
 *     For ...decanor(C60- Ih)[5,6]fullerene (PIN)
 *     read ...decanor(C60-Ih)[5,6]fullerene (PIN) [delete space from name]
 *   Page 337, P-27.6.2, example 2 on this page (example 4 of section). [modified 9 April 2025]
 *     For
 *     1,9:32,33-(ethane-1,2,2-triyloxymethylene-1,4-phenylenemethyleneoxyethane-1,2,2-triy)(C60-Ih)[5,6]fullerene
 *     read
 *     1,9:32,33-[ethane-1,1,2-triyloxymethylene(1,4-phenylene)methyleneoxyethane-1,2,2-triyl](C60-Ih)[5,6]fullerene
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-27.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270602a.gif', pin: '1,4-ethano(C70-D5h(6))[5,6]fullerene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270602b.gif', pin: '1,4-[1,2]benzeno(C70-D5h(6))[5,6]fullerene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270602c.gif', pin: '7,20:8,10:11,13:14,16:17,19-pentaetheno-1,2,3,4,5,6,9,12,15,18-decanor(C60-Ih)[5,6]fullerene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270602d.gif', pin: '3′H,3′′H-3′,3′′-(methanooxymethano[1,4]benzenomethanooxymethano)dicyclopropa[1,9:32,33](C60-Ih)[5,6]fullerene', otherNames: ['1,9:32,33-[ethane-1,1,2-triyloxymethylene(1,4-phenylene)methyleneoxyethane-1,2,2-triyl](C60-Ih)[5,6]fullerene'] },
]);
