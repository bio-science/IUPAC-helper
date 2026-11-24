/**
 * P-52.2.6.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “. Seconorfullerenes
 * Example 1: C54H10
 * Explanation: The preferred IUPAC name for this fullerene fragment is a seconorfullerene name because
 * it has 54 carbon atoms and 22 rings.
 * Example 2: C30H14
 * Explanation: The preferred IUPAC name for this fullerene fragment is a systematic bridged fused ring
 * name because it has 30 carbon atoms and only 7 five- and six-membered rings.
 * Example 3: C40H20
 * Explanation: The preferred IUPAC name for this fullerene fragment is a systematic fused ring name
 * because it contains 40 carbon atoms but only eight five- and six-membered rings.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 593, P-52.2.6.4, Example 2. [corrected 29 January 2020]
 *     For
 *     2b²,8a²:5,8-dimethenecycclohexadeca[1,2,3,4,5,6-cdefg:7,8,9,10,11,12-c′d′e′f′g′]di-as-indacene
 *     (I) (PIN)
 *     read
 *     3,2,13,12-(epihexa[1,3,5]trien[1,3,4,6]tetrayl)-6,9-methenocycloundeca[1,11,10-cd:6,7,8-c′d′]diindene
 *     (I) (PIN)
 *     Replace the structures with:
 *   Page 594, P-52.2.6.4, Example 3. [corrected 29 January 2020]
 *     for 2,15:3,14-dimethenobenzo[h]cyclododeca[1,2-a:6,7-a′]difluorene (I)(PIN)
 *     read 2,15:3,14-dimethenoindeno[5'',4'':6',7']cyclododeca[1',2':4,5]indeno[1,2-b]anthracene (PIN)
 *     replace the structure for (I) [previously (II)] with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.6.4', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520206l.gif', pin: '6,7-seco-1,2,3,9,12,15-hexanor(C60-Ih)[5,6]fullerene' },
  { pin: '3,2,13,12-(epihexa[1,3,5]trien[1,3,4,6]tetrayl)-6,9-methenocycloundeca[1,11,10-cd:6,7,8-c′d′]diindene (I)', notNames: ['57,58:52,60-diseco-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,25,26,29,30,33,34,37,38-triacontanor(C60-Ih)[5,6]fullerene (II)'] },
  { pin: '2,15:3,14-dimethenoindeno[5′′,4′′:6′,7′]cyclododeca[1′,2′:4,5]indeno[1,2-b]anthracene (I)', notNames: ['1,6:3,4-diseco-10,11,12,13,14,19,20,21,27,28,29,30,31,32,33,38,39,40,41,42,43,48,49,50,51,52,57,58,59,60-triacontanor(C70-D5h(6))[5,6]fullerene (II)'] },
]);
