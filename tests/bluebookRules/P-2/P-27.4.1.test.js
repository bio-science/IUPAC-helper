/**
 * P-27.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Homofullerenes
 * The replacement of a carbon-carbon bond of a fullerene by a methylene (–CH2–) group is described by
 * attaching the nondetachable prefix ‘homo’ to the name of the parent fullerene. The original
 * numbering of the parent fullerene is retained. The location of the homo operation is described by a
 * compound locant formed according to the method devised for insertion of a methylene group into a
 * bond connector of a fundamental structure in the nomenclature of natural products (see P-101.3.2).
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-27.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270401a.gif', pin: '1(9)aH-1(9)a-homo(C60-Ih)[5,6]fullerene' },
]);
