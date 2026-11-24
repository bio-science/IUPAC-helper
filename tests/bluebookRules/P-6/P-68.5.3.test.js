/**
 * P-68.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Amides of halogen acids
 * The seniority order of classes (P-41) is applied to give preferred IUPAC names for amides of halogen
 * acids.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1035, P-68.5.3, example 1. [modified 21 April 2021]
 *     For N-methylbromic amide(PIN)
 *     read methylbromic amide (PIN) [add space before (PIN)]
 *   Page 1035, P-68.5.3, example 2. [corrected 21 April 2021]
 *     For N-ethylhypochlorous amide (PIN, see P-62.4)
 *     read ethylhypochlorous amide (PIN, see P-62.4)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.5.3', [
  { formula: 'CH3-NH-BrO2', pin: 'methylbromic amide', otherNames: ['N-bromylmethanamine'] },
  { formula: 'CH3-CH2-NH-Cl', pin: 'ethylhypochlorous amide', otherNames: ['N-chloroethanamine'] },
]);
