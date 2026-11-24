/**
 * P-45.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The preferred IUPAC name is based on the senior parent structure that has the lowest locant(s) for
 * nuclides of higher atomic number.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 530, P-45.4.2. [corrected 3 January 2020]
 *     Delete as it is a restatement of P-44.4.1.11.2 and inappropriate in P-45.4.
 *   Page 531, P-45.4.2 (formerly P-45.4.5), example. [corrected 3 January 2020]
 *     Delete as decided by P-45.2.2.
 *   Page 531, P-45.4.2 (formerly P-45.4.5), new example. [modified 30 March 2022]
 *     For 2-[(¹³C)methyloxy]-N-{2-[methyl(¹⁸O)oxy]ethyl}ethan-1-amine (PIN)
 *     read 2-(¹³C)methoxy-N-[2-(¹⁸O)methoxyethyl]ethan-1-amine (PIN)
 *     for [not 2-[methyl(¹⁸O)oxy]-N-{2-[(¹³C)methyloxy]ethyl}ethan-1-amine]
 *     read [not 2-(¹⁸O)methoxy-N-[2-(¹³C)methoxyethyl]ethan-1-amine]
 *     ¹⁸O > ¹³C; the ¹⁸O isotopically modified substituent for the PIN is attached at ‘N’ which is
 *     lower than ‘2’.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-45.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450402a.gif', pin: '2-(¹³C)methoxy-N-[2-(¹⁸O)methoxyethyl]ethan-1-amine', notNames: ['2-(¹⁸O)methoxy-N-[2-(¹³C)methoxyethyl]ethan-1-amine'] },
]);
