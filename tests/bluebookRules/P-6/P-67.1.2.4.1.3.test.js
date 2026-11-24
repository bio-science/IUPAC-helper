/**
 * P-67.1.2.4.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specific use of the prefix ‘cyanato’ and the infix ‘cyanatido’
 * When attached to the central atom of a mononuclear noncarbon oxoacid, the group –OCN creates an
 * anhydride linkage (see P-67.1.3.3). In order to respect the seniority order classes, this group is
 * used, therefore, in functional replacement nomenclature to name acids; acids are senior to
 * anhydrides. For the prefixes ‘cyanato’, ‘thiocyanato’, ‘selenocyanato’ and ‘tellurocyanato’, see
 * P-65.2.2.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 925, P-67.1.2.4.1.3, example 1. [corrected 25 August 2016, modified 10 October 2018]
 *     For methylphophonocyanatidic acid (PIN)
 *     read methylphosphonocyanatidic acid (PIN)
 *     for CH3-P(OCN)OH
 *     read CH3-P(O)(OCN)OH
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.2.4.1.3', [
  { formula: 'CH3-P(O)(OCN)OH', pin: 'methylphosphonocyanatidic acid' },
  { formula: 'P(O)(OCN)2OH', pin: 'phosphorodicyanatidic acid' },
  { formula: 'Si(OCN)(OH)3', pin: 'cyanatosilicic acid' },
]);
