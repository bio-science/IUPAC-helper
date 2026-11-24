/**
 * P-65.3.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Imidic and hydrazonic acids derived from sulfonic, sulfinic, etc. acids
 * Imidic acids and hydrazonic acids derived from sulfonic, sulfinic, etc., acids are named by using
 * suffixes such as ‘sulfinimidic acid’ for –S(=NH)-OH, ‘sulfonohydrazonic acid’ for –S(O)(=NNH2)-OH.
 * The prefix ‘di’ is used to indicate the replacement of two oxygen atoms (=O) in sulfonic acids, for
 * example, ‘sulfonodiimidic acid’ for –S(=NH)2-OH. Suffixes are listed in Table 4.3.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 790, P-65.3.1.4, line 2. [corrected 10 October 2018]
 *     For ...such as ‘sulfinimidic acid’ for –S(O)(=NH)-OH, ...
 *     read ...such as ‘sulfinimidic acid’ for –S(=NH)-OH, ...
 *   Page 791, P-65.3.1.4, example 4 on this page. [corrected 26 September 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.3.1.4', [
  { formula: 'CH3-CH2-S(=NH)2-OH', pin: 'ethanesulfonodiimidic acid' },
  { formula: 'CH3-S(=NH)-OH', pin: 'methanesulfinimidic acid' },
  { formula: 'C6H5-Se(=NH)2-OH', pin: 'benzeneselenonodiimidic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650301e.gif', pin: 'benzenesulfonohydrazonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650301f.gif', pin: 'naphthalene-2-selenonohydrazonimidothioic acid' },
]);
