/**
 * P-15.5.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Replacement in heterocyclic parent hydrides
 * Prefixes are used to modify a limited group of parent hydrides as follows. See Table 2.2 for pyran,
 * Table 2.3 for morpholine, Table 2.8 for chromene, isochromene and xanthene, and Table 3.1 for
 * chromane and isochromane.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.5.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1505a.gif', pin: '4H-thiopyran', otherNames: ['4H-thiine'] },
]);
