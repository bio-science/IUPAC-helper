/**
 * P-15.3.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Use of multiplicative prefixes ‘bis’, ‘tris’, etc.
 * Identical parent structures for which the numerical prefixes ‘di-’, ‘tri-’, etc. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503ay.gif', notNames: ['benzene-1,3-5-triyltrisilane'] },
]);
