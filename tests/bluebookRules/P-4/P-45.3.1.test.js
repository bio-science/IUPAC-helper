/**
 * P-45.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The preferred IUPAC name is based on the senior parent structure that has the maximum number of
 * substituent group(s) with the higher bonding number cited as prefixes and directly connected to the
 * parent structure.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 528, P-45.3.1, line 2/3. [corrected 3 January 2020]
 *     For ...cited as prefixes.
 *     read ...cited as prefixes and directly connected to the parent structure.
 *   Page 528, P-45.3.1, example 2. [modified 23 December 2020]
 *     For 4-(2λ⁵-diphosphan-1-yl)-2-[2-(diphosphan-1-yl)ethyl]butanenitrile (PIN)
 *     read 4-(2λ⁵-diphosphan-1-yl)-2-(2-diphosphanylethyl)butanenitrile (PIN)
 *     for [not 4-(diphosphan-1-yl)-2-[2-(2λ⁵-diphosphan-1-yl)ethyl]butanenitrile;
 *     read [not 4-diphosphanyl-2-[2-(2λ⁵-diphosphan-1-yl)ethyl]butanenitrile;
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-45.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450301a.gif', pin: '3-(λ⁵-phosphanyl)-2-(phosphanylmethyl)propanoic acid', notNames: ['3-phosphanyl-2-(λ⁵-phosphanylmethyl)propanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450301b.gif', pin: '4-(2λ⁵-diphosphan-1-yl)-2-(2-diphosphanylethyl)butanenitrile', notNames: ['4-diphosphanyl-2-[2-(2λ⁵-diphosphan-1-yl)ethyl]butanenitrile'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450301c.gif', pin: '3-(λ⁶-sulfanyl)-2-(λ⁴-sulfanylmethyl)propanoic acid', notNames: ['3-(λ⁴-sulfanyl)-2-(λ⁶-sulfanylmethyl)propanoic acid'] },
]);
