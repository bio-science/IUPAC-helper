/**
 * P-25.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “FUSED RING SYSTEMS WITH SKELETAL ATOMS WITH NONSTANDARD BONDING NUMBERS
 * The λ-convention is used to describe atoms with nonstandard bonding numbers (ref. 13) in fused ring
 * systems. The symbol λn is used, where ‘n’ is the bonding number of the atoms; it is cited
 * immediately after the locant denoting the atom having the nonstandard bonding number. The symbol H,
 * denoting indicated hydrogen atom(s) with the appropriate locant(s), if present, is cited at the
 * front of the complete name.
 * The λ symbol is used with all ring systems described in this section with retained and fusion names,
 * bi- and polyalicyclic as well as heterocycles formed by skeletal replacement (‘a’) nomenclature, …
 * After the maximum number of noncumulative double bonds has been assigned, any ring atom with a
 * bonding number of three or higher connected to adjacent ring atoms by single bonds only and carrying
 * one …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 288, P-25.6, example 1. [corrected 27 May 2020]
 *     For 7λ⁴-[1,2]dithiolo[1,5-b][1,2]dithiole (PIN)
 *     read 7λ⁴-[1,2]dithiolo[5,1-e][1,2]dithiole (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.6', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250600a.gif', pin: '7λ⁴-[1,2]dithiolo[5,1-e][1,2]dithiole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250600b.gif', pin: '2H-5λ⁵-phosphinino[3,2-b]pyran' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250600c.gif', pin: '1λ⁴,5-benzodithiepine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250600d.gif', pin: '2H-5λ⁴-dibenzo[b,d]thiophene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250600e.gif', pin: '3H-3λ³,2,4-benziodadioxepine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250600f.gif', pin: '3H-2λ⁴-cyclohepta[c]thiopyran' },
]);
