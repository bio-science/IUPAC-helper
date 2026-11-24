/**
 * P-45.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The preferred IUPAC name has the lower locant set for substituent group(s) with the higher bonding
 * number(s) cited as prefixes.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 529, P-45.3.2, example 1. [corrected 3 January 2020]
 *     Delete as decided by P-45.2.2.
 *   Page 529, P-45.3.2, example 2 and explanation. [corrected 3 January 2020]
 *     Delete as decided by P-45.2.3.
 *   Page 529, P-45.3.2, new example. [corrected 3 June 2020]
 *     Add
 *     5-(1λ⁵-diphospan-1-yl)-2-[3-(2λ⁵-diphospan-1-yl)propyl]pentanoic acid (PIN)
 *     [not 5-(2λ⁵-diphospan-1-yl)-2-[3-(1λ⁵-diphospan-1-yl)propyl]pentanoic acid]
 *     The locant ‘1λ⁵’ for the nonstandard bonding number directly bonded to the parent structure is
 *     lower than ‘2λ⁵’.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-45.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450302a.gif', pin: '5-(1λ⁵-diphosphan-1-yl)-2-[3-(2λ⁵-diphosphan-1-yl)propyl]pentanoic acid', notNames: ['5-(2λ⁵-diphosphan-1-yl)-2-[3-(1λ⁵-diphosphan-1-yl)propyl]pentanoic acid'] },
]);
