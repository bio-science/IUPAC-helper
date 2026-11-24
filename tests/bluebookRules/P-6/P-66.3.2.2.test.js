/**
 * P-66.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When the –CO-NHNH2 group is at the end of a chain the use of the prefixes ‘hydrazinyl’ and ‘oxo’
 * generates preferred IUPAC names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 875, P-66.3.2.2, example 1. [corrected 24 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66322a.gif', pin: '3-hydrazinyl-3-oxopropanoic acid', otherNames: ['carbonohydrazidoylacetic acid'] },
]);
