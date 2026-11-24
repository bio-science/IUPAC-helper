/**
 * P-61.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyclic hydrocarbons
 * Names of substituted acyclic hydrocarbons are formed substitutively by selecting the principal chain
 * in accordance with rule P-44. This rule has been modified from previous rules; seniority is now
 * given to the length of the chain rather than to unsaturation (see P-44.3).
 * In a change from previous recomendations, the order of seniority between unsaturation and length of
 * chain given in earlier recommendations is reversed. …
 * The name ‘isoprene’ is retained, but no substitution is allowed. (see P-31.1.2.1). The names
 * ‘isobutane’, ‘isopentane’ and ‘neopentane’ are no longer recommended.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610201a.gif', pin: '2-methylpropane', notNames: ['isobutane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610201b.gif', pin: '2-methylbutane', notNames: ['isopentane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610201c.gif', pin: '2,2-dimethylpropane', notNames: ['neopentane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610201d.gif', pin: '3-methylidenehexane', notNames: ['2-ethylpent-1-ene'] },
]);
