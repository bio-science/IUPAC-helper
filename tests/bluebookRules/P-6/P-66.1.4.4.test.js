/**
 * P-66.1.4.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of substituent groups derived from chalcogen derivatives of amides In the presence of a
 * function having priority for citation as suffix, the amide function is expressed in two ways:
 * (1) by a prefix formed by changing the final letter ‘e’ in the name of the amide into ‘o’;
 * (2) by the appropriate prefixes, such as amino, in conjunction with sulfanylidene or thioxo, as well
 * as carbonothioyl (not thiocarbonyl) for –CS– or carbamothioyl (not thiocarbamoyl) for –CS-NH2.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.4.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66144a.gif', pin: '3-amino-3-sulfanylidenepropanoic acid', otherNames: ['3-amino-3-thioxopropanoic acid', 'carbamothioylacetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66144b.gif', pin: '4-(ethanethioamido)benzamide', otherNames: ['4-[(ethanethioyl)amino]benzamide', '4-(thioacetamido)benzamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66144c.gif', pin: '2-[amino(sulfanylidene)ethanethioyl]benzoic acid' },
]);
