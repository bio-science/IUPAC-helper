/**
 * P-102.6.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Glycosyl halides, pseudohalides and esters
 * Glycosyl halides and pseudohalides are named by using functional class nomenclature, by adding, as a
 * separate word, the class name ‘chloride’, ‘isocyanate’, etc. to the name of the appropriate glycosyl
 * group. Esters of oxoacids in position 1 are treated as described for esters at other positions (see
 * P-102.5.6.1).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1387, P-102.6.1.5, example 1. [corrected 3 October 2018]
 *     For 2,3,4,6-tetra-O-acetyl-α-D-glucopyranosyl bromide
 *     read 2,3,4,6-tetra-O-acetyl-α-D-glucopyranosyl bromide
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.6.1.5', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102615a.gif', name: '2,3,4,6-tetra-O-acetyl-α-D-glucopyranosyl bromide' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102615b.gif', name: '2,3-diazido-6-bromo-2,3,6-trideoxy-α-D-mannopyranose 4-benzoate 1-nitrate' },
]);
