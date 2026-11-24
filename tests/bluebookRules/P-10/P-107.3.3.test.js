/**
 * P-107.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Phosphatidylserines
 * The term ‘phosphatidylserines’ is used to describe the acyl derivatives of phosphatidic acids whose
 * phosphorus acid component is esterified with the amino acid ‘serine’, usually L-serine.
 * Semisystematic names of specific compounds are formed in accordance with the principles, rules, and
 * conventions of substitutive nomenclature.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1434, P-107.3.3, example. [modified 22 April 2020]
 *     For 2,3-bis(octadecanoyl)-sn-glycero-3-phospho-L-serine
 *     read 1,2-di(octadecanoyl)-sn-glycero-3-phospho-L-serine
 *     for O-({[(2R)-2,3-bis(octadecanoyloxy)propoxy]hydroxyphosphoryl})-L-serine
 *     read O-{[(2R)-2,3-bis(octadecanoyloxy)propoxy]hydroxyphosphoryl}-L-serine
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-107.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P107330a.gif', name: '1,2-di(octadecanoyl)-sn-glycero-3-phospho-L-serine' },
]);
