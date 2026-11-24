/**
 * P-65.6.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Multiplicative functional class names for esters
 * In functional class nomenclature for esters the multiplicative operation (P-13.6.2) is used to name
 * assemblies of identical parent anionic components linked by a di- or multivalent ‘hydroxylic’
 * component.
 * A change occurs in the multiplicative operation applied to esters from previous recommendations. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 805, P-65.6.3.2.2, example 1 on this page. [corrected 11 December 2023]
 *     For 1,4-phenylene bis(methyl propanedioate)
 *     read 1,4-phenylene di(methyl propanedioate)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603c.gif', pin: 'propane-1,2,3-triyl triacetate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603d.gif', pin: 'dimethyl 1,4-phenylene dipropanedioate', otherNames: ['1,4-phenylene di(methyl propanedioate)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603e.gif', pin: 'ethyl methyl 1,4-phenylene dipropanedioate' },
]);
