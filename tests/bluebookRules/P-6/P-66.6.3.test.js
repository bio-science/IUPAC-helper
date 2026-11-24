/**
 * P-66.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Chalcogen analogues of aldehydes
 * Chalcogen analogues of aldehydes are named by using the suffixes and prefixes in Table 6.4. In the
 * seniority order of classes, aldehydes are senior to ketones, hydroxy compounds, amines, and imines.
 * Names of chalcogen analogues corresponding to aldehydes with retained names are all systematically
 * formed.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.6.3', [
  { preferredPrefix: 'sulfanylidene' },
  { preferredPrefix: 'selanylidene' },
  { preferredPrefix: 'tellanylidene' },
  { preferredPrefix: 'methanethioyl' },
  { preferredPrefix: 'methaneselenoyl' },
  { preferredPrefix: 'methanetelluroyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66630a.gif', pin: 'ethanethial', otherNames: ['thioacetaldehyde'] },
  { formula: 'C6H5-CHS', pin: 'benzenecarbothialdehyde', otherNames: ['thiobenzaldehyde'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66630b.gif', pin: 'hexaneselenal' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66630c.gif', pin: 'pentanedithial' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66630d.gif', pin: '4-(methanethioyl)benzoic acid', otherNames: ['4-(thioformyl)benzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66630e.gif', pin: '4-(methaneselenoyl)cyclohexane-1-carboxylic acid', otherNames: ['4-(selenoformyl)cyclohexane-1-carboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66630f.gif', pin: '4-sulfanylidenecyclohexane-1-carboselenaldehyde', otherNames: ['4-thioxocyclohexane-1-carboselenaldehyde'] },
]);
