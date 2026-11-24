/**
 * P-101.4.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Skeletal replacement of heteroatoms by other heteroatoms
 * Replacement of a heteroatom in a stereoparent hydride by another heteroatom is denoted by the
 * appropriate skeletal replacement (‘a’) prefix and locant.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.4.4', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101440a.gif', name: 'ergoline' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101440b.gif', name: '1-thiaergoline' },
]);
