/**
 * P-51.4.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Skeletal replacement (‘a’) nomenclature is used to derive preferred IUPAC names for
 * heteropolycyclic ring systems for which fusion nomenclature based on heterocyclic parent rings is
 * not applicable (see P-25.5.1).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 569, P-51.4.2.4, example. [modified 29 January 2020]
 *     Replace the structures with:
 *     for 3a¹-azaphenalene (PIN)
 *     read 1,3a¹,4 -triazaphenalene (PIN)
 *     for 9b-azaphenalene (PIN)
 *     read [not 1,4,9b-triazaphenalene; see P-25.3.3.3]
 *   Page 569, P-51.4.2.4, example replaced printed compound. [corrected 3 December 2025]
 *     For 1,3a¹,4-triazaphenylene (PIN)
 *     read 1,3a¹,4-triazaphenalene (PIN)
 *     For [not 1,4,9b-triazaphenylene; see P-25.3.3.3]
 *     read [not 1,4,9b-triazaphenalene; see P-25.3.3.3]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.4.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510402e.gif', pin: '1,3a¹,4-triazaphenalene', notNames: ['1,4,9b-triazaphenalene'] },
]);
