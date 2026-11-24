/**
 * P-74.2.2.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl carbenes have the generic structure acyl-C²•–R. In organic chemistry, an unspecified acyl
 * carbene is generally a carbonyl carbene and may be named by using the longest carbon chain,
 * according to the principles of substitutive nomenclature for radicals (see P-71.2), priority being
 * given to the radical to be cited as the suffix”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.2.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74223a.gif', pin: '3-oxopentan-2-ylidene' },
]);
