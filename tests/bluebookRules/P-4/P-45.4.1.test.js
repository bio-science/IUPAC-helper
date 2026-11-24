/**
 * P-45.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The preferred IUPAC name is based on the senior parent structure that has the lowest locant(s) for
 * isotopically modified substituent groups.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 529, P-45.4.1. [corrected 3 January 2020]
 *     Delete as it is a restatement of P-44.4.1.11.1 and inappropriate in P-45.4.
 *   Page 529, P-45.4.1 replacement structure. [modified 3 June 2020]
 *     For 2-bromo-1-{[2-(⁸¹Br)bromopentyl]oxy}pentane
 *     read 2-bromo-1-{[2-(⁸¹Br)bromopentyl]oxy}pentane (PIN)
 *     for [not 2-(⁸¹)bromo-1-[(2-bromopentyl)oxy]pentane]
 *     read [not 2-(⁸¹Br)bromo-1-[(2-bromopentyl)oxy]pentane]
 *   Page 530, P-45.4.1 (formerly P-45.4.4), example. [corrected 3 January 2020]
 *     Delete as decided by P-45.2.2.
 *   Page 530, P-45.4.1 (formerly P-45.4.4) new example. [corrected 3 January 2020]
 *     Add
 *     2-bromo-1-{[2-(⁸¹Br)bromopentyl]oxy}pentane (PIN)
 *     [not 2-(⁸¹Br)bromo-1-[(2-bromopentyl)oxy]pentane]
 *     The isotopically modified substituent for the PIN is attached at ‘1’ which is lower than ‘2’.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-45.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450401a.gif', pin: '2-bromo-1-{[2-(⁸¹Br)bromopentyl]oxy}pentane', notNames: ['2-(⁸¹Br)bromo-1-[(2-bromopentyl)oxy]pentane'] },
]);
