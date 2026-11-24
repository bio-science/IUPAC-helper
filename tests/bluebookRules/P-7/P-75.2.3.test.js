/**
 * P-75.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1124, P-75.2.3, example 1. [modified 11 November 2020]
 *     For (triethylazaniumyl)boranuidyl (PIN)
 *     read (N,N-diethylethanaminiumyl)boranuidyl (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-75.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75230b.gif', pin: '3-methyl-1-(trimethylsilyl)triaz-2-en-2-ium-1-id-2-yl' },
]);
