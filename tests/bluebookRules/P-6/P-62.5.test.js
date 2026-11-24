/**
 * P-62.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “AMINE OXIDES, IMINE OXIDES, AND CHALCOGEN ANALOGUES
 * Amine oxides, imine oxides, and their chalcogen analogues are named:
 * (1) by functional class nomenclature using the class names ‘oxide’, ‘sulfide’, ‘selenide’, and
 * ‘telluride’ provided that unambiguous superscripted N locants can be used, if necessary ;
 * (2) by use of prefixes derived from the parent name λ⁵-azane;
 * (3) as zwitterions (see P-74.2.1.2).
 * Method (1) is used when one amine or imine oxide is present. Because of the zwitterionic nature of a
 * nitrogen oxide, amine and imine oxides are placed with zwitterions in the order of compound classes
 * (see P-41). Thus, amine and imine oxides are named by method (1) and all other amino groups, if
 * present, are named as substituent groups by using the prefix ‘amino’. Method (2) is used when the
 * oxide is on a nitrogen atom of a substituent group; …
 * Method (1) or (2), as appropriate, leads to preferred IUPAC names as illustrated below. Names of
 * zwitterions are described in P-74.2.1.2.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 687, P-62.5, example 1 on this page. [modified 27 February 2019]
 *     For 3-carbamoyl-5-(2-aminoethyl)benzoic acid N5-oxide
 *     read 3-(2-aminoethyl)-5-carbamoylbenzoic acid N³-oxide
 *     For {not {[2-(3-carbamoyl-5-carboxyphenyl)ethyl]azaniumyl}oxidanide (see also P-71.2.1.2}
 *     read (3) {[2-(3-carbamoyl-5-carboxyphenyl)ethyl]azaniumyl}oxidanide (see also P-71.2.1.2)
 *   Page 687, P-62.5, example 3 on this page. [modified 7 November 2018]
 *     For (2) 2-{3-[(dimethyloxo-λ⁵- azanyl)methyl]phenyl}-N,N-dimethyl-ethan-1-amine N-oxide
 *     read (2) 2-(3-{[dimethyl(oxo)-λ⁵-azanyl]methyl}phenyl)-N,N-dimethylethan-1-amine N-oxide (PIN)
 *     [Deleted space and a hyphen from the name]
 *     for 2-{3-[(dimethylamino)methyl]phenyl}-N,N-dimethylethane-1-amine N¹,N³-dioxide
 *     read 2-{3-[(dimethylamino)methyl]phenyl}-N,N-dimethylethan-1-amine N¹,N³-dioxide
 *     for (3) 2-(3-{[dimethyl(oxido)azaniumyl]methyl}phenyl)-N,N-dimethyl-ethan-1-amine N-oxide (PIN;
 *     see also P-74.2.1.2)
 *     read (3) 2-(3-{[dimethyl(oxido)azaniumyl]methyl}phenyl)-N,N-dimethylethan-1-amine N-oxide (see
 *     also P-74.2.1.2)
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.5', [
  { pin: 'N,N-dimethylmethanamine N-oxide', otherNames: ['(trimethylazaniumyl)oxidanide'] },
  { formula: 'CH2=N(O)Cl', pin: 'N-chloromethanimine N-oxide', otherNames: ['[chloro(methylidene)azaniumyl]oxidanide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620500a.gif', pin: '1,5-bis(dimethylamino)-N,N-dimethylpentan-3-amine N-oxide', notNames: ['N¹,N¹,N³,N³,N⁵,N⁵-hexamethylpentane-1,3,5-triamine N³-oxide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620500b.gif', pin: '3,5-bis(dimethylamino)-N,N-dimethylpentan-1-amine N-oxide', notNames: ['N¹,N¹,N³,N³,N⁵,N⁵-hexamethylpentane-1,3,5-triamine N¹-oxide'] },
  { formula: '(CH3)2N-CH2-CH2-CH2-CH2-CH2-N(O)(CH3)2', pin: '5-(dimethylamino)-N,N-dimethylpentane-1-amine N-oxide', notNames: ['N¹,N¹,N⁵,N⁵-tetramethylpentane-1,5-diamine N¹-oxide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620500c.gif', pin: '2-(3-carbamoyl-5-carboxyphenyl)ethan-1-amine N-oxide', otherNames: ['3-(2-aminoethyl)-5-carbamoylbenzoic acid N³-oxide', '{[2-(3-carbamoyl-5-carboxyphenyl)ethyl]azaniumyl}oxidanide'] },
  { formula: '•CH2-CH2-NH2O', pin: '2-(oxo-λ⁵-azanyl)ethyl', otherNames: ['2-(oxidoazaniumyl)ethyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620500d.gif', pin: '2-(3-{[dimethyl(oxo)-λ⁵-azanyl]methyl}phenyl)-N,N-dimethylethan-1-amine N-oxide', otherNames: ['2-{3-[(dimethylamino)methyl]phenyl}-N,N-dimethylethan-1-amine N¹,N³-dioxide', '2-(3-{[dimethyl(oxido)azaniumyl]methyl}phenyl)-N,N-dimethylethan-1-amine N-oxide'] },
  { formula: '(CH3-CH2)3NS', pin: 'N,N-diethylethanamine N-sulfide', otherNames: ['(triethylazaniumyl)sulfanide'] },
]);
