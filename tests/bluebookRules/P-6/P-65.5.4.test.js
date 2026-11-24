/**
 * P-65.5.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl halides and pseudohalides as substituent groups
 * When another group is present that has priority for citation as principal group or when attached to
 * another substituting group, an acyl halide or pseudohalide is expressed:
 * (1) by a prefix formed from the name of the acid, for example, ‘carbonochloridoyl’;
 * (2) by a compound prefix composed of a halo or halogeno prefix and an appropriate divalent acyl
 * group, such as ‘sulfonyl’, for example, fluorosulfonyl;
 * (3) at the end of an acyclic carbon chain by a prefix denoting the halide or pseudohalide group and
 * the prefix ‘oxo’, or a chalcogen analogue of oxo, such as sulfanylidene.
 * Method (1) leads to preferred IUPAC names when the suffix ‘-carboxylic acid’ is used to name the
 * corresponding acid; method (3) generates preferred IUPAC names for acyclic carbon chains.
 * Seniority for numbering follows that for acids, for which see P-65.1.2.3. For seniority of halides
 * and pseudohalides, see P-65.5.2.1.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 800, P-65.5.4, example 2. [corrected 24 June 2020]
 *     For (1) 2-(carbonochloridoyl)benzoic acid (PIN)
 *     read (1) 2-carbonochloridoylbenzoic acid (PIN)
 *     for (2) 2-chlorocarbonylbenzoic acid
 *     read (2) 2-(chlorocarbonyl)benzoic acid
 *   Page 800, P-65.5.4, example 4. [modified 24 June 2020]
 *     For (1) 2-(carbonocyanidothioyl)benzoyl chloride (PIN)
 *     read (1) 2-carbonocyanidothioylbenzoyl chloride (PIN)
 *     for (2) 2-(cyanocarbonothioyl)benzoyl chloride
 *     read (2) 2-(cyanocarbothioyl)benzoyl chloride
 *     replace structure with:
 *   Page 800, P-65.5.4, example 5. [modified 24 June 2020]
 *     For 4-(2-isocyanato-2-oxoethyl)benzenecarbothioyl cyanide (PIN)
 *     read (4-carbonocyanidothioylphenyl)acetyl isocyanate (PIN)
 *     add [not 4-(2-isocyanato-2-oxoethyl)benzenecarbothioyl cyanide, acetyl is senior to carbothioyl]
 *     replace the structure with:
 *   Page 800, P-65.5.4, example 6. [corrected 24 June 2020]
 *     For 2-(carbonocyanidoyl)-5-methylbenzoyl chloride (PIN)
 *     read 2-carbonocyanidoyl-5-methylbenzoyl chloride (PIN)
 *   Page 800, P-65.5.4, example 7. [corrected 28 October 2016]
 *     For (3) 4-bromo-3,4-dioxobutanoic acid
 *     read (3) 4-bromo-3,4-dioxobutanoic acid (PIN)
 *   Page 800, P-65.5.4, example 8. [corrected 24 June 2020]
 *     For (1) 3-[(carbonobromidoyl)oxy]-3-oxopropanoic acid (PIN)
 *     read (1) 3-(carbonobromidoyloxy)-3-oxopropanoic acid (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.5.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650504a.gif', pin: '3-chloro-3-oxopropanoic acid', otherNames: ['carbonochloridoylacetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650504b.gif', pin: '2-carbonochloridoylbenzoic acid', otherNames: ['2-(chlorocarbonyl)benzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650504c.gif', pin: '2-(cyanosulfonyl)cyclohexane-1-carboxylic acid', otherNames: ['2-sulfurocyanidoylcyclohexane-1-carboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650504d.gif', pin: '2-carbonocyanidothioylbenzoyl chloride', otherNames: ['2-(cyanocarbonothioyl)benzoyl chloride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650504e.gif', notNames: ['4-(2-isocyanato-2-oxoethyl)benzenecarbothioyl cyanide', 'acetyl is senior to carbothioyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650504f.gif', pin: '2-carbonocyanidoyl-5-methylbenzoyl chloride', otherNames: ['2-(cyanocarbonyl)-5-methylbenzoyl chloride'] },
  { formula: 'Br-CO-CO-CH2-COOH', pin: '4-bromo-3,4-dioxobutanoic acid' },
  { formula: 'Br-CO-O-CO-CH2-COOH', pin: '3-(carbonobromidoyloxy)-3-oxopropanoic acid' },
]);
