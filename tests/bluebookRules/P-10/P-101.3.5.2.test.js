/**
 * P-101.3.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The italic prefix ‘retro’ preceded by a pair of locants is used to indicate a shift, by one
 * position, of all single and double bonds of a conjugated polyene system delineated by the pair of
 * locants; the conjugated polyene system cannot be part of a system of maximum number of noncumulative
 * double bonds in a ring or ring system. The first locant is the skeletal atom that has lost a
 * hydrogen atom and the second locant the one that has gained a hydrogen atom.
 * The descriptor ‘retro’ is used in this manner only in carotenoid nomenclature (see Carotenoid Rule
 * 9, ref.9).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1313, P-101.3.5.2, example 1. [corrected 23 September 2020]
 *     Replace the structure with:
 *   Page 1313, P-101.3.5.2, example 2. [corrected 23 September 2020]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.3.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101352a.gif', name: 'β,ψ-carotene (fundamental parent structure)' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101352b.gif', name: '4′,11-retro-β,ψ-carotene' },
]);
