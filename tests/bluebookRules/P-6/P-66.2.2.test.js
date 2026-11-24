/**
 * P-66.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Prefixes derived from imides by removal of the hydrogen atom attached to the imide nitrogen atom
 * are named systematically as preferred prefixes. However, for general nomenclature they may be formed
 * from the name of the corresponding imide by changing the ending ‘imide’ to ‘imido’.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 870, P-66.2.2, example 1 on this page. [corrected 19 September 2018]
 *     For 7-(1,3-dioxo-1,3-dihydro-2H-isoindol-2-yl)naphthalen-1-carboxylic acid (PIN)
 *     read 7-(1,3-dioxo-1,3-dihydro-2H-isoindol-2-yl)naphthalene-1-carboxylic acid (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66220a.gif', preferredPrefix: '2,5-dioxopyrrolidin-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66220b.gif', pin: '7-(1,3-dioxo-1,3-dihydro-2H-isoindol-2-yl)naphthalene-1-carboxylic acid', otherNames: ['7-phthalimido-1-naphthoic acid'] },
]);
