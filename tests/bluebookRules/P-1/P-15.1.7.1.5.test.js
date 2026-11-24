/**
 * P-15.1.7.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If two or more different substituent groups are present, they are cited in names in alphanumerical
 * order (see P-14.5). When two or more substituent groups occupy equivalent positions, the one to be
 * assigned the lower locant is that one cited first in the name.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.1.7.1.5', [
  { pin: '4-ethyl-2-methylhexane', notNames: ['3-ethyl-5-methylhexane'] },
  { pin: '3-ethyl-5-methylheptane', notNames: ['5-ethyl-3-methylheptane'] },
]);
