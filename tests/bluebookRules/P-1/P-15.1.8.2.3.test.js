/**
 * P-15.1.8.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution rules for Type 2c retained names
 * Type 2c retained names are functional parent compounds that are not included in Type 2b, for
 * example, hydroxylamine (see P-68.3.1.1.1), formic acid (see P-65.1.8), and anisole (see
 * P-34.1.1.4).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.1.8.2.3', [
  { formula: 'H2N-O-CH3', pin: 'O-methylhydroxylamine', notNames: ['methoxyamine (see P-68.3.1.1.1.2)'] },
  { formula: 'HS-CO-OH', pin: 'carbonothioic S-acid', notNames: ['sulfanylformic acid (see P-65.1.8.1)'] },
]);
