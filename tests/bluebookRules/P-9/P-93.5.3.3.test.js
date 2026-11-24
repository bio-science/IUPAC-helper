/**
 * P-93.5.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specification of double bonds
 * No stereodescriptor ‘E’ or ‘Z’ is needed to describe a double bond when the stereogenic unit is
 * located in a ring having less than eight members. All stereodescriptors are used when a larger ring
 * is present.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1263, P-93.5.3.3 example 2. [corrected 2 January 2019]
 *     Add (6Z)-spiro[4.7]dodeca-2,6-diene
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93533a.gif', pin: 'spiro[4.5]dec-2-ene' },
]);
