/**
 * P-44.2.2.2.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior bridged fused ring system is the bridged ring system with the fewer heteroatoms in the
 * fused ring system before bridging [criterion (c) in P-44.2.2.2.4].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.4.3', [
  { pin: '1,4:5,8-diepoxyanthracene' },
  { pin: '1,4:6,9-dimethanooxanthrene' },
]);
