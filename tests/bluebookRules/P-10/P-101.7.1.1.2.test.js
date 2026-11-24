/**
 * P-101.7.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The substitutive procedure is used to introduce a methyl group in androstane at position 17β; the
 * alternative method of subtracting a methylene group from pregnane by using the nondetachable prefix
 * ‘nor’ is not recommended (see P-101.3.7.1).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1334, P-101.7.1.1.2, example. [corrected 23 September 2020]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.7.1.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101711b.gif', name: '17β-methyl-5α-androstane', notNames: ['21-nor-5α-pregnane'] },
]);
