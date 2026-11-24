/**
 * P-65.7.7.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Chalcogen analogues of cyclic anhydrides are named:
 * (1) as heterocyclic pseudoketones;
 * (2) by changing the class term ‘acid’ to ‘dianhydride’ or ‘thioanhydride’, ‘bis(thioanhydride)’,
 * etc., in the systematic or retained name of the dibasic or tetrabasic acid.
 * Method (1) leads to the preferred IUPAC name.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 837, P-65.7.7.3 (2), line 1/2. [corrected 6 March 2019]
 *     For ...‘dianhydride’ or ‘thioanhydride’, thiodianhydride, etc., in the ...
 *     read ...‘dianhydride’ or ‘thioanhydride’, ‘bis(thioanhydride)’, etc., in the ...
 *   Page 837, P-65.7.7.3, example 1. [corrected 6 March 2019]
 *     For (1) hexahydro-1H-2-benzothiophene-1,3(4H)-dione (PIN)
 *     read (1) hexahydro-2-benzothiophene-1,3-dione (PIN)
 *     for hexahydro-1H-benzo[c]thiophene-1,3(4H)-dione
 *     read hexahydrobenzo[c]thiophene-1,3-dione
 *   Page 838, P-65.7.7.3, example 1 on this page. [corrected 19 September 2018]
 *     For (1) hexhydro-1H-benzopyran-1,3(4H)-dithione (PIN)
 *     read (1) hexahydro-1H-benzopyran-1,3(4H)-dithione (PIN)
 *   Page 838, P-65.7.7.3, example 3 on this page. [corrected 6 March 2019]
 *     For (1) 5,7-disulfanylidene-5,7-dihydro-1H, 3H-thieno[3,4-f][2]benzofuran-1,3-dione (PIN)
 *     read (1) 5,7-bis(sulfanylidene)-5,7-dihydro-1H, 3H-thieno[3,4-f][2]benzofuran-1,3-dione (PIN)
 *     for (2) 2-benzothiophene-5,6-dicarboxylic anhydride.
 *     read (2) 1,3-bis(sulfanylidene)-1,3-dihydro-2-benzothiophene-5,6-dicarboxylic anhydride
 *     for isobenzothiofuran-5,6-dicarboxylic anhydride
 *     read 1,3-dithioxo-1,3-dihydroisobenzothiophene-5,6-dicarboxylic anhydride
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.7.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707o.gif', pin: 'hexahydro-2-benzothiophene-1,3-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707o.gif', pin: 'hexahydrobenzo[c]thiophene-1,3-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707p.gif', pin: 'hexahydro-1H-2-benzopyran-1,3(4H)-dithione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707q.gif', pin: '3-sulfanylidene-2-benzothiophen-1-one', otherNames: ['3-sulfanylidenebenzo[c]thiophen-1-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707r.gif', pin: '5,7-bis(sulfanylidene)-5,7-dihydro-1H,3H-thieno[3,4-f][2]benzofuran-1,3-dione', otherNames: ['5,7-dithioxo-5,7-dihydro-1H,3H-thieno[3,4-f]isobenzofuran-1,3-dione', '1,3-bis(sulfanylidene)-1,3-dihydro-2-benzothiophene-5,6-dicarboxylic anhydride', '1,3-dithioxo-1,3-dihydroisobenzothiophene-5,6-dicarboxylic anhydride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707s.gif', pin: 'tetrahydro-1H-cyclopenta[1,2-c:3,4-c′]dithiophene-1,3,4,6(3aH)-tetrone', otherNames: ['cyclopentane-1,2,3,4-tetracaboxylic 1,2:3,4-bis(thioanhydride)'] },
]);
