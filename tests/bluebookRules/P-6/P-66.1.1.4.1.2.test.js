/**
 * P-66.1.1.4.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Similarly, the group –CO-CO-NH2 is named using the prefixes ‘amino’ and ‘oxo’ as in method (1) in
 * P-66.1.1.4.1.1; by using the name ‘oxamoyl’ as in method (2) in P-66.1.1.4.1.1; and by using the
 * prefix ‘aminooxalyl’ as in method (3) in P-66.1.1.4.1.1.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.4.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114g.gif', pin: '4-amino-3,4-dioxobutanoic acid', otherNames: ['oxamoylacetic acid', '(aminooxalyl)acetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114h.gif', pin: '2-oxamoylpyridine-3-carboxylic acid', otherNames: ['2-(aminooxalyl)pyridine-3-carboxylic acid'] },
]);
