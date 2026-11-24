/**
 * P-54.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “UNSATURATED MONOCYCLIC CARBOCYCLES
 * Two methods are used for modifying the degree of hydrogenation of monocyclic carbocycles:
 * (1) by using the endings ‘ene’ and ‘yne’;
 * (2) by using the parent name ‘annulene’.
 * Method (1) generates preferred IUPAC names:”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 597, P-54.2, example 2. [modified 4 September 2024]
 *     Replace the structure with:
 *     for cyclododeca-1,3,5,7,9-pentaen-11-yne (PIN)
 *     read (1Z,3E,5Z,7E,9Z)-cyclododeca-1,3,5,7,9-pentaen-11-yne (PIN)
 *     for 1,2-didehydro[12]annulene
 *     read 1,2-didehydro[12]annulene (numbering shown)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-54.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540200a.gif', pin: 'cycloocta-1,3,5,7-tetraene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540200b.gif', name: '1,2-didehydro[12]annulene' },
]);
