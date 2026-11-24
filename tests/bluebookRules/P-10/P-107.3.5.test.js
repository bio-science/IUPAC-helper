/**
 * P-107.3.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Phosphatidylethanolamine
 * The term ‘phosphatidylethanolamines’ [more correctly designated as ‘phosphatidyl(amino)ethanols’] is
 * used to describe the acyl derivatives of phosphatidic acids whose phosphorus acid component is
 * esterified with 2-aminoethanol. Semisystematic names for specific compounds are formed in accordance
 * with the principles, rules, and conventions of substitutive nomenclature.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1435, P-107.3.5 example [corrected 28 April 2023]
 *     For (2R)-3-{[(2-aminoethoxy)hydroxyphosphoryl]oxy}propane-1,2-diyl dihexadecanoate
 *     read (2R)-3-{[(2-aminoethoxy)hydroxyphosphoryl]oxy}propane-1,2-diyl di(hexadecanoate)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-107.3.5', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P107350a.gif', name: '1,2-di(hexadecanoyl)-sn-glycero-3-phosphoethanolamine' },
]);
