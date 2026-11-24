/**
 * P-63.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Mixed chalcogen analogues of peroxides
 * Mixed chalcogen structures such as R-XY-R′ or R-YX-R′ in which X and Y are O, S, Se, or Te atoms are
 * named by three methods:
 * (1) by prefixing the names of the substituent groups R′-O–, R′-S–, R′-Se–, or R′-Te–, i.e., R′-oxy,
 * R′-sulfanyl, R′-selanyl, and R′-tellanyl, respectively, to ‘oxy’, ‘sulfanyl’, ‘selanyl’, or …
 * (2) by citing the prefix names of the groups R and R′, in alphanumerical order, followed by an
 * appropriate class name ‘thioperoxide’, ‘diselenoperoxide’, ‘selenothioperoxide’, etc. …
 * (3) by skeletal replacement (‘a’) nomenclature or phane nomenclature, when the conditions for its
 * use are fulfilled.
 * Methods (1) and (3) lead to preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 710, P-63.3.2, example 3 on this page. [corrected 7 November 2018]
 *     For {not phenyltellanyl)selanyl]benzene; ...
 *     read {not [(phenyltellanyl)selanyl]benzene; ...
 *   Page 710, P-63.3.2, example 4 on this page. [corrected 27 February 2019]
 *     Delete (1) 1-[2-({[2-(methylselanyl)ethyl]sulfanyl}ethyl)]-2-[(methylsulfanyl)methyl]disulfane
 *     for [not (methylsufanyl)methyl 2-{[2-(methylsulfanyl)ethyl]sulfanyl}ethanesufenothioate
 *     read [not (methylsufanyl)methyl 2-{[2-(methylselanyl)ethyl]sulfanyl}ethanesufenothioate]
 *   Page 710, P-63.3.2, example 5. [modified 24 June 2020]
 *     Delete (1) [3-(phenyltelluranyl)phenyl][3-(phenylsulfanyl)phenyl]disulfane
 *     for (not 3-(phenylsulfanyl)phenyl 3-(phenyltelluranyl)benzenesulfenothioate)
 *     read [not 3-(phenylsulfanyl)phenyl 3-(phenyltellanyl)benzenesulfenothioate]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.3.2', [
  { formula: 'CH3-CH2-OS-CH3', pin: '[(methylsulfanyl)oxy]ethane', otherNames: ['O-ethyl S-methyl thioperoxide'], notNames: ['ethyl methanesulfenate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630302a.gif', pin: '(methoxysulfanyl)cyclohexane', otherNames: ['S-cyclohexyl O-methyl thioperoxide'], notNames: ['methyl cyclohexanesulfenate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630302b.gif', pin: '[(phenylselanyl)tellanyl]benzene', otherNames: ['{not [(phenyltellanyl)selanyl]benzene', 'diphenyl selenotelluroperoxide'], notNames: ['diphenyl telluroselenoperoxide', 'phenyl benzenetelluroselenate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630302c.gif', pin: '2,4,5,8-tetrathia-11-selenadodecane', notNames: ['(methylsufanyl)methyl 2-{[2-(methylselanyl)ethyl]sulfanyl}ethanesufenothioate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630302d.gif', name: '2,4,5-trithia-7-tellura-1,8(1),3,6(1,3)-tetrabenzenaoctaphane(PIN)', notNames: ['3-(phenylsulfanyl)phenyl 3-(phenyltellanyl)benzenesulfenothioate'] },
]);
