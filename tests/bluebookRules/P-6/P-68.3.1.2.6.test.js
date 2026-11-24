/**
 * P-68.3.1.2.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydrazinecarbohydrazide and derivatives
 * The preferred IUPAC name for the compound H2N-NH-CO-NH-NH2 is ‘hydrazinecarbohydrazide’. The name
 * ‘carbonic dihydrazide’ is also recommended, but only for general nomenclature; the names
 * ‘carbonohydrazide’, ‘carbohydrazide’, and ‘carbazide’ are not recommended. Systematic numbering is
 * applied to the systematic name; a special numbering is assigned to carbonic dihydrazide, as follows:
 * As prefixes, the groups –NH-NH-CO-NH-NH2 and =N-NH-CO-NH-NH2 are called ‘hydrazinecarbohydrazido’
 * and ‘(hydrazinecarbonyl)hydrazinylidene’, respectively; these names are preferred prefixes.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1004, P-68.3.1.2.6, line 1. [corrected 28 October 2016]
 *     For P-68.3.1.2.6.1 The preferred...
 *     read The preferred...
 *   Page 1004, P-68.3.1.2.6, example 1. [corrected 28 October 2016]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.2.6', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312y.gif', pin: 'hydrazinecarbohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312z.gif', name: 'carbonic dihydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312aa.gif', pin: 'N′-benzylidene-2-ethylidene-1-methylhydrazine-1-carbohydrazide', otherNames: ['N′′′-benzylidene-N′-ethylidene-N-methylcarbonic dihydrazide'], notNames: ['N′-benzylidene-N′′′-ethylidene-N′′-methylcarbonic dihydrazide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312ab.gif', pin: '3-(hydrazinecarbohydrazido)propanoic acid', otherNames: ['3-[2-(hydrazinecarbonyl)hydrazin-1-yl]propanoic acid'] },
]);
