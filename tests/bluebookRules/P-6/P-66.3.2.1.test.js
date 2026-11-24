/**
 * P-66.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups of the type –CO-NH-NH2, –SO2-NH-NH2, etc., may be named in three ways except
 * when the –CO-NH-NH2 group is at the end of a carbon chain:
 * (1) as an acyl group derived from the corresponding acid, which gives the preferred prefix; or
 * (2) as the appropriate carbonohydrazidoyl acyl prefix; or
 * (3) by concatenation using the prefix hydrazinyl with carbonyl.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66321a.gif', pin: 'hydrazinecarboxylic acid', otherNames: ['carbonohydrazidic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66321b.gif', preferredPrefix: 'hydrazinecarbonyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66321c.gif', preselectedName: 'hydrazinesulfonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66321d.gif', name: 'hydrazinesulfonyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66321e.gif', preselectedName: 'hydrazinesulfinic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66321f.gif', name: 'hydrazinesulfinyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66321h.gif', pin: '3-(hydrazinesulfinyl)naphthalene-2-carboxylic acid', otherNames: ['3-(hydrazinylsulfinyl)naphthalene-2-carboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66321i.gif', pin: '2-(hydrazinecarbonyl)benzene-1-sulfonic acid', otherNames: ['2-carbonohydrazidoylbenzene-1-sulfonic acid'] },
]);
