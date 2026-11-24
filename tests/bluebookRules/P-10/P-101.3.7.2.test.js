/**
 * P-101.3.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The order of citation of combinations of structure modifying prefixes must avoid improper use of
 * the prefixes as defined above or impossible situations when the corresponding operations are carried
 * out in the manner prescribed above.
 * After satisfying P-101.3.7.1 and P-101.3.7.2, the nondetachable prefixes that indicate bond
 * rearrangements (‘cyclo’ and ‘seco’) are cited, followed by those that indicate addition or removal
 * of …
 * The preferred semisystematic name results from modifications by only two operations involving the
 * prefixes ‘cyclo’, ‘seco’, ‘apo’, ‘homo’, and ‘nor’. …
 * Names in which the order of prefixes is cyclo/seco/apo/homo/nor are preferred to those denoted by
 * the alphabetical order apo/cyclo/homo/nor/seco for the five prefixes.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1315, P-101.3.7.2, line 11. [corrected 23 September 2020]
 *     For ...prefixes ‘cyclo’, ‘seco’, ‘homo’, and ‘nor’. In general...
 *     read ...prefixes ‘cyclo’, ‘seco’, ‘apo’, ‘homo’, and ‘nor’. In general...
 *   Page 1316, P-101.3.7.2, example 4. [corrected 17 April 2019]
 *     For 3α,5-cyclo-9,10-seco-5α-androstane
 *     read 3α,5α-cyclo-9,10-seco-5α-androstane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.3.7.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101372a.gif', name: 'pimarane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101372b.gif', name: '6,7-seco-3a-homopimarane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101372c.gif', name: 'androstane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101372d.gif', name: '3α,5α-cyclo-9,10-seco-5α-androstane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101372e.gif', name: '5β,19-cyclo-4a-homo-5β-androstane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101372f.gif', name: '9β,19-cyclo-4-nor-5α,9β-androstane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101372g.gif', name: 'pregnane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101372h.gif', name: '9,10-seco-4a-homo-5α-pregnane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101372i.gif', name: '4,5-seco-7-norpregnane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101372j.gif', name: '9a-homo-4-nor-5α-pregnane' },
]);
