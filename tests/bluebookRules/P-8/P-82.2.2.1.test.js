/**
 * P-82.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Different isotopic modifications on otherwise identical substituents
 * When two substituent groups are isotopically modified in different ways so that they cannot be
 * combined together using multiplicative terns such as ‘di-’, ‘bis-’, etc., they are cited separately.
 * The isotopically modified substituent is preferred alphabetically to the unmodified substituent.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1134, P-82.2.2.1, example 1. [corrected 7 November 2018]
 *     For N-[(7-¹³¹I)iodo-6-iodo-9H-fluoren-2-yl]acetamide (PIN)
 *     read N-[7-(¹³¹I)iodo-6-iodo-9H-fluoren-2-yl]acetamide (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.2.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82221a.gif', pin: 'N-[7-(¹³¹I)iodo-6-iodo-9H-fluoren-2-yl]acetamide', otherNames: ['{not N-[6,7-(7-¹³¹I)diiodo-9H-fluoren-2-yl]acetamide}'] },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82221b.gif', pin: '2-(¹³C)methyl-3-methylpyridine', notNames: ['2,3-(2-¹³C)dimethylpyridine'] },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82221c.gif', pin: '2-(2,2-²H2)ethyl-3-ethylhexan-1-ol' },
]);
