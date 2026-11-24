/**
 * P-69.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “ORGANOMETALLIC COMPOUNDS INVOLVING THE ELEMENTS OF GROUPS 13 THROUGH 16
 * Organometallic compounds involving the elements of Groups 13, 14, 15, and 16 are named
 * substitutively by prefixing the appropriate substituent names to the name of a parent hydride.
 * Principles, rules, and conventions to name them have been discussed in Section P-68.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1036, P-69.1, example 3. [corrected 5 June 2019]
 *     For bromodiethenylstibane (PIN)
 *     read bromodi(ethenyl)stibane (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-69.1', [
  { formula: 'Al(CH2-CH3)3', name: 'triethylalumane' },
  { formula: 'Pb(CH2-CH3)4', pin: 'tetraethylplumbane' },
  { formula: 'BrSb(CH=CH2)2', pin: 'bromodi(ethenyl)stibane' },
  { formula: 'HIn(CH3)2', name: 'dimethylindigane' },
]);
