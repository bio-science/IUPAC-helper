/**
 * P-101.3.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Removal of a terminal ring.
 * The removal of a terminal ring from a parent structure with the addition of an appropriate number of
 * hydrogen atoms at each junction with the adjacent ring is indicated by the nondetachable prefix …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.3.6', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101360a.gif', name: 'androstane (fundamental parent structure)' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101360b.gif', name: 'des-A-androstane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101360c.gif', name: 'des-A-10α-androstane' },
]);
