/**
 * P-16.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The numerical prefixes ‘bi’, ‘ter’, ‘quater’, etc. are used mainly in naming ring assemblies (see
 * P-28).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.4.1', [
  { pin: '1,1′-biphenyl' },
  { pin: '1²,2²:2⁶,3²:3⁶,4²-quaterpyridine' },
]);
