/**
 * P-66.6.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The following names are preferred IUPAC names, with substitution allowed for acetaldehyde and
 * benzaldehyde. Substitution rules for formaldehyde are the same as for formic acid (see P-65.1.8).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 908, P-66.6.1.2.1, example 4. [corrected 7 August 2019]
 *     Delete this entry
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.6.1.2.1', [
  { formula: 'HCHO', pin: 'formaldehyde', otherNames: ['methanal'] },
  { formula: 'CH3-CHO', pin: 'acetaldehyde', otherNames: ['ethanal'] },
  { formula: 'C6H5-CHO', pin: 'benzaldehyde', otherNames: ['benzenecarbaldehyde'] },
]);
