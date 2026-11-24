/**
 * P-52.1.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preselected names for homogeneous and heterogeneous heterobi- and heteropolycyclic fused ring
 * systems are formed by fusion nomenclature principles (see P-25.3.2.4). Alternative names for use in
 * general nomenclature are formed by prefixing the appropriate ‘a’ prefixes in front of the name of
 * the hydrocarbon fused ring system.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 576, P-52.1.7, example 1 on this page. [modified 11 November 2020]
 *     For 1H,5H-pentarsolopentarsole (preselected name)
 *     read 1H,4H-pentarsolopentarsole (preselected name)
 *     for 1H,5H-octaarsapentalene
 *     read 1H,4H-octaarsapentalene (numbering shown)
 *     replace the structure with:
 *   Page 576, P-52.1.7, example 2. [modified 11 November 2020]
 *     For [1,3,5,2,4,6]triazatriborino[1,2-a][1,3,5,2,4,6]triazatriborine (preselected name)
 *     read [1,3,5,2,4,6]triazatriborinino[1,2-a][1,3,5,2,4,6]triazatriborinine (preselected name)
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.1.7', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520107a.gif', preselectedName: '1H,4H-pentarsolopentarsole', otherNames: ['1H,4H-octaarsapentalene'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520107b.gif', name: '1,3,4a,6,8-pentaaza-2,4,5,7,8a-pentaboranaphthalene' },
]);
