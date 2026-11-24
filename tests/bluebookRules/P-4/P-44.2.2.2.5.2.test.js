/**
 * P-44.2.2.2.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior bridged nonfused ring system has the lower set of bridge attachment locants (superscript
 * locants) at the first point of difference when compared term by term in order of increasing
 * numerical value [criteria (b) in P-44.2.2.2.5].”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 478, P-44.2.2.2.5.2, example. [corrected 13 February 2019]
 *     For [the bridge attachment locant set ‘1,4’ is lower than ‘1,5’]
 *     read [the bridge attachment locant set ‘1,4’ is lower than ‘2,5’]
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.5.2', [
  { pin: 'tricyclo[5.2.1.1¹,⁴]undecane' },
  { pin: 'tricyclo[5.2.1.1²,⁵]undecane' },
]);
