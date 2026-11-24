/**
 * P-44.2.2.2.4.8
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior bridged fused ring system has the fewer composite bridges [criterion (h) in
 * P-44.2.2.2.4].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.4.8', [
  { pin: '1,4-epoxy-5,8-ethanonaphthalene' },
  { pin: '1,4-(epoxymethano)-5,8-methanonaphthalene' },
]);
