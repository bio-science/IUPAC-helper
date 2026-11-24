/**
 * P-74.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Dipolar substituent groups
 * Names of dipolar substituent groups are formed by using prefixes for naming ions as the substituent
 * group and designating the free valences by the suffixes ‘yl’, ‘ylidene’ or ‘ylidyne’.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1121, P-74.2.3, example 1. [modified 27 March 2019]
 *     For 2-{4-[oxido(diphenyl)phosphaniumyl]phenyl}propane-1,3-diyl (PIN)
 *     read 2-{4-[oxidodi(phenyl)phosphaniumyl]phenyl}propane-1,3-diyl (PIN)
 *     for 2-{4-[oxido(diphenyl)phosphoniumyl]phenyl}propane-1,3-diyl
 *     read 2-{4-[oxidodi(phenyl)phosphoniumyl]phenyl}propane-1,3-diyl
 *     replace the structure with:
 *   Page 1121, P-74.2.3, example 2. [corrected 26 September 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74230a.gif', pin: '2-{4-[oxidodi(phenyl)phosphaniumyl]phenyl}propane-1,3-diyl', otherNames: ['2-{4-[oxidodi(phenyl)phosphoniumyl]phenyl}propane-1,3-diyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74230b.gif', pin: '2-{4-[2-(oxidoazaniumylidyne)ethyl]phenyl}propane-1,3-diyl', otherNames: ['2-{4-[2-(oxidoammoniumylidyne)ethyl]phenyl}propane-1,3-diyl'] },
]);
