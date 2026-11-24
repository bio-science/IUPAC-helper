/**
 * P-31.1.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Double bonds in amplificants and in simplified phane skeletons
 * The presence of one or more double or triple bonds in an otherwise saturated phane parent hydride,
 * except in amplificants with Hantzsch-Widman names, is denoted by changing the final letter ‘e’ of
 * the phane parent hydride name to ‘ene’ or ‘yne’, with appropriate multiplying prefixes to indicate
 * the multiplicity of each kind of unsaturated site (ref. 6, PhII-5.3).
 * Low locants are allocated for double or triple bonds in accordance with the fixed numbering of the
 * phane parent hydride and of phane parent hydrides modified by skeletal replacement (‘a’) …
 * (1) primary locants, i.e. arabic number locants that denote the atoms and superatoms of the phane
 * parent skeleton;
 * (2) composite locants, i.e. primary locants with a superscript arabic number locant denoting
 * positions in amplificants (see P-26.4.3);
 * (3) compound locants, which are primary or composite locants followed by another locant in
 * parentheses, indicating that a double bond is not located between two consecutive locants.
 * In phane nomenclature, double and triple bonds are denoted in two ways:
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 386, P-31.1.6.1 before examples. [added 20 November 2024]
 *     Add in a box This is a change from PhII-5.3.2.
 *   Page 386, P-31.1.6.1, before examples on next page. [corrected 4 September 2024]
 *     Add If there is a choice the criteria of P-31.1.4.3 are applied.
 *   Page 387, P-31.1.6.1, example 2. [corrected 27 May 2020]
 *     For 1(1,3)-benzena-9(1,3)-cyclohexanacyclohexadecaphane-9¹(9⁶),9³(9⁴)-diene (PIN)
 *     read 1(1,3)-benzena-9(1,3)-cyclohexanacyclohexadecaphane-9¹(9⁶),9³-diene (PIN)
 *   Page 387, P-31.1.6.1, new example after example 3. [added 20 November 2024]
 *     Add the structure:
 *     (2E,8(9¹)Z)-1(1,3)-benzena-9(1,3)-cyclohexanacyclohexadecaphan-2,8(9¹),9²-triene (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.6.1', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310106a.gif', pin: '1(1,3)-benzena-9(1,3)-cyclohexanacyclohexadecaphane-9³,9⁵-diene', otherNames: ['not 1(1,3)-benzena-9(1,3)-cyclohexanacyclohexadecaphane-9¹(9⁶),9⁴-diene'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310106b.gif', pin: '1(1,3)-benzena-9(1,3)-cyclohexanacyclohexadecaphane-9¹(9⁶),9³-diene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310106c.gif', pin: '1,9(1,3)-dibenzenacyclohexadecaphan-2-ene' },
]);
