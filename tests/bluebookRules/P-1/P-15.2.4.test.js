/**
 * P-15.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyfunctional compounds
 * Functional class names for polyfunctional compounds are not recommended. Substitutive nomenclature
 * is preferred.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.2.4', [
  { formula: 'HO-CH2-CH2-CO-CH3', pin: '4-hydroxybutan-2-one', otherNames: ['2-hydroxyethyl methyl ketone'] },
]);
