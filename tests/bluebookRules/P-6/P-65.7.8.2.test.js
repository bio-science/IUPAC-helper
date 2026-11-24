/**
 * P-65.7.8.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When not symmetrically substituted, anhydrides of carboxylic acid or sulfonic acids, are named as
 * mixed anhydrides as discussed in P-65.7.2.”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.8.2', [
  { formula: 'Cl-CH2-CH2-CO-O-CO-CHCl-CH3', pin: '2-chloropropanoic 3-chloropropanoic anhydride' },
  { formula: 'Cl-CH2-CO-O-CS-CH2-Cl', pin: 'chloroacetic chloroethanethioic anhydride' },
]);
