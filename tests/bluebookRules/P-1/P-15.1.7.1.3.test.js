/**
 * P-15.1.7.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A saturated branched acyclic hydrocarbon is formed by substituting one or more substituent groups,
 * formed as described in P-15.1.7.1.2, into the longest chain present in the structure (substitutive
 * operation); it is named by prefixing the designations of the side chains, as formed in P-15.1.7.1.2,
 * to the name of the longest chain [see P-15.1.7.1.4 for numbering].”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.1.7.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1501b.gif', pin: '3-methylpentane' },
]);
