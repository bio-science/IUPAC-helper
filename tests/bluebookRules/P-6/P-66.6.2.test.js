/**
 * P-66.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Aldehydes from di- and polycarbonic acids
 * Aldehydes from di- and polycarbonic acids are named on the basis of the higher compound class.
 * Multiplicative names based on formaldehyde can be used (see P-15.3.2.1).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 909, P-66.6.2, example 1. [corrected 26 January 2022]
 *     Delete oxydiformaldehyde
 *   Page 909, P-66.6.2, example 2. [modified 26 January 2022]
 *     Delete [carbonylbis(oxy)diformaldehyde]
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.6.2', [
  { formula: 'O=CH-O-CH=O', pin: 'formic anhydride' },
  { formula: 'O=CH-O-CO-O-CH=O', pin: 'carbonic diformic dianhydride', otherNames: ['bis(oxomethyl) carbonate'] },
]);
