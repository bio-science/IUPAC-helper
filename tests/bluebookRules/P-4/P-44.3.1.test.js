/**
 * P-44.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal chain contains the greater number of acyclic heteroatoms of any kind [criterion (a)
 * in P-44.3].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.3.1', [
  { pin: '2,5,8,11,14-pentaoxahexadecane' },
  { pin: '3,6,9,12-tetraoxaheptadecane' },
  { pin: '2,5,8,11,14-pentasilapentadecane' },
  { pin: '3,12-dioxa-6,9-dithiaheptadecane' },
]);
