/**
 * P-74.2.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nitrogen ylides
 * Nitrogen ylides have the general structure R3N⁺–C⁻R2.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1112, P-74.2.1.1.1, example. [corrected 17 June 2020]
 *     For 2-(trimethylazaniumyl)propan-2-ide (PIN)
 *     read 2-(N,N-dimethylmethanaminiumyl)propan-2-ide (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.1.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74211a.gif', pin: '2-(N,N-dimethylmethanaminiumyl)propan-2-ide', otherNames: ['2-(trimethylammoniumyl)propan-2-ide'] },
]);
