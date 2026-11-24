/**
 * P-51.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature is preferred to functional class nomenclature, except for the classes
 * described in P-51.2 for which no substitutive names are prescribed.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 553, P-51.1.1, example. [corrected 3 June 2020]
 *     For 1,2-di(propan-2-ylidene)hydrazine (PIN)
 *     read di(propan-2-ylidene)hydrazine (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.1.1', [
  { formula: '(CH3)2C=N-N=C(CH3)2', pin: 'di(propan-2-ylidene)hydrazine', otherNames: ['acetone azine'] },
]);
