/**
 * P-24.7.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “After identification of the spiro-fused components these, together with the remaining components,
 * are treated in the normal way.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 194, P-24.7.4.1, example 1. [modified 27 May 2020]
 *     Delete the correction to the first name
 *   Page 194, P-24.7.4.1, example 2. [modified 27 May 2020]
 *     For
 *     1λ⁵,3λ⁵,5λ⁵,7λ⁵-tetraspiro[tetraspiro[2,4,6,8,9,10-hexathia-1,3,5,7-tetraphosphaadamantane-1,2′:3,2′′:5,2′′′:7,2′′′
 *     ′-tetrakis([1,3,2]oxathiaphosphetane)]-4′,7′′′ ′′, 4′′,7′′′ ′′′,:4′′′,7′′′ ′′′ ′,4′′′ ′,7′′′ ′′′
 *     ′′-tetrakis(pyrano[2,3-c]acridine)} [PIN, see SP-7.4(b)]
 *     read
 *     1λ⁵,3λ⁵,5λ⁵,7λ⁵-tetraspiro{tetraspiro[2,4,6,8,9,10-hexathia-1,3,5,7-tetraphosphaadamantane-1,2′:3,2′′:5,2′′′:7,2′′′
 *     ′-tetrakis([1,3,2]oxathiaphosphetane)]-4′,7′′′ ′′:4′′,7′′′ ′′′: 4′′′,7′′′ ′′′ ′:4′′′ ′,7′′′ ′′′
 *     ′′-tetrakis(pyrano[2,3-c]acridine)} [PIN, see SP-6.4(b), in ref 8]
 *     for
 *     octaspiro[2,4,6,8,9,10-hexathia-1,3,5,7-tetraphosphatricyclo[3.3.1.1³,⁷]decane-1,2′λ⁵:3,2′′λ⁵:5,2′′′λ⁵:7,2′′′′λ⁵-tetrakis[1,3,2]oxathiaphosphetane-
 *     4′,7′′′ ′′:4′′,7′′′ ′′′:=4′′′,7′′′ ′′′ ′:4′′′,7′′′ ′′′ ′′-tetrakis[7H]pyrano[2,3-c]acridine]
 *     (the CAS index name)
 *     read
 *     octaspiro[2,4,6,8,9,10-hexathia-1,3,5,7-tetraphosphatricyclo[3.3.1.1³,⁷]decane-1,2′λ⁵:3,2′′λ⁵:5,2′′′λ⁵:7,2′′′′λ⁵-tetrakis[1,3,2]oxathiaphosphetane-4′,7′′′′′:4′′,7′′′′′′:4′′′,7′′′′′′′:4′′′′,7′′′′′′′′-tetrakis[7H]pyrano[2,3-c]acridine]
 *     (the CAS index name; note that multiple primes are not divided into groups of three) [delete
 *     spaces from name]
 *   Page 195, P-24.7.4.1, example on this page. [modified 27 May 2020]
 *     Delete the correction to this name
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.7.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240704a.gif', pin: 'trispiro{bis(cyclohexane)-1,4′:1′′,6′-furo[3,4-d][1,3]oxathiole-2′,14′′′-[7]oxadispiro[5.1.5⁸.2⁶]pentadecane}', otherNames: ['pentaspiro[tetracyclohexane-1,2′(5′H):1′′′,5′:1′′′′,4′′(6′′H):1′′′′′,6′′-furan-3′(4′H),2′′-furo[3,4-d][1,3]oxathiole]'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240704b.gif', name: '1λ⁵,3λ⁵,5λ⁵,7λ⁵-tetraspiro{tetraspiro[2,4,6,8,9,10-hexathia-1,3,5,7-tetraphosphaadamantane-1,2′:3,2′′:5,2′′′:7,2′′′ ′-' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240704c.gif', pin: 'trispiro{1-oxaspiro[2.3]hexane-2,3′:4,3′′:5,3′′′-tris(tetracyclo[3.2.0.0²,⁷.0⁴,⁶]heptane)}' },
]);
