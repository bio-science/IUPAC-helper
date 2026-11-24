/**
 * P-52.2.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nor(C60-Ih)[5,6]fullerenes and nor(C70-D5h(6))[5,6]fullerenes.
 * Example 1: C30H10
 * Explanation: The preferred IUPAC name for this fullerene fragment is a systematic fusion ring name
 * because it contains only 30 carbon atoms.
 * Example 2: C34H10
 * Explanation: The preferred IUPAC name for this fullerene fragment is a norfullerene name because it
 * contains 34 carbon atoms and 13 rings.
 * Example 3: C36H22
 * Explanation: The preferred IUPAC name for this fullerene fragment is a systematic bridged fused ring
 * name because it contains only eight rings.
 * Example 4: C45H15
 * Explanation: The preferred IUPAC name for this fullerene fragment is a norfullerene name because it
 * has 45 carbon atoms and it has 15 rings.
 * Example 5: C54H12
 * Explanation: The preferred IUPAC name for this fullerene fragment is a norfullerene name because it
 * has 54 atoms and twenty rings.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 589, P-52.2.6.2, Example 1, structure (II). [corrected 19 September 2018]
 *     For ...33,34,37,38-tricontanor(C60-Ih)[5,6]fullerene (II)
 *     read ...33,34,37,38-triacontanor(C60-Ih)[5,6]fullerene (II)
 *   Page 590, P-52.2.6.2, Example 2. [corrected 29 January 2020]
 *     For [not bis(benzo[1,8]-as-indaceno[3,4,5,6-fghij:3′4′5′6′-lmnoa])cyclopenta[cd]fluoranthene
 *     (II)]
 *     read [not bis(benzo[1,8]-as-indaceno[3,4,5,6-fghij:3′,4′,5′,6′-lmnoa])cyclopenta[cd]fluoranthene
 *     (II)]
 *   Page 591, P-52.2.6.2, Example 4. [modified 29 January 2020]
 *     For [not
 *     16H-1,13,18-(epieth16H-1,13,18-(epiethene[1,2]diyl[1]ylidene)-2,11,12-epiprop[1]ene[1,3]diyl[3]ylidene)acephenanthryleno[4,3-bc]tricyclopenta[n,pqr,tuv]picene
 *     (II)]
 *     read [not
 *     8,7,2-(epiethane[1,2]diyl[1]ylidene)-1,9,18-(epiprop[1]ene[1,1]diyl[3]ylidene)acephenanthryleno[4,3-bc]tricyclopenta[n,pqr,tuv]picene
 *     (II)] (II)]
 *     replace the structures with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.6.2', [
  { pin: 'cyclopenta[cd]di-as-indaceno[3,4,5,6-fghij:3′,4′,5′,6′-lmnoa]fluoranthene (I)', notNames: ['1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,25,26,29,30,33,34,37,38-triacontanor(C60-Ih)[5,6]fullerene (II)'] },
  { pin: '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,29,30,37,38-hexacosanor(C60-Ih)[5,6]fullerene (I)', notNames: ['bis(benzo[1,8]-as-indaceno[3,4,5,6-fghij:3′,4′,5′,6′-lmnoa])cyclopenta[cd]fluoranthene (II)'] },
  { pin: '3,10-[2,7]epiphenanthropicene (I)', notNames: ['7,8,9,10,16,22,23,24,25,26,27,28,32,33,34,35,36,37,38,42,43,44,45,46,47,48,52,53,54,55,56,57,67,68-tetratriacontanor(C70-D5h(6))[5,6]fullerene (II)'] },
  { pin: '7,8,9,10,22,23,24,25,26,27,28,34,35,36,42,43,44,45,46,47,48,54,55,62,63-pentacosanor(C70-D5h(6))[5,6]fullerene (I)', notNames: ['8,7,2-(epiethane[1,2]diyl[1]ylidene)-1,9,18-(epiprop[1]ene[1,1]diyl[3]ylidene)acephenanthryleno[4,3-bc]tricyclopenta[n,pqr,tuv]picene (II)'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520206i.gif', pin: '1,9,32,33,38,39-hexanor(C60-Ih)[5,6]fullerene' },
]);
