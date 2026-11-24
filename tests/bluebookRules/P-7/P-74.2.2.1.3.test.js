/**
 * P-74.2.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Azomethine ylides have the following delocalized general structure:
 * Method (2) in P-74.2.2.1 gives preferred IUPAC names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1116, P-74.2.2.1.3, example. [corrected 17 June 2020]
 *     For 2-[methyl(propan-2-ylidene)azaniumyl]propan-2-ide (PIN)
 *     read 2-(N-methylpropan-2-iminiumyl)propan-2-ide (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.2.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74221c.gif', pin: '2-(N-methylpropan-2-iminiumyl)propan-2-ide', otherNames: ['2-[methyl(propan-2-ylidene)ammoniumyl]propan-2-ide'] },
]);
