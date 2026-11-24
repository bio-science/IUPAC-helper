/**
 * P-102.5.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The configuration of >CH-OH groups of the sugar is designated by the configurational prefix(es)
 * listed in Table 10.2, such as ‘glycero’, ‘gluco’, ‘manno’, etc. Each name is qualified by a ‘D’ or
 * ‘L’ stereodescriptor, as defined in P-102.3.2.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.1.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102511a.gif', name: 'D-manno-hexose' },
]);
