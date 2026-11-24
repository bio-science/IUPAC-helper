/**
 * P-101.4.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Indicated hydrogen
 * When the replacement of a skeletal atom in a portion of a parent structure that is mancude (contains
 * the maximum number of noncumulative double bonds) or an extended conjugated system of double bonds
 * results in the creation of a saturated skeletal position, that position is indicated by the
 * symbolism of indicated hydrogen (see P-14.7 and P-58.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.4.5', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101450a.gif', name: 'morphinan' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101450b.gif', name: '2H-1-oxamorphinan' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101450c.gif', name: 'yohimban' },
]);
