/**
 * P-15.1.8.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution rules for Type 3 retained names
 * No substitution of any kind is allowed for retained names of parent hydrides and functional parent
 * compounds of type 3. However, functionalization of characteristic groups, such as the formation of
 * esters, anhydrides, and salts is allowed”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 65, P-15.1.8.3, example 2. [corrected 10 October 2018]
 *     Replace the structure with:
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.1.8.3', [
  { formula: 'Cl-CH2-CH2-COOH', pin: '3-chloropropanoic acid', notNames: ['3-chloropropionic acid'] },
  { formula: 'CH3-CH2-CO-O-CH2-CH3', pin: 'ethyl propanoate', otherNames: ['ethyl propionate'] },
]);
