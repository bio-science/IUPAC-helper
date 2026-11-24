/**
 * P-65.2.3.1.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compound substituent groups may have to be used to name chalcogen analogues when the location of
 * chalcogen atoms is not known.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 787, P-65.2.3.1.2.3, example 2. [modified 31 October 2018]
 *     For [(thiocarboxy)oxy]formothioic O-acid (PIN)
 *     read [(thiocarboxy)oxy]methanethioic O-acid (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.3.1.2.3', [
  { pin: 'H{S/O}C-O-CO-SH [(thiocarboxy)oxy]methanethioic S-acid' },
  { pin: 'H{S/O}C-O-CS-OH [(thiocarboxy)oxy]methanethioic O-acid' },
]);
