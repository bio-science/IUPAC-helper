/**
 * P-59.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Seniority of ‘ene’ and ‘yne’ endings and hydro prefixes over detachable prefixes.
 * If there is a choice, low locants are assigned first to ‘ene’ and ‘yne’ endings and ‘hydro/dehydro’
 * prefixes, then to detachable alphabetized prefixes.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-59.2.4', [
  { pin: '1,3,3-trimethylcyclohex-1-ene' },
  { pin: '1,1,3-trimethylcyclohexane' },
  { pin: '5,6,7,8-tetrachloro-1,2,3,4-hydronaphthalene' },
  { pin: '1,2,3,4-tetrachloronaphthalene' },
]);
