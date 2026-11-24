/**
 * P-44.2.2.2.7.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring assembly is composed of rings containing any heteroatom [criterion (a) in
 * P-44.2.2.2.7].”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 488, P-44.2.2.2.7.1, line 2. [corrected 19 September 2018]
 *     For ... heterocycle [criterion (a) in P-44.2.2.2.7.
 *     read ... heteroatom [criterion (a) in P-44.2.2.2.7.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.7.1', [
  { pin: '2,2′-biphosphinine' },
  { pin: '1¹,2¹:2⁴,3¹-terphenyl', otherNames: ['1,1′:4′,1′′-terphenyl'] },
]);
