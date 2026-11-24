/**
 * P-63.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of chalcogen analogues of ethers, i.e., sulfides, selenides and tellurides
 * General methodology
 * Sulfides, R-S-R′, selenides R-Se-R′, and tellurides R-Te-R′, are named by the following methods:
 * (1) by prefixing the names of the substituent groups R′-S–, R′-Se–, or R′-Te–, i.e., R′-sulfanyl,
 * R′-selanyl, and R′-tellanyl, respectively, to that of the parent hydride, RH; …
 * (2) by functional class nomenclature using the terms sulfide, selenide, and telluride for –S–, –Se–,
 * and –Te–, respectively;
 * (3) by multiplicative nomenclature in the case of cyclic parent hydrides, using the prefixes
 * sulfanediyl, –S– (not thio); selanediyl –Se– (not seleno); …
 * (4) by skeletal replacement (‘a’) nomenclature;
 * (5) by phane nomenclature;
 * Names formed by substituting the parent hydrides oxidane, sulfane, selane, and tellane, H2O, H2S,
 * H2Se, and H2Te, respectively, by the appropriate substituent groups are not recommended.
 * Names formed by functional replacement nomenclature of the retained name anisole are no longer
 * recommended. Class names such as thiooxide are not recommended.
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.2.5', [
  { formula: 'CH3-S-CH3', pin: '(methylsulfanyl)methane', otherNames: ['dimethyl sulfide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630205a.gif', pin: '1,1′-sulfanediyldibenzene', otherNames: ['(phenylsulfanyl)benzene', 'diphenyl sulfide'], notNames: ['1,1′-thiodibenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630205b.gif', pin: '4-(phenylsulfanyl)piperidine', otherNames: ['4-(phenylthio)piperidine', 'phenyl piperidin-4-yl sulfide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630205c.gif', pin: '(cyclopentylselanyl)benzene', otherNames: ['cyclopentyl phenyl selenide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630205d.gif', pin: '[(penta-1,4-dien-3-yl)sulfanyl]cyclobutane', otherNames: ['cyclobutyl penta-1,4-dien-3-yl sulfide', 'cyclobutyl 1-ethenylprop-2-en-1-yl sulfide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630205e.gif', pin: '8-methyl-2,4,6,9,11-pentathiadodecane', otherNames: ['2-{[(methylsulfanyl)methyl]sulfanyl}-1-[({[(methylsulfanyl)methyl]sulfanyl}methyl)sulfanyl]propane', '2-{[(methylthio)methyl]thio}-1-[({[(methylthio)methyl]thio}methyl)thio]propane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630205f.gif', pin: '1-[(propan-2-yl)selanyl]-2-(propylselanyl)propane', otherNames: ['1-[(propan-2-yl)seleno]-2-(propylseleno)propane'], notNames: ['2,5-dimethyl-3,6-diselenanonane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630205g.gif', pin: '2-oxa-4-thia-6-selena-1,7(1),3,5(1,3)-tetrabenzenaheptaphane', otherNames: ['1-phenoxy-3-{[3-(phenylselanyl)phenyl]sulfanyl}benzene', 'not 1-[(3-phenoxyphenyl)sulfanyl]-3-(phenylselanyl)benzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630205h.gif', pin: '(methylsulfanyl)benzene', notNames: ['thioanisole'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630205i.gif', pin: '1-chloro-4-[(chloromethyl)selanyl]benzene', notNames: ['α,4-dichloroselenoanisole'] },
]);
