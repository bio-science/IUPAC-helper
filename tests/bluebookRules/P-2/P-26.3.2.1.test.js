/**
 * P-26.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Identical attachment locant sets for multiple identical amplificants are cited only once in a name;
 * they follow the set of superatom locants corresponding to the identical amplificants.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.3.2.1', [
  { pin: '1,4(1,4)-dibenzenacyclohexaphane', notNames: ['1(1,4),4(1,4)-dibenzenacyclohexaphane'] },
]);
