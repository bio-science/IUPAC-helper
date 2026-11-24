/**
 * P-57.1.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preferred prefixes derived from cycloalkanes are of the ‘cycloalkyl type’ (see P-29.2); preferred
 * prefixes derived from cyclic compounds other that cycloalkanes are all of the ‘alkanyl type’
 * described above in P-57.1.1.1.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-57.1.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105a.gif', preferredPrefix: 'cyclopropyl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105b.gif', preferredPrefix: 'cyclohexyl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105c.gif', preferredPrefix: 'silin-4-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105d.gif', preferredPrefix: 'bicyclo[2.2.2]octan-2-yl' },
]);
