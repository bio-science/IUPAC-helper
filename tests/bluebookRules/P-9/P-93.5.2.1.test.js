/**
 * P-93.5.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specification of stereogenic centers by CIP stereodescriptors
 * The absolute configuration with a unique numbering determined by the structure is specified by CIP
 * stereodescriptor such as‘R’, ‘s’, etc.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1254, P-93.5.2.1, example 1. [corrected 2 January 2019]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93521b.gif', name: 'simplified digraph' },
]);
