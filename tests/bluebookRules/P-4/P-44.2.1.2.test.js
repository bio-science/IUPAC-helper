/**
 * P-44.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring or ring system is a heterocycle [criterion (a) in P-44.2.1]. Example (the symbol >
 * means ‘is senior to’):”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.1.2', [
  { pin: 'quinoline' },
  { pin: 'anthracene' },
]);
