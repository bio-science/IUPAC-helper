/**
 * P-59.2.1.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If the principal group occurs both in a chain and in a cyclic system, the parent hydride for
 * nomenclature is the portion in which the principal group occurs in the greater number; if the number
 * of occurrences of the principal group is the same in two or more portions, the ring or ring system
 * is chosen as parent hydride for nomenclature.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-59.2.1.6', [
  { pin: '1-(4-hydroxycyclohexyl)hexane-1,6-diol' },
  { pin: '4-(2-oxobutyl)cyclopentane-1,2-dione' },
]);
