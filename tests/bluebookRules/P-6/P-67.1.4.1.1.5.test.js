/**
 * P-67.1.4.1.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names for preferred or preselected prefixes of acyl groups substituted by hydroxy groups or their
 * chalcogen and peroxy analogues.
 * Concatenation is the recommended method to reintroduce groups and their chalcogen analogues in
 * substituent groups or groups that are not treated as infixes in functional replacement nomenclature,
 * …
 * This method is not recommended to generate any of the prefixes in P-67.1.4.1.1.1 above.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.4.1.1.5', [
  { formula: '–NH(O)(OH)', preselectedPrefix: 'hydroxyazonoyl' },
  { formula: '–P(Se)(OCH3)2', preferredPrefix: 'dimethoxyphosphoroselenoyl' },
  { formula: '–P(O)(OH)(SH)', preselectedPrefix: 'hydroxy(sulfanyl)phosphoryl' },
  { formula: '–P(O)(SH)2', preselectedPrefix: 'bis(sulfanyl)phosphoryl' },
  { formula: '–PH(O)(SeH)', preselectedPrefix: 'selanylphosphonoyl' },
  { formula: '–PH(S)(SH)', preselectedPrefix: 'sulfanylphosphonothioyl' },
  { formula: 'CH3-P(O)(OH)–', preferredPrefix: 'hydroxy(methylphosphonoyl)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67141a.gif', pin: '4,4′-(hydroxyphosphoryl)dibenzoic acid' },
]);
