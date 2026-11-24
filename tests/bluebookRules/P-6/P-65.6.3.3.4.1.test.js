/**
 * P-65.6.3.3.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyester names formed by using functional class multiplicative nomenclature
 * Symmetrical esters are named by including the organyl constituent in the multiplied anion component
 * name. When this condition is not fulfilled, in unsymmetrical esters, the organyl constituents are
 * cited at the beginning of the name, in alphanumerical order.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 812, P-65.6.3.3.4.1, example. [corrected 18 December 2023]
 *     For ethane-1,2-diyl bis(methyl butanedioate)
 *     read ethane-1,2-diyl di(methyl butanedioate) [cancelled 28 May 2024]
 *   Page 812, P-65.6.3.3.4.1, example. [corrected 28 May 2024]
 *     For ethane-1,2-diyl di(methyl butanedioate)
 *     read ethane-1,2-diyl bis(methyl butanedioate)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.3.4.1', [
  { formula: 'CH3-O-CO-CH2-CH2-CO-O-CH2-CH2-O-CO-CH2-CH2-CO-O-CH3', pin: 'dimethyl ethane-1,2-diyl dibutanedioate', otherNames: ['ethane-1,2-diyl bis(methyl butanedioate)'] },
]);
