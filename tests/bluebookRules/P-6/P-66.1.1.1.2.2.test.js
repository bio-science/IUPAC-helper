/**
 * P-66.1.1.1.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The traditional name ‘formamide’ is retained for HCO-NH2 and is the preferred IUPAC name.
 * Substitution is permitted on the –NH2 group. Substitution of the aldehydic hydrogen is subject to
 * limitations (see P-65.1.8).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.1.2.2', [
  { formula: 'HCO-NH2', pin: 'formamide' },
  { formula: 'Cl-CO-NH2', pin: 'carbonochloridic amide', notNames: ['1-chloroformamide'] },
]);
