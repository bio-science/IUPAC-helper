/**
 * P-15.1.7.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Alkenes are acyclic branched or unbranched hydrocarbons having one double bond. When one double
 * bond is present, an unbranched alkene is named by changing the ending ‘ane’ in the name of the
 * alkane having the same number of carbon atoms to the ending ‘ene’ (see P-31.1). The double bond is
 * assigned the lowest locant possible, which is placed immediately in front of the ending ‘ene’ (see
 * P-14.3.2)”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.1.7.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1501h.gif', pin: 'but-1-ene' },
]);
