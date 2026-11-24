/**
 * P-93.3.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “T-shape systems
 * The configuration index of the T-shape configuration follows the polyhedral symbol, TS-3, and
 * consist of a single digit, the priority number of the atom or substituent group on the stem of the
 * ‘T’ (as opposed to the cross piece of the ‘T’) (see IR-9.3.3.7, ref. 12).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.3.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93333b.gif', notNames: ['(TBPY-3)-1-methoxy-1λ³,2-benziodoxol-3(1H)-one'] },
]);
