/**
 * P-63.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Peroxides, disulfides, diselenides, and ditellurides
 * Compounds with the general structures R-OO-R′, R-SS-R′, R-SeSe-R′, and R-TeTe-R′ are named in the
 * following ways:
 * (1) substitutively, by combining the prefix name for R′ additively with ‘peroxy’ giving the prefixes
 * ‘R′-peroxy’ (not R′-dioxy), ‘R′-disulfanyl’, ‘R′-diselanyl’ or ‘R′-ditellanyl’ attached to the …
 * (2) by functional class nomenclature by citing the names of the groups R and R′, in alphanumerical
 * order if two different groups are present, and the class name, peroxide, disulfide, diselenide, or …
 * (3) by multiplicative nomenclature, using the preferred prefixes disulfanediyl, –SS–, diselanediyl,
 * –SeSe–, and ditellanediyl, –TeTe–, respectively; …
 * (4) by skeletal replacement (‘a’) nomenclature;
 * (5) by phane nomenclature.
 * Names formed by substituting the parent hydrides dioxidane, disulfane, diselane, and ditellane HOOH,
 * HSSH, HSeSeH, and HTeTeH, respectively, by the appropriate substituent groups are not recommended.
 * Method (1), substitutive nomenclature, gives preferred IUPAC names; methods (3), (4), or (5)
 * generate preferred IUPAC names when the conditions for their use are satisfied.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 708, P-63.3.1, example 4. [corrected 24 June 2020]
 *     For (1) 1-(propan-2-yldiselanyl)propane (PIN)
 *     read (1) 1-[(propan-2-yl)diselanyl]propane (PIN)
 *   Page 708, P-63.3.1, last example on this page. [corrected 19 September 2018]
 *     For 1-(methyldiseleno)-2-(methyldithio)disilane
 *     read 1-(methyldiseleno)-2-(methylditelluro)disilane
 *   Page 709, P-63.3.1, example 1 on this page. [corrected 7 November 2018]
 *     For [4-(4-carboxyphenyl)peroxy]benzoic acid
 *     read 4-[(4-carboxyphenyl)peroxy]benzoic acid
 *   Page 709, P-63.3.1, example 3 on this page. [corrected 27 February 2019]
 *     Delete (1) 1-(2-{[2-(methylsulfanyl)ethyl]sulfanyl}ethyl)-2-[(methylsulfanyl)methyl]disulfane
 *   Page 709, P-63.3.1, example 4 on this page. [corrected 27 February 2019]
 *     Delete (1) bis[3-(phenylsulfanyl)phenyl]disulfane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.3.1', [
  { formula: 'CH3-CH2-OO-CH3', pin: '(methylperoxy)ethane', otherNames: ['ethyl methyl peroxide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630301a.gif', pin: '2-(methylperoxy)propane', otherNames: ['isopropyl methyl peroxide', 'methyl 1-methylethyl peroxide'] },
  { formula: 'CH3-SS-CH3', pin: '(methyldisulfanyl)methane', otherNames: ['dimethyl disulfide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630301b.gif', pin: '1-[(propan-2-yl)diselanyl]propane', otherNames: ['isopropyl propyl diselenide', '1-methylethyl propyl diselenide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630301c.gif', pin: '(ethylperoxy)benzene', otherNames: ['ethyl phenyl peroxide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630301d.gif', pin: '1-(methyldiselanyl)-2-(methyldisulfanyl)ethane', otherNames: ['1-(methyldiseleno)-2-(methyldithio)ethane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630301e.gif', pin: '1-(methyldiselanyl)-2-(methylditellanyl)disilane', otherNames: ['1-(methyldiseleno)-2-(methylditelluro)disilane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630301f.gif', pin: '4,4′-peroxydibenzoic acid', otherNames: ['4-[(4-carboxyphenyl)peroxy]benzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630301g.gif', pin: '4,4′-disulfanediyldiphenol', otherNames: ['4,4′-dithiodiphenol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630301h.gif', pin: '2,4,5,8,11-pentathiadodecane' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630301i.gif', pin: '2,4,5,7-tetrathia-1,8(1),3,6(1,3)-tetrabenzenaoctaphane' },
]);
