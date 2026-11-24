/**
 * P-59.2.1.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If the number of occurrences of the principal group is the same in two or more nomenclaturally
 * significant parts of the compound, preferred IUPAC names are formed by choosing the ring or ring
 * system as parent hydride for nomenclature.
 * In general nomenclature, a chain may be chosen as the parent hydride, depending on the importance
 * given to a specific portion (Rule P-44.1.2.2), leading to the name:
 * 7-(3-formylcyclohexyl)heptanal”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-59.2.1.7', [
  { pin: '3-(7-oxoheptyl)cyclohexane-1-carbaldehyde' },
]);
