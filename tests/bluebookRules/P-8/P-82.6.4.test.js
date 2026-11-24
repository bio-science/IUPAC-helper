/**
 * P-82.6.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Italicized nuclide symbols and/or italic capital letters are used to distinguish between different
 * nuclides of the same element.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1144, P-82.6.4, example 6. [corrected 3 April 2019]
 *     For (¹⁸O,O-²H)acetic acid
 *     read (O-²H,¹⁸O)acetic acid (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.6.4', [
  { formula: 'CH3-CH2-CO-¹⁸O-CH2-CH3', pin: '¹⁸O-ethyl propan(¹⁸O1)oate' },
  { formula: 'CH3-CH2-C¹⁸O-O-CH2-CH3', pin: 'O-ethyl propan(¹⁸O1)oate' },
  { formula: 'CH3-O-CO-¹⁸O-CH2-CH3', pin: '¹⁸O-ethyl O-methyl (¹⁸O1)carbonate' },
  { formula: 'CH3-CH2-O-C¹⁸O-¹⁸O-CH3', pin: 'O-ethyl ¹⁸O-methyl (¹⁸O2)carbonate' },
]);
