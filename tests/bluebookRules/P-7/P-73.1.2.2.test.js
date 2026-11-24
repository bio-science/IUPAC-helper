/**
 * P-73.1.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Uronium ions and chalcogen analogues
 * Cations derived formally by adding a hydron to urea (or isourea) are named on the basis of the
 * parent cation ‘uronium’, representing the following tautomeric structures:
 * Numerical locants for the parent cation uronium are no longer used in preferred IUPAC names.
 * Locants follow those used for urea and isourea. Chalcogen analogues are named on the basis of parent
 * cations, such as ‘thiouronium’, etc. This methodology leads to preferred IUPAC names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1088, P-73.1.2.2, right structural formula. [corrected 12 June 2019]
 *     Replace the structure with:
 *   Page 1088, P-73.1.2.2, example 1. [modified 11 March 2020]
 *     For N-(methylamino)phenoxymethylidene]methanaminium
 *     read N-[(methylamino)phenoxymethylidene]methanaminium
 *     Replace the structures with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.1.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73122b.gif', pin: 'N,N′-dimethyl-O-phenyluronium', otherNames: ['1,3-dimethyl-2-phenyluronium', 'N-[(methylamino)phenoxymethylidene]methanaminium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73122c.gif', pin: 'N,S-dimethyl-N′-phenylthiouronium' },
]);
