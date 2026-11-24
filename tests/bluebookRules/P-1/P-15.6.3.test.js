/**
 * P-15.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Analysis of conjunctive name construction”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.6.3', [
  { pin: '3-[4-(2-hydroxyethyl)phenyl]propan-1-ol', otherNames: ['4-(2-hydroxyethyl)benzenepropanol'] },
  { pin: '3-(7-oxoheptyl)benzaldehyde', otherNames: ['3-formylbenzeneheptanal'] },
]);
