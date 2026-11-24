/**
 * P-13.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In functional class nomenclature the multiplicative operation is used to name assemblies of
 * identical parent structures linked by a bi- or multivalent functional class name.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 22, P-13.6.2, example 2. [corrected 9 April 2025]
 *     For dimethyl butanedioylbis(oxy-2,1-phenylene) dibutanedioate (PIN)
 *     read dimethyl butanedioylbis[oxy(2,1-phenylene)] dibutanedioate (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1306e.gif', pin: 'dimethyl 1,4-phenylene dipropanedioate' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1306f.gif', pin: 'dimethyl butanedioylbis[oxy(2,1-phenylene)] dibutanedioate' },
]);
