/**
 * P-65.6.3.3.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When anions are different, two methods are used:
 * (1) names of anions are cited in alphanumerical order preceded by a locant, when required;
 * multiplicative prefixes are used to denote a multiplicity of identical anionic components;
 * (2) one anion is chosen as principal anion and all other ester groups are expressed as prefixes in
 * the name of the organyl group. …
 * Method (1) generates preferred IUPAC names but names formed by using method (2) are acceptable in
 * general nomenclature.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 811, P-65.6.3.3.3.2, last example. [corrected 28 October 2016]
 *     For (2S)-propane-1,2,3-triyl 2-acetate 1-hexadecanoate 3-[(9Z)-octadec-9-enoate] (PIN)
 *     read (1) propane-1,2,3-triyl 2-acetate 1-hexadecanoate 3-[(9Z)-octadec-9-enoate] (PIN)
 *     for (2S)-2-(acetyloxy)-3-(hexadecanoyloxy)propyl (9Z)-octadec-9-enoate
 *     read (2) 2-(acetyloxy)-3-(hexadecanoyloxy)propyl (9Z)-octadec-9-enoate
 *     replace structure with:
 *     Note deletion of extra closing parenthesis.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.3.3.2', [
  { formula: 'HCO-O-CH2-O-CO-CH3', pin: 'methylene acetate formate', otherNames: ['(formyloxy)methyl acetate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ad.gif', pin: '1,4-phenylene acetate dichloroacetate', otherNames: ['4-(acetyloxy)phenyl dichloroacetate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ae.gif', pin: 'propane-1,2,3-triyl 1,2-diacetate 3-propanoate', otherNames: ['2,3-bis(acetyloxy)propyl propanoate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603af.gif', pin: 'propane-1,2,3-triyl 2-acetate 1-hexadecanoate 3-[(9Z)-octadec-9-enoate]', otherNames: ['2-(acetyloxy)-3-(hexadecanoyloxy)propyl (9Z)-octadec-9-enoate'] },
]);
