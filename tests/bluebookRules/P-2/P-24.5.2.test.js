/**
 * P-24.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Monospiro ring systems with different ring components at least one being a polycyclic ring and at
 * least one ring component requiring the use of skeletal replacement (‘a’) nomenclature are named as
 * in P-24.5.1; then, the skeletal replacement (‘a’) prefixes are introduced and cited before the
 * ‘spiro’ term.
 * Note: This treatment of skeletal replacement (‘a’) prefixes was introduced in the 1999 publication
 * on the nomenclature of spiro compounds (ref. 8).
 * Note: The format of the ‘correct’ name given in SP-4.1 in ref. 8,
 * spiro[fluorene-9,2′-[3]thiabicyclo[2.2.2]octane], is no longer recommended.
 * Explanation: The spiro atom of the monocyclic hydrocarbon component is given preference for low
 * locant.
 * Note: The format of the ‘correct’ name given in SP-4.1, ref. 8,
 * spiro[bicyclo[2.2.1]heptane-2,1′-[2,12]dioxacyclododecane], is no longer recommended.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 186, P-24.5.2, example 1. [corrected 4 September 2019]
 *     For [not 2-thiaspiro[bicyclo[2.2.2]octane-3,9′- fluorene] (II)]
 *     read [not 2-thiaspiro[bicyclo[2.2.2]octane-3,9′-fluorene] (II)] [delete space in name]
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.5.2', [
  { pin: '3-thiaspiro[bicyclo[2.2.2]octane-2,9′-fluorene] (I)', notNames: ['2-thiaspiro[bicyclo[2.2.2]octane-3,9′-fluorene] (II)'] },
  { pin: '2′,12′-dioxaspiro[bicyclo[2.2.1]heptane-2,1′-cyclododecane] (I)', notNames: ['1′,3′-dioxaspiro[bicyclo[2.2.1]heptane-2,2′-cyclododecane] (II)'] },
]);
