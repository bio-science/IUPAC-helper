/**
 * P-107.3.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Phosphatidylinositols
 * The term ‘phosphatidylinositols’ is used to describe the acyl derivatives of phosphatidic acids
 * whose phosphorus acid component is esterified with an inositol molecule. Semisystematic names for
 * specific compounds are formed in accordance with the principles, rules, and conventions of
 * substitutive nomenclature.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1435, P-107.3.6 example. [modified 28 April 2023]
 *     For L-myo-inositol 2-[(2R)-2,3-bis(hexadecanoyloxy)propyl hydrogen phosphate
 *     read L-myo-inositol 2-[(2R)-2,3-bis(hexadecanoyloxy)propyl hydrogen phosphate]
 *     for
 *     (2R)-3-[({[(1s,2R,3S,4s,5R,6S)-hydroxy-2,3,4,5,6-pentahydroxycyclohexyl]oxy}hydroxyphosphoryl)oxy]propane-1,2-diyl
 *     dihexadecanoate
 *     read
 *     (2R)-3-[(hydroxy{[(1s,2R,3R,4s,5S,6S)-2,3,4,5,6-pentahydroxycyclohexyl]oxy}phosphoryl)oxy]propane-1,2-diyl
 *     di(hexadecanoate)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-107.3.6', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P107360a.gif', name: 'L-myo-inositol 2-[(2R)-2,3-bis(hexadecanoyloxy)propyl hydrogen phosphate]' },
]);
