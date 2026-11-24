/**
 * P-51.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Multiplicative nomenclature (P-15.3, P-51.3), as a subset of substitutive nomenclature, is
 * preferred to simple substitutive nomenclature when the criteria for its use are met; it allows
 * multiple occurrences of the principal characteristic group or compound class to be treated
 * together.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 554, p-51.1.5, example. [corrected 3 June 2020]
 *     For 2-[2-(carboxymethoxy)ethoxy]acetic acid (substitutive name)
 *     read [2-(carboxymethoxy)ethoxy]acetic acid (substitutive name)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.1.5', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510105a.gif', pin: '2,2′-[ethane-1,2-diylbis(oxy)]diacetic acid' },
]);
