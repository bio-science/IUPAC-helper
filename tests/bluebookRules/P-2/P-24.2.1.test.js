/**
 * P-24.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Monospiro alicyclic ring systems
 * Monospiro parent hydrides consisting of two saturated cycloalkane rings are named by placing the
 * nondetachable prefix ‘spiro’ before the name of the unbranched acyclic hydrocarbon with the same
 * total number of skeletal atoms. The number of skeletal atoms linked to the spiro atom in each ring
 * is indicated by arabic numbers separated by a full stop, cited in ascending order and enclosed in
 * square brackets; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240201a.gif', pin: 'spiro[4.5]decane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240201b.gif', pin: 'spiro[4.4]nonane' },
]);
