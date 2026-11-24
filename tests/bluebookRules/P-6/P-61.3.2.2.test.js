/**
 * P-61.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In naming any compound, its class and its seniority must be determined in accordance with the
 * seniority of classes described in P-41. Halogen atoms linked to nitrogen atoms generate amides of
 * inorganic acids that are senior to halo compounds described in P-61.3.1. Similarly, acid halides or
 * esters of inorganic acids may be created when the halogen atoms are linked to phosphorus or
 * chalcogen atoms. Names must be based on the seniority of classes; …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 661, P-61.3.2.2, example 2. [corrected 7 November 2018]
 *     For chloro(methyl)phosphane]
 *     read chloro(methyl)phosphane
 *   Page 661, P-61.3.2.2, example 1. [corrected 21 April 2021]
 *     For N-methylhypochlorous amide (PIN; see P-67.1.2.6)
 *     read methylhypochlorous amide (PIN; see P-68.5.3)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.3.2.2', [
  { formula: 'CH3-NH-Cl', pin: 'methylhypochlorous amide', otherNames: ['N-chloromethanamine'] },
  { formula: 'CH3-PH-Cl', pin: 'methylphosphinous chloride', otherNames: ['chloro(methyl)phosphane'] },
  { formula: 'CH3-S-Cl', pin: 'methyl thiohypochlorite' },
]);
