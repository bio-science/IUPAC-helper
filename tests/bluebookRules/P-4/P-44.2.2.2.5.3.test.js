/**
 * P-44.2.2.2.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior bridged nonfused ring system has the lower set of bridge attachment locants (superscript
 * locants) at first point of difference when compared term by term in their order of citation in the
 * name [criterion (c) in P-44.2.2.2.5].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.5.3', [
  { pin: 'tetracyclo[5.5.2.2²,⁵.1⁸,¹²]heptadecane' },
  { pin: 'tetracyclo[5.5.2.2²,⁶.1⁸,¹²]heptadecane' },
]);
