/**
 * P-44.2.2.2.4.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior bridged fused ring system has the lower set of locants for bridge attachments [criterion
 * (e) in P-44.2.2.2.4].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.4.5', [
  { pin: '1,3-methanonaphthalene' },
  { pin: '1,4-methanonaphthalene' },
]);
