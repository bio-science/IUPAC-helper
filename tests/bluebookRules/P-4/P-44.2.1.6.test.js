/**
 * P-44.2.1.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring or ring system has the greater number of skeletal atoms [criterion (e) in
 * P-44.2.1].
 * Note: Because of the hierarchical nature of these criteria, this criterion regarding the number of
 * skeletal atoms supersedes P-44.2.2.2, which prefers a fused ring to a bridged fused ring.
 * Note: Because of the hierarchical nature of these criteria, this criterion regarding the number of
 * skeletal atoms supersedes P-44.2.2.2, which prefers a fused ring to a bridged fused ring.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.1.6', [
  { pin: 'quinoline' },
  { pin: '1H-indole' },
  { pin: 'bicyclo[6.2.1]undecane' },
  { pin: 'naphthalene' },
  { pin: 'biphenylene' },
  { pin: '1,4-methanonaphthalene' },
]);
