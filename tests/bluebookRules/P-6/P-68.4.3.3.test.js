/**
 * P-68.4.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Sulfimides and chalcogen analogues, H2E=NH, where E = S, Se, or Te
 * Compounds with the general structures, H2S=NH, belong to a class called ‘sulfimides’ (CAS calls them
 * sulfilimines). They are named in two ways:
 * (1) substitutively by adding the suffix ‘imine’ to the name of the parent hydride such as
 * λ⁴-sulfane;
 * (2) substitutively using the class name ‘sulfimide’.
 * Method (1) generates preferred IUPAC names.
 * N and/or S substitution by groups that are not hydrocarbyl groups, may create senior parent
 * structures that become the basis for the name.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1031, P-68.4.3.3, example 2 . [corrected 20 March 2019]
 *     For S,S-diphenyl-N-benzenesulfonylsulfimide
 *     read S,S-diphenyl-N-(benzenesulfonyl)sulfimide
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.4.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68433a.gif', pin: 'S,S-diethyl-N-phenyl-λ⁴-sulfanimine', otherNames: ['S,S-diethyl-N-phenylsulfimide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68433b.gif', pin: 'N-(diphenyl-λ⁴-sulfanylidene)benzenesulfonamide', otherNames: ['S,S-diphenyl-N-(benzenesulfonyl)sulfimide'] },
]);
