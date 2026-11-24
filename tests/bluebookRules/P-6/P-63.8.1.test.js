/**
 * P-63.8.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Neutral salts of hydroxy compounds and their chalcogen analogues and peroxy compounds are named by
 * citing the cation(s) followed by the name of the anion as a separate word.
 * According to P-72.2.2.2.2, an anion formed by subtracting a hydron from the chalcogen atom of a
 * hydroxy compound or a chalcogen analogue, or a peroxy compound, that can be expressed by a suffix
 * such …
 * The traditional names methoxide, ethoxide, propoxide, butoxide and phenoxide, for CH3-O⁻, C2H5-O⁻,
 * C3H7-O⁻, C4H9-O⁻ and C6H5-O⁻, are retained as preferred IUPAC names and aminoxide, H2N-O⁻, as a …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 719, P-63.8.1, paragraph 3. [modified 1 November 2023]
 *     For The traditional names methoxide, ethoxide, proproxide, butoxide, phenoxide, and aminoxide, ,
 *     for CH3-O⁻, C2H5-O⁻, C3H7-O⁻, C4H9-O⁻, C6H5-O⁻, and H2N-O⁻ are retained for use in general
 *     nomenclature and may be substituted in the same way as the corresponding alcohols. The
 *     traditional names isopropoxide and tert-butoxide for (CH3)CH-O⁻ and (CH3)3C-O⁻ also are retained
 *     but cannot be substituted.
 *     read The traditional names methoxide, ethoxide, propoxide, butoxide and phenoxide, for CH3-O⁻,
 *     C2H5-O⁻, C3H7-O⁻, C4H9-O⁻ and C6H5-O⁻, are retained as preferred IUPAC names and aminoxide,
 *     H2N-O⁻, as a preselected name, and they may be substituted in the same way as the corresponding
 *     alcohols. The traditional name tert-butoxide for (CH3)3C-O⁻ is also retained as a preferred
 *     IUPAC name but cannot be substituted. The traditional name isopropoxide for (CH3)2CH-O⁻ is
 *     retained for general nomenclature but cannot be substituted.
 *   Page 719, P-63.8.1, example 4. [modified 9 January 2017]
 *     For llithium phenolate (PIN)
 *     read lithium phenolate
 *     for lithium phenoxide
 *     read lithium phenoxide (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.8.1', [
  { formula: 'CH3-O⁻ Na⁺', pin: 'sodium methoxide', otherNames: ['sodium methanolate'] },
  { formula: 'CH3-CH2-CH2-O⁻ Na⁺', pin: 'sodium propoxide', otherNames: ['sodium propan-1-olate'] },
  { formula: '(CH3)2CH-O⁻ K⁺', pin: 'potassium propan-2-olate', otherNames: ['potassium isopropoxide'] },
  { formula: 'C6H5-O⁻ Li⁺', pin: 'lithium phenoxide', otherNames: ['lithium phenolate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630801a.gif', pin: 'disodium benzene-1,2-bis(olate)' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630801b.gif', pin: 'disodium benzene-1,2-bis(thiolate)' },
  { formula: '(C6H5-O⁻)4 Pb⁴⁺', pin: 'lead tetraphenoxide' },
]);
