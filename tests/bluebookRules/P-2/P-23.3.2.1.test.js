/**
 * P-23.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Low locants are assigned to the heteroatoms considered together as a set compared in increasing
 * numerical order. The preferred numbering is the lowest set at the first point of difference.”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.3.2.1', [
  { pin: '3,6,8-trioxabicyclo[3.2.2]nonane' },
]);
