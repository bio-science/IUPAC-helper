/**
 * P-24.2.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Homogeneous heterocyclic spiro ring systems with only monocyclic ring components
 * Heterocyclic spiro ring systems with only monocyclic ring components and composed entirely of the
 * same heteroatom are named as described above using the name of the homogeneous heteroacyclic ring
 * system that has the same total number of skeletal heteroatoms. This method is preferred to skeletal
 * replacement (‘a’) nomenclature described in P-24.2.4.1, in which the total number of heteroatoms is
 * indicated by a numerical term. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.2.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240204g.gif', preselectedName: 'spiro[4.5]decasilane', otherNames: ['decasilaspiro[4.5]decane'] },
]);
