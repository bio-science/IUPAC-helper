/**
 * P-16.8.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For euphonic reasons, the letter ‘a’ is inserted between the root of the name for polyenes,
 * polyynes, and polyenynes, and the numerical multiplicative prefix ‘di’, ‘tri’, etc., preceding the
 * ending ‘ene’ or ‘yne’.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 124, P-16.8.2, example 1. [corrected 9 January 2019]
 *     For (not but-1,2-diene)
 *     read (not but-1,3-diene)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.8.2', [
  { pin: 'buta-1,3-diene', notNames: ['but-1,3-diene'] },
  { pin: 'hexa-1,3-dien-5-yne', notNames: ['hex-1,3-dien-5-yne'] },
]);
