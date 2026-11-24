/**
 * P-24.5.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In the case of ring systems modified by skeletal replacement (‘a’) nomenclature, P-24.5.1 and
 * P-24.5.3 are applied to name the ring system before skeletal replacement (‘a’) nomenclature is
 * applied as described in P-24.5.2. The names of ring components modified by skeletal replacement
 * (‘a’) nomenclature must not be used; thus P-24.5.3 must be applied when required.
 * Explanation: spiro fusion is preferred to replacement (‘a’) prefixes for low locants and the locant
 * set 2,6′ in the PIN (I) is lower than 3,6′ in (II).”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 188, P-24.5.4, example 1. [corrected 4 September 2019]
 *     For [bicyclo[2.2.2]octane is cited before bicyclo[3.2.1]octane
 *     read [bicyclo[2.2.2]octane is cited before bicyclo[3.2.1]octane]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.5.4', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240504a.gif', pin: 'spiro[bicyclo[2.2.2]octane-2,3′-bicyclo[3.2.1]octane]' },
  { pin: '3,3′-dioxaspiro[bicyclo[2.2.2]octane-2,6′-bicyclo[3.2.1]octane] (I)', notNames: ['2,3′-dioxaspiro[bicyclo[2.2.2]octane-3,6′-bicyclo[3.2.1]octane] (II)'] },
]);
