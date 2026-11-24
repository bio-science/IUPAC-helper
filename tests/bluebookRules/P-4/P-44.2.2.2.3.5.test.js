/**
 * P-44.2.2.2.3.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior fused ring system has the senior ring system component according to P-25.8 when its
 * components are compared in order of decreasing seniority [criterion (e) in P-44.2.2.2.3].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.3.5', [
  { pin: 'naphtho[2,3-f]quinoline' },
  { pin: 'naphtho[2,3-f]isoquinoline' },
]);
