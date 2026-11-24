/**
 * P-16.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Full stops
 * Full stops are used to separate numbers that denote lengths of bridges in polyalicyclic names
 * constructed according to the von Baeyer system (see P-23.2.5.1) and of chain lengths between spiro
 * atoms in von Baeyer spiro names (see P-24.2.1).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.2.2', [
  { pin: 'bicyclo[3.2.1]octane' },
  { pin: '6-oxaspiro[4.5]decane' },
]);
