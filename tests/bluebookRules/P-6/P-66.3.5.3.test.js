/**
 * P-66.3.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Corresponding substituent groups
 * When a group having priority for citation as a principal characteristic group is present,
 * the hydrazide group is named:
 * (1) as an acylhydrazinyl compound; the hydrazinyl group is numbered by the numerical locants 1 and
 * 2;
 * (2) by expressing the corresponding hydrazide substitutively as a prefix by replacing the final
 * letter ‘e’ in the name of the hydrazide by the letter ‘o’.
 * Method (2) generates preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66353a.gif', pin: '3-formohydrazidopropanoic acid', otherNames: ['3-(2-formylhydrazin-1-yl)propanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66353b.gif', pin: '4-{[(hydrazinecarbonyl)oxy]formohydrazido}butanoic acid', otherNames: ['4-(2-{[(hydrazinecarbonyl)oxy]carbonyl}hydrazin-1-yl)butanoic acid'] },
]);
