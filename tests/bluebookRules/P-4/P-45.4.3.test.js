/**
 * P-45.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The preferred IUPAC name is based on the senior parent structure that has the lowest locant(s) for
 * nuclides of higher mass number.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 530, P-45.4.3. [corrected 3 January 2020]
 *     Delete as it is a restatement of P-44.4.1.11.3 and inappropriate in P-45.4.
 *   Page 531, P-45.4.3 (formerly P-45.4.6), example. [corrected 3 January 2020]
 *     Delete as decided by P-45.2.2.
 *   Page 531, P-45.4.3 (formerly P-45.4.6), new example. [modified 30 March 2022]
 *     For 4-([2-¹³C]ethyl)-2-[2-([2-¹⁴C]ethyl)pentyl]heptan-1-ol (PIN)
 *     read 4-[2-¹³C]ethyl-2-(2-[2-¹⁴C]ethylpentyl)heptan-1-ol (PIN)
 *     for [not 4-([2-¹⁴C]ethyl)-2-[2-([2-¹³C]ethyl)pentyl]heptan-1-ol
 *     read [not 4-[2-¹⁴C]ethyl-2-(2-[2-¹³C]ethylpentyl)heptan-1-ol
 *     ¹⁴C > ¹³C; the ¹⁴C isotopically modified substituent for the PIN is attached at ‘2’ which is
 *     lower than ‘4’
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-45.4.3', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450403a.gif', pin: '4-[2-¹³C]ethyl-2-(2-[2-¹⁴C]ethylpentyl)heptan-1-ol', notNames: ['4-[2-¹⁴C]ethyl-2-(2-[2-¹³C]ethylpentyl)heptan-1-ol ¹⁴C > ¹³C'] },
]);
