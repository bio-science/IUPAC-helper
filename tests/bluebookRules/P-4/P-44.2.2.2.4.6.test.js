/**
 * P-44.2.2.2.4.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior bridged fused ring system has the lower locant(s) for heteroatoms in bridges, without
 * regard to kind [criterion (f) in P-44.2.2.2.4].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.4.6', [
  { pin: '5,1-(epoxyethano)octalene' },
  { pin: '1,5-(methanooxymethano)octalene' },
]);
