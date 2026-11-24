/**
 * P-67.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution of mononuclear noncarbon oxoacids with hydrogen atoms attached to the central atom
 * (substitutable hydrogen)
 * Acids with hydrogen atoms attached to the central atom may be substituted by organyl groups and
 * preferred IUPAC names are formed in this manner.
 * Note: Another method has been suggested which would treat the acid as a suffix (like sulfonic acid)
 * leading to names such as benzenephosphonic acid. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.1.2', [
  { formula: 'C2H5-P(O)(OH)2', pin: 'ethylphosphonic acid', notNames: ['ethanephosphonic acid'] },
  { formula: '(C2H5)2P(O)(OH)', pin: 'diethylphosphinic acid', notNames: ['P-ethylethanephosphinic acid'] },
  { formula: '(C6H5)2As(OH)', pin: 'diphenylarsinous acid' },
  { formula: 'C6H5Sb(OH)2', pin: 'phenylstibonous acid' },
]);
