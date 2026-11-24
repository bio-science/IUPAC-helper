/**
 * P-62.2.4.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Two or more ‘amine’ groups attached to the same parent hydride are indicated by an appropriate
 * multiplying numerical prefix ‘di’, ‘tri’, ‘tetra’, etc. The terminal letter ‘a’ of a numerical
 * prefix is elided before the suffix amine, i. e., ‘tetramine’, not ‘tetraamine’. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.2.4.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204d.gif', pin: 'ethane-1,2-diamine', otherNames: ['ethylenediamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204f.gif', pin: 'N¹-ethyl-N³-methylpropane-1,3-diamine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204g.gif', pin: 'N³-ethyl-N′³-methylhexane-3,3-diamine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204h.gif', pin: 'N³-ethyl-N¹,N′³-dimethylhexane-1,3,3,6-tetramine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204i.gif', pin: 'N⁴,2-dimethylpentane-2,4-diamine' },
]);
