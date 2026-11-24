/**
 * P-15.5.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Replacement in functional parent compounds
 * Functional replacement is used to modify carboxylic acids and oxoacids, by prefixes and suffixes
 * according to specific rules given in P-15.5.3.4.1 and P-15.5.3.4.2 below. It is also used to modify
 * two retained names expressing functional parent structures, urea and semicarbazone, as described in
 * P-15.5.3.4.3 below. Functional replacement is not used to replace oxygen atoms in ketones, alcohols,
 * or derivatives such as acetals and ketals, etc.; systematic names are recommended instead.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.5.3.4', [
  { formula: 'CH3-CS-CH3', pin: 'propane-2-thione', notNames: ['thioacetone'] },
  { formula: 'C6H5-SH', pin: 'benzenethiol', notNames: ['thiophenol'] },
]);
