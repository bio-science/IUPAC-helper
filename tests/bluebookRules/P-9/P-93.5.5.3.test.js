/**
 * P-93.5.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specification of double bonds
 * The omission of stereodescriptors ‘E’ and ‘Z’ to denote the configuration of double bonds in
 * cyclophanes is related to the total number of nodes in the system; for up to seven nodes, no
 * descriptor is necessary. When more than seven nodes are present, all descriptors of double bonds in
 * rings of more than seven nodes are cited (see P-91.2.2).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1271, P-93.5.5.3, lines 3/4. [corrected 4 September 2024]
 *     For ...present, all descriptors are must be cited (see P-91.2.2).
 *     read ...present, all descriptors of double bonds in rings of more than seven nodes are cited
 *     (see P-91.2.2)
 *   Page 1271, P-93.5.5.3, example 2. [corrected 4 September 2024]
 *     For (2E)-1(2,6)-pyridina-7(1,3)-benzenacyclododecaphan-2-ene (PIN)
 *     read (2E)-1¹,1⁴,1⁵,1⁶-tetrahydro-1(2,6)-pyridina-7(1,3)-benzenacyclododecaphan-2-ene (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93553a.gif', pin: '1,4(1,4)-dibenzenacyclohexaphane-2,5-diene' },
]);
