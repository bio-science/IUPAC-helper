/**
 * P-101.3.7.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When different combinations of prefixes ‘cyclo’, ‘seco’, ‘apo’, ‘homo’, and ‘nor’ can be used to
 * effect the same transformation in fundamental parent structure, the combination of choice must
 * express the fewest number of operations. Both detachable (e.g. alkyl) and nondetachable (e.g. homo
 * or nor) prefixes are considered as modifications but detachable prefixes are preferred. Dihomo,
 * dinor, etc. , are counted as two modifications each (see ref. 16, Rule 3S-6.3). …
 * Explanation: Podocarpane may be used to generate the ‘seco’ compound with one operation; the same
 * compound may be obtained from labdane but in three operations.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.3.7.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101371e.gif', name: 'ergoline' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101371f.gif', name: '10(11)a-homo-9-norergoline' },
]);
