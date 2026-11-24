/**
 * P-92.2.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Spheres I and II
 * When atoms attached to the stereogenic unit are identical, precedence is established by the atoms in
 * turn that are directly attached to the identical atoms. When the molecule contains several atoms and
 * branches, it is convenient to number it, either by using the numbering system recommended in
 * nomenclature or by applying an arbitrary system to properly identify all nodes appearing in the
 * digraph.
 * Explanation: In the compound H3C-CHCl-CH2OH, above, the order of seniority for ‘a > b > c > d’ is
 * ‘Cl > C = C > H’. No
 * decision is reached in sphere I, as two of the proximate atoms are identical. …
 * Explanation: In the above compound, no decision is reached after the exploration of sphere I, since
 * ‘Cl > C = C > H’. …
 * Explanation: In this example, two stereogenic centers are present in the molecule; therefore two
 * digraphs are necessary, one for each stereogenic center. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-92.2.1.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92211i.gif', name: 'simplified digraph' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92211k.gif', name: 'simplified digraph' },
]);
