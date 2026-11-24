/**
 * P-66.4.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydrazidines derived from carbonic acid and di- and polycarbonic acids follow the procedure for the
 * corresponding hydrazides given above (see P-66.3.5).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 898, P-66.4.3.3, example 1. [modified 3 March 2021]
 *     For carbonohydrazonic dihydrazide (P-65.2.1.5)
 *     read carbonohydrazonic dihydrazide (P-65.2.1.3)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66433a.gif', pin: 'hydrazinecarbohydrazonohydrazide', otherNames: ['carbonohydrazonic dihydrazide (P-65.2.1.3)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66433b.gif', pin: 'dicarbonohydrazonic dihydrazide', notNames: ['dihydrazonodicarbonic dihydrazide'] },
]);
