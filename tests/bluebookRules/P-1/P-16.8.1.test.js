/**
 * P-16.8.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For euphonic reasons, in functional replacement nomenclature the vowel ‘o’ is inserted between
 * consonants.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.8.1', [
  { pin: 'ethanesulfonodiimidic acid', notNames: ['ethanesulfondiimidic acid'] },
  { pin: 'phenylphosphononitridic acid', notNames: ['phenylphosphonnitridic acid'] },
]);
