/**
 * P-63.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Sulfur, selenium, and tellurium analogues of hydroxy compounds
 * Sulfur, selenium, and tellurium analogues of hydroxy compounds are named substitutively using the
 * suffixes ‘thiol’, ‘selenol’, and ‘tellurol’, and the prefixes ‘sulfanyl’, ‘selanyl’, and ‘tellanyl’,
 * respectively; the presence of several of the same kind of ‘ol’ characteristic groups is denoted by
 * the numerical multiplying prefixes ‘di’, ‘tri’, etc. The prefixes ‘mercapto’ (–SH), and
 * ‘hydroseleno’ or selenyl (–SeH), etc. are no longer recommended.
 * Functional class nomenclature is not used.
 * Names of assemblies of identical units are formed by methods described in P-15.3 and P-51.3. Names
 * for divalent prefixes are described in P-63.2.5. …
 * The seniority order of sulfur, selenium, and tellurium analogues of hydroxy compounds is: O > S > Se
 * > Te.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 697, P-63.1.5, line 9. [corrected 8.11.2023]
 *     For ...are described in P-63.2.5.1. multiplicative names ...
 *     read ...are described in P-63.2.5. multiplicative names ...
 *   Page 697, P-63.1.5, line 9. [corrected 8.11.2023]
 *     For ...are described in P-63.2.5.1. multiplicative names ...
 *     read ...are described in P-63.2.5. multiplicative names ...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.1.5', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630105a.gif', pin: 'propane-2-thiol' },
  { formula: 'CH3-CH2-SeH', pin: 'ethaneselenol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630105b.gif', pin: 'butane-1,4-dithiol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630105c.gif', pin: 'benzenethiol', notNames: ['thiophenol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630105d.gif', pin: '4,5-dihydro-1,3-thiazole-2-thiol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630105e.gif', pin: '3-sulfanylpropanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630105f.gif', pin: '2,2′-sulfanediyldi(cyclopentane-1-thiol)' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630105g.gif', pin: '3-[(4-sulfanylphenyl)disulfanyl]benzene-1-thiol', otherNames: ['3,4′-disulfanediyldi(benzene-1-thiol)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630105h.gif', pin: '2,2′-sulfanediyldiphenol', otherNames: ['2-[(2-hydroxyphenyl)sulfanyl]phenol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630105i.gif', pin: '2-sulfanylphenol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630105j.gif', pin: '5-(1-hydroxy-2-sulfanylethyl)-2-sulfanylcyclohexan-1-ol', otherNames: ['1-(3-hydroxy-4-sulfanylcyclohexyl)-2-sulfanylethan-1-ol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630105k.gif', pin: '3,4-bis(sulfanyl)butanoic acid' },
]);
