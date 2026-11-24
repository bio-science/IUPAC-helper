/**
 * P-52.2.5.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Mancude systems attached to adjacent atoms of an alicyclic large ring.
 * Mancude systems attached to adjacent atoms of an alicyclic ring are either fused systems or bridged
 * fused systems. …
 * The seniority order described in P-44.2.2.2 for relevant polycyclic systems is as follows: cyclic
 * phane systems > fused ring systems > bridged fused systems > non-fused bridged systems. …
 * Explanation: Phane name not permitted, only one ring system, see P-52.2.5.1 (1) .
 * Explanation: A fusion name is not possible; a phane name is preferred to a von Baeyer name.
 * Explanation: A fusion name is not possible; no mancude ring is present, a phane name is not
 * permitted; therefore the von Baeyer name is the preferred IUPAC name.
 * Explanation: No mancude ring, so a phane name is not allowed; the bridged fused ring name is
 * preferred to the von Baeyer name.
 * Explanation: A phane name not allowed, see Rule P-52.2.5.1; a fusion name is preferred to a von
 * Baeyer name.
 * Explanation: A phane name is senior to a bridged fused ring name.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 584, P-52.2.5.2.1, example 2. [corrected 1 November 2023]
 *     For 1(1,3)-benzenacyclopeptadecaphane (PIN; a phane name)
 *     read 1(1,3)-benzenacyclopeptadecaphane (a phane name)
 *     for bicyclo[16.3.1]docosa-1(22),18,20-triene (a von Baeyer name)
 *     read bicyclo[16.3.1]docosa-1(22),18,20-triene (PIN; a von Baeyer name)
 *     add Explanation: Only one ring system, see P-52.2.5.1 (1)
 *   Page 586, P-52.2.5.2.1, example 1 on this page, right version. [corrected 29 May 2019]
 *     For bicyclo[12.4.0]octadeca-(14),15,17-triene
 *     read bicyclo[12.4.0]octadeca-1(14),15,17-triene
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.5.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205a.gif', pin: '5,6,7,8,9,10,11,12,13,14,15,16-dodecahydrobenzo[14]annulene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205c.gif', name: 'bicyclo[16.3.1]docosa-1(22),18,20-triene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205b.gif', name: '1(1,3)-benzenacycloheptadecaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205d.gif', name: '1(1,3)-benzena-4(1,3)-cyclohexanacyclohexaphane (PIN,' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205e.gif', name: 'tricyclo[9.3.1.1⁴,⁸]hexadeca-1(15),11,13-triene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205f.gif', pin: 'tricyclo[9.3.1.1⁴,⁸]hexadecane', otherNames: ['von Baeyer name)'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205g.gif', name: '1,4(1,3)-dicyclohexanacyclohexaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205h.gif', pin: 'hexadecahydro-1H-8,12-methanobenzo[13]annulene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205i.gif', name: 'tricyclo[12.3.1.0⁵,¹⁰]octadecane' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205j.gif', pin: '5,6,7,8,9,10,11,12,13,14,15,16-dodecahydrobenzo[14]annulene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520205k.gif', name: 'bicyclo[12.4.0]octadeca-1(14),15,17-triene' },
]);
