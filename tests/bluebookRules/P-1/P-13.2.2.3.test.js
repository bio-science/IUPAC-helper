/**
 * P-13.2.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In specific instances, the prefixes ‘thio’, ‘seleno’, and ‘telluro’ indicate a skeletal
 * modification. This replacement occurs with the cyclic parent hydrides having retained names, i.e.,
 * morpholine (see Table 2.3), pyran (see Table 2.2), chromene, isochromene, and xanthene (see Table
 * 2.8), chromane and isochromane (see Table 3.1).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.2.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1302i.gif', pin: '2H-pyran', notNames: ['2H-oxine', 'see P-22.2.2.1.1'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1302j.gif', pin: '2H-thiopyran' },
]);
